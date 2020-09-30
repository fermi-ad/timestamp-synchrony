#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const { DPM } = require('@fnal/dpm-client');
const { exit } = require('process');
const { time } = require('console');

const results = {};
const dpm = new DPM();
const tmo = 60000;
const nodeDeviceFile = `./data/readables_for_up_tclk_nodes.txt`;
const nodeKeeperFile = `./data/keepers_for_all_tclk_nodes.txt`;
const nodeSoftwareFile = `./data/software_for_all_tclk_nodes.txt`;

const print = data => {
    console.log(util.inspect(data, {
        maxArrayLength: Infinity,
        maxStringLength: Infinity,
        depth: Infinity
    }));
}

const count = list => {
    const result = {};

    for (item of list) {
        if (item in result) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    }

    return result;
}

const mode = list => {
    const counts = count(list);
    const result = { name: '', count: 0 }

    for (item in counts) {
        if (counts[item] > result.count) {
            result.name = item;
            result.count = counts[item];
        }
    }

    return result;
}

const group = (listOfObjects, anchorKey, referenceKey) => {
    const result = {};

    for (sourceObject of listOfObjects) {
        if (sourceObject[anchorKey] in result) {
            result[sourceObject[anchorKey]].push(sourceObject[referenceKey]);
        } else {
            result[sourceObject[anchorKey]] = [sourceObject[referenceKey]];
        }
    }

    return result;
}

const exitGracefully = (signal, options) => {
    const resolvedOptions = {
        raw: true,
        noResponse: true,
        duplicates: true,
        deltas: true,
        ...options // Overwrite defaults options with input options
    };
    print(`Gracefully exit`);

    if (resolvedOptions.raw) {
        const respondingNodes = {};
        for (node in results) {
            if (results[node].seenResponse) {
                respondingNodes[node] = results[node];
            }
        }
    
        print(respondingNodes);
    }

    if (resolvedOptions.noResponse) {
        print(`Nodes that didn't respond:`)
        for (node in results) {
            if (!results[node].seenResponse) {
                print({[node]: results[node]});
            }
        }
    }

    if (resolvedOptions.duplicates) {
        print(`Nodes with duplicate guaranteed readables:`)
        for (firstNode in results) {
            const firstReadable = results[firstNode].guaranteedReadable;
            for (secondNode in results) {
                const secondReadable = results[secondNode].guaranteedReadable;
                if (
                    firstNode !== secondNode // Not the same node
                    && firstReadable === secondReadable // Same readable device
                ) {
                    print(`${firstNode} - ${secondNode}: ${firstReadable}`)
                }
            }
        }
    }

    if (resolvedOptions.deltas) {
        const timestamps = [];

        for (node in results) {
            if (results[node].seenResponse) {
                timestamps.push(results[node].data.timestamp);
            }
        }

        const modalTimestamp = mode(timestamps);
        print(`The modal timestamp is ${modalTimestamp.name}`);
        print(`Deltas summary:`);
        print(count(timestamps));

        const keeperData = fs.readFileSync(nodeKeeperFile, `utf8`);

        console.log(keeperData)
        
        for (line of keeperData.split(`\n`)) {
            const [node, keeperFirst, keeperLast] = line.split(` `);
            if (node in results) {
                results[node].keeper = `${keeperFirst} ${keeperLast}`;
            }
        }

        const softwareData = fs.readFileSync(nodeSoftwareFile, `utf8`);

        for (line of softwareData.split(`\n`)) {
            const [node, software] = line.split(` `);
            if (node in results) results[node].software = software;
        }

        const deltas = [];
        for (node in results) {
            if (results[node].seenResponse) {
                const timestamp = results[node].data.timestamp;
                const delta = timestamp - modalTimestamp.name;
                const { keeper, software } = results[node];
                if (delta !== 0) deltas.push({
                    node,
                    delta,
                    keeper,
                    software
                });
            }
        }

        print(`Deltas from the modal timestamp:`);
        print(deltas);

        print(`Nodes by delta:`);
        print(group(deltas, `delta`, `node`));

        print(`Keepers by delta:`);
        print(group(deltas, `delta`, `keeper`));

        print(`Software by delta:`);
        print(group(deltas, `delta`, `software`));
    }

    process.exit();
}

process.on('SIGINT', exitGracefully);

const allNodesResponded = _ => {
    for (node in results) {
        if (!results[node].seenResponse) return false;
    }

    print(`All nodes have responded`);
    return true;
}

const handleResponse = (node, device) => {
    return (data, info) => {
        if (results[node].seenResponse === false) {
            results[node].seenResponse = true;
            results[node].data = data;
            results[node].info = info;
        }
        if (allNodesResponded()) exitGracefully(undefined, { raw: false });
    }
}

fs.readFile(nodeDeviceFile, `utf8`, (err, data) => {
    if (err) {
        console.error(err);
        return err;
    }
    
    const lines = data.split(`\n`);

    for (line of lines) {
        const [device, node] = line.split(` `);

        if (!device || !node) continue;

        results[node] = {
            'guaranteedReadable': device,
            'seenResponse': false
        };

        dpm.addRequest(
            `${device}@E,02`,
            handleResponse(node, device),
            handleResponse(node, device)
        );
    }

    setTimeout(_ => {
        print(`Timed out at ${tmo}ms`);
        exitGracefully(undefined, { raw: false });
    }, tmo);
});

dpm.notifyOnConnect(_ => dpm.start());
