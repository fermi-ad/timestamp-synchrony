# Timestamp Synchrony Test

Credit to Michael Wren who initiated this investigation and created the first ACL scripts to show that there is an issues of asynchronous timestamps.

## Idea

The presumption is that when data is requested on a TCLK event at a given time that despite the data coming from disparate front-ends that the timestamp will be the same. Another way to say this is that all the requests are for the same cycle. This allows users to associate data across front-ends, machines, and systems.

## Problems

Across languages, time, and systems there have been multiple timing drivers. This means that there's a potential for each of the types of systems to interpret what the correct time for an event is. There other challenges that come with attempting to keep accurate timestamps. Local clocks can drift over time so using local clocks can introduce error into timestamp accuracy. It's not free to sync with a remote clock.

## Usage

All the steps of data collection are summarized in `timestamp-synchrony.sh` which can be run to get all new and up-to-date data.

The last step is the analysis which can be run independently, `node main.js`. The data must be collected before the analysis is run.
