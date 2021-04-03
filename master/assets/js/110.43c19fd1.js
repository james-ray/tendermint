(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{609:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-042-state-sync-design"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-042-state-sync-design"}},[e._v("#")]),e._v(" ADR 042: State Sync Design")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("p",[e._v("2019-06-27: Init by EB\n2019-07-04: Follow up by brapse")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("StateSync is a feature which would allow a new node to receive a\nsnapshot of the application state without downloading blocks or going\nthrough consensus. Once downloaded, the node could switch to FastSync\nand eventually participate in consensus. The goal of StateSync is to\nfacilitate setting up a new node as quickly as possible.")]),e._v(" "),n("h2",{attrs:{id:"considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#considerations"}},[e._v("#")]),e._v(" Considerations")]),e._v(" "),n("p",[e._v("Because Tendermint doesn't know anything about the application state,\nStateSync will broker messages between nodes and through\nthe ABCI to an opaque applicaton. The implementation will have multiple\ntouch points on both the tendermint code base and ABCI application.")]),e._v(" "),n("ul",[n("li",[e._v("A StateSync reactor to facilitate peer communication - Tendermint")]),e._v(" "),n("li",[e._v("A Set of ABCI messages to transmit application state to the reactor - Tendermint")]),e._v(" "),n("li",[e._v("A Set of MultiStore APIs for exposing snapshot data to the ABCI - ABCI application")]),e._v(" "),n("li",[e._v("A Storage format with validation and performance considerations - ABCI application")])]),e._v(" "),n("h3",{attrs:{id:"implementation-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-properties"}},[e._v("#")]),e._v(" Implementation Properties")]),e._v(" "),n("p",[e._v("Beyond the approach, any implementation of StateSync can be evaluated\nacross different criteria:")]),e._v(" "),n("ul",[n("li",[e._v("Speed: Expected throughput of producing and consuming snapshots")]),e._v(" "),n("li",[e._v("Safety: Cost of pushing invalid snapshots to a node")]),e._v(" "),n("li",[e._v("Liveness: Cost of preventing a node from receiving/constructing a snapshot")]),e._v(" "),n("li",[e._v("Effort: How much effort does an implementation require")])]),e._v(" "),n("h3",{attrs:{id:"implementation-question"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-question"}},[e._v("#")]),e._v(" Implementation Question")]),e._v(" "),n("ul",[n("li",[e._v("What is the format of a snapshot\n"),n("ul",[n("li",[e._v("Complete snapshot")]),e._v(" "),n("li",[e._v("Ordered IAVL key ranges")]),e._v(" "),n("li",[e._v("Compressed individually chunks which can be validated")])])]),e._v(" "),n("li",[e._v("How is data validated\n"),n("ul",[n("li",[e._v("Trust a peer with it's data blindly")]),e._v(" "),n("li",[e._v("Trust a majority of peers")]),e._v(" "),n("li",[e._v("Use light client validation to validate each chunk against consensus\nproduced merkle tree root")])])]),e._v(" "),n("li",[e._v("What are the performance characteristics\n"),n("ul",[n("li",[e._v("Random vs sequential reads")]),e._v(" "),n("li",[e._v("How parallelizeable is the scheduling algorithm")])])])]),e._v(" "),n("h3",{attrs:{id:"proposals"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),n("p",[e._v("Broadly speaking there are two approaches to this problem which have had\nvarying degrees of discussion and progress. These approach can be\nsummarized as:")]),e._v(" "),n("p",[n("strong",[e._v("Lazy:")]),e._v(" Where snapshots are produced dynamically at request time. This\nsolution would use the existing data structure.\n"),n("strong",[e._v("Eager:")]),e._v(" Where snapshots are produced periodically and served from disk at\nrequest time. This solution would create an auxiliary data structure\noptimized for batch read/writes.")]),e._v(" "),n("p",[e._v("Additionally the propsosals tend to vary on how they provide safety\nproperties.")]),e._v(" "),n("p",[n("strong",[e._v("LightClient")]),e._v(" Where a client can aquire the merkle root from the block\nheaders synchronized from a trusted validator set. Subsets of the application state,\ncalled chunks can therefore be validated on receipt to ensure each chunk\nis part of the merkle root.")]),e._v(" "),n("p",[n("strong",[e._v("Majority of Peers")]),e._v(" Where manifests of chunks along with checksums are\ndownloaded and compared against versions provided by a majority of\npeers.")]),e._v(" "),n("h4",{attrs:{id:"lazy-statesync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lazy-statesync"}},[e._v("#")]),e._v(" Lazy StateSync")]),e._v(" "),n("p",[e._v("An initial specification was published by Alexis Sellier.\nIn this design, the state has a given "),n("code",[e._v("size")]),e._v(" of primitive elements (like\nkeys or nodes), each element is assigned a number from 0 to "),n("code",[e._v("size-1")]),e._v(",\nand chunks consists of a range of such elements.  Ackratos raised\n"),n("a",{attrs:{href:"https://docs.google.com/document/d/1npGTAa1qxe8EQZ1wG0a0Sip9t5oX2vYZNUDwr_LVRR4/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("some concerns"),n("OutboundLink")],1),e._v("\nabout this design, somewhat specific to the IAVL tree, and mainly concerning\nperformance of random reads and of iterating through the tree to determine element numbers\n(ie. elements aren't indexed by the element number).")]),e._v(" "),n("p",[e._v("An alternative design was suggested by Jae Kwon in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3639",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3639"),n("OutboundLink")],1),e._v(" where chunking\nhappens lazily and in a dynamic way: nodes request key ranges from their peers,\nand peers respond with some subset of the\nrequested range and with notes on how to request the rest in parallel from other\npeers. Unlike chunk numbers, keys can be verified directly. And if some keys in the\nrange are ommitted, proofs for the range will fail to verify.\nThis way a node can start by requesting the entire tree from one peer,\nand that peer can respond with say the first few keys, and the ranges to request\nfrom other peers.")]),e._v(" "),n("p",[e._v("Additionally, per chunk validation tends to come more naturally to the\nLazy approach since it tends to use the existing structure of the tree\n(ie. keys or nodes) rather than state-sync specific chunks. Such a\ndesign for tendermint was originally tracked in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/828",target:"_blank",rel:"noopener noreferrer"}},[e._v("#828"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"eager-statesync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eager-statesync"}},[e._v("#")]),e._v(" Eager StateSync")]),e._v(" "),n("p",[e._v("Warp Sync as implemented in Parity\n"),n("a",{attrs:{href:"https://wiki.parity.io/Warp-Sync-Snapshot-Format.html",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Warp Sync"'),n("OutboundLink")],1),e._v(" to rapidly\ndownload both blocks and state snapshots from peers. Data is carved into ~4MB\nchunks and snappy compressed. Hashes of snappy compressed chunks are stored in a\nmanifest file which co-ordinates the state-sync. Obtaining a correct manifest\nfile seems to require an honest majority of peers. This means you may not find\nout the state is incorrect until you download the whole thing and compare it\nwith a verified block header.")]),e._v(" "),n("p",[e._v("A similar solution was implemented by Binance in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3594",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3594"),n("OutboundLink")],1),e._v("\nbased on their initial implementation in\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3243",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #3243"),n("OutboundLink")],1),e._v("\nand "),n("a",{attrs:{href:"https://docs.google.com/document/d/1npGTAa1qxe8EQZ1wG0a0Sip9t5oX2vYZNUDwr_LVRR4/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("some learnings"),n("OutboundLink")],1),e._v(".\nNote this still requires the honest majority peer assumption.")]),e._v(" "),n("p",[e._v("As an eager protocol, warp-sync can efficiently compress larger, more\npredicatable chunks once per snapshot and service many new peers. By\ncomparison lazy chunkers would have to compress each chunk at request\ntime.")]),e._v(" "),n("h3",{attrs:{id:"analysis-of-lazy-vs-eager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#analysis-of-lazy-vs-eager"}},[e._v("#")]),e._v(" Analysis of Lazy vs Eager")]),e._v(" "),n("p",[e._v("Lazy vs Eager have more in common than they differ. They all require\nreactors on the tendermint side, a set of ABCI messages and a method for\nserializing/deserializing snapshots facilitated by a SnapshotFormat.")]),e._v(" "),n("p",[e._v("The biggest difference between Lazy and Eager proposals is in the\nread/write patterns necessitated by serving a snapshot chunk.\nSpecifically, Lazy State Sync performs random reads to the underlying data\nstructure while Eager can optimize for sequential reads.")]),e._v(" "),n("p",[e._v("This distinctin between approaches was demonstrated by Binance's\n"),n("a",{attrs:{href:"https://github.com/ackratos",target:"_blank",rel:"noopener noreferrer"}},[e._v("ackratos"),n("OutboundLink")],1),e._v(" in their implementation of "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3243",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lazy\nState sync"),n("OutboundLink")],1),e._v(", The\n"),n("a",{attrs:{href:"https://docs.google.com/document/d/1npGTAa1qxe8EQZ1wG0a0Sip9t5oX2vYZNUDwr_LVRR4/",target:"_blank",rel:"noopener noreferrer"}},[e._v("analysis"),n("OutboundLink")],1),e._v("\nof the performance, and follow up implementation of "),n("a",{attrs:{href:"http://github.com/tendermint/tendermint/pull/3594",target:"_blank",rel:"noopener noreferrer"}},[e._v("Warp\nSync"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"compairing-security-models"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compairing-security-models"}},[e._v("#")]),e._v(" Compairing Security Models")]),e._v(" "),n("p",[e._v("There are several different security models which have been\ndiscussed/proposed in the past but generally fall into two categories.")]),e._v(" "),n("p",[e._v("Light client validation: In which the node receiving data is expected to\nfirst perform a light client sync and have all the nessesary block\nheaders. Within the trusted block header (trusted in terms of from a\nvalidator set subject to "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3795",target:"_blank",rel:"noopener noreferrer"}},[e._v("weak\nsubjectivity"),n("OutboundLink")],1),e._v(") and\ncan compare any subset of keys called a chunk against the merkle root.\nThe advantage of light client validation is that the block headers are\nsigned by validators which have something to lose for malicious\nbehaviour. If a validator were to provide an invalid proof, they can be\nslashed.")]),e._v(" "),n("p",[e._v("Majority of peer validation: A manifest file containing a list of chunks\nalong with checksums of each chunk is downloaded from a\ntrusted source. That source can be a community resource similar to\n"),n("a",{attrs:{href:"https://sum.golang.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("sum.golang.org"),n("OutboundLink")],1),e._v(" or downloaded from the majority\nof peers. One disadantage of the majority of peer security model is the\nvuliberability to eclipse attacks in which a malicious users looks to\nsaturate a target node's peer list and produce a manufactured picture of\nmajority.")]),e._v(" "),n("p",[e._v("A third option would be to include snapshot related data in the\nblock header. This could include the manifest with related checksums and be\nsecured through consensus. One challenge of this approach is to\nensure that creating snapshots does not put undo burden on block\npropsers by synchronizing snapshot creation and block creation. One\napproach to minimizing the burden is for snapshots for height\n"),n("code",[e._v("H")]),e._v(" to be included in block "),n("code",[e._v("H+n")]),e._v(" where "),n("code",[e._v("n")]),e._v(" is some "),n("code",[e._v("n")]),e._v(" block away,\ngiving the block propser enough time to complete the snapshot\nasynchronousy.")]),e._v(" "),n("h2",{attrs:{id:"proposal-eager-statesync-with-per-chunk-light-client-validation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proposal-eager-statesync-with-per-chunk-light-client-validation"}},[e._v("#")]),e._v(" Proposal: Eager StateSync With Per Chunk Light Client Validation")]),e._v(" "),n("p",[e._v("The conclusion after some concideration of the advantages/disadvances of\neager/lazy and different security models is to produce a state sync\nwhich eagerly produces snapshots and uses light client validation. This\napproach has the performance advantages of pre-computing efficient\nsnapshots which can streamed to new nodes on demand using sequential IO.\nSecondly, by using light client validation we cna validate each chunk on\nreceipt and avoid the potential eclipse attack of majority of peer based\nsecurity.")]),e._v(" "),n("h3",{attrs:{id:"implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),n("p",[e._v("Tendermint is responsible for downloading and verifying chunks of\nAppState from peers. ABCI Application is responsible for taking\nAppStateChunk objects from TM and constructing a valid state tree whose\nroot corresponds with the AppHash of syncing block. In particular we\nwill need implement:")]),e._v(" "),n("ul",[n("li",[e._v("Build new StateSync reactor brokers message transmission between the peers\nand the ABCI application")]),e._v(" "),n("li",[e._v("A set of ABCI Messages")]),e._v(" "),n("li",[e._v("Design SnapshotFormat as an interface which can:\n"),n("ul",[n("li",[e._v("validate chunks")]),e._v(" "),n("li",[e._v("read/write chunks from file")]),e._v(" "),n("li",[e._v("read/write chunks to/from application state store")]),e._v(" "),n("li",[e._v("convert manifests into chunkRequest ABCI messages")])])]),e._v(" "),n("li",[e._v("Implement SnapshotFormat for cosmos-hub with concrete implementation for:\n"),n("ul",[n("li",[e._v("read/write chunks in a way which can be:\n"),n("ul",[n("li",[e._v("parallelized across peers")]),e._v(" "),n("li",[e._v("validated on receipt")])])]),e._v(" "),n("li",[e._v("read/write to/from IAVL+ tree")])])])]),e._v(" "),n("p",[n("img",{attrs:{src:"img/state-sync.png",alt:"StateSync Architecture Diagram"}})]),e._v(" "),n("h2",{attrs:{id:"implementation-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-path"}},[e._v("#")]),e._v(" Implementation Path")]),e._v(" "),n("ul",[n("li",[e._v("Create StateSync reactor based on  "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3753",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3753"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Design SnapshotFormat with an eye towards cosmos-hub implementation")]),e._v(" "),n("li",[e._v("ABCI message to send/receive SnapshotFormat")]),e._v(" "),n("li",[e._v("IAVL+ changes to support SnapshotFormat")]),e._v(" "),n("li",[e._v("Deliver Warp sync (no chunk validation)")]),e._v(" "),n("li",[e._v("light client implementation for weak subjectivity")]),e._v(" "),n("li",[e._v("Deliver StateSync with chunk validation")])]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Proposed")]),e._v(" "),n("h2",{attrs:{id:"concequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concequences"}},[e._v("#")]),e._v(" Concequences")]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("Safe & performant state sync design substantiated with real world implementation experience")]),e._v(" "),n("li",[e._v("General interfaces allowing application specific innovation")]),e._v(" "),n("li",[e._v("Parallizable implementation trajectory with reasonable engineering effort")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("Static Scheduling lacks opportunity for real time chunk availability optimizations")])]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/828",target:"_blank",rel:"noopener noreferrer"}},[e._v("sync: Sync current state without full replay for Applications"),n("OutboundLink")],1),e._v(" - original issue\n"),n("a",{attrs:{href:"https://docs.google.com/document/d/1npGTAa1qxe8EQZ1wG0a0Sip9t5oX2vYZNUDwr_LVRR4/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("tendermint state sync proposal 2"),n("OutboundLink")],1),e._v(" - ackratos proposal\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3243",target:"_blank",rel:"noopener noreferrer"}},[e._v("proposal 2 implementation"),n("OutboundLink")],1),e._v("  - ackratos implementation\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3639",target:"_blank",rel:"noopener noreferrer"}},[e._v("WIP General/Lazy State-Sync pseudo-spec"),n("OutboundLink")],1),e._v(" - Jae Proposal\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3594",target:"_blank",rel:"noopener noreferrer"}},[e._v("Warp Sync Implementation"),n("OutboundLink")],1),e._v(" - ackratos\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/3799",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chunk Proposal"),n("OutboundLink")],1),e._v(" - Bucky proposed")])])}),[],!1,null,null,null);t.default=r.exports}}]);