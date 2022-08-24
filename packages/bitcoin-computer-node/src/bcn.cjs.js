"use strict";var t=require("body-parser");var e=require("cors");var r=require("express");var s=require("http");var n=require("zeromq");var a=require("express-rate-limit");var o=require("dotenv");var i=require("is-primitive");var c=require("is-plain-object");var u=require("fs");var d=require("os");var l=require("path");var f=require("url");var p=require("winston");var y=require("bitcoin-computer-bitcore");var h=require("pg-promise");var m=require("pg-monitor");var g=require("exponential-backoff");var v=require("@bitcoin-computer/lib");var w=require("bitcoind-rpc");var b=require("util");var S=require("elliptic");var $=require("hash.js");function E(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function T(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}})),e.default=t,Object.freeze(e)}var O=E(t);var R=E(e);var x=E(r);var N=E(s);var j=T(n);var I=E(a);var P=E(o);var _=E(i);var A=E(c);var H=E(u);var C=E(d);var k=E(l);var M=E(h);var L=E(m);var B=E(w);var F=E(b);var U=E(S);var q=E($);const{deleteProperty:D}=Reflect;const G=_.default;const K=A.default;const W=t=>"object"==typeof t&&null!==t||"function"==typeof t;const z=t=>{if(!G(t))throw new TypeError("Object keys must be strings or symbols");if((t=>"__proto__"===t||"constructor"===t||"prototype"===t)(t))throw new Error(`Cannot set unsafe key: "${t}"`)};const J=(t,e)=>e&&"function"==typeof e.split?e.split(t):"symbol"==typeof t?[t]:Array.isArray(t)?t:((t,e,r)=>{const s=(t=>Array.isArray(t)?t.flat().map(String).join(","):t)(e?((t,e)=>{if("string"!=typeof t||!e)return t;let r=t+";";return void 0!==e.arrays&&(r+=`arrays=${e.arrays};`),void 0!==e.separator&&(r+=`separator=${e.separator};`),void 0!==e.split&&(r+=`split=${e.split};`),void 0!==e.merge&&(r+=`merge=${e.merge};`),void 0!==e.preservePaths&&(r+=`preservePaths=${e.preservePaths};`),r})(t,e):t);z(s);const n=V.cache.get(s)||r();return V.cache.set(s,n),n})(t,e,(()=>((t,e={})=>{const r=e.separator||".";const s="/"!==r&&e.preservePaths;if("string"==typeof t&&!1!==s&&/\//.test(t))return[t];const n=[];let a="";const o=t=>{let e;""!==t.trim()&&Number.isInteger(e=Number(t))?n.push(e):n.push(t)};for(let e=0;e<t.length;e++){const s=t[e];"\\"!==s?s!==r?a+=s:(o(a),a=""):a+=t[++e]}return a&&o(a),n})(t,e)));const Y=(t,e,r,s)=>{if(z(e),void 0===r)D(t,e);else if(s&&s.merge){const n="function"===s.merge?s.merge:Object.assign;n&&K(t[e])&&K(r)?t[e]=n(t[e],r):t[e]=r}else t[e]=r;return t};const V=(t,e,r,s)=>{if(!e||!W(t))return t;const n=J(e,s);let a=t;for(let t=0;t<n.length;t++){const e=n[t];const o=n[t+1];if(z(e),void 0===o){Y(a,e,r,s);break}"number"!=typeof o||Array.isArray(a[e])?(W(a[e])||(a[e]={}),a=a[e]):a=a[e]=[]}return t};V.split=J,V.cache=new Map,V.clear=()=>{V.cache=new Map};var Z=V;var Q=H.default;var X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var et=function(){function t(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,r,s){return r&&t(e.prototype,r),s&&t(e,s),e}}();var rt=function t(e,r){var s=r.indexOf(".");if(!~s){if(null==e)return;return e[r]}var n=r.substring(0,s),a=r.substring(s+1);if(null!=e)return e=e[n],a?t(e,a):e},st=Z,nt=function(t,e){if("function"!=typeof e)return JSON.parse(Q.readFileSync(t));Q.readFile(t,"utf-8",(function(t,r){try{r=JSON.parse(r)}catch(e){t=t||e}e(t,r)}))},at=H.default,ot=C.default;var it=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=r=r||{},r.stringify_width=r.stringify_width||2,r.stringify_fn=r.stringify_fn||null,r.stringify_eol=r.stringify_eol||!1,r.ignore_dots=r.ignore_dots||!1,this.path=e,this.data=this.read()}return et(t,[{key:"set",value:function(t,e,r){var s=this;return"object"===(void 0===t?"undefined":tt(t))?function(t,e){var r=0,s=[];if(Array.isArray(t))for(;r<t.length&&!1!==e(t[r],r);++r);else if("object"===(void 0===t?"undefined":X(t))&&null!==t)for(s=Object.keys(t);r<s.length&&!1!==e(t[s[r]],s[r]);++r);}(t,(function(t,e){st(s.data,e,t,r)})):this.options.ignore_dots?this.data[t]=e:st(this.data,t,e,r),this.options.autosave&&this.save(),this}},{key:"get",value:function(t){return t?this.options.ignore_dots?this.data[t]:rt(this.data,t):this.toObject()}},{key:"unset",value:function(t){return this.set(t,void 0)}},{key:"append",value:function(t,e){var r=this.get(t);if(r=void 0===r?[]:r,!Array.isArray(r))throw new Error("The data is not an array!");return r.push(e),this.set(t,r),this}},{key:"pop",value:function(t){var e=this.get(t);if(!Array.isArray(e))throw new Error("The data is not an array!");return e.pop(),this.set(t,e),this}},{key:"read",value:function(t){if(!t)try{return nt(this.path)}catch(t){return{}}nt(this.path,(function(e,r){t(null,r=e?{}:r)}))}},{key:"write",value:function(t,e){return e?at.writeFile(this.path,t,e):at.writeFileSync(this.path,t),this}},{key:"empty",value:function(t){return this.write("{}",t)}},{key:"save",value:function(t){var e=JSON.stringify(this.data,this.options.stringify_fn,this.options.stringify_width,this.options.stringify_eol);return this.write(this.options.stringify_eol?e+ot.EOL:e,t),this}},{key:"toObject",value:function(){return this.data}}]),t}();P.default.config();const ct=function(t,e){return new it(t,{stringify_eol:!0})}(`${l.dirname(f.fileURLToPath("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bcn.cjs.js",document.baseURI).href))}/../../package.json`);const{PORT:ut,ZMQ_URL:dt,CHAIN:lt,NETWORK:ft,BCN_ENV:pt,BCN_URL:yt,DEBUG_MODE:ht,POSTGRES_USER:mt,POSTGRES_PASSWORD:gt,POSTGRES_DB:vt,POSTGRES_HOST:wt,POSTGRES_PORT:bt,RPC_PROTOCOL:St,RPC_USER:$t,RPC_PASSWORD:Et,RPC_HOST:Tt,RPC_PORT:Ot,SERVER_VERSION:Rt,TESTING:xt,DEFAULT_WALLET:Nt,SYNC_HEIGHT:jt,SYNC_INTERVAL_CHECK:It,POSTGRES_MAX_PARAM_NUM:Pt,DB_CONNECTION_RETRY_TIME:_t,SIGNATURE_FRESHNESS_MINUTES:At,ALLOWED_RPC_METHODS:Ht}=process.env;const Ct=parseInt(ut,10)||"3000";const kt=dt||"tcp://node:28332";const Mt=lt||"LTC";const Lt=ft||"regtest";const Bt=pt||"dev";const Ft=yt||"http://127.0.0.1:3000";const Ut=parseInt(ht,10)||1;const qt=mt||"bcn";const Dt=gt||"bcn";const Gt=vt||"bcn";const Kt=wt||"127.0.0.1";const Wt=parseInt(bt,10)||"5432";const zt=St||"http";const Jt=$t||"bcn-admin";const Yt=Et||"kH4nU5Okm6-uyC0_mA5ztVNacJqZbYd_KGLl6mx722A=";const Vt=Tt||"node";const Zt=parseInt(Ot,10)||19332;const Qt=Rt||ct.get("version");const Xt=xt||!1;const te=Nt||"defaultwallet";const ee=parseInt(It,10)||3e3;const re=parseInt(Pt,10)||1e4;const se=parseInt(_t,10)||500;const ne=parseInt(At,10)||3;const ae=Ht?Ht.split(",").map((t=>new RegExp(t))):[];const oe=p.createLogger({level:["error","warn","info","http","verbose","debug","silly"][Ut],format:p.format.json(),transports:[new p.transports.Console({format:p.format.combine(p.format.colorize(),p.format.timestamp({format:"MM-DD-YYYY HH:mm:ss"}),p.format.printf((t=>`[2m${t.timestamp}[0m ${t.level} ${t.message}`)))})],exceptionHandlers:[new p.transports.File({filename:"logs/exceptions.log"})],rejectionHandlers:[new p.transports.File({filename:"logs/rejections.log"})]});const ie={maxFiles:1,maxSize:1e5};Ut>=0&&oe.add(new p.transports.File({filename:"error.log",level:"error"})),Ut>=1&&oe.add(new p.transports.File({filename:"logs/warn.log",level:"warn",...ie})),Ut>=2&&oe.add(new p.transports.File({filename:"logs/info.log",level:"info",...ie})),Ut>=3&&oe.add(new p.transports.File({filename:"logs/http.log",level:"http",...ie})),Ut>=4&&oe.add(new p.transports.File({filename:"logs/verbose.log",level:"verbose",...ie})),Ut>=5&&oe.add(new p.transports.File({filename:"logs/debug.log",level:"debug",...ie}));const ce=()=>"dev"===Bt;const ue=()=>Ut>=6;const de=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){const s=t[r];const n=Object.keys(s);let a=!1;for(let t=0;t<e.length;t++){const r=e[t];const o=Object.keys(r);if(n.length===o.length&&n.every((t=>o.includes(t)))&&n.every((t=>s[t]===r[t]))){a=!0;break}}if(!a)return!1}return!0};const le=t=>new Promise((e=>{setTimeout(e,t)}));const fe=(t,e)=>Object.assign(new Array(e).fill(null),t);const pe={error:(t,e)=>{if(e.cn){const{host:r,port:s,database:n,user:a,password:o}=e.cn;oe.debug(`Waiting for db to start { message:${t.message} host:${r}, port:${s}, database:${n}, user:${a}, password: ${o}`)}},noWarnings:!0};ce()&&Ut>0&&(L.default.isAttached()?L.default.detach():(L.default.attach(pe),L.default.setTheme("matrix")));const ye=M.default(pe)({host:Kt,port:Wt,database:Gt,user:qt,password:Dt,allowExitOnIdle:!0,idleTimeoutMillis:100});const{PreparedStatement:he}=M.default;class me{static async select(t){const e=new he({name:`OffChain.select.${Math.random()}`,text:'SELECT "data" FROM "OffChain" WHERE "id" = $1',values:[t]});return ye.oneOrNone(e)}static async insert({id:t,data:e}){const r=new he({name:`OffChain.insert.${Math.random()}`,text:'INSERT INTO "OffChain" ("id", "data") VALUES ($1, $2) ON CONFLICT DO NOTHING',values:[t,e]});return ye.none(r)}static async delete(t){const e=new he({name:`OffChain.delete.${Math.random()}`,text:'WITH deleted AS (DELETE FROM "OffChain" WHERE "id" = $1 RETURNING *) SELECT count(*) FROM deleted;',values:[t]});return(await ye.any(e))[0].count>0}}class ge{static async select(t){return(await me.select(t))?.data||null}static async insert(t){return me.insert(t)}static async delete(t){return me.delete(t)}}const{crypto:ve}=y.Bitcoin;const we=x.default.Router();we.get("/:id",(async({params:{id:t},url:e,method:r},s)=>{void 0===s.locals.authToken&&(oe.error(`Authorization failed at ${r} ${e}.`),s.status(403).json({error:`Authorization failed at ${r} ${e}.`}));try{const e=await ge.select(t);e?s.status(200).json(e):s.status(403).json({error:"No entry found."})}catch(t){oe.error(`GET ${e} failed with error '${t.message}'`),s.status(500).json({error:t.message})}})),we.post("/",(async(t,e)=>{const{body:{data:r},url:s}=t;try{const s=ve.Hash.sha256(Buffer.from(r)).toString("hex");await ge.insert({id:s,data:r});const n=`${t.protocol}://${t.get("host")}/store/${s}`;e.status(201).json({_url:n})}catch(t){oe.error(`POST ${s} failed with error '${t.message}'`),e.status(500).json({error:t.message})}})),we.delete("/:id",(async({params:{id:t},url:e,method:r},s)=>{ce()||(oe.error(`Authorization failed at ${r} ${e}.`),s.status(403).json({error:`Authorization failed at ${r} ${e}.`}));try{await ge.delete(t)?s.status(204).send():s.status(403).json({error:"No entry found."})}catch(t){oe.error(`DELETE ${e} failed with error '${t.message}'`),s.status(500).json({error:t.message})}}));const{PreparedStatement:be}=M.default;class Se{static async select(){return ye.one('SELECT "syncedHeight", "bitcoindSyncedHeight", "bitcoindSyncedProgress" FROM "Sync"')}static async update({syncedHeight:t,bitcoindSyncedHeight:e,bitcoindSyncedProgress:r}){const s=new be({name:`Sync.update.${Math.random()}`,text:'UPDATE "Sync" SET "syncedHeight" = $1, "bitcoindSyncedHeight" = $2, "bitcoindSyncedProgress" = $3',values:[t,e,r]});await ye.any(s)}}var $e=async()=>class{static async select(){return Se.select()}static async update(t){await Se.update(t)}}.select();const Ee={protocol:zt,user:Jt,pass:Yt,host:Vt,port:Zt};const Te=new B.default(Ee);const Oe={createwallet:F.default.promisify(B.default.prototype.createwallet.bind(Te)),generateToAddress:F.default.promisify(B.default.prototype.generateToAddress.bind(Te)),getaddressinfo:F.default.promisify(B.default.prototype.getaddressinfo.bind(Te)),getBlock:F.default.promisify(B.default.prototype.getBlock.bind(Te)),getBlockchainInfo:F.default.promisify(B.default.prototype.getBlockchainInfo.bind(Te)),getBlockHash:F.default.promisify(B.default.prototype.getBlockHash.bind(Te)),getRawTransaction:F.default.promisify(B.default.prototype.getRawTransaction.bind(Te)),getTransaction:F.default.promisify(B.default.prototype.getTransaction.bind(Te)),importaddress:F.default.promisify(B.default.prototype.importaddress.bind(Te)),listunspent:F.default.promisify(B.default.prototype.listunspent.bind(Te)),sendRawTransaction:F.default.promisify(B.default.prototype.sendRawTransaction.bind(Te))};const{PreparedStatement:Re}=M.default;const{PreparedStatement:xe}=M.default;class Ne{static async select(t){const e=new xe({name:`Standard.select.${Math.random()}`,text:'SELECT "address", "satoshis", "scriptPubKey", "rev" FROM "Standard" WHERE "address" = $1 AND "spent" = FALSE',values:[t]});return(await ye.any(e)).map((t=>({...t,satoshis:parseInt(t.satoshis,10)})))}static async insert(t){const e=t.flatMap((t=>[t.rev,t.address,t.satoshis,t.scriptPubKey,!1]));for(;e.length;){const t=e.splice(0,re);const r=[];for(let e=1;e<=t.length;e+=5)r.push(`($${e}, $${e+1}, $${e+2}, $${e+3}, $${e+4})`);const s=r.join(",");const n=new xe({name:`Standard.insert.${Math.random()}`,text:`INSERT INTO "Standard"("rev", "address", "satoshis", "scriptPubKey", "spent") VALUES ${s}  ON CONFLICT DO NOTHING`,values:t});await ye.none(n)}}static async update(t){const e=t.flatMap((t=>[`${t.prevTxId.toString("hex")}/${t.outputIndex}`]));if(0===e.length)return[];const r=[];for(let t=1;t<=e.length;t+=1)r.push(`("rev" = $${t})`);const s=r.join(" OR ");const n=new xe({name:`Standard.update.${Math.random()}`,text:`UPDATE "Standard" SET "spent" = TRUE WHERE ${s} RETURNING "rev"`,values:e});return ye.any(n)}static async getBalance(t){const e=new xe({name:`Standard.getBalance.${Math.random()}`,text:'SELECT SUM("satoshis") FROM "Standard" WHERE "address" = $1 AND "spent" = FALSE',values:[t]});const r=await ye.oneOrNone(e);return parseInt(r?.sum,10)||0}}class je{static async select(t){return(await Ne.select(t)).map((t=>({...t,amount:t.satoshis/1e8})))}static async getBalance(t){return Ne.getBalance(t)}static async insert(t){const e=t.map((t=>({rev:`${t.txId}/${t.outputIndex}`,address:t.address.toString("legacy"),satoshis:t.satoshis,scriptPubKey:t.script.toHex(),spent:!1})));return Ne.insert(e)}}const{Script:Ie,Transaction:Pe}=y.Bitcoin;const{Transaction:_e}=y.Bitcoin;const{Input:Ae}=_e;const{PreparedStatement:He}=M.default;class Ce{static async query(t){const{publicKey:e,classHash:r}=t;if(void 0===e&&void 0===r)return[];let s='SELECT "rev"\n      FROM "NonStandard"\n      WHERE "spent" = FALSE';const n=[];e&&(n.push(e),s+=' AND $1 = ANY ("publicKeys")'),r&&(n.push(r),s+=` AND "classHash" = $${n.length}`);const a=new He({name:`NonStandard.query.${Math.random()}`,text:s,values:n});return(await ye.any(a)).map((t=>t.rev))}static async insert({id:t,rev:e,publicKeys:r,classHash:s}){const n=new He({name:`NonStandard.insert.${Math.random()}`,text:'INSERT INTO "NonStandard"("id", "rev", "publicKeys", "classHash", "spent") VALUES ($1, $2, $3, $4, FALSE) ON CONFLICT DO NOTHING',values:[t,e,r,s]});await ye.none(n)}static async update(t){const e=new He({name:`NonStandard.update.${Math.random()}`,text:'UPDATE "NonStandard" SET "spent" = TRUE WHERE "rev" = $1 AND "spent" = FALSE',values:[t]});return ye.none(e)}static async getRevsByIds(t){const e=new He({name:`NonStandard.getRevsByIds.${Math.random()}`,text:'SELECT "rev" FROM "NonStandard" WHERE "id" LIKE ANY($1) AND "spent" = FALSE',values:[[t]]});return ye.any(e)}static async select(t){const e=new He({name:`NonStandard.select.${Math.random()}`,text:'SELECT "id", "classHash" FROM "NonStandard" WHERE "rev" = $1',values:[t]});return ye.oneOrNone(e)}}class ke{static async select(t){return Ce.select(t)}static async query(t){return Ce.query(t)}static async getRevsByIds(t){return Ce.getRevsByIds(t)}static async insert(t){return Ce.insert(t)}static async update(t){return Ce.update(t)}}const{crypto:Me}=y.Bitcoin;const Le=new v.Computer({chain:Mt,network:Lt,url:Ft});const Be=t=>t.tx.inputs.map((t=>y.Bitcoin.Transaction.Input.fromObject({...t,script:t._scriptBuffer}))).filter((t=>!t.isNull()));const Fe=async t=>{try{const e=t.toString("hex");oe.info(`ZMQ message { rawTx:${e} }`),"dev"===Bt&&H.default.appendFileSync("zmqlog.log",`${e} \r\n`);const r=await Le.db.fromTxHex(e);try{await(async t=>{const e=Be(t);if(e.length>0){const r=await(async t=>{const e=Be(t);let r=[];return e.length>0&&(r=await(async t=>{const e=await class{static async areSpent(t){return class{static async areSpent(t){const e=t.map((t=>`('${t.prevTxId.toString("hex")}/${t.outputIndex}')`)).join(",");const r=new Re({name:`Utxos.areSpent.${Math.random()}`,text:`SELECT "rev", "stSpent", "nstSpent" from "Utxos"  WHERE "rev" IN (${e})`});return ye.any(r)}}.areSpent(t)}}.areSpent(t);return e})(e)),r})(t);e.forEach((e=>{const s=`${e.prevTxId.toString("hex")}/${e.outputIndex}`;r.some((t=>t.rev===s))||oe.error(`Error: repaired needed. tx: ${t.tx.id} input to repair: ${s}`)}))}await(async(t,e)=>{const r=t.flatMap(((t,r)=>{const s=Ie.fromBuffer(t._scriptBuffer);const{PUBKEYHASH_OUT:n,SCRIPTHASH_OUT:a}=Ie.types;if(![n,a].includes(s.classify()))return[];const o=s.toAddress(Lt).toString("legacy");const i=s.toHex();const c=t.satoshis/1e8;const u=Math.round(t.satoshis);return[new Pe.UnspentOutput({address:o,txId:e,outputIndex:r,scriptPubKey:i,amount:c,satoshis:u})]}));await je.insert(r)})(t.tx.outputs,t.txId),await(async t=>{const e=t.map((t=>Ae.fromObject({...t,script:t._scriptBuffer}))).filter((t=>!t.isNull()));return Ne.update(e)})(t.tx.inputs);const{inRevs:r=[],outRevs:s=[],outData:n=[]}=t;await(async(t,e,r)=>{const s=Math.max(t.length,e.length);const n=fe(t,s);const a=fe(e,s);const o=(i=a,n.map(((t,e)=>[t,i[e]])));var i;await Promise.all(o.map((async([t,e],s)=>{const{__cls:n="",_owners:a=[]}=r[s]||{};if(null===t&&e)return/^[0-9A-Fa-f]{64}\/\d+$/.test(e),void await ke.insert({id:e,rev:e,publicKeys:a,classHash:Me.Hash.sha256(Buffer.from(n)).toString("hex")});if(e&&t){const{id:r="",classHash:s=""}=await ke.select(t)||{};await ke.insert({id:r,classHash:s,rev:e,publicKeys:a}),await ke.update(t)}})))})(r,s,n)})(r)}catch(t){oe.error(`Error parsing transaction ${t.message} ${t.stack}`)}}catch(t){oe.error(`RawTxSubscriber failed with error '${t.message} ${t.stack}'`)}};var Ue=async t=>je.select(t);class qe{static async getTransaction(t){const{result:e}=await Oe.getTransaction(t);return e}static async getBulkTransactions(t){return(await Promise.all(t.map((t=>Oe.getRawTransaction(t))))).map((t=>t.result))}static async sendRawTransaction(t){const{result:e,error:r}=await Oe.sendRawTransaction(t);if(r)throw oe.error(r),new Error("Error sending transaction");return e}}var De=async t=>await qe.getBulkTransactions(t);var Ge=async t=>(void 0===(await Oe.getaddressinfo(t)).result.timestamp&&(oe.info(`Importing address: ${t}`),await Oe.importaddress(t,!1)),(await Oe.listunspent(0,999999,[t])).result);const Ke={protocol:zt,user:Jt,pass:Yt,host:Vt,port:Zt};const We=new B.default(Ke);const ze={};const Je=JSON.parse(JSON.stringify(B.default.callspec));Object.keys(Je).forEach((t=>{Je[t.toLowerCase()]=Je[t]}));const Ye={str:t=>t.toString(),string:t=>t.toString(),int:t=>parseFloat(t),float:t=>parseFloat(t),bool:t=>!0===t||"1"===t||1===t||"true"===t||"true"===t.toString().toLowerCase(),obj:t=>"string"==typeof t?JSON.parse(t):t};try{Object.keys(B.default.prototype).forEach((t=>{if(t&&"function"==typeof B.default.prototype[t]){const e=t.toLowerCase();ze[t]=F.default.promisify(B.default.prototype[t].bind(We)),ze[e]=F.default.promisify(B.default.prototype[e].bind(We))}}))}catch(t){oe.error(`Error occurred while binding RPC methods: ${t.message}`)}const{ec:Ve}=U.default;const Ze=new Ve("secp256k1");const Qe=x.default();let Xe;try{Xe=N.default.createServer(Qe)}catch(t){throw oe.error(`Starting server failed with error '${t.message}'`),t}if(oe.info(`Server listening on port ${Ct}`),Qe.use(R.default()),"dev"!==Bt){const t=I.default({windowMs:9e5,max:300,standardHeaders:!0,legacyHeaders:!1});Qe.use(t)}Qe.use(O.default.json({limit:"100mb"})),Qe.use(O.default.urlencoded({limit:"100mb",extended:!0})),Qe.use((async(t,e,r)=>{try{const s=t.get("Authentication");if(!s)return void r();const n=(t=>{const e=t.split(" ");if(2!==e.length||"Bearer"!==e[0])throw new Error("Authentication header is invalid.");const r=Buffer.from(e[1],"base64").toString().split(":");if(3!==r.length)throw new Error;return{signature:r[0],publicKey:r[1],timestamp:parseInt(r[2],10)}})(s);const{signature:a,publicKey:o,timestamp:i}=n;if(Date.now()-i>1e3*ne*60)return void e.status(401).json({error:"Signature is too old."});const c=q.default.sha256().update(Ft+i).digest("hex");if(!Ze.keyFromPublic(o,"hex").verify(c,a))return void e.status(401).json({error:"The origin and public key pair doesn't match the signature."});e.locals.authToken=n,r()}catch(t){oe.error(`Auth failed with error '${t.message}'`),e.status(401).json({error:t.message})}})),Qe.use((({url:t},e,r)=>{if(void 0!==e.locals.authToken)try{let t;try{const e=ce()?"bcn.test.config.json":"bcn.config.json";const r=l.dirname(f.fileURLToPath("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("bcn.cjs.js",document.baseURI).href));t=H.default.readFileSync(k.default.join(r,"..","..",e))}catch(t){if(t.message.includes("ENOENT: no such file or directory"))return void r();throw oe.error(`Access-list failed with error '${t.message}'`),t}const{blacklist:s,whitelist:n}=JSON.parse(t.toString());if(s&&n)return void e.status(403).json({error:"Cannot enforce blacklist and whitelist at the same time."});const{publicKey:a}=e.locals.authToken;if(n&&!n.includes(a)||s&&s.includes(a))return void e.status(403).json({error:`Public key ${a} is not allowed.`});r()}catch(r){oe.error(`Authorization failed at ${t} with error: '${r.message}'`),e.status(403).json({error:r.message})}else r()}));const tr=(()=>{const t=x.default.Router();return t.get("/wallet/:address/utxos",(async({params:t,url:e},r)=>{try{const{address:e}=t;const s=await Ue(e);const n=s.map((({satoshis:t,rev:e})=>{const[r,s]=e.split("/");return{amount:t/1e8,txid:r,vout:parseInt(s,10)}}));if(ue()){let t=[];let r=!1;let s=10;do{try{t=await Ge(e)||[],r=!0}catch(t){oe.debug(`Retrying to get utxos '${t.message}'`),await le(1e3),s-=1}}while(!r&&s>0);const a=t.map((({amount:t,txid:e,vout:r})=>({amount:t,txid:e,vout:r})));de(n,a)||(oe.error(`Inconsistency on UTXO set calculation for address ${e}.`),oe.error(`db utxos ${JSON.stringify(n,null,2)} rpc utxos ${JSON.stringify(a,null,2)}`),oe.error(`db utxos length ${n.length} rpc utxos length: ${a.length}`))}r.status(200).json(s)}catch(t){oe.error(`GET ${e} failed with error '${t.message}'`),r.status(404).json({error:t.message})}})),t.get("/non-standard-utxos",(async({query:t,url:e},r)=>{try{const e=await(async t=>ke.query(t))(t);r.status(200).json(e)}catch(t){oe.error(`GET ${e} failed with error '${t.messages}'`),r.status(404).json({error:t.message})}})),t.get("/address/:address/balance",(async({params:t,url:e},r)=>{try{const{address:s}=t;const n=await Ue(s);const a=await(async t=>je.getBalance(t))(s);const o=n.map((({satoshis:t,rev:e})=>{const[r,s]=e.split("/");return{amount:t/1e8,txid:r,vout:parseInt(s,10)}}));if(ue()){let t=[];let r=!1;let n=10;do{try{t=await Ge(s)||[],r=!0}catch(t){oe.debug(`Retrying ${e} getStandardUtxosAction: ${t.message}`),await le(1e3),n-=1}}while(!r&&n>0);const i=1e8*t.reduce(((t,e)=>t+e.amount),0);const c=t.map((({amount:t,txid:e,vout:r})=>({amount:t,txid:e,vout:r})));a===Math.round(i)&&de(o,c)||(oe.error(`Inconsistency on balance calculation for address ${s}: dbBalance ${a} rpcBalance: ${i}`),oe.error(`db utxos ${o}`),oe.error(`rpc utxos: ${JSON.stringify(o)}`))}r.status(200).json(a)}catch(t){oe.error(`GET ${e} failed with error '${t.message}'`),r.status(404).json({error:t.message})}})),t.post("/tx/bulk",(async({body:{txIds:t},url:e},r)=>{try{if(void 0===t||0===t.length)return void r.status(500).json({error:"Missing input txIds."});const e=await De(t);e?r.status(200).json(e):r.status(404).json({error:"Not found"})}catch(t){oe.error(`POST ${e} failed with error '${t.message}'`),r.status(500).json({error:t.message})}})),t.post("/tx/send",(async({body:{rawTx:t},url:e},r)=>{try{const e=await(async t=>qe.sendRawTransaction(t))(t);await Fe(t),r.status(200).json(e)}catch(t){oe.error(`POST ${e} failed with error '${t.message}'`),r.status(500).json({error:t.message})}})),t.post("/revs",(async({body:{ids:t},url:e},r)=>{try{if(void 0===t||0===t.length)return void r.status(404).json({error:"Missing input object ids."});const e=await(async t=>(await ke.getRevsByIds(t)).map((t=>t.rev)))(t);r.status(200).json(e)}catch(t){oe.error(`POST ${e} failed with error '${t.message}'`),r.status(404).json({error:t.message})}})),t.post("/rpc",(async({body:t,url:e},r)=>{try{if(!t||!t.method)throw new Error("Please provide appropriate RPC method name");if(!ae.some((e=>e.test(t.method))))throw new Error("Method is not allowed");const e=function(t,e){if(void 0===Je[t]||null===Je[t])throw new Error("This RPC method does not exist, or not supported");const r=e.trim().split(" ");const s=Je[t].trim().split(" ");if(0===e.trim().length&&0!==Je[t].trim().length)throw new Error(`Too few params provided. Expected ${s.length} Provided 0`);if(0!==e.trim().length&&0===Je[t].trim().length)throw new Error(`Too many params provided. Expected 0 Provided ${r.length}`);if(r.length<s.length)throw new Error(`Too few params provided. Expected ${s.length} Provided ${r.length}`);if(r.length>s.length)throw new Error(`Too many params provided. Expected ${s.length} Provided ${r.length}`);return 0===e.length?[]:r.map(((t,e)=>Ye[s[e]](t)))}(t.method,t.params);const s=e.length?await ze[t.method](...e):await ze[t.method]();return void r.status(200).json({result:s})}catch(t){oe.error(`POST ${e} failed with error '${t.message}'`),r.status(404).json({error:t.message})}})),t.post("/non-standard-utxo",(async(t,e)=>{e.status(500).json({error:"Please upgrade to @bitcoin-computer/lib-testing@0.7.7.0-beta or greater."})})),t.get("/tx/:txId",(async({params:t},e)=>{const{txId:r}=t;const[s]=await De([r]);s?e.status(200).json(s):e.status(404).json({error:"Not found"})})),t})();Qe.use(`/v1/${Mt}/${Lt}`,tr),Qe.use("/v1/store",we),Qe.get("/",((t,e)=>e.status(200).send("OK"))),Qe.get("/health",((t,e)=>e.status(200).send("healthy"))),Qe.get("/version",((t,e)=>e.status(200).send(Qt))),Xe.listen(Ct,(()=>{oe.info(`Rev ${Qt} Started web server on port ${Ct}`)}));const er=new j.Subscriber;er.connect(kt),er.subscribe("rawtx"),oe.info(`ZMQ Subscriber connected to ${kt}`),(async()=>{await(async()=>{await g.backOff((()=>ye.connect()),{startingDelay:se})})(),await(async t=>{try{await(async()=>{try{await Oe.createwallet(te)}catch(t){oe.debug(`Wallet creation failed with error '${t.message}'`)}})(),"regtest"!==Lt&&await(async()=>{let t=-1;let e=-1;let r=0;oe.info("Checking sync progress...syncedHeight: -1 from -1");do{({syncedHeight:t,bitcoindSyncedHeight:e,bitcoindSyncedProgress:r}=await $e()),t>0?oe.info(`Sync progress ${t}/${e} blocks [${(t/e*100).toFixed(4)}% (bitcoind progress: ${(100*r).toFixed(4)}%)]`):oe.info(`Sync progress initializing... ${t}/${e} blocks `),await le(ee)}while(t<e||r<.999);oe.info(`BCN reaches sync end...currentBlockHeight: ${t} from ${e} (chain progress: ${(100*r).toFixed(4)})`)})(),Xt?oe.info(`Bitcoin Computer Node is ready on testing ${Qt}`):oe.info(`Bitcoin Computer Node is ready ${Qt}`);for await(const[,e]of t)await Fe(e)}catch(t){oe.error(`ZMQ subscription failed with error '${t.message}'`)}})(er)})();
