(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{771:function(t,e,s){"use strict";s.r(e);var r=s(1),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"adr-011-monitoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adr-011-monitoring"}},[t._v("#")]),t._v(" ADR 011: Monitoring")]),t._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),s("p",[t._v("08-06-2018: Initial draft\n11-06-2018: Reorg after @xla comments\n13-06-2018: Clarification about usage of labels")]),t._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("p",[t._v("In order to bring more visibility into Tendermint, we would like it to report\nmetrics and, maybe later, traces of transactions and RPC queries. See\nhttps://github.com/tendermint/tendermint/issues/986.")]),t._v(" "),s("p",[t._v("A few solutions were considered:")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://prometheus.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),s("OutboundLink")],1),t._v("\na) Prometheus API\nb) "),s("a",{attrs:{href:"https://github.com/go-kit/kit/tree/master/metrics",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-kit metrics package"),s("OutboundLink")],1),t._v(" as an interface plus Prometheus\nc) "),s("a",{attrs:{href:"https://github.com/influxdata/telegraf",target:"_blank",rel:"noopener noreferrer"}},[t._v("telegraf"),s("OutboundLink")],1),t._v("\nd) new service, which will listen to events emitted by pubsub and report metrics")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://opencensus.io/introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCensus"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-prometheus"}},[t._v("#")]),t._v(" 1. Prometheus")]),t._v(" "),s("p",[t._v("Prometheus seems to be the most popular product out there for monitoring. It has\na Go client library, powerful queries, alerts.")]),t._v(" "),s("p",[s("strong",[t._v("a) Prometheus API")])]),t._v(" "),s("p",[t._v("We can commit to using Prometheus in Tendermint, but I think Tendermint users\nshould be free to choose whatever monitoring tool they feel will better suit\ntheir needs (if they don't have existing one already). So we should try to\nabstract interface enough so people can switch between Prometheus and other\nsimilar tools.")]),t._v(" "),s("p",[s("strong",[t._v("b) go-kit metrics package as an interface")])]),t._v(" "),s("p",[t._v("metrics package provides a set of uniform interfaces for service\ninstrumentation and offers adapters to popular metrics packages:")]),t._v(" "),s("p",[t._v("https://godoc.org/github.com/go-kit/kit/metrics#pkg-subdirectories")]),t._v(" "),s("p",[t._v('Comparing to Prometheus API, we\'re losing customisability and control, but gaining\nfreedom in choosing any instrument from the above list given we will extract\nmetrics creation into a separate function (see "providers" in node/node.go).')]),t._v(" "),s("p",[s("strong",[t._v("c) telegraf")])]),t._v(" "),s("p",[t._v("Unlike already discussed options, telegraf does not require modifying Tendermint\nsource code. You create something called an input plugin, which polls\nTendermint RPC every second and calculates the metrics itself.")]),t._v(" "),s("p",[t._v("While it may sound good, but some metrics we want to report are not exposed via\nRPC or pubsub, therefore can't be accessed externally.")]),t._v(" "),s("p",[s("strong",[t._v("d) service, listening to pubsub")])]),t._v(" "),s("p",[t._v("Same issue as the above.")]),t._v(" "),s("h3",{attrs:{id:"_2-opencensus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-opencensus"}},[t._v("#")]),t._v(" 2. opencensus")]),t._v(" "),s("p",[t._v("opencensus provides both metrics and tracing, which may be important in the\nfuture. It's API looks different from go-kit and Prometheus, but looks like it\ncovers everything we need.")]),t._v(" "),s("p",[t._v("Unfortunately, OpenCensus go client does not define any\ninterfaces, so if we want to abstract away metrics we\nwill need to write interfaces ourselves.")]),t._v(" "),s("h3",{attrs:{id:"list-of-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-metrics"}},[t._v("#")]),t._v(" List of metrics")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_height")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_validators")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Number of validators who signed")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_validators_power")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Total voting power of all validators")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_missing_validators")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Number of validators who did not sign")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_missing_validators_power")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Total voting power of the missing validators")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_byzantine_validators")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Number of validators who tried to double sign")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_byzantine_validators_power")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Total voting power of the byzantine validators")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_block_interval")]),t._v(" "),s("td",[t._v("Timing")]),t._v(" "),s("td",[t._v("Time between this and last block (Block.Header.Time)")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_block_time")]),t._v(" "),s("td",[t._v("Timing")]),t._v(" "),s("td",[t._v("Time to create a block (from creating a proposal to commit)")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_time_between_blocks")]),t._v(" "),s("td",[t._v("Timing")]),t._v(" "),s("td",[t._v("Time between committing last block and (receiving proposal creating proposal)")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_rounds")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Number of rounds")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_prevotes")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_precommits")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_prevotes_total_power")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("consensus_precommits_total_power")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_num_txs")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("mempool_size")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_total_txs")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("consensus_block_size")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("In bytes")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("p2p_peers")]),t._v(" "),s("td",[t._v("Gauge")]),t._v(" "),s("td",[t._v("Number of peers node's connected to")])])])]),t._v(" "),s("p",[s("code",[t._v("A")]),t._v(" - will be implemented in the fist place.")]),t._v(" "),s("p",[s("strong",[t._v("Proposed solution")])]),t._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),s("p",[t._v("Proposed.")]),t._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[t._v("#")]),t._v(" Consequences")]),t._v(" "),s("h3",{attrs:{id:"positive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[t._v("#")]),t._v(" Positive")]),t._v(" "),s("p",[t._v("Better visibility, support of variety of monitoring backends")]),t._v(" "),s("h3",{attrs:{id:"negative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[t._v("#")]),t._v(" Negative")]),t._v(" "),s("p",[t._v("One more library to audit, messing metrics reporting code with business domain.")]),t._v(" "),s("h3",{attrs:{id:"neutral"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[t._v("#")]),t._v(" Neutral")]),t._v(" "),s("ul",[s("li")])])}),[],!1,null,null,null);e.default=o.exports}}]);