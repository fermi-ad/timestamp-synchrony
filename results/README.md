# Curated Results

These are a collection of observations from the [raw output](./rawOutput.txt).

## Future Efforts

Dennis Nicklaus recommended running the test again and comparing the results for consistency.

## Unresponsive Nodes

These nodes weren't marked as down but a request on event to it's guaranteed readable device didn't respond.

| Node | Guaranteed Readable |
| ---- | ------------------- |
| AILAB | Z:PDSINE |
| BBLOND | U:TSTADC |
| DBPM10 | U:TSTD96 |
| DBPM20 | U:TSTD97 |
| DBPM30 | U:TSTD98 |
| DBPM40 | U:TSTD99 |
| DBPM50 | U:TSTD9A |
| DBPM60 | U:TSTD9B |
| IDAMP | I:DMPGUA |
| IRM562 | Z:S562SR |
| IRM571 | G:S571SR |
| IRM586 | E:S586SR |
| IRM588 | E:S588SR |
| LIP628 | L:S628SR |
| LIP728 | L:S728SR |
| MIMISC | Z:MIMISC |
| MIWIRS | Z:MIWIRS |
| N60TOR | E:TOR101 |
| NMLBBM | Z:NMLBBM |
| NMLTR2 | U:TSTD9C |
| NUMIHN | U:VIDBB4 |
| QXRTEV | S:NQXFSM |
| RCYSCH | Z:RCYSCH |
| RRXDMP | R:UPTBEB |
| SBPMF3 | G:0C05V0 |
| TBLMF1 | U:VIDC7C |
| TBLMF2 | U:VIDC7D |
| TBLMF3 | U:VIDC7E |
| TBLMF4 | U:VIDC7F |
| TESTZY | Z:TESTZY |
| UBLM10 | U:VIDC67 |
| UBLM30 | U:VIDC69 |
| UBLM3A | U:VIDC7A |
| UBLM3B | U:VIDC68 |
| UBLM50 | U:VIDC6B |
| UBLMM4 | U:VIDC66 |

## Duplicate Guaranteed Readable Device

There is evidence of duplicate guaranteed readable devices being use. This shouldn't be the case.

| Node | Guaranteed Readable |
| ---- | ------------------- |
| BOOSTR | B:SLD1 |
| BOOST1 | B:SLD1 |

`BOOST1` is the new name of `BOOSTR` so `BOOSTR` is an alias for `BOOST1`. This is a case where duplicate guaranteed readable devices is understood to be ok.

## Timestamps

The modal timestamp was determined to be `1601496697594 UTC`.

### Summary Count of Timestamps and Deltas

This is a list of deltas calculated from the modal delta and a count of how many instances of each delta were found. The idea is that common operating modes may influence how far from accurate a timestamp is. So, finding common modes amongst these deltas could point to a problem.

