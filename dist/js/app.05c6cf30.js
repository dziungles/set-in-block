(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],h=0,u=[];h<r.length;h++)s=r[h],i[s]&&u.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"47ad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("456d"),a("ac6a"),a("5df3"),a("1c4c"),a("7514"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-inner"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticStyle:{float:"left",height:"20px",width:"20px","background-color":"#767676"}}),a("div",{staticStyle:{float:"left","padding-left":"7px","font-size":"18px","font-family":"'Arapey',serif",color:"black"}},[t._v("Set in Block")])]),"read2"==t.$route.name?a("div",{staticClass:"sans-serif",staticStyle:{float:"left","padding-left":"6px","font-size":"9px","padding-top":"3px",color:"#bebebe"}},[t._v("Reader")]):t._e(),a("div",{staticClass:"sans-serif",staticStyle:{float:"right","padding-top":"2px","font-size":"14px"}},["home"==t.$route.name?a("router-link",{attrs:{to:"/new-message"}},[t._v("New")]):a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1)]),a("router-view",{staticClass:"router-content"})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._v("\n  aaaaaaaa\n  "),a("div",{staticClass:"header-inner"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticStyle:{float:"left",height:"20px",width:"20px","background-color":"#767676"}}),a("div",{staticStyle:{float:"left","padding-left":"7px","font-size":"18px","font-family":"'Arapey',serif",color:"black"}},[t._v("Set in Block")])]),a("div",{staticClass:"sans-serif",staticStyle:{float:"right","padding-top":"2px","font-size":"14px"}},[a("router-link",{attrs:{to:"/new-message"}},[t._v("New")])],1)],1)])},r=[],c={props:[""],components:{},data:function(){return{}},mounted:function(){},methods:{}},l=c,d=a("2877"),h=Object(d["a"])(l,s,r,!1,null,null,null);h.options.__file="Header.vue";var u=h.exports,f={props:[""],components:{Header:u},data:function(){return{}},mounted:function(){},methods:{}},p=f,m=(a("034f"),Object(d["a"])(p,i,o,!1,null,null,null));m.options.__file="App.vue";var v=m.exports,g=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"home-content"},["about"!=t.$route.name?a("div",[t.content?t._e():a("div",{staticClass:"centered"},[a("span",[a("div",{staticStyle:{width:"95px",margin:"0 auto"}},[a("svg",{attrs:{viewBox:"0 0 190.8 190.8"}},[a("title",[t._v("Logo")]),a("polygon",{staticClass:"logo-container",staticStyle:{fill:"#606062","fill-rule":"evenodd"},attrs:{points:"0 0 190.8 0 190.8 190.8 0 190.8 0 0 0 0"}}),a("path",{staticClass:"logo-text",staticStyle:{fill:"#fefefe"},attrs:{d:"M243.69,369.78a17.43,17.43,0,0,1-5.91-1,15.62,15.62,0,0,1-5.27-3.18l3.42-4.1a17.25,17.25,0,0,0,3.71,2.33,9.92,9.92,0,0,0,4.16.87,5.06,5.06,0,0,0,2.8-.66,2.07,2.07,0,0,0,1-1.82V362.1a2.29,2.29,0,0,0-.21-1,2.09,2.09,0,0,0-.79-0.81,8.6,8.6,0,0,0-1.62-.75c-0.69-.25-1.59-0.51-2.7-0.79a33,33,0,0,1-3.62-1.09,10.19,10.19,0,0,1-2.75-1.49,6,6,0,0,1-1.76-2.2,7.67,7.67,0,0,1-.62-3.27v-0.07a7.68,7.68,0,0,1,.67-3.25,7.45,7.45,0,0,1,1.89-2.5,8.5,8.5,0,0,1,2.9-1.62,11.64,11.64,0,0,1,3.72-.56,15.75,15.75,0,0,1,5.32.87,15.42,15.42,0,0,1,4.46,2.48l-3,4.36a19,19,0,0,0-3.46-1.9,8.84,8.84,0,0,0-3.38-.7,4.09,4.09,0,0,0-2.54.66,2,2,0,0,0-.85,1.64v0.08a2.37,2.37,0,0,0,.24,1.11,2.22,2.22,0,0,0,.88.85,8.49,8.49,0,0,0,1.75.71c0.75,0.23,1.68.49,2.81,0.79a26.64,26.64,0,0,1,3.57,1.19,10,10,0,0,1,2.64,1.58,6,6,0,0,1,1.62,2.16,7.36,7.36,0,0,1,.55,3v0.08a8.19,8.19,0,0,1-.71,3.48,7.18,7.18,0,0,1-2,2.56,8.94,8.94,0,0,1-3,1.58,13.16,13.16,0,0,1-3.91.55h0Zm14.67-26.71h19.83v5.15H264.08v5.34h12.41v5.15H264.08v5.53h14.29v5.15h-20V343.07h0Zm31.34,5.34h-8v-5.34H303.5v5.34h-8v21h-5.79v-21h0Zm-55.15,36.23h5.79V411h-5.79V384.64h0Zm12.38,0h5.34l12.34,16.21V384.64h5.72V411h-4.93l-12.75-16.74V411h-5.72V384.64h0Zm-0.11,62.82a5.56,5.56,0,0,0,3-.7,2.38,2.38,0,0,0,1.09-2.16v-0.08a2.48,2.48,0,0,0-1-2.09,5.47,5.47,0,0,0-3.27-.77h-6.7v5.79h6.88Zm-1.54-10.61a6,6,0,0,0,3-.66,2.27,2.27,0,0,0,1.13-2.13V434a2.32,2.32,0,0,0-1-2,4.83,4.83,0,0,0-2.82-.7h-5.72v5.57h5.34Zm-11-10.65h12.21q4.54,0,6.87,2.33a6.1,6.1,0,0,1,1.8,4.48v0.08a6.45,6.45,0,0,1-.28,2,6.18,6.18,0,0,1-.75,1.56,6,6,0,0,1-1.08,1.22,7.27,7.27,0,0,1-1.32.9,8.89,8.89,0,0,1,3.59,2.35,6,6,0,0,1,1.31,4.12v0.08a6.81,6.81,0,0,1-.7,3.16,6.18,6.18,0,0,1-2,2.26,9.37,9.37,0,0,1-3.12,1.35,16.85,16.85,0,0,1-4,.45H234.28V426.2h0Zm27.16,0h5.79v21.1h13.13v5.23H261.44V426.2h0Zm36.15,21.44a7.91,7.91,0,0,0,3.2-.64,7.3,7.3,0,0,0,2.5-1.77,8.3,8.3,0,0,0,1.62-2.61,8.6,8.6,0,0,0,.58-3.18v-0.08a8.75,8.75,0,0,0-.58-3.2,7.88,7.88,0,0,0-4.19-4.42,7.72,7.72,0,0,0-3.2-.66,7.88,7.88,0,0,0-3.22.64,7.35,7.35,0,0,0-2.48,1.77,8.32,8.32,0,0,0-1.62,2.61,8.63,8.63,0,0,0-.58,3.18v0.08a8.77,8.77,0,0,0,.58,3.2,7.93,7.93,0,0,0,1.66,2.63,8,8,0,0,0,2.52,1.79,7.68,7.68,0,0,0,3.22.66h0ZM297.52,453a14.36,14.36,0,0,1-5.61-1.07,13.93,13.93,0,0,1-4.42-2.9,13,13,0,0,1-2.9-4.29,13.52,13.52,0,0,1-1-5.29v-0.08a13.32,13.32,0,0,1,1.05-5.29,13.47,13.47,0,0,1,7.36-7.26,15.24,15.24,0,0,1,11.23,0,13.93,13.93,0,0,1,4.42,2.9,12.94,12.94,0,0,1,2.9,4.29,13.5,13.5,0,0,1,1,5.29v0.08a13.29,13.29,0,0,1-1.05,5.29,13.46,13.46,0,0,1-7.35,7.26,14.49,14.49,0,0,1-5.62,1.07h0ZM329,453a13.63,13.63,0,0,1-5.38-1.05,13,13,0,0,1-7.11-7.19,13.88,13.88,0,0,1-1-5.3v-0.08a13.68,13.68,0,0,1,3.84-9.61,13.09,13.09,0,0,1,4.33-2.93,14.09,14.09,0,0,1,5.57-1.07,17.41,17.41,0,0,1,3.37.3,14.05,14.05,0,0,1,2.76.83,12,12,0,0,1,2.29,1.28,15.43,15.43,0,0,1,2,1.66L336,434.07a14,14,0,0,0-3.14-2.18,8,8,0,0,0-3.59-.79,7.29,7.29,0,0,0-5.49,2.41,8.25,8.25,0,0,0-1.58,2.61,8.88,8.88,0,0,0-.56,3.18v0.08a9,9,0,0,0,.56,3.2,8.35,8.35,0,0,0,1.56,2.63,7.23,7.23,0,0,0,5.51,2.45,8.07,8.07,0,0,0,3.82-.83,14.81,14.81,0,0,0,3.1-2.26l3.69,3.72a19,19,0,0,1-2.11,2,12.29,12.29,0,0,1-5.23,2.43A17.12,17.12,0,0,1,329,453h0Zm15.42-26.78h5.79v11.51l10.68-11.51h7l-10.72,11.17,11.21,15.16h-7l-8.16-11.21-3,3.16v8.05h-5.79V426.2h0Z",transform:"translate(-210 -301)"}})])]),a("h1",[t._v("\n            Permanent Messages\n          ")]),a("h3",{staticStyle:{"line-height":"130%"}},[t._v("\n            Set in Ethereum Blockchain\n          ")])])]),a("div",{staticClass:"content-block",staticStyle:{"margin-top":"0px"}},[a("reader-component",{on:{isContent:t.isContent}})],1)]):t._e(),"about"==t.$route.name?a("div",[a("div",{staticClass:"content-block",staticStyle:{"margin-top":"0px"}},[a("h2",{staticStyle:{"text-align":"left","margin-bottom":"40px"}},[t._v("How it works")]),t._v("\n\n      To read a message:\n      "),a("ul",[a("li",[t._v("\n          Open it in the "),a("router-link",{attrs:{to:"/"}},[t._v("Set in Block Reader")]),a("br")],1),t._m(0)]),a("br"),a("br"),t._v("\n      \n      To write a message:\n      "),a("ul",[a("li",[t._v("\n          Users can use the Set in Block "),a("router-link",{attrs:{to:"new-message"}},[t._v("submission interface")]),t._v(" to create Ethereum blockchain messages and broadcast them with their MetaMask wallets. The submission is done on the client side. For privacy reasons, every new Set in Block message is sent to a randomly generated Ethereum address.\n        ")],1)]),a("br"),a("br"),a("br"),a("h2",{staticStyle:{"text-align":"left","margin-bottom":"40px"}},[t._v("About")]),t._v("\n\n      Your message, written on the blockchain, is immutable and incorruptible - no one can modify or delete it. It also never expires, it will stay there indefinitely. \n      By having the message on the blockchain, you have a mathematically-based proof that your message is authentic and existed prior to a \n      specific date.\n      "),a("br"),a("br"),t._v("\n      The message you enter in this app is encoded into a hexadecimal format and then included in the data field of the Ethereum blockchain transaction.\n      "),a("br"),a("br"),t._v("\n      To add this message to the blockchain, you will be asked to confirm the transaction with your "),a("a",{attrs:{href:"https://medium.com/publicaio/a-complete-guide-to-using-metamask-updated-version-cd0d6f8c338f",target:"_blank"}},[t._v("MetaMask")]),t._v(" \n      browser extension. You only need to pay the transaction fee (few usd cents), as the value of the transaction is 0.\n      "),a("br"),a("br"),t._v("\n      The longer is your message, the bigger is the transaction fee. Gas Limit is calculated automatically, according to the size of your message, so do not change it. \n      Gas Price is set to 3 Gwei, but you can change it freely, depending on the network conditions.\n      "),a("br"),a("br"),t._v("\n      We never see your private key or any other sensitive data, as the transaction is executed on the client side, through the MetaMask extension. You can inspect \n      the code of our website by looking into its source and visiting its "),a("a",{attrs:{href:"https://github.com/giekaton/set-in-block",target:"_blank"}},[t._v("GitHub")]),t._v(" repository.\n      "),a("br"),a("br"),t._v("\n      After the message is added to the blockchain, it is no longer possible to change or delete it. Also, the time and the date of the message creation \n      cannot be changed. The unique quality of the blockchain is that it is immutable and incorruptible, and because of its decentralized nature, \n      the data you add to the blockchain stays there forever.\n      "),a("br"),a("br"),t._v("\n      The message submission is anonymous and for every message a new random receiving Ethereum address is generated. Besides Google Analytics with IP anonymization, we do not use any trackers or cookies. We do not use a database and do not \n      collect any information about the website users.\n      "),a("br"),a("br"),a("br"),t._v("\n      To announce your blockchain message publicly, tweet its link with the #setinblock hashtag.\n      "),a("br"),a("br"),a("br"),t._v('\n      "I\'m feeling lucky" is a random list of Ethereum transactions with messages. You can browse through them by repeatedly clicking the lucky button. Email us a link to your blockchain message so we will inlude it in the lucky list.\n      '),a("br"),a("br"),a("br"),t._v("\n      Follow and fork on "),a("a",{attrs:{href:"https://twitter.com/setinblock",target:"_blank"}},[t._v("Twitter")]),t._v(" and "),a("a",{attrs:{href:"https://github.com/giekaton/set-in-block",target:"_blank"}},[t._v("GitHub")]),t._v(".\n    ")])]):t._e()]),a("div",{staticClass:"reader-footer"},[a("div",{staticClass:"width"},[a("a",{staticClass:"sans-serif",staticStyle:{"margin-right":"2px"},attrs:{href:"https://github.com/giekaton/set-in-block",target:"_blank",title:"GitHub"}},[t._v("\n        GitHub")]),t._v(" | "),a("a",{attrs:{href:"https://twitter.com/setinblock",target:"_blank"}},[t._v("Twitter")]),a("div",{staticClass:"sans-serif",staticStyle:{float:"right"}},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticStyle:{"margin-top":"7px"}},[t._v("\n            Use a direct link (https://setinblock.com/your_transaction_hash) as in this example: "),a("div",{staticClass:"overflow-dots",staticStyle:{"padding-bottom":"1px"}},[a("a",{staticStyle:{"font-size":"13px","line-height":"130%"},attrs:{href:"/0x52fcfb8b25daa9a6ea2c99a26cba4a4104ba21cb83fe670a3d296a317b98f097",target:"_blank"}},[t._v("https://setinblock.com/0x52fcfb8b25daa9a6ea2c99a26cba4a4104ba21cb83fe670a3d296a317b98f097")]),a("br")])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reader-input"},[a("div",{staticStyle:{"max-width":"600px",margin:"0 auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txHash,expression:"txHash"}],staticStyle:{width:"100%",height:"35px",padding:"5px","padding-top":"6px","margin-bottom":"2px","font-size":"15px","margin-top":"5px",outline:"0"},attrs:{type:"text",placeholder:"Ethereum transaction hash",autofocus:""},domProps:{value:t.txHash},on:{input:function(e){e.target.composing||(t.txHash=e.target.value)}}})]),a("div",{staticStyle:{height:"10px"}}),a("button",{staticStyle:{margin:"5px",display:"inline"},on:{click:t.read}},[t._v("Read the message")]),a("button",{staticStyle:{margin:"5px",display:"inline","padding-left":"25px","padding-right":"25px"},on:{click:function(e){t.read("lucky")}}},[t._v("I'm feeling lucky")]),t.content?a("div",{staticClass:"reader-msg serif",staticStyle:{"min-height":"55px"}},[a("div",{staticStyle:{position:"absolute",top:"11px",right:"13px",cursor:"pointer","font-size":"20px"},on:{click:function(e){t.close()}}},[t._v("✕")]),t._v("\n      "+t._s(t.message)+"\n      "),"Message is not available. Try a different tx hash."!=t.message?a("div",[a("div",{staticStyle:{"border-top":"1px solid #cccccc",width:"100%","margin-top":"50px","padding-top":"0px"}}),a("div",{staticClass:"reader-tx-details sans-serif",staticStyle:{"line-height":"18px","margin-bottom":"20px","margin-top":"-7px"}},[t._v("\n          The above message is stored permanently on the blockchain. It cannot be edited or deleted."),a("br"),t._v("\n          Message created: "),a("a",{attrs:{href:"https://etherscan.io/tx/"+t.txHash,target:"_blank"}},[a("span",{staticClass:"sans-serif",attrs:{title:"Link to Etherscan"}},[t._v(t._s(t.timestamp))])]),t._v("\n          Ethereum transaction hash: "),a("a",{attrs:{href:"https://etherscan.io/tx/"+t.txHash,target:"_blank",title:"Link to Etherscan"}},[t._v(t._s(t.txHash))])])]):t._e()]):t._e(),t.content?a("div",{staticStyle:{"margin-top":"-20px"}},[a("div",{staticClass:"overflow-dots",staticStyle:{"font-size":"12px"}},[a("a",{staticStyle:{"font-size":"12px"},attrs:{href:"/"+t.txHash,target:"_blank"}},[t._v("https://setinblock.com/"+t._s(t.txHash))])]),a("br"),a("br"),a("button",{on:{click:function(e){t.embed()}}},[t._v("Embed")]),a("br"),a("br")]):t._e()])},_=[],w=(a("a481"),{name:"ReaderComponent",data:function(){return{txHash:"",txHashArray:["0x52fcfb8b25daa9a6ea2c99a26cba4a4104ba21cb83fe670a3d296a317b98f097","0x2d6a7b0f6adeff38423d4c62cd8b6ccb708ddad85da5d3d06756ad4d8a04a6a2","0x8006d703a45663cab96a85a4ef3e6ab94a1410d6e70119139eea807a63ecb79e","0xddfa3b28394d52d0e2c168c42d0f853179b3e482ee4bf507851c95da6d68d1c1","0x77ed505f790493db0e47a0379e8455843bb5ecac9d03ba88602696e346d84828"],message:"Loading...",content:!1,timestamp:""}},methods:{embed:function(){alert("This feature is coming soon. Please come back in a few days.")},close:function(){this.content=!1,this.$emit("isContent",!1)},read:function(t){if("lucky"==t&&(this.txHash=this.txHashArray[Math.floor(Math.random()*this.txHashArray.length)]),""==this.txHash)return alert("Enter Ethereum transaction hash");this.$emit("isContent",!0),this.message="Loading...",this.content=!0;var e=this;axios.get(etherscan+"/api?module=proxy&action=eth_getTransactionByHash&txhash="+this.txHash).then(function(t){"undefined"!=typeof t["data"]["result"]["input"]?(e.hex2utf8(t["data"]["result"]["input"]),e.blockNumber=t["data"]["result"]["blockNumber"],axios.get(etherscan+"/api?module=proxy&action=eth_getBlockByNumber&tag="+e.blockNumber+"&boolean=true").then(function(t){if(console.log(t),"undefined"===typeof t["data"]["error"]){var a=t["data"]["result"]["timestamp"];a=parseInt(a,16),e.convert(a)}else e.timestamp="Processing..."}).catch(function(t){console.log(t)})):e.message="NO"}).catch(function(t){e.message="Message is not available. Try a different tx hash."})},hex2utf8:function(t){try{this.message=decodeURIComponent(t.replace(/\s+/g,"").replace(/[0-9a-f]{2}/g,"%$&")).substring(2)}catch(e){for(b=0;b<t.length;b+=2)this.message=this.tempstr+String.fromCharCode(parseInt(t.substr(b,2),16))}},convert:function(t){this.timestamp=new Date(new Date(1e3*t)).toUTCString()}}}),C=w,S=(a("da42"),Object(d["a"])(C,k,_,!1,null,null,null));S.options.__file="ReaderComponent.vue";var T=S.exports,H={name:"home",data:function(){return{content:!1}},components:{ReaderComponent:T},beforeMount:function(){},mounted:function(){document.getElementById("splashScreen").style.display="none",window.scrollTo(0,0)},rendered:function(){window.scrollTo(0,0)},methods:{isContent:function(t){this.content=!!t},toTop:function(){window.scrollTo(0,0)},fileData:function(t){this.fileName=t.fileName,this.fileSize=t.fileSize,this.fileHash=t.fileHash}}},I=H,M=(a("cccb"),Object(d["a"])(I,x,y,!1,null,null,null));M.options.__file="Home.vue";var E=M.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reader"},[a("div",{staticStyle:{"max-width":"620px",margin:"0 auto","margin-top":"100px"}},[a("h1",{staticStyle:{"font-size":"14px"}},[t._v('Enter a message and "set in stone" it on the blockchain')]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.messageInput,expression:"messageInput"}],staticClass:"message-input",domProps:{value:t.messageInput},on:{input:function(e){e.target.composing||(t.messageInput=e.target.value)}}}),a("div",{staticStyle:{float:"left","margin-top":"5px","text-align":"left","line-height":"18px","font-size":"13px"}},[a("span",[t._v("\n        Message size: "+t._s(t.bytesCalc)+" bytes"),a("br"),t._v("\n        Max tx fee: "+t._s(t.txFeeCalc)+" ETH\n      ")])]),a("br"),a("div",{staticStyle:{width:"180px",float:"right"}},[a("button",{staticStyle:{float:"right"},on:{click:function(e){t.set()}}},[t._v("Set")]),a("div",{staticClass:"link",staticStyle:{float:"right","margin-right":"20px","margin-top":"13px","font-size":"12px"},on:{click:function(e){t.content=!0}}},[t._v("Preview")])])]),""!=t.feedback?a("div",{staticClass:"feedback",staticStyle:{"text-align":"center","padding-top":"100px"},domProps:{innerHTML:t._s(t.feedback)}}):t._e(),t.content?a("div",{staticClass:"reader-msg serif",staticStyle:{"min-height":"55px",margin:"0 auto","max-width":"620px","margin-top":"140px","margin-bottom":"100px","box-shadow":"#e9e9e9 0px 4px 8px 3px"}},[a("div",{staticClass:"sans-serif",staticStyle:{position:"absolute",top:"3px",right:"45px","font-size":"13px",color:"red"}},[t._v("\n      Message preview\n    ")]),a("div",{staticStyle:{position:"absolute",top:"11px",right:"13px",cursor:"pointer","font-size":"20px"},on:{click:function(e){t.content=!1}}},[t._v("✕")]),"msgPlainText"==t.msgType?a("span",[t._v("\n      "+t._s(t.messageInput)+"\n    ")]):t._e(),"msgIpProtection"==t.msgType?a("span",[t._v("\n      "+t._s(t.messageInputIp)+"                \n    ")]):t._e(),"Message is not available. Try a different tx hash."!=t.message?a("div",[a("div",{staticStyle:{"border-top":"1px solid #cccccc",width:"100%","margin-top":"50px","padding-top":"0px"}}),t._m(0)]):a("div",{staticStyle:{height:"40px"}})]):t._e(),a("div",{staticClass:"reader-footer"},[a("div",{staticClass:"width"},[a("a",{staticClass:"sans-serif",staticStyle:{"margin-right":"2px",color:"#828282"},attrs:{href:"https://github.com/giekaton/set-in-block",target:"_blank",title:"GitHub"}},[t._v("\n        Set in Block v0.3.1")]),a("div",{staticClass:"sans-serif",staticStyle:{float:"right"}},[a("router-link",{staticStyle:{color:"#828282"},attrs:{to:"/about"}},[t._v("\n          About\n        ")])],1)])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reader-tx-details sans-serif",staticStyle:{"line-height":"18px","margin-bottom":"20px","margin-top":"-7px"}},[t._v("\n        The above message is stored permanently on the blockchain. It cannot be edited or deleted."),a("br"),t._v("\n        Message created: Timestamp (available after the message is recorded)\n        Ethereum transaction hash: Unique transaction hash (available after the message is recorded)\n      ")])}],z=(a("6b54"),a("28a5"),a("ade3")),N={props:["txHash"],components:{ReaderComponent:T},data:function(){var t;return t={tempstr:"Loading...",output:"",decoded:"",blockNumber:"",timestamp:"Loading...",message:"",messageInput:"",feedback:"",url:"",msgType:"msgPlainText",fileName:"Waiting for the file",fileSize:0,fileHash:"Waiting for the file"},Object(z["a"])(t,"feedback",""),Object(z["a"])(t,"content",!1),t},computed:{bytesCalc:function(){return encodeURI(this.messageInput).split(/%..|./).length-1},txFeeCalc:function(){return 3*(68*this.bytesCalc+3e4)/1e9},bytesCalcIp:function(){return encodeURI(this.messageInputIp).split(/%..|./).length-1},txFeeCalcIp:function(){return 3*(68*this.bytesCalcIp+3e4)/1e9}},mounted:function(){document.getElementById("splashScreen").style.display="none",window.scrollTo(0,0)},methods:{set:function(){var t=this;if("undefined"!==typeof window.web3)if("undefined"!==typeof web3.currentProvider.publicConfigStore._state.selectedAddress){this.feedback='<span class="notice-good">Confirm the transaction in the MetaMask popup window.</span>';var e=function(e,a){e?console.error(e):(t.url="/reader/"+a,t.feedback='Message recorded<br><span style="cursor:text;font-size:12px;">Transaction hash: '+a+'</span><br><br>Read the message on Set in Block:<br><a href="'+t.url+'" style="font-size:12px;" target="_blank">https://setinblock.com/reader/'+a+"</a>")},a="";"msgIpProtection"==this.msgType?a=this.messageInputIp:"msgPlainText"==this.msgType&&(a=this.messageInput),a=this.rstr2utf8(a),a=this.str2hex(a),eth.sendTransaction({from:web3.currentProvider.publicConfigStore._state.selectedAddress,to:address,value:0,gas:gasCount(a)+3e4,gasPrice:3e9,data:a},e)}else this.feedback='<span class="notice">To broadcast the message, first log in to your MetaMask wallet.</span>';else this.feedback='<span class="notice">To broadcast messages, first install <b><a href="https://metamask.io/" target="_blank" class="notice underlined">MetaMask</a></b> browser extension.</span>'},rstr2utf8:function(t){for(var e="",a=0;a<t.length;a++){var n=t.charCodeAt(a);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e},str2hex:function(t){for(var e="",a=0;a<t.length;a++)e+=this.strlpad(t.charCodeAt(a).toString(16),"0",2).toUpperCase();return e},strlpad:function(t,e,a){while(t.length<a)t=e+t;return t}}},A=N,O=(a("c1a4"),Object(d["a"])(A,B,P,!1,null,null,null));O.options.__file="NewMessage.vue";var j=O.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reader"},[a("div",{staticClass:"read-content"},[a("span",{staticClass:"pre-formatted serif",domProps:{innerHTML:t._s(t.tempstr)}}),"Message is not available. Try a different tx hash."!=t.tempstr?a("div",[a("div",{staticStyle:{"border-top":"1px solid #cccccc",width:"100%","margin-top":"80px","padding-top":"10px"}}),a("div",{staticClass:"reader-tx-details sans-serif",staticStyle:{"line-height":"18px"}},[t._v("\n          The above message is stored permanently on the blockchain. It cannot be edited or deleted."),a("br"),a("br"),t._v("\n          Message creation date: \n          "),a("a",{attrs:{href:"https://etherscan.io/tx/"+t.txHash,target:"_blank"}},[a("span",{staticClass:"sans-serif",attrs:{title:"Link to Etherscan"}},[t._v(t._s(t.timestamp))])]),a("br"),a("div",{staticClass:"overflow-dots"},[t._v("\n          Ethereum transaction hash: \n          "),a("a",{attrs:{href:"https://etherscan.io/tx/"+t.txHash,target:"_blank",title:"Link to Etherscan"}},[t._v(t._s(t.txHash))])]),a("br"),a("br")])]):t._e()]),a("div",{staticClass:"reader-footer"},[a("div",{staticClass:"width"},[a("a",{staticClass:"sans-serif",staticStyle:{"margin-right":"2px",color:"#828282"},attrs:{href:"https://github.com/giekaton/set-in-block",target:"_blank",title:"GitHub"}},[t._v("\n        Set in Block v0.8")]),a("div",{staticClass:"sans-serif",staticStyle:{float:"right"}},[a("router-link",{staticStyle:{color:"#828282"},attrs:{to:"/"}},[t._v("Home")])],1)])])])},L=[],Z={props:["txHash"],components:{},data:function(){return{tempstr:"Loading...",output:"",decoded:"",blockNumber:"",timestamp:"Loading..."}},mounted:function(){document.getElementById("splashScreen").style.display="none",window.scrollTo(0,0);var t=this;axios.get(etherscan+"/api?module=proxy&action=eth_getTransactionByHash&txhash="+this.txHash).then(function(e){t.hex2utf8(e["data"]["result"]["input"]),t.blockNumber=e["data"]["result"]["blockNumber"],axios.get(etherscan+"/api?module=proxy&action=eth_getBlockByNumber&tag="+t.blockNumber+"&boolean=true").then(function(e){if("undefined"===typeof e["data"]["error"]){var a=e["data"]["result"]["timestamp"];a=parseInt(a,16),t.convert(a)}else t.timestamp="Processing..."}).catch(function(t){console.log(t)})}).catch(function(e){t.tempstr="Message is not available. Try a different tx hash."})},methods:{hex2utf8:function(t){try{this.tempstr=decodeURIComponent(t.replace(/\s+/g,"").replace(/[0-9a-f]{2}/g,"%$&")).substring(2)}catch(e){for(b=0;b<t.length;b+=2)this.tempstr=this.tempstr+String.fromCharCode(parseInt(t.substr(b,2),16))}},convert:function(t){this.timestamp=new Date(new Date(1e3*t)).toUTCString()}}},V=Z,G=(a("dee7"),Object(d["a"])(V,$,L,!1,null,null,null));G.options.__file="Read.vue";var U=G.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},D=[],F={},W=Object(d["a"])(F,q,D,!1,null,null,null);W.options.__file="Redirect.vue";var Y=W.exports;n["a"].use(g["a"]);var J=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E,meta:{title:"Set in Block - Immutable and Indestructible Messages on the Blockchain",metaTags:[{name:"description",content:'Immutable and Indestructible Messages on the Blockchain. Create and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and "set in stone" it on the blockchain.'},{property:"og:description",content:'Immutable and Indestructible Messages on the Blockchain. Create and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and "set in stone" it on the blockchain.'}]}},{path:"/about",name:"about",component:E,meta:{title:"Set in Block - Immutable and Indestructible Messages",metaTags:[{property:"og:description",content:'Immutable and Indestructible Messages on the Blockchain. Create and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and "set in stone" it on the blockchain.'}]}},{path:"/redirect",name:"redirect",component:Y},{path:"/new-message",name:"NewMessage",component:j,meta:{title:"Set in Block - Write a New Permanent Message",metaTags:[{name:"description",content:'Enter a message and "set in stone" it on the Ethereum blockchain.'},{property:"og:description",content:'Enter a message and "set in stone" it on the Ethereum blockchain.'}]}},{path:"/:txHash",name:"read2",component:U,props:!0,meta:{title:"Set in Block - Immutable message, permanently recorded on the blockchain"}}]});n["a"].config.productionTip=!1,J.beforeEach(function(t,e,a){var n=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),i=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});e.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!i)return a();i.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),a()}),new n["a"]({el:"#app",router:J,render:function(t){return t(v)},mounted:function(){document.dispatchEvent(new Event("render-event"))}})},"64a9":function(t,e,a){},8090:function(t,e,a){},c1a4:function(t,e,a){"use strict";var n=a("47ad"),i=a.n(n);i.a},cccb:function(t,e,a){"use strict";var n=a("d563"),i=a.n(n);i.a},d563:function(t,e,a){},da42:function(t,e,a){"use strict";var n=a("f7b9"),i=a.n(n);i.a},dee7:function(t,e,a){"use strict";var n=a("8090"),i=a.n(n);i.a},f7b9:function(t,e,a){}});
//# sourceMappingURL=app.05c6cf30.js.map