(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{685:function(e,o,t){"use strict";t.r(o);var i=t(1),s=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"bft-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bft-time"}},[e._v("#")]),e._v(" BFT Time")]),e._v(" "),t("p",[e._v("Tendermint provides a deterministic, Byzantine fault-tolerant, source of time.\nTime in Tendermint is defined with the Time field of the block header.")]),e._v(" "),t("p",[e._v("It satisfies the following properties:")]),e._v(" "),t("ul",[t("li",[e._v("Time Monotonicity: Time is monotonically increasing, i.e., given\na header H1 for height h1 and a header H2 for height "),t("code",[e._v("h2 = h1 + 1")]),e._v(", "),t("code",[e._v("H1.Time < H2.Time")]),e._v(".")]),e._v(" "),t("li",[e._v("Time Validity: Given a set of Commit votes that forms the "),t("code",[e._v("block.LastCommit")]),e._v(" field, a range of\nvalid values for the Time field of the block header is defined only by"),t("br"),e._v("\nPrecommit messages (from the LastCommit field) sent by correct processes, i.e.,\na faulty process cannot arbitrarily increase the Time value.")])]),e._v(" "),t("p",[e._v("In the context of Tendermint, time is of type int64 and denotes UNIX time in milliseconds, i.e.,\ncorresponds to the number of milliseconds since January 1, 1970. Before defining rules that need to be enforced by the\nTendermint consensus protocol, so the properties above holds, we introduce the following definition:")]),e._v(" "),t("ul",[t("li",[e._v("median of a Commit is equal to the median of "),t("code",[e._v("Vote.Time")]),e._v(" fields of the "),t("code",[e._v("Vote")]),e._v(" messages,\nwhere the value of "),t("code",[e._v("Vote.Time")]),e._v(" is counted number of times proportional to the process voting power. As in Tendermint\nthe voting power is not uniform (one process one vote), a vote message is actually an aggregator of the same votes whose\nnumber is equal to the voting power of the process that has casted the corresponding votes message.")])]),e._v(" "),t("p",[e._v("Let's consider the following example:")]),e._v(" "),t("ul",[t("li",[e._v("we have four processes p1, p2, p3 and p4, with the following voting power distribution (p1, 23), (p2, 27), (p3, 10)\nand (p4, 10). The total voting power is 70 ("),t("code",[e._v("N = 3f+1")]),e._v(", where "),t("code",[e._v("N")]),e._v(" is the total voting power, and "),t("code",[e._v("f")]),e._v(" is the maximum voting\npower of the faulty processes), so we assume that the faulty processes have at most 23 of voting power.\nFurthermore, we have the following vote messages in some LastCommit field (we ignore all fields except Time field):\n"),t("ul",[t("li",[e._v("(p1, 100), (p2, 98), (p3, 1000), (p4, 500). We assume that p3 and p4 are faulty processes. Let's assume that the\n"),t("code",[e._v("block.LastCommit")]),e._v(" message contains votes of processes p2, p3 and p4. Median is then chosen the following way:\nthe value 98 is counted 27 times, the value 1000 is counted 10 times and the value 500 is counted also 10 times.\nSo the median value will be the value 98. No matter what set of messages with at least "),t("code",[e._v("2f+1")]),e._v(" voting power we\nchoose, the median value will always be between the values sent by correct processes.")])])])]),e._v(" "),t("p",[e._v("We ensure Time Monotonicity and Time Validity properties by the following rules:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("let rs denotes "),t("code",[e._v("RoundState")]),e._v(" (consensus internal state) of some process. Then\n"),t("code",[e._v("rs.ProposalBlock.Header.Time == median(rs.LastCommit) && rs.Proposal.Timestamp == rs.ProposalBlock.Header.Time")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Furthermore, when creating the "),t("code",[e._v("vote")]),e._v(" message, the following rules for determining "),t("code",[e._v("vote.Time")]),e._v(" field should hold:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("if "),t("code",[e._v("rs.LockedBlock")]),e._v(" is defined then\n"),t("code",[e._v("vote.Time = max(rs.LockedBlock.Timestamp + time.Millisecond, time.Now())")]),e._v(", where "),t("code",[e._v("time.Now()")]),e._v("\ndenotes local Unix time in milliseconds")])]),e._v(" "),t("li",[t("p",[e._v("else if "),t("code",[e._v("rs.Proposal")]),e._v(" is defined then\n"),t("code",[e._v("vote.Time = max(rs.Proposal.Timestamp + time.Millisecond,, time.Now())")]),e._v(",")])]),e._v(" "),t("li",[t("p",[e._v("otherwise, "),t("code",[e._v("vote.Time = time.Now())")]),e._v(". In this case vote is for "),t("code",[e._v("nil")]),e._v(" so it is not taken into account for\nthe timestamp of the next block.")])])])])])])}),[],!1,null,null,null);o.default=s.exports}}]);