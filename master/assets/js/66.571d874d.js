(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{638:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"using-abci-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-abci-cli"}},[e._v("#")]),e._v(" Using ABCI-CLI")]),e._v(" "),o("p",[e._v("To facilitate testing and debugging of ABCI servers and simple apps, we\nbuilt a CLI, the "),o("code",[e._v("abci-cli")]),e._v(", for sending ABCI messages from the command\nline.")]),e._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("p",[e._v("Make sure you "),o("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("have Go installed"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Next, install the "),o("code",[e._v("abci-cli")]),e._v(" tool and example applications:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQuZ2l0CmNkIHRlbmRlcm1pbnQKbWFrZSBpbnN0YWxsX2FiY2kK"}}),e._v(" "),o("p",[e._v("Now run "),o("code",[e._v("abci-cli")]),e._v(" to see the list of commands:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"VXNhZ2U6CiAgYWJjaS1jbGkgW2NvbW1hbmRdCgpBdmFpbGFibGUgQ29tbWFuZHM6CiAgYmF0Y2ggICAgICAgUnVuIGEgYmF0Y2ggb2YgYWJjaSBjb21tYW5kcyBhZ2FpbnN0IGFuIGFwcGxpY2F0aW9uCiAgY2hlY2tfdHggICAgVmFsaWRhdGUgYSB0eAogIGNvbW1pdCAgICAgIENvbW1pdCB0aGUgYXBwbGljYXRpb24gc3RhdGUgYW5kIHJldHVybiB0aGUgTWVya2xlIHJvb3QgaGFzaAogIGNvbnNvbGUgICAgIFN0YXJ0IGFuIGludGVyYWN0aXZlIGFiY2kgY29uc29sZSBmb3IgbXVsdGlwbGUgY29tbWFuZHMKICBjb3VudGVyICAgICBBQkNJIGRlbW8gZXhhbXBsZQogIGRlbGl2ZXJfdHggIERlbGl2ZXIgYSBuZXcgdHggdG8gdGhlIGFwcGxpY2F0aW9uCiAga3ZzdG9yZSAgICAgQUJDSSBkZW1vIGV4YW1wbGUKICBlY2hvICAgICAgICBIYXZlIHRoZSBhcHBsaWNhdGlvbiBlY2hvIGEgbWVzc2FnZQogIGhlbHAgICAgICAgIEhlbHAgYWJvdXQgYW55IGNvbW1hbmQKICBpbmZvICAgICAgICBHZXQgc29tZSBpbmZvIGFib3V0IHRoZSBhcHBsaWNhdGlvbgogIHF1ZXJ5ICAgICAgIFF1ZXJ5IHRoZSBhcHBsaWNhdGlvbiBzdGF0ZQogIHNldF9vcHRpb24gIFNldCBhbiBvcHRpb25zIG9uIHRoZSBhcHBsaWNhdGlvbgoKRmxhZ3M6CiAgICAgIC0tYWJjaSBzdHJpbmcgICAgICBzb2NrZXQgb3IgZ3JwYyAoZGVmYXVsdCAmcXVvdDtzb2NrZXQmcXVvdDspCiAgICAgIC0tYWRkcmVzcyBzdHJpbmcgICBhZGRyZXNzIG9mIGFwcGxpY2F0aW9uIHNvY2tldCAoZGVmYXVsdCAmcXVvdDt0Y3A6Ly8xMjcuMC4wLjE6MjY2NTgmcXVvdDspCiAgLWgsIC0taGVscCAgICAgICAgICAgICBoZWxwIGZvciBhYmNpLWNsaQogIC12LCAtLXZlcmJvc2UgICAgICAgICAgcHJpbnQgdGhlIGNvbW1hbmQgYW5kIHJlc3VsdHMgYXMgaWYgaXQgd2VyZSBhIGNvbnNvbGUgc2Vzc2lvbgoKVXNlICZxdW90O2FiY2ktY2xpIFtjb21tYW5kXSAtLWhlbHAmcXVvdDsgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYSBjb21tYW5kLgo="}}),e._v(" "),o("h2",{attrs:{id:"kvstore-first-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-first-example"}},[e._v("#")]),e._v(" KVStore - First Example")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("abci-cli")]),e._v(" tool lets us send ABCI messages to our application, to\nhelp build and debug them.")]),e._v(" "),o("p",[e._v("The most important messages are "),o("code",[e._v("deliver_tx")]),e._v(", "),o("code",[e._v("check_tx")]),e._v(", and "),o("code",[e._v("commit")]),e._v(",\nbut there are others for convenience, configuration, and information\npurposes.")]),e._v(" "),o("p",[e._v("We'll start a kvstore application, which was installed at the same time\nas "),o("code",[e._v("abci-cli")]),e._v(" above. The kvstore just stores transactions in a merkle\ntree.")]),e._v(" "),o("p",[e._v("Its code can be found\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/cmd/abci-cli/abci-cli.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v("\nand looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjbWRLVlN0b3JlKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewogICAgbG9nZ2VyIDo9IGxvZy5OZXdUTUxvZ2dlcihsb2cuTmV3U3luY1dyaXRlcihvcy5TdGRvdXQpKQoKICAgIC8vIENyZWF0ZSB0aGUgYXBwbGljYXRpb24gLSBpbiBtZW1vcnkgb3IgcGVyc2lzdGVkIHRvIGRpc2sKICAgIHZhciBhcHAgdHlwZXMuQXBwbGljYXRpb24KICAgIGlmIGZsYWdQZXJzaXN0ID09ICZxdW90OyZxdW90OyB7CiAgICAgICAgYXBwID0ga3ZzdG9yZS5OZXdLVlN0b3JlQXBwbGljYXRpb24oKQogICAgfSBlbHNlIHsKICAgICAgICBhcHAgPSBrdnN0b3JlLk5ld1BlcnNpc3RlbnRLVlN0b3JlQXBwbGljYXRpb24oZmxhZ1BlcnNpc3QpCiAgICAgICAgYXBwLigqa3ZzdG9yZS5QZXJzaXN0ZW50S1ZTdG9yZUFwcGxpY2F0aW9uKS5TZXRMb2dnZXIobG9nZ2VyLldpdGgoJnF1b3Q7bW9kdWxlJnF1b3Q7LCAmcXVvdDtrdnN0b3JlJnF1b3Q7KSkKICAgIH0KCiAgICAvLyBTdGFydCB0aGUgbGlzdGVuZXIKICAgIHNydiwgZXJyIDo9IHNlcnZlci5OZXdTZXJ2ZXIoZmxhZ0FkZHJELCBmbGFnQWJjaSwgYXBwKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQogICAgc3J2LlNldExvZ2dlcihsb2dnZXIuV2l0aCgmcXVvdDttb2R1bGUmcXVvdDssICZxdW90O2FiY2ktc2VydmVyJnF1b3Q7KSkKICAgIGlmIGVyciA6PSBzcnYuU3RhcnQoKTsgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIFN0b3AgdXBvbiByZWNlaXZpbmcgU0lHVEVSTSBvciBDVFJMLUMuCiAgICB0bW9zLlRyYXBTaWduYWwobG9nZ2VyLCBmdW5jKCkgewogICAgICAgIC8vIENsZWFudXAKICAgICAgICBzcnYuU3RvcCgpCiAgICB9KQoKICAgIC8vIFJ1biBmb3JldmVyLgogICAgc2VsZWN0IHt9Cn0K"}}),e._v(" "),o("p",[e._v("Start by running:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YWJjaS1jbGkga3ZzdG9yZQo="}}),e._v(" "),o("p",[e._v("And in another terminal, run")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YWJjaS1jbGkgZWNobyBoZWxsbwphYmNpLWNsaSBpbmZvCg=="}}),e._v(" "),o("p",[e._v("You'll see something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"LSZndDsgZGF0YTogaGVsbG8KLSZndDsgZGF0YS5oZXg6IDY4NjU2QzZDNkYK"}}),e._v(" "),o("p",[e._v("and:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"LSZndDsgZGF0YTogeyZxdW90O3NpemUmcXVvdDs6MH0KLSZndDsgZGF0YS5oZXg6IDdCMjI3MzY5N0E2NTIyM0EzMDdECg=="}}),e._v(" "),o("p",[e._v("An ABCI application must provide two things:")]),e._v(" "),o("ul",[o("li",[e._v("a socket server")]),e._v(" "),o("li",[e._v("a handler for ABCI messages")])]),e._v(" "),o("p",[e._v("When we run the "),o("code",[e._v("abci-cli")]),e._v(" tool we open a new connection to the\napplication's socket server, send the given ABCI message, and wait for a\nresponse.")]),e._v(" "),o("p",[e._v("The server may be generic for a particular language, and we provide a\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference implementation in\nGolang"),o("OutboundLink")],1),e._v(". See the\n"),o("a",{attrs:{href:"https://github.com/tendermint/awesome#ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of other ABCI implementations"),o("OutboundLink")],1),e._v(" for servers in\nother languages.")]),e._v(" "),o("p",[e._v("The handler is specific to the application, and may be arbitrary, so\nlong as it is deterministic and conforms to the ABCI interface\nspecification.")]),e._v(" "),o("p",[e._v("So when we run "),o("code",[e._v("abci-cli info")]),e._v(", we open a new connection to the ABCI\nserver, which calls the "),o("code",[e._v("Info()")]),e._v(" method on the application, which tells\nus the number of transactions in our Merkle tree.")]),e._v(" "),o("p",[e._v("Now, since every command opens a new connection, we provide the\n"),o("code",[e._v("abci-cli console")]),e._v(" and "),o("code",[e._v("abci-cli batch")]),e._v(" commands, to allow multiple ABCI\nmessages to be sent over a single connection.")]),e._v(" "),o("p",[e._v("Running "),o("code",[e._v("abci-cli console")]),e._v(" should drop you in an interactive console for\nspeaking ABCI messages to your application.")]),e._v(" "),o("p",[e._v("Try running these commands:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Jmd0OyBlY2hvIGhlbGxvCi0mZ3Q7IGNvZGU6IE9LCi0mZ3Q7IGRhdGE6IGhlbGxvCi0mZ3Q7IGRhdGEuaGV4OiAweDY4NjU2QzZDNkYKCiZndDsgaW5mbwotJmd0OyBjb2RlOiBPSwotJmd0OyBkYXRhOiB7JnF1b3Q7c2l6ZSZxdW90OzowfQotJmd0OyBkYXRhLmhleDogMHg3QjIyNzM2OTdBNjUyMjNBMzA3RAoKJmd0OyBjb21taXQKLSZndDsgY29kZTogT0sKLSZndDsgZGF0YS5oZXg6IDB4MDAwMDAwMDAwMDAwMDAwMAoKJmd0OyBkZWxpdmVyX3R4ICZxdW90O2FiYyZxdW90OwotJmd0OyBjb2RlOiBPSwoKJmd0OyBpbmZvCi0mZ3Q7IGNvZGU6IE9LCi0mZ3Q7IGRhdGE6IHsmcXVvdDtzaXplJnF1b3Q7OjF9Ci0mZ3Q7IGRhdGEuaGV4OiAweDdCMjI3MzY5N0E2NTIyM0EzMTdECgomZ3Q7IGNvbW1pdAotJmd0OyBjb2RlOiBPSwotJmd0OyBkYXRhLmhleDogMHgwMjAwMDAwMDAwMDAwMDAwCgomZ3Q7IHF1ZXJ5ICZxdW90O2FiYyZxdW90OwotJmd0OyBjb2RlOiBPSwotJmd0OyBsb2c6IGV4aXN0cwotJmd0OyBoZWlnaHQ6IDIKLSZndDsgdmFsdWU6IGFiYwotJmd0OyB2YWx1ZS5oZXg6IDYxNjI2MwoKJmd0OyBkZWxpdmVyX3R4ICZxdW90O2RlZj14eXomcXVvdDsKLSZndDsgY29kZTogT0sKCiZndDsgY29tbWl0Ci0mZ3Q7IGNvZGU6IE9LCi0mZ3Q7IGRhdGEuaGV4OiAweDA0MDAwMDAwMDAwMDAwMDAKCiZndDsgcXVlcnkgJnF1b3Q7ZGVmJnF1b3Q7Ci0mZ3Q7IGNvZGU6IE9LCi0mZ3Q7IGxvZzogZXhpc3RzCi0mZ3Q7IGhlaWdodDogMwotJmd0OyB2YWx1ZTogeHl6Ci0mZ3Q7IHZhbHVlLmhleDogNzg3OTdBCg=="}}),e._v(" "),o("p",[e._v("Note that if we do "),o("code",[e._v('deliver_tx "abc"')]),e._v(" it will store "),o("code",[e._v("(abc, abc)")]),e._v(", but if\nwe do "),o("code",[e._v('deliver_tx "abc=efg"')]),e._v(" it will store "),o("code",[e._v("(abc, efg)")]),e._v(".")]),e._v(" "),o("p",[e._v("Similarly, you could put the commands in a file and run\n"),o("code",[e._v("abci-cli --verbose batch < myfile")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"counter-another-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#counter-another-example"}},[e._v("#")]),e._v(" Counter - Another Example")]),e._v(" "),o("p",[e._v("Now that we've got the hang of it, let's try another application, the\n\"counter\" app.")]),e._v(" "),o("p",[e._v("Like the kvstore app, its code can be found\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/cmd/abci-cli/abci-cli.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v("\nand looks like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjbWRDb3VudGVyKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewoKICAgIGFwcCA6PSBjb3VudGVyLk5ld0NvdW50ZXJBcHBsaWNhdGlvbihmbGFnU2VyaWFsKQoKICAgIGxvZ2dlciA6PSBsb2cuTmV3VE1Mb2dnZXIobG9nLk5ld1N5bmNXcml0ZXIob3MuU3Rkb3V0KSkKCiAgICAvLyBTdGFydCB0aGUgbGlzdGVuZXIKICAgIHNydiwgZXJyIDo9IHNlcnZlci5OZXdTZXJ2ZXIoZmxhZ0FkZHJDLCBmbGFnQWJjaSwgYXBwKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQogICAgc3J2LlNldExvZ2dlcihsb2dnZXIuV2l0aCgmcXVvdDttb2R1bGUmcXVvdDssICZxdW90O2FiY2ktc2VydmVyJnF1b3Q7KSkKICAgIGlmIGVyciA6PSBzcnYuU3RhcnQoKTsgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIFN0b3AgdXBvbiByZWNlaXZpbmcgU0lHVEVSTSBvciBDVFJMLUMuCiAgICB0bW9zLlRyYXBTaWduYWwobG9nZ2VyLCBmdW5jKCkgewogICAgICAgIC8vIENsZWFudXAKICAgICAgICBzcnYuU3RvcCgpCiAgICB9KQoKICAgIC8vIFJ1biBmb3JldmVyLgogICAgc2VsZWN0IHt9Cn0K"}}),e._v(" "),o("p",[e._v("The counter app doesn't use a Merkle tree, it just counts how many times\nwe've sent a transaction, asked for a hash, or committed the state. The\nresult of "),o("code",[e._v("commit")]),e._v(" is just the number of transactions sent.")]),e._v(" "),o("p",[e._v("This application has two modes: "),o("code",[e._v("serial=off")]),e._v(" and "),o("code",[e._v("serial=on")]),e._v(".")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("serial=on")]),e._v(", transactions must be a big-endian encoded incrementing\ninteger, starting at 0.")]),e._v(" "),o("p",[e._v("If "),o("code",[e._v("serial=off")]),e._v(", there are no restrictions on transactions.")]),e._v(" "),o("p",[e._v("We can toggle the value of "),o("code",[e._v("serial")]),e._v(" using the "),o("code",[e._v("set_option")]),e._v(" ABCI message.")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("serial=on")]),e._v(", some transactions are invalid. In a live blockchain,\ntransactions collect in memory before they are committed into blocks. To\navoid wasting resources on invalid transactions, ABCI provides the\n"),o("code",[e._v("check_tx")]),e._v(" message, which application developers can use to accept or\nreject transactions, before they are stored in memory or gossipped to\nother peers.")]),e._v(" "),o("p",[e._v("In this instance of the counter app, "),o("code",[e._v("check_tx")]),e._v(" only allows transactions\nwhose integer is greater than the last committed one.")]),e._v(" "),o("p",[e._v("Let's kill the console and the kvstore application, and start the\ncounter app:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YWJjaS1jbGkgY291bnRlcgo="}}),e._v(" "),o("p",[e._v("In another window, start the "),o("code",[e._v("abci-cli console")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"CiZndDsgY2hlY2tfdHggMHgwMAotJmd0OyBjb2RlOiBPSwoKJmd0OyBjaGVja190eCAweGZmCi0mZ3Q7IGNvZGU6IE9LCgomZ3Q7IGRlbGl2ZXJfdHggMHgwMAotJmd0OyBjb2RlOiBPSwoKJmd0OyBjaGVja190eCAweDAwCi0mZ3Q7IGNvZGU6IEJhZE5vbmNlCi0mZ3Q7IGxvZzogSW52YWxpZCBub25jZS4gRXhwZWN0ZWQgJmd0Oz0gMSwgZ290IDAKCiZndDsgZGVsaXZlcl90eCAweDAxCi0mZ3Q7IGNvZGU6IE9LCgomZ3Q7IGRlbGl2ZXJfdHggMHgwNAotJmd0OyBjb2RlOiBCYWROb25jZQotJmd0OyBsb2c6IEludmFsaWQgbm9uY2UuIEV4cGVjdGVkIDIsIGdvdCA0CgomZ3Q7IGluZm8KLSZndDsgY29kZTogT0sKLSZndDsgZGF0YTogeyZxdW90O2hhc2hlcyZxdW90OzowLCZxdW90O3R4cyZxdW90OzoyfQotJmd0OyBkYXRhLmhleDogMHg3QjIyNjg2MTczNjg2NTczMjIzQTMwMkMyMjc0Nzg3MzIyM0EzMjdECg=="}}),e._v(" "),o("p",[e._v("This is a very simple application, but between "),o("code",[e._v("counter")]),e._v(" and "),o("code",[e._v("kvstore")]),e._v(",\nits easy to see how you can build out arbitrary application states on\ntop of the ABCI. "),o("a",{attrs:{href:"https://github.com/hyperledger/burrow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyperledger's\nBurrow"),o("OutboundLink")],1),e._v(" also runs atop ABCI,\nbringing with it Ethereum-like accounts, the Ethereum virtual-machine,\nMonax's permissioning scheme, and native contracts extensions.")]),e._v(" "),o("p",[e._v("But the ultimate flexibility comes from being able to write the\napplication easily in any language.")]),e._v(" "),o("p",[e._v("We have implemented the counter in a number of languages "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/example",target:"_blank",rel:"noopener noreferrer"}},[e._v("see the\nexample directory"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("To run the Node.js version, fist download & install "),o("a",{attrs:{href:"https://github.com/tendermint/js-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Javascript ABCI server"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L2pzLWFiY2kuZ2l0CmNkIGpzLWFiY2kKbnBtIGluc3RhbGwgYWJjaQo="}}),e._v(" "),o("p",[e._v("Now you can start the app:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bm9kZSBleGFtcGxlL2NvdW50ZXIuanMK"}}),e._v(" "),o("p",[e._v("(you'll have to kill the other counter application process). In another\nwindow, run the console and those previous ABCI commands. You should get\nthe same results as for the Go version.")]),e._v(" "),o("h2",{attrs:{id:"bounties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bounties"}},[e._v("#")]),e._v(" Bounties")]),e._v(" "),o("p",[e._v("Want to write the counter app in your favorite language?! We'd be happy\nto add you to our "),o("a",{attrs:{href:"https://github.com/tendermint/awesome#ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("ecosystem"),o("OutboundLink")],1),e._v("!\nSee "),o("a",{attrs:{href:"https://github.com/interchainio/funding",target:"_blank",rel:"noopener noreferrer"}},[e._v("funding"),o("OutboundLink")],1),e._v(" opportunities from the\n"),o("a",{attrs:{href:"https://interchain.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Foundation"),o("OutboundLink")],1),e._v(" for implementations in new languages and more.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("abci-cli")]),e._v(" is designed strictly for testing and debugging. In a real\ndeployment, the role of sending messages is taken by Tendermint, which\nconnects to the app using three separate connections, each with its own\npattern of messages.")]),e._v(" "),o("p",[e._v("For examples of running an ABCI app with\nTendermint, see the "),o("RouterLink",{attrs:{to:"/app-dev/getting-started.html"}},[e._v("getting started guide")]),e._v(".\nNext is the ABCI specification.")],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);