| Timestamp     | Delta | Count (▼) |   | Timestamp (▼)  | Delta | Count |
| ------------- | ----- | --------- | - | -------------- | ----- | ----- |
| 1601496697594 | 0 | 428 | | 538037594 | -1600958660000 | 1 |
| 1601496697608 | 14 | 27 | | 29490775594 | -1572005922000 | 1 |
| 1601496697595 | 1 | 17 | | 1600514811608 | -981885986 | 3 |
| 1601496696794 | -800 | 11 | | 1600859632774 | -637064820 | 1 |
| 1601496697600 | 6 | 7 | | 1600859632799 | -637064795 | 1 |
| 1601496697699 | 105 | 3 | | 1601496624594 | -73000 | 1 |
| 1601496697607 | 13 | 3 | | 1601496671595 | -25999 | 1 |
| 1601496697593 | -1 | 3 | | 1601496682594 | -15000 | 1 |
| 1601496696793 | -801 | 3 | | 1601496685594 | -12000 | 1 |
| 1600514811608 | -981885986 | 3 | | 1601496692600 | -4994 | 1 |
| 1601496696727 | -867 | 2 | | 1601496692973 | -4621 | 1 |
| 1601498638862 | 1941268 | 1 | | 1601496692977 | -4617 | 1 |
| 1601496829594 | 132000 | 1 | | 1601496692997 | -4597 | 1 |
| 1601496697649 | 55 | 1 | | 1601496692999 | -4595 | 1 |
| 1601496697629 | 35 | 1 | | 1601496693014 | -4580 | 1 |
| 1601496697596 | 2 | 1 | | 1601496693015 | -4579 | 1 |
| 1601496697578 | -16 | 1 | | 1601496693246 | -4348 | 1 |
| 1601496694462 | -3132 | 1 | | 1601496693269 | -4325 | 1 |
| 1601496693324 | -4270 | 1 | | 1601496693281 | -4313 | 1 |
| 1601496693309 | -4285 | 1 | | 1601496693282 | -4312 | 1 |
| 1601496693289 | -4305 | 1 | | 1601496693283 | -4311 | 1 |
| 1601496693288 | -4306 | 1 | | 1601496693288 | -4306 | 1 |
| 1601496693283 | -4311 | 1 | | 1601496693289 | -4305 | 1 |
| 1601496693282 | -4312 | 1 | | 1601496693309 | -4285 | 1 |
| 1601496693281 | -4313 | 1 | | 1601496693324 | -4270 | 1 |
| 1601496693269 | -4325 | 1 | | 1601496694462 | -3132 | 1 |
| 1601496693246 | -4348 | 1 | | 1601496696727 | -867 | 2 |
| 1601496693015 | -4579 | 1 | | 1601496696793 | -801 | 3 |
| 1601496693014 | -4580 | 1 | | 1601496696794 | -800 | 11 |
| 1601496692999 | -4595 | 1 | | 1601496697578 | -16 | 1 |
| 1601496692997 | -4597 | 1 | | 1601496697593 | -1 | 3 |
| 1601496692977 | -4617 | 1 | | 1601496697594 | 0 | 428 |
| 1601496692973 | -4621 | 1 | | 1601496697595 | 1 | 17 |
| 1601496692600 | -4994 | 1 | | 1601496697596 | 2 | 1 |
| 1601496685594 | -12000 | 1 | | 1601496697600 | 6 | 7 |
| 1601496682594 | -15000 | 1 | | 1601496697607 | 13 | 3 |
| 1601496671595 | -25999 | 1 | | 1601496697608 | 14 | 27 |
| 1601496624594 | -73000 | 1 | | 1601496697629 | 35 | 1 |
| 1600859632799 | -637064795 | 1 | | 1601496697649 | 55 | 1 |
| 1600859632774 | -637064820 | 1 | | 1601496697699 | 105 | 3 |
| 29490775594 | -1572005922000 | 1 | | 1601496829594 | 132000 | 1 |
| 538037594 | -1600958660000 |1 | | 1601498638862 | 1941268 | 1 |

### Nodes Grouped By Delta

The idea here is that nodes with a common implementation may have a similar timestamp offset.

| Delta | Nodes |
| ----- | ----- |
| 1 | CMLLRF, E906MW, HTSK13, HTSK39, HWRRFI, NMGUNI, NMGWIL, NMLBP2, NMLBP3, NMLGP1, NMLHOM, NMLLD1, NMLRFI, P2ITB1, STCRFI, UCDHIN, XTBPM1 |
| 2 | HINSMC |
| 6 | BADMAB, MILLRF, MRF, NBPB65, NBPM6N, NBPM6S, NBPMOV |
| 13 | CMTIL1, CMTIL2, CMTIL3 |
| 14 | AP0TOR, BOOST1, BOOST2, BOOSTR, MCRBCC, MESON, MI1, MI2, MI3, MI4, MUONFE, MWF2P3, MWIRE0, MWIRE1, MWIRE2, MWIRE3, MWMB10, MWMB12, MWMS1, MWMTA, NEUTR, NUMI, QXRMI, SWICT, SWYD, TCLK, TEVA |
| 35 | NMLWPM |
| 55 | IRM593 |
| 105 | MT1, PXMC1, PXMC2 |
| 132000 | AP5001 |
| 1941268 | MES653 |
| -637064820 | BOODAM |
| -637064795 | BPM399 |
| -4325 | BPM400 |
| -4580 | CLX38 |
| -1 | EVENTH, EVENTN, LRHVAC |
| -16 | MRFD |
| -800 | IRM58E, IRM64E, NML655, NML656, NML657, NML658, NML659, NML65A, NML65B, NML65C, NML65D |
| -801 | NML654, PXE690, PXE691 |
| -867 | CMT60A, CMT60B |
| -3132 | LVTEST |
| -4285 | NMLA |
| -4270 | UCDNML |
| -4305 | ?????? |
| -4306 | OTISVW |
| -4311 | SSRRFI |
| -4312 | XMLRPC |
| -4313 | NMLTOR |
| -4348 | IOTASR |
| -4579 | SSRRFJ |
| -4595 | MWDIPM |
| -4597 | MTACH |
| -4617 | VMEJEF |
| -4621 | RRLLD |
| -4994 | TLGTST |
| -12000 | PRBOPR |
| -15000 | TLG |
| -25999 | NMLTRG |
| -73000 | RRLLNV |
| -981885986 | MWMI14, NMAAT, NUMI65 |
| -1572005922000 | SRFLPR |
| -1600958660000 | BLLRFD |

### Keepers Grouped By Delta

The idea here is that particular delta may be associate with the node keeper.

| Delta | Keepers |
| ----- | ------- |
| 1941268 | Mike Kucera |
| 132000 | Jerry Firebaugh |
| 105 | Rich Neswold, Rich Neswold, Rich Neswold |
| 55 | Mike Kucera |
| 35 | Nathan Eddy |
| 14 | John Diamond, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Rich Neswold, Jianming You, Jianming You, Jianming You, Jianming You, Jianming You, Jianming You, Jianming You, Jianming You, Jianming You, Rich Neswold, Rich Neswold, Jerry Firebaugh, Jianming You, Rich Neswold, Rich Neswold, Rich Neswold |
| 13 | Dennis Nicklaus, Dennis Nicklaus, Dennis Nicklaus |
| 6 | Kevin Martin, Philip Varghese, Ed Cullerton, John Diamond, John Diamond, John Diamond, John Diamond |
| 2 | Rich Neswold |
| 1 | Philip Varghese, Jianming You, Dennis Nicklaus, Dennis Nicklaus, Dennis Nicklaus, Dennis Nicklaus, Dennis Nicklaus, David Slimmer, David Slimmer, Jerry Firebaugh, Dennis Nicklaus, Rich Neswold, Dennis Nicklaus, John Diamond, Dennis Nicklaus, Rich Neswold, John Diamond |
| -1 | Charlie King, Charlie King, Jerry Firebaugh |
| -16 | Ed Cullerton |
| -800 | Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera, Mike Kucera |
| -801 | Mike Kucera, Mike Kucera, Mike Kucera |
| -867 | Mike Kucera, Mike Kucera |
| -3132 | Jianming You |
| -4270 | Rich Neswold |
| -4285 | Rich Neswold |
| -4306 | Randy Thurman-Keup |
| -4305 | Jianming You |
| -4311 | Dennis Nicklaus |
| -4312 | Charlie King |
| -4313 | John Diamond |
| -4325 | Jianming You |
| -4348 | Randy Thurman-Keup |
| -4579 | Dennis Nicklaus |
| -4580 | Denise Finstrom |
| -4595 | Jianming You |
| -4597 | Jianming You |
| -4617 | Nathan Eddy |
| -4621 | Brian Chase |
| -4994 | Linden Carmichael |
| -12000 | Ed Cullerton |
| -15000 | Linden Carmichael |
| -25999 | John Diamond |
| -73000 | Ed Cullerton |
| -637064795 | Jianming You |
| -637064820 | Dennis Nicklaus |
| -981885986 | Jianming You, Jianming You, Jianming You |
| -1572005922000 | Rich Neswold |
| -1600958660000 | William Pellico |
