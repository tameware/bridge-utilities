export const ACBL_LIVE_SAMPLE_HTML = `
<!DOCTYPE html><html lang="en">
<head>
	<title>ACBL Live</title>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge"><script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={xpid:"UwQHWF5QGwIEVlBaAAIA",licenseKey:"e48e6cc945",applicationID:"14218737"};;/*! For license information please see nr-loader-full-1.263.0.min.js.LICENSE.txt */
(()=>{var e,t,r={2983:(e,t,r)=>{"use strict";r.d(t,{D0:()=>v,gD:()=>y,Vp:()=>s,oC:()=>w,fr:()=>I,jD:()=>j,hR:()=>A,xN:()=>b,x1:()=>c,aN:()=>T,V:()=>P});var n=r(384),i=r(7864);const o={beacon:n.NT.beacon,errorBeacon:n.NT.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,i.a)(t,o);const r=(0,n.nY)(e);r&&(r.info=a[e])}var d=r(993);const u=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var l=r(2614),f=r(944);const h="[data-nr-mask]",g=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},feature_flags:[],harvest:{tooManyRequestsDelay:60},jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},logging:{enabled:!0,harvestTimeSeconds:10,autoStart:!0,level:d.p_.INFO},metrics:{enabled:!0,autoStart:!0},obfuscate:void 0,page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},privacy:{cookies_enabled:!0},proxy:{assets:void 0,beacon:void 0},session:{expiresMs:l.wk,inactiveMs:l.BB},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,fix_stylesheets:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){u(t)?e.mask_selector="".concat(t,",").concat(h):""===t||null===t?e.mask_selector=h:(0,f.R)(5,t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){u(t)?e.block_selector+=",".concat(t):""!==t&&(0,f.R)(6,t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,f.R)(7,t)}},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},soft_navigations:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},ssl:void 0}},p={},m="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(m);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function b(e,t){if(!e)throw new Error(m);p[e]=(0,i.a)(t,g());const r=(0,n.nY)(e);r&&(r.init=p[e])}function y(e,t){if(!e)throw new Error(m);var r=v(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const R={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},x={};function w(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!x[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return x[e]}function T(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");x[e]=(0,i.a)(t,R);const r=(0,n.nY)(e);r&&(r.loader_config=x[e])}const A=(0,n.dV)().o;var S=r(6154),E=r(9324);const _={buildEnv:E.F3,distMethod:E.Xs,version:E.xv,originTime:S.WN},O={customTransaction:void 0,disabled:!1,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,onerror:void 0,origin:""+S.gm.location,ptid:void 0,releaseIds:{},appMetadata:{},session:void 0,denyList:void 0,harvestCount:0,timeKeeper:void 0},N={};function I(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!N[e])throw new Error("Runtime for ".concat(e," was never set"));return N[e]}function P(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");N[e]={...(0,i.a)(t,O),..._};const r=(0,n.nY)(e);r&&(r.runtime=N[e])}function j(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},7864:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var n=r(944);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.R)(3);if(!t||"object"!=typeof t)return(0,n.R)(4);const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{if(null===e[a]){r[a]=null;continue}Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.R)(1,e)}return r}catch(e){(0,n.R)(2,e)}}},9324:(e,t,r)=>{"use strict";r.d(t,{F3:()=>i,Xs:()=>o,Yq:()=>a,xv:()=>n});const n="1.263.0",i="PROD",o="CDN",a="2.0.0-alpha.12"},6154:(e,t,r)=>{"use strict";r.d(t,{OF:()=>d,RI:()=>i,Vr:()=>h,WN:()=>g,bv:()=>o,gm:()=>a,lR:()=>l,lT:()=>f,m:()=>c,mw:()=>s,sb:()=>u});var n=r(1863);const i="undefined"!=typeof window&&!!window.document,o="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),s=Boolean("hidden"===a?.document?.visibilityState),c=""+a?.location,d=/iPad|iPhone|iPod/.test(a.navigator?.userAgent),u=d&&"undefined"==typeof SharedWorker,l=(()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),f=Boolean(i&&window.document.documentMode),h=!!a.navigator?.sendBeacon,g=Date.now()-(0,n.t)()},4777:(e,t,r)=>{"use strict";r.d(t,{J:()=>o});var n=r(944);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.R)(8);this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.R)(9,e)}}}},7295:(e,t,r)=>{"use strict";r.d(t,{Xv:()=>a,gX:()=>i,iW:()=>o});var n=[];function i(e){if(!e||o(e))return!1;if(0===n.length)return!0;for(var t=0;t<n.length;t++){var r=n[t];if("*"===r.hostname)return!1;if(s(r.hostname,e.hostname)&&c(r.pathname,e.pathname))return!1}return!0}function o(e){return void 0===e.hostname}function a(e){if(n=[],e&&e.length)for(var t=0;t<e.length;t++){let r=e[t];if(!r)continue;0===r.indexOf("http://")?r=r.substring(7):0===r.indexOf("https://")&&(r=r.substring(8));const i=r.indexOf("/");let o,a;i>0?(o=r.substring(0,i),a=r.substring(i)):(o=r,a="");let[s]=o.split(":");n.push({hostname:s,pathname:a})}}function s(e,t){return!(e.length>t.length)&&t.indexOf(e)===t.length-e.length}function c(e,t){return 0===e.indexOf("/")&&(e=e.substring(1)),0===t.indexOf("/")&&(t=t.substring(1)),""===e||e===t}},1687:(e,t,r)=>{"use strict";r.d(t,{Ak:()=>c,Ze:()=>l,x3:()=>d});var n=r(7836),i=r(1478),o=r(3606),a=r(860);const s={};function c(e,t){const r={staged:!1,priority:a.P[t]||0};u(e),s[e].get(t)||s[e].set(t,r)}function d(e,t){e&&s[e]&&(s[e].get(t)&&s[e].delete(t),h(e,t,!1),s[e].size&&f(e))}function u(e){if(!e)throw new Error("agentIdentifier required");s[e]||(s[e]=new Map)}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(u(e),!e||!s[e].get(t)||r)return h(e,t);s[e].get(t).staged=!0,f(e)}function f(e){const t=Array.from(s[e]);t.every((e=>{let[t,r]=e;return r.staged}))&&(t.sort(((e,t)=>e[1].priority-t[1].priority)),t.forEach((t=>{let[r]=t;s[e].delete(r),h(e,r)})))}function h(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const a=e?n.ee.get(e):n.ee,s=o.i.handlers;if(!a.aborted&&a.backlog&&s){if(r){const e=a.backlog[t],r=s[t];if(r){for(let t=0;e&&t<e.length;++t)g(e[t],r);(0,i.$)(r,(function(e,t){(0,i.$)(t,(function(t,r){r[0].on(e,r[1])}))}))}}a.isolatedBacklog||delete s[t],a.backlog[t]=null,a.emit("drain-"+t,[])}}function g(e,t){var r=e[1];(0,i.$)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],o=e[3],a=e[2];i.apply(o,a)}}))}},7836:(e,t,r)=>{"use strict";r.d(t,{P:()=>c,ee:()=>d});var n=r(384),i=r(8990),o=r(2983),a=r(2646),s=r(5607);const c="nr@context:".concat(s.W),d=function e(t,r){var n={},s={},u={},l=!1;try{l=16===r.length&&(0,o.fr)(r).isolatedBacklog}catch(e){}var f={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(d.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=h(n),c=p(e),u=c.length,l=0;l<u;l++)c[l].apply(a,r);var g=v()[s[e]];g&&g.push([f,e,r,a]);return a},get:m,listeners:p,context:h,buffer:function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:function(){f._aborted=!0,Object.keys(f.backlog).forEach((e=>{delete f.backlog[e]}))},isBuffering:function(e){return!!v()[s[e]]},debugId:r,backlog:l?{}:t&&"object"==typeof t.backlog?t.backlog:{},isolatedBacklog:l};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function h(e){return e&&e instanceof a.y?e:e?(0,i.I)(e,c,(()=>new a.y(c))):new a.y(c)}function g(e,t){n[e]=p(e).concat(t)}function p(e){return n[e]||[]}function m(t){return u[t]=u[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),u=(0,n.Zm)();u.ee||(u.ee=d)},2646:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});class n{constructor(e){this.contextId=e}}},9908:(e,t,r)=>{"use strict";r.d(t,{d:()=>n,p:()=>i});var n=r(7836).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},3606:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var n=r(9908);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.d,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.d);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3878:(e,t,r)=>{"use strict";r.d(t,{DD:()=>c,jT:()=>a,sp:()=>s});var n=r(6154);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n.gm.addEventListener("test",null,e),n.gm.removeEventListener("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},5607:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});const n=(0,r(9566).bz)()},9566:(e,t,r)=>{"use strict";r.d(t,{LA:()=>s,ZF:()=>c,bz:()=>a,el:()=>d});var n=r(6154);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n.gm?.crypto||n.gm?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n.gm?.crypto||n.gm?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}function d(){return s(32)}},2614:(e,t,r)=>{"use strict";r.d(t,{BB:()=>a,H3:()=>n,g:()=>d,iL:()=>c,tS:()=>s,uh:()=>i,wk:()=>o});const n="NRBA",i="SESSION",o=144e5,a=18e5,s={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},c={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},d={OFF:0,FULL:1,ERROR:2}},1863:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{t:()=>n})},7485:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(6154);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n.gm?.location?.protocol&&t.host===n.gm?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},944:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.debug&&console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e),t)}r.d(t,{R:()=>n})},5284:(e,t,r)=>{"use strict";r.d(t,{t:()=>c,B:()=>s});var n=r(7836),i=r(6154);const o="newrelic";const a=new Set,s={};function c(e,t){const r=n.ee.get(t);s[t]??={},e&&"object"==typeof e&&(a.has(t)||(r.emit("rumresp",[e]),s[t]=e,a.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{i.gm.dispatchEvent(new CustomEvent(o,{detail:e}))}catch(e){}}({loaded:!0})))}},8990:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},6389:(e,t,r)=>{"use strict";function n(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=n?.leading||!1;let o;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];i&&void 0===o&&(e.apply(t,a),o=setTimeout((()=>{o=clearTimeout(o)}),r)),i||(clearTimeout(o),o=setTimeout((()=>{e.apply(t,a)}),r))}}function i(e){var t=this;let r=!1;return function(){if(!r){r=!0;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e.apply(t,i)}}}r.d(t,{J:()=>i,s:()=>n})},1478:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},3304:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(7836);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},5289:(e,t,r)=>{"use strict";r.d(t,{GG:()=>o,sB:()=>a});var n=r(3878);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.sp)("load",e,t)}function a(e){if(i())return e();(0,n.DD)("DOMContentLoaded",e)}},384:(e,t,r)=>{"use strict";r.d(t,{NT:()=>o,US:()=>u,Zm:()=>a,bQ:()=>c,dV:()=>s,nY:()=>d,pV:()=>l});var n=r(6154),i=r(1863);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return n.gm.NREUM||(n.gm.NREUM={}),void 0===n.gm.newrelic&&(n.gm.newrelic=n.gm.NREUM),n.gm.NREUM}function s(){let e=a();return e.o||(e.o={ST:n.gm.setTimeout,SI:n.gm.setImmediate,CT:n.gm.clearTimeout,XHR:n.gm.XMLHttpRequest,REQ:n.gm.Request,EV:n.gm.Event,PR:n.gm.Promise,MO:n.gm.MutationObserver,FETCH:n.gm.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,i.t)(),date:new Date},r.initializedAgents[e]=t}function d(e){let t=a();return t.initializedAgents?.[e]}function u(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},2843:(e,t,r)=>{"use strict";r.d(t,{u:()=>i});var n=r(3878);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.DD)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},8941:(e,t,r)=>{"use strict";r.d(t,{um:()=>f,NZ:()=>x,vC:()=>A,bX:()=>N});var n=r(7836),i=r(3434),o=r(8990),a=r(6154);const s={},c=a.gm.XMLHttpRequest,d="addEventListener",u="removeEventListener",l="nr@wrapped:".concat(n.P);function f(e){var t=function(e){return(e||n.ee).get("events")}(e);if(s[t.debugId]++)return t;s[t.debugId]=1;var r=(0,i.YM)(t,!0);function f(e){r.inPlace(e,[d,u],"-",g)}function g(e,t){return e[1]}return"getPrototypeOf"in Object&&(a.RI&&h(document,f),h(a.gm,f),h(c.prototype,f)),t.on(d+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,o.I)(n,l,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(u+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function h(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,d);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}var g="fetch-",p=g+"body-",m=["arrayBuffer","blob","json","text","formData"],v=a.gm.Request,b=a.gm.Response,y="prototype";const R={};function x(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(v&&b&&a.gm.fetch))return t;if(R[t.debugId]++)return t;function r(e,r,i){var o=e[r];"function"==typeof o&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(i+"before-start",[r],a),a[n.P]&&a[n.P].dt&&(e=a[n.P].dt);var s=o.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return R[t.debugId]=1,m.forEach((e=>{r(v[y],e,p),r(b[y],e,p)})),r(a.gm,"fetch",g),t.on(g+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(g+"done",[null,r],n)}else t.emit(g+"done",[e],n)})),t}const w={},T=["pushState","replaceState"];function A(e){const t=function(e){return(e||n.ee).get("history")}(e);return!a.RI||w[t.debugId]++||(w[t.debugId]=1,(0,i.YM)(t).inPlace(window.history,T,"-")),t}var S=r(3878);var E=r(944);const _={},O=["open","send"];function N(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(_[r.debugId]++)return r;_[r.debugId]=1,f(t);var o=(0,i.YM)(r),s=a.gm.XMLHttpRequest,c=a.gm.MutationObserver,d=a.gm.Promise,u=a.gm.setInterval,l="readystatechange",h=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[],p=a.gm.XMLHttpRequest=function(e){const t=new s(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(l,(i=n,function(){var e=this;e.readyState>3&&!i.resolved&&(i.resolved=!0,r.emit("xhr-resolved",[],e)),o.inPlace(e,h,"fn-",x)}),(0,S.jT)(!1))}catch(e){(0,E.R)(15,e);try{r.emit("internal-error",[e])}catch(e){}}var i;return t};function m(e,t){o.inPlace(t,["onreadystatechange"],"fn-",x)}if(function(e,t){for(var r in e)t[r]=e[r]}(s,p),p.prototype=s.prototype,o.inPlace(p.prototype,O,"-xhr-",x),r.on("send-xhr-start",(function(e,t){m(e,t),function(e){g.push(e),c&&(v?v.then(R):u?u(R):(b=-b,y.data=b))}(t)})),r.on("open-xhr-start",m),c){var v=d&&d.resolve();if(!u&&!d){var b=1,y=document.createTextNode(b);new c(R).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===l||R()}));function R(){for(var e=0;e<g.length;e++)m(0,g[e]);g.length&&(g=[])}function x(e,t){return t}return r}},3434:(e,t,r)=>{"use strict";r.d(t,{YM:()=>c});var n=r(7836),i=r(5607);const o="nr@original:".concat(i.W);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],d=e[c];u(d)||(e[c]=r(d,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return u(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){d([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,u,l;try{a=this,o=[...arguments],u="function"==typeof n?n(o,a):n||{}}catch(t){d([t,"",[o,a,s],u],e)}i(r+"start",[o,a,s],u,c);try{return l=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],u,c),e}finally{i(r+"end",[o,a,l],u,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){d([t,r,n,i],e)}s=a}}}function d(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function u(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}},9300:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K.ajax},6774:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K.jserrors},993:(e,t,r)=>{"use strict";r.d(t,{ET:()=>o,It:()=>s,TZ:()=>a,p_:()=>i});var n=r(860);const i={ERROR:"ERROR",WARN:"WARN",INFO:"INFO",DEBUG:"DEBUG",TRACE:"TRACE"},o="log",a=n.K.logging,s=1e6},3785:(e,t,r)=>{"use strict";r.d(t,{R:()=>c,b:()=>d});var n=r(9908),i=r(1863),o=r(860),a=r(3969),s=r(993);function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.p_.INFO;(0,n.p)(a.xV,["API/logging/".concat(c.toLowerCase(),"/called")],void 0,o.K.metrics,e),(0,n.p)(s.ET,[(0,i.t)(),t,r,c],void 0,o.K.logging,e)}function d(e){return"string"==typeof e&&Object.values(s.p_).some((t=>t===e))}},3969:(e,t,r)=>{"use strict";r.d(t,{TZ:()=>n,XG:()=>s,rs:()=>i,xV:()=>a,z_:()=>o});const n=r(860).K.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},8166:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K.pageAction},6630:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K.pageViewEvent},782:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K.pageViewTiming},6344:(e,t,r)=>{"use strict";r.d(t,{BB:()=>f,G4:()=>o,It:()=>c,No:()=>d,Qb:()=>h,TZ:()=>i,Ug:()=>a,_s:()=>s,bc:()=>l,yP:()=>u});var n=r(2614);const i=r(860).K.sessionReplay,o={RECORD:"recordReplay",PAUSE:"pauseReplay",REPLAY_RUNNING:"replayRunning",ERROR_DURING_REPLAY:"errorDuringReplay"},a=.12,s={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},c=1e6,d=64e3,u={[n.g.ERROR]:15e3,[n.g.FULL]:3e5,[n.g.OFF]:0},l={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},f=5e3,h={API:"api"}},5270:(e,t,r)=>{"use strict";r.d(t,{Aw:()=>s,CT:()=>c,SR:()=>a});var n=r(2983),i=r(7767),o=r(6154);function a(e){return!!n.hR.MO&&(0,i.V)(e)&&!0===(0,n.gD)(e,"session_trace.enabled")}function s(e){return!0===(0,n.gD)(e,"session_replay.preload")&&a(e)}function c(e,t){const r=t.correctAbsoluteTimestamp(e);return{originalTimestamp:e,correctedTimestamp:r,timestampDiff:e-r,originTime:o.WN,correctedOriginTime:t.correctedOriginTime,originTimeDiff:Math.floor(o.WN-t.correctedOriginTime)}}},3738:(e,t,r)=>{"use strict";r.d(t,{He:()=>i,Kp:()=>s,Lc:()=>d,Rz:()=>u,TZ:()=>n,bD:()=>o,d3:()=>a,jx:()=>l,uP:()=>c});const n=r(860).K.sessionTrace,i="bstResource",o="resource",a="-start",s="-end",c="fn"+a,d="fn"+s,u="pushState",l=1e3},4234:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(7836);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7767:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});var n=r(2983),i=r(6154);const o=e=>i.RI&&!0===(0,n.gD)(e,"privacy.cookies_enabled")},425:(e,t,r)=>{"use strict";r.d(t,{j:()=>O});var n=r(860),i=r(2983),o=r(9908),a=r(7836),s=r(1687),c=r(5289),d=r(6154),u=r(944),l=r(3969),f=r(384),h=r(6344);const g=["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start",h.G4.RECORD,h.G4.PAUSE,"log","wrapLogger"],p=["setErrorHandler","finished","addToTrace","addRelease"];var m=r(1863),v=r(2614),b=r(993),y=r(3785),R=r(2646),x=r(3434);function w(e,t,r,n){if("object"!=typeof t||!t||"string"!=typeof r||!r||"function"!=typeof t[r])return(0,u.R)(29);const i=function(e){return(e||a.ee).get("logger")}(e),o=(0,x.YM)(i),s=new R.y(a.P);return s.level=n.level,s.customAttributes=n.customAttributes,o.inPlace(t,[r],"wrap-logger-",s),i}function T(){const e=(0,f.pV)();g.forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let o=[];return Object.values(e.initializedAgents).forEach((e=>{e&&e.api?e.exposed&&e.api[t]&&o.push(e.api[t](...n)):(0,u.R)(38,t)})),o.length>1?o:o[0]}(t,...n)}}))}const A={};var S=r(5284);const E=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let _=!1;function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=arguments.length>2?arguments[2]:void 0,R=arguments.length>3?arguments[3]:void 0,{init:x,info:O,loader_config:N,runtime:I={loaderType:g},exposed:P=!0}=t;const j=(0,f.pV)();O||(x=j.init,O=j.info,N=j.loader_config),(0,i.xN)(e.agentIdentifier,x||{}),(0,i.aN)(e.agentIdentifier,N||{}),O.jsAttributes??={},d.bv&&(O.jsAttributes.isWorker=!0),(0,i.x1)(e.agentIdentifier,O);const C=(0,i.D0)(e.agentIdentifier),k=[O.beacon,O.errorBeacon];_||(C.proxy.assets&&(E(C.proxy.assets),k.push(C.proxy.assets)),C.proxy.beacon&&k.push(C.proxy.beacon),T(),(0,f.US)("activatedFeatures",S.B),e.runSoftNavOverSpa&&=!0===C.soft_navigations.enabled&&C.feature_flags.includes("soft_nav")),I.denyList=[...C.ajax.deny_list||[],...C.ajax.block_internal?k:[]],I.ptid=e.agentIdentifier,(0,i.V)(e.agentIdentifier,I),void 0===e.api&&(e.api=function(e,t){let f=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t||(0,s.Ak)(e,"api");const g={};var R=a.ee.get(e),x=R.get("tracer");A[e]=v.g.OFF,R.on(h.G4.REPLAY_RUNNING,(t=>{A[e]=t}));var T="api-",S=T+"ixn-";function E(t,r,n,o){const a=(0,i.Vp)(e);return null===r?delete a.jsAttributes[t]:(0,i.x1)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),N(T,n,!0,o||null===r?"session":void 0)(t,r)}function _(){}g.log=function(e){let{customAttributes:t={},level:r=b.p_.INFO}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.p)(l.xV,["API/log/called"],void 0,n.K.metrics,R),(0,y.R)(R,e,t,r)},g.wrapLogger=function(e,t){let{customAttributes:r={},level:i=b.p_.INFO}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,o.p)(l.xV,["API/wrapLogger/called"],void 0,n.K.metrics,R),w(R,e,t,{customAttributes:r,level:i})},p.forEach((e=>{g[e]=N(T,e,!0,"api")})),g.addPageAction=N(T,"addPageAction",!0,n.K.pageAction),g.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.fr)(e).customTransaction=(r||"http://custom.transaction")+t,N(T,"setPageViewName",!0)()},g.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return E(e,t,"setCustomAttribute",r);(0,u.R)(40,typeof t)}else(0,u.R)(39,typeof e)},g.setUserId=function(e){if("string"==typeof e||null===e)return E("enduser.id",e,"setUserId",!0);(0,u.R)(41,typeof e)},g.setApplicationVersion=function(e){if("string"==typeof e||null===e)return E("application.version",e,"setApplicationVersion",!1);(0,u.R)(42,typeof e)},g.start=()=>{try{(0,o.p)(l.xV,["API/start/called"],void 0,n.K.metrics,R),R.emit("manual-start-all")}catch(e){(0,u.R)(23,e)}},g[h.G4.RECORD]=function(){(0,o.p)(l.xV,["API/recordReplay/called"],void 0,n.K.metrics,R),(0,o.p)(h.G4.RECORD,[],void 0,n.K.sessionReplay,R)},g[h.G4.PAUSE]=function(){(0,o.p)(l.xV,["API/pauseReplay/called"],void 0,n.K.metrics,R),(0,o.p)(h.G4.PAUSE,[],void 0,n.K.sessionReplay,R)},g.interaction=function(e){return(new _).get("object"==typeof e?e:{})};const O=_.prototype={createTracer:function(e,t){var r={},i=this,a="function"==typeof t;return(0,o.p)(l.xV,["API/createTracer/called"],void 0,n.K.metrics,R),f||(0,o.p)(S+"tracer",[(0,m.t)(),e,r],i,n.K.spa,R),function(){if(x.emit((a?"":"no-")+"fn-start",[(0,m.t)(),i,a],r),a)try{return t.apply(this,arguments)}catch(e){const t="string"==typeof e?new Error(e):e;throw x.emit("fn-err",[arguments,this,t],r),t}finally{x.emit("fn-end",[(0,m.t)()],r)}}}};function N(e,t,r,i){return function(){return(0,o.p)(l.xV,["API/"+t+"/called"],void 0,n.K.metrics,R),i&&(0,o.p)(e+t,[(0,m.t)(),...arguments],r?null:this,i,R),r?void 0:this}}function I(){r.e(891).then(r.bind(r,8778)).then((t=>{let{setAPI:r}=t;r(e),(0,s.Ze)(e,"api")})).catch((e=>{(0,u.R)(27,e),R.abort()}))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{O[e]=N(S,e,void 0,f?n.K.softNav:n.K.spa)})),g.setCurrentRouteName=f?N(S,"routeName",void 0,n.K.softNav):N(T,"routeName",!0,n.K.spa),g.noticeError=function(t,r){"string"==typeof t&&(t=new Error(t)),(0,o.p)(l.xV,["API/noticeError/called"],void 0,n.K.metrics,R),(0,o.p)("err",[t,(0,m.t)(),!1,r,!!A[e]],void 0,n.K.jserrors,R)},d.RI?(0,c.GG)((()=>I()),!0):I(),g}(e.agentIdentifier,R,e.runSoftNavOverSpa)),void 0===e.exposed&&(e.exposed=P),_=!0}},8374:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},860:(e,t,r)=>{"use strict";r.d(t,{K:()=>n,P:()=>i});const n={ajax:"ajax",jserrors:"jserrors",logging:"logging",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.spa]:5,[n.ajax]:6,[n.sessionTrace]:7,[n.pageAction]:8,[n.softNav]:9,[n.sessionReplay]:10,[n.logging]:11}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({95:"nr-full-compressor",222:"nr-full-recorder",891:"nr-full"}[e]+"-1.263.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.263.0.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}if(!s){c=!0;var f={891:"sha512-d7roS9WdU7IareWVw0crL+Gwn1rPlPzp4BEGmGITDdhFxWCqmBF6LKSFG4JAEkKs3XDCOnrh93I/K4+pWfsSGA==",222:"sha512-RS0HunhhKxWyjerl4PQPpxEoMUWYX2tT/ILMgMoKDJicRbyr1/OGeOhc8eV3wGUOfp5aGl94fplS6uUQlzGH2Q==",95:"sha512-eko5mWQmXHOs83sLwfymAqhi1ZPnz/kmJDtpJ+CS5xicLpVgP0J+lgl1KmoVTWYYVx5vUHrmKo9HbcZI8HhlCw=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(g);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={959:0,85:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);d<a.length;d++)o=a[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.263.0.PROD"]=self["webpackChunk:NRBA-1.263.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(8374);var e=i(944),t=i(6344),r=i(9566),n=i(7836);class o{agentIdentifier;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.LA)(16);this.agentIdentifier=e,this.ee=n.ee.get(e)}#e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.R)(35,t)}addPageAction(e,t){return this.#e("addPageAction",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}finished(e){return this.#e("finished",e)}addRelease(e,t){return this.#e("addRelease",e,t)}start(e){return this.#e("start",e)}recordReplay(){return this.#e(t.G4.RECORD)}pauseReplay(){return this.#e(t.G4.PAUSE)}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}log(e,t){return this.#e("logInfo",e,t)}wrapLogger(e,t,r){return this.#e("wrapLogger",e,t,r)}}var a=i(860),s=i(2983);const c=Object.values(a.K);function d(e){const t={};return c.forEach((r=>{t[r]=function(e,t){return!0===(0,s.gD)(t,"".concat(e,".enabled"))}(r,e)})),t}var u=i(425);var l=i(1687),f=i(4234),h=i(5289),g=i(6154),p=i(5270),m=i(7767),v=i(6389);class b extends f.W{constructor(e,t,r){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=n,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,s.gD)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto?(0,l.Ak)(e,r):this.ee.on("manual-start-all",(0,v.J)((()=>{(0,l.Ak)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()})))}importAggregator(){let t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate||!this.auto)return;this.onAggregateImported=new Promise((e=>{t=e}));const n=async()=>{let n;try{if((0,m.V)(this.agentIdentifier)){const{setupAgentSession:e}=await i.e(891).then(i.bind(i,6526));n=e(this.agentIdentifier)}}catch(t){(0,e.R)(20,t),this.ee.emit("internal-error",[t]),this.featureName===a.K.sessionReplay&&this.abortHandler?.()}try{if(!this.#t(this.featureName,n))return(0,l.Ze)(this.agentIdentifier,this.featureName),void t(!1);const{lazyFeatureLoader:e}=await i.e(891).then(i.bind(i,6103)),{Aggregate:o}=await e(this.featureName,"aggregate");this.featAggregate=new o(this.agentIdentifier,this.aggregator,r),t(!0)}catch(r){(0,e.R)(34,r),this.abortHandler?.(),(0,l.Ze)(this.agentIdentifier,this.featureName,!0),t(!1),this.ee&&this.ee.abort()}};g.RI?(0,h.GG)((()=>n()),!0):n()}#t(e,t){switch(e){case a.K.sessionReplay:return(0,p.SR)(this.agentIdentifier)&&!!t;case a.K.sessionTrace:return!!t;default:return!0}}}var y=i(6630);class R extends b{static featureName=y.T;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,y.T,r),this.importAggregator()}}var x=i(4777),w=i(1478);class T extends x.J{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var o=this.getBucket(e,t,r,i);return o.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,w.$)(e,(function(e,r){t[e]=A(r,t[e])})),t}(n,o.metrics),o}merge(e,t,r,n,i){var o=this.getBucket(e,t,n,i);if(o.metrics){var a=o.metrics;a.count+=r.count,(0,w.$)(r,(function(e,t){if("count"!==e){var n=a[e],i=r[e];i&&!i.c?a[e]=A(i.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=S(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,a[e])}}))}else o.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=A(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=Object.values(this.aggregatedData[r]||{}),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function A(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=S(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function S(e){return{t:e,min:e,max:e,sos:e*e,c:1}}var E=i(384);var _=i(9908),O=i(2843),N=i(3878),I=i(782),P=i(1863);class j extends b{static featureName=I.T;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.T,r),g.RI&&((0,O.u)((()=>(0,_.p)("docHidden",[(0,P.t)()],void 0,I.T,this.ee)),!0),(0,N.sp)("pagehide",(()=>(0,_.p)("winPagehide",[(0,P.t)()],void 0,I.T,this.ee))),this.importAggregator())}}var C=i(3969);class k extends b{static featureName=C.TZ;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,C.TZ,r),this.importAggregator()}}var D=i(6774),H=i(3304);class L{constructor(e,t,r,n,i){this.name="UncaughtError",this.message="string"==typeof e?e:(0,H.A)(e),this.sourceURL=t,this.line=r,this.column=n,this.__newrelic=i}}function M(e){return V(e)?e:new L(void 0!==e?.message?e.message:e,e?.filename||e?.sourceURL,e?.lineno||e?.line,e?.colno||e?.col,e?.__newrelic)}function K(e){let t="Unhandled Promise Rejection";if(V(e?.reason))try{return e.reason.message=t+": "+e.reason.message,M(e.reason)}catch(t){return M(e.reason)}if(void 0===e.reason)return M(t);const r=M(e.reason);return r.message=t+": "+r?.message,r}function U(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new L(e.message,e.filename,e.lineno,e.colno,e.error.__newrelic);return t.name=SyntaxError.name,t}return V(e.error)?e.error:M(e)}function V(e){return e instanceof Error&&!!e.stack}class B extends b{static featureName=D.T;#r=!1;constructor(e,r){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,r,D.T,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("internal-error",(e=>{this.abortHandler&&(0,_.p)("ierr",[M(e),(0,P.t)(),!0,{},this.#r],void 0,this.featureName,this.ee)})),this.ee.on(t.G4.REPLAY_RUNNING,(e=>{this.#r=e})),g.gm.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,_.p)("err",[K(e),(0,P.t)(),!1,{unhandledPromiseRejection:1},this.#r],void 0,this.featureName,this.ee)}),(0,N.jT)(!1,this.removeOnAbort?.signal)),g.gm.addEventListener("error",(e=>{this.abortHandler&&(0,_.p)("err",[U(e),(0,P.t)(),!1,{},this.#r],void 0,this.featureName,this.ee)}),(0,N.jT)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#n,this.importAggregator()}#n(){this.removeOnAbort?.abort(),this.abortHandler=void 0}}var G=i(8990);let F=1;const z="nr@id";function W(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===g.gm?0:(0,G.I)(e,z,(function(){return F++}))}function q(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,H.A)(e).length}catch(e){return}}}var Z=i(8941),Y=i(7485);class X{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,s.oC)(this.agentIdentifier);if(!t)return null;var n=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,o=(t.trustKey||"").toString()||null;if(!n||!i)return null;var a=(0,r.ZF)(),c=(0,r.el)(),d=Date.now(),u={spanId:a,traceId:c,timestamp:d};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,c),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,d,n,i,o)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,c,d,n,i,o)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,o){if(!("function"==typeof g.gm?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa((0,H.A)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,s.gD)(this.agentIdentifier,"distributed_tracing")&&(r=(0,s.D0)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var i=(0,Y.D)(r.allowed_origins[n]);if(e.hostname===i.hostname&&e.protocol===i.protocol&&e.port===i.port){t=!0;break}}return t}isDtEnabled(){var e=(0,s.gD)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,s.gD)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,s.gD)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,s.gD)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var J=i(9300),Q=i(7295),ee=["load","error","abort","timeout"],te=ee.length,re=s.hR.REQ,ne=s.hR.XHR;class ie extends b{static featureName=J.T;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,J.T,r),this.dt=new X(e),this.handler=(e,t,r,n)=>(0,_.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};g.gm?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const r={status:t.responseStatus},n={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};oe(r,t.name),this.handler("xhr",[r,n,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,a.K.ajax)}}))}catch(e){}(0,Z.NZ)(this.ee),(0,Z.bX)(this.ee),function(e,t,r,n){function i(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=w,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){T(t,e)}),(0,N.jT)(!1)),g.lR||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,N.jT)(!1))}function o(e){this.params={method:e[0]},oe(this,e[1]),this.metrics={}}function c(t,r){var i=(0,s.oC)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var o=n.generateTracePayload(this.parsedOrigin);if(o){var a=!1;o.newrelicHeader&&(r.setRequestHeader("newrelic",o.newrelicHeader),a=!0),o.traceContextParentHeader&&(r.setRequestHeader("traceparent",o.traceContextParentHeader),o.traceContextStateHeader&&r.setRequestHeader("tracestate",o.traceContextStateHeader),a=!0),a&&(this.dt=o)}}function d(e,r){var n=this.metrics,i=e[0],o=this;if(n&&i){var a=q(i);a&&(n.txSize=a)}this.startTime=(0,P.t)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==e.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof o.end)&&o.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<te;s++)r.addEventListener(ee[s],this.listener,(0,N.jT)(!1))}function u(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function l(e,t){var r=""+W(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function f(e,t){var r=""+W(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function h(){this.endTime=(0,P.t)()}function p(e,r){r instanceof ne&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof ne&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof ne&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,P.t)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,P.t)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&g.RI&&(t=""+g.gm.location.href):e[0]&&e[0].url?t=e[0].url:g.gm?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,Y.D)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var i=n.generateTracePayload(this.parsedOrigin);if(i&&(i.newrelicHeader||i.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,i)&&(this.dt=i);else{var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),s(o.headers,i)&&(this.dt=i),e.length>1?e[1]=o:e.push(o)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function R(e,t){this.params={},this.metrics={},this.startTime=(0,P.t)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof re?r=i.url:g.gm?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),oe(this,r);var o=(""+(i&&i instanceof re&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.body=n.body,this.txSize=q(n.body)||0}function x(e,t){if(this.endTime=(0,P.t)(),this.params||(this.params={}),(0,Q.iW)(this.params))return;let n;this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);const i={txSize:this.txSize,rxSize:n,duration:(0,P.t)()-this.startTime};r("xhr",[this.params,i,this.startTime,this.endTime,"fetch"],this,a.K.ajax)}function w(e){const t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(let t=0;t<te;t++)e.removeEventListener(ee[t],this.listener,!1);t.aborted||(0,Q.iW)(t)||(n.duration=(0,P.t)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):T(this,e),n.cbTime=this.cbTime,r("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,a.K.ajax))}}function T(e,r){e.params.status=r.status;var n=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?q(e.response):"text"===r||""===r||void 0===r?q(e.responseText):void 0}(r,e.lastSize);if(n&&(e.metrics.rxSize=n),e.sameOrigin){var i=r.getResponseHeader("X-NewRelic-App-Data");i&&((0,_.p)(C.rs,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,a.K.metrics,t),e.params.cat=i.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",i),t.on("open-xhr-start",o),t.on("open-xhr-end",c),t.on("send-xhr-start",d),t.on("xhr-cb-time",u),t.on("xhr-load-added",l),t.on("xhr-load-removed",f),t.on("xhr-resolved",h),t.on("addEventListener-end",p),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",R),t.on("fn-start",v),t.on("fetch-done",x)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}function oe(e,t){var r=(0,Y.D)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var ae=i(3738);const{He:se,bD:ce,d3:de,Kp:ue,TZ:le,Lc:fe,uP:he,Rz:ge}=ae;var pe=i(2614);class me extends b{static featureName=t.TZ;#i;constructor(e,r){let n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,r,t.TZ,i),this.replayRunning=!1;try{n=JSON.parse(localStorage.getItem("".concat(pe.H3,"_").concat(pe.uh)))}catch(e){}(0,p.SR)(e)&&this.ee.on(t.G4.RECORD,(()=>this.#o())),this.#a(n)?(this.#i=n?.sessionReplayMode,this.#s()):this.importAggregator(),this.ee.on("err",(e=>{this.replayRunning&&(this.errorNoticed=!0,(0,_.p)(t.G4.ERROR_DURING_REPLAY,[e],void 0,this.featureName,this.ee))})),this.ee.on(t.G4.REPLAY_RUNNING,(e=>{this.replayRunning=e}))}#a(e){return e&&(e.sessionReplayMode===pe.g.FULL||e.sessionReplayMode===pe.g.ERROR)||(0,p.Aw)(this.agentIdentifier)}#c=!1;async#s(e){if(!this.#c){this.#c=!0;try{const{Recorder:t}=await Promise.all([i.e(891),i.e(222)]).then(i.bind(i,2496));this.recorder??=new t({mode:this.#i,agentIdentifier:this.agentIdentifier,trigger:e,ee:this.ee}),this.recorder.startRecording(),this.abortHandler=this.recorder.stopRecording}catch(e){}this.importAggregator({recorder:this.recorder,errorNoticed:this.errorNoticed})}}#o(){this.featAggregate?this.featAggregate.mode!==pe.g.FULL&&this.featAggregate.initializeRecording(pe.g.FULL,!0):(this.#i=pe.g.FULL,this.#s(t.Qb.API),this.recorder&&this.recorder.parent.mode!==pe.g.FULL&&(this.recorder.parent.mode=pe.g.FULL,this.recorder.stopRecording(),this.recorder.startRecording(),this.abortHandler=this.recorder.stopRecording))}}var ve=i(8166);class be extends b{static featureName=ve.T;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ve.T,r),this.importAggregator()}}var ye=i(993),Re=i(3785);class xe extends b{static featureName=ye.TZ;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,ye.TZ,r);const n=this.ee;this.ee.on("wrap-logger-end",(function(e){let[t]=e;const{level:r,customAttributes:i}=this;(0,Re.R)(n,t,i,r)})),this.importAggregator()}}new class extends o{constructor(t,r){super(r),g.gm?(this.sharedAggregator=new T({agentIdentifier:this.agentIdentifier}),this.features={},(0,E.bQ)(this.agentIdentifier,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(R),this.runSoftNavOverSpa=[...this.desiredFeatures].some((e=>e.featureName===a.K.softNav)),(0,u.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.R)(21)}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}run(){try{const t=d(this.agentIdentifier),r=[...this.desiredFeatures];r.sort(((e,t)=>a.P[e.featureName]-a.P[t.featureName])),r.forEach((r=>{if(!t[r.featureName]&&r.featureName!==a.K.pageViewEvent)return;if(this.runSoftNavOverSpa&&r.featureName===a.K.spa)return;if(!this.runSoftNavOverSpa&&r.featureName===a.K.softNav)return;(function(e){switch(e){case a.K.ajax:return[a.K.jserrors];case a.K.sessionTrace:return[a.K.ajax,a.K.pageViewEvent];case a.K.sessionReplay:return[a.K.sessionTrace];case a.K.pageViewTiming:return[a.K.pageViewEvent];default:return[]}})(r.featureName).every((e=>e in this.features))||(0,e.R)(36,r.featureName),this.features[r.featureName]=new r(this.agentIdentifier,this.sharedAggregator)}))}catch(t){(0,e.R)(22,t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,E.Zm)();delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator;return r.ee.get(this.agentIdentifier).abort(),!1}}}({features:[R,j,class extends b{static featureName=le;constructor(e,t){super(e,t,le,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]);if(!(0,m.V)(this.agentIdentifier))return void(0,l.x3)(this.agentIdentifier,this.featureName);const r=this.ee;let n;(0,Z.vC)(r),this.eventsEE=(0,Z.um)(r),this.eventsEE.on(he,(function(e,t){this.bstStart=(0,P.t)()})),this.eventsEE.on(fe,(function(e,t){(0,_.p)("bst",[e[0],t,this.bstStart,(0,P.t)()],void 0,a.K.sessionTrace,r)})),r.on(ge+de,(function(e){this.time=(0,P.t)(),this.startPath=location.pathname+location.hash})),r.on(ge+ue,(function(e){(0,_.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,a.K.sessionTrace,r)}));try{n=new PerformanceObserver((e=>{const t=e.getEntries();(0,_.p)(se,[t],void 0,a.K.sessionTrace,r)})),n.observe({type:ce,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:n})}},me,ie,k,be,B,xe],loaderType:"pro"})})()})();</script>
	<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0">
	<!-- Le styles -->
        <link href="//fonts.googleapis.com/css?family=Quicksand:400,300,700" rel="stylesheet" type="text/css">
		<link href="//fonts.googleapis.com/css?family=Lato:400,300,500,600,700,800" rel="stylesheet" type="text/css">

        <link href="/sb-admin-2/bower_components/bootstrap/dist/css/bootstrap.min.css" media="screen" rel="stylesheet" type="text/css">
<link href="/favicon.ico" rel="shortcut icon" type="favicon.ico">
<link href="/css/custom.style.css" media="screen" rel="stylesheet" type="text/css">
<link href="/css/style-live.css?v=1" media="screen" rel="stylesheet" type="text/css">
<link href="/sb-admin-2/bower_components/datatables-responsive/css/dataTables.responsive.css" media="screen" rel="stylesheet" type="text/css">
<link href="/sb-admin-2/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css" media="screen" rel="stylesheet" type="text/css">
<link href="/css/game-results.new.css?v=11" media="screen" rel="stylesheet" type="text/css">
<link href="/css/bootstrap-datetimepicker.css" media="screen" rel="stylesheet" type="text/css">
<link href="/css/jquery.tablesorter.css" media="screen" rel="stylesheet" type="text/css">        
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	      <style>
			  input[type="password"] {
			    font-family: Arial;
			  }
		  </style>
	    <![endif]-->

	<!-- Scripts -->
        <script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/handlebars.js"></script>
<script type="text/javascript" src="/js/typeahead-0.10.5.js"></script>
<script type="text/javascript" src="/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/bootstrap-filestyle.js"></script>
<script type="text/javascript" src="/sb-admin-2/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="/sb-admin-2/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" src="/sb-admin-2/bower_components/datatables-responsive/js/dataTables.responsive.js"></script>
<script type="text/javascript" src="/js/jquery.form.js"></script>
<script type="text/javascript" src="/js/jquery.inputmask.js"></script>
<!--[if lt IE 9]><script type="text/javascript" src="/js/html5.js"></script><![endif]-->
<script type="text/javascript" src="/js/game-results/event-scores.js?v=1"></script>
<script type="text/javascript" src="/js/game-results/component/session-select.js"></script>
<script type="text/javascript" src="/js/moment.js"></script>
<script type="text/javascript" src="/js/bootstrap-datetimepicker.js"></script>
<script type="text/javascript" src="/js/jquery.tablesorter.min.js"></script>
<script type="text/javascript" src="/js/game-results/module.js?v=2"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-48980214-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-48980214-2');
</script>

	<style>
	<!-- 
	body {
		background: none;
	}
	.site-header {
		background-color: #fff;
		border-bottom: none;
	}
	.main-content {
		background: none;
		margin-top: 0;
		margin-bottom: 50px;
	}
	.main-content-inner {
		padding: 0;
		background: none;
		border: 0;
		width: 100%;
	}
	#sidebar-img, #view-content {
		min-height: 500px;
	}
	#view-content {
		padding: 10px;
	}
	
	@media(max-width: 970px)
	{
		#sidebar-img {
			display: none;
		}
		.container {
			width: 100% !important;
		}
	}
	@media(max-width: 770px)
	{
		#results-logo {
			text-align: center;
		}
		#results-logo img {
			display: inherit;
		}
		#logo {
			display: none;
		}
	}
	-->
	</style>
</head>

<body class="page">

<div id="masthead" class="site-header" role="banner">
	<div class="container-fullwidth acbl">
		<div class="row">
			<div class="site-header-inner col-sm-12">
				<div class="row" style="box-shadow: 2px 5px 4px;">
					<div id="results-logo" class="col-sm-6">
                       <a href="https://live.acbl.org" rel="results-home"><img src="/images/ACBL_Live_Logo_orange.png" alt="ACBL Results"></a>
					</div><!-- end #logo -->
					<div id="logo" class="col-sm-6">
						<div class="text-right">
                       		<a href="https://www.acbl.org" rel="home"><img src="/images/logox2-rebranded.png" alt="American Contract Bridge Leage" height="60" width="175"></a>
                       </div>
					</div><!-- end #logo -->
			 	</div><!-- end row -->
			</div>
		</div>
	</div><!-- .container -->

</div>

<div class="main-content" id="main-content">
	<div class="content_inner">
		<div class="container acbl">
			<div class="row">
				<div class="main-content-inner">
					<div id="view-content" class="col-sm-12">
					<!--<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Notice:</strong> ACBL LIVE and MyACBL were temporarily unavailable this morning due to an outage with our hosting provider, Amazon Web Services. We apologize for any inconvenience this may have caused.
</div>-->

												<input type="hidden" id="primaryPlayerACBL" value="" />
						<input type="hidden" id="primaryPlayerFirst" value="" />
						<input type="hidden" id="primaryPlayerLast" value="" />
	            		<div id="results-menu">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#results-menu-items" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="results-menu-items">
      <ul class="nav navbar-nav">
        <li><a href="/" class="home"><span class="glyphicon glyphicon-home"></span></a></li>
        <li><a class="" href="/my-results">My<br>Results</a></li>
                        	<li><a target="_blank" href="https://tournaments.acbl.org/schedule.php?sanction=NABC242">Tournament<br>Schedule</a></li>
                        	<li><a class="" href="/bulletins/NABC242">Daily<br>Bulletins</a></li>
                                    <li><a class="" href="/tournament-overalls/NABC242">Tournament<br>Overalls</a></li>
                            <li><a class="" href="/masterpoint-winners/NABC242">Masterpoint<br>Winners</a></li>
                        	<li><a class="" href="/events/NABC242">Tournament<br>Events</a></li>
                
                                                         <li><a class="" href="/event/NABC242/VZLM/6/summary">Event<br>Summary</a></li>
                              <li><a class="" href="/event/NABC242/VZLM/6/results">Event<br>Results</a></li>
                              <li><a class="" href="/event/NABC242/VZLM/6/recap">Event<br>Recap</a></li>
                                       <li><a class="" href="/handrecords/NABC242/07211535">Hand<br>Records</a></li>
                              <li><a class="" href="/event/NABC242/VZLM/6/board-detail/W">Detailed<br>Board</a></li>
                                 </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</div><script>
var recapUrl = '/event/NABC242/VZLM/6/recap';
</script>

<h1>Jul 21, 2024 - Sunday 3:30 pm</h1>
<h2>VON ZEDTWITZ LIFE MASTER PAIRS Scores</h2><h3>Session <select id="session-select"><option  data-url='/event/NABC242/VZLM/1/scores/W/E/7'>1</option><option  data-url='/event/NABC242/VZLM/2/scores/W/E/7'>2</option><option  data-url='/event/NABC242/VZLM/3/scores/W/E/7'>3</option><option  data-url='/event/NABC242/VZLM/4/scores/W/E/7'>4</option><option  data-url='/event/NABC242/VZLM/5/scores/W/E/7'>5</option><option selected data-url='/event/NABC242/VZLM/6/scores/W/E/7'>6</option></select></h3>
<h4><span class='orange-text'>7EW</span> - Adam Wildavsky & Ron Gerard</h4>
<hr>


<div class="row">
		<div class="col-sm-8">
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr>
						<th rowspan="2">Flt</th>
						<th class="no-border" colspan="3" style="background-color: #a0c871 !important">Overall</th>
						<th class="no-border" colspan="3" style="background-color: orange !important">Section</th>
						<th rowspan="2">Section</th>
						<th rowspan="2">Carry<br>Over</th>
						<th rowspan="2">Score</th>
						 
							<th rowspan="2">%</th>
												<th rowspan="2">Adjust</th>
						<th rowspan="2">mps</th>
						<th rowspan="2">Color</th>
					</tr>
					<tr>
						<th style="background-color: #a0c871 !important">A</th>
						<th style="background-color: #a0c871 !important"></th>
						<th style="background-color: #a0c871 !important"></th>
						<th style="background-color: orange !important">A</th>
						<th style="background-color: orange !important"></th>
						<th style="background-color: orange !important"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						                        						<td>A</td>
						<td style="background-color: #a0c871 !important">5</td>
						<td style="background-color: #a0c871 !important">-</td>
						<td style="background-color: #a0c871 !important">-</td>
						<td style="background-color: orange !important">3</td>
						<td style="background-color: orange !important">-</td>
						<td style="background-color: orange !important">-</td>
						<td >583.00</td>
						<td >610.07</td>
						<td >1193.07</td>
						 
							<td >59.01</td>
												<td >0.00</td>
						<td >81.43</td>
						<td >Platinum</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="col-sm-4">
		<div id="functions">
			<div class="filter pair-select">
				<span class="blue-text">Select a Pair</span>
				<select id="pair-select" class="form-control">
										<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/1" >(W-NS) 1-Mikael Rimstedt & Zia Mahmood</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/2" >(W-NS) 2-Alex Perlin & David Yang</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/3" >(W-NS) 3-Aaron Jones & Todd Werby</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/4" >(W-NS) 4-Marusa Gold & Paul Seguineau</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/5" >(W-NS) 5-Ami Zamir & Oren Toledano</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/6" >(W-NS) 6-Daniel Boye & Richard Popper</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/7" >(W-NS) 7-Brian Platnick & Danny Sprung</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/8" >(W-NS) 8-Debbie Hargreaves & Ernie Tradewell</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/9" >(W-NS) 9-Steve Garner & Joseph Stokes</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/10" >(W-NS) 10-Ulf Nilsson & Stanley Landers</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/11" >(W-NS) 11-Allison Hunt & John Kranyak</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/12" >(W-NS) 12-Hila Levi & Adi Asulin</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/N/13" >(W-NS) 13-John McLaughlin & Zachary Grossack</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/1" >(W-EW) 1-Steve Weinstein & Eric Greco</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/2" >(W-EW) 2-Hua Yang & Yan Song</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/3" >(W-EW) 3-Daniel Korbel & William Bailey</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/4" >(W-EW) 4-Kenneth Titow & Harvinder Sidhu</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/5" >(W-EW) 5-Joshua Donn & Jan Jansma</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/6" >(W-EW) 6-Dana Berkowitz & Franco Baseggio</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/7" selected>(W-EW) 7-Adam Wildavsky & Ron Gerard</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/8" >(W-EW) 8-David Ruderman & Linda Marshall</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/9" >(W-EW) 9-Dan Jacob & Allan Graves</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/10" >(W-EW) 10-Valentin Kovachev & Dave Schouweiler</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/11" >(W-EW) 11-Avery Silverstein & Aaron Silverstein</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/12" >(W-EW) 12-Clement Maamarbachi & Ghassan Menachi</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/W/E/13" >(W-EW) 13-David Grainger & Adam Kaplan</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/1" >(X-NS) 1-Jeff Meckstroth & David Berkowitz</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/2" >(X-NS) 2-Jianfeng Luo & Xiaowen Li</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/3" >(X-NS) 3-Bruce Rogoff & Alexander Ornstein</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/4" >(X-NS) 4-Robert Schachter & Paul Meerschaert</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/5" >(X-NS) 5-David Gold & Martin Fleisher</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/6" >(X-NS) 6-Jeff Aker & Glenn Milgrim</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/7" >(X-NS) 7-Ralph Buchalter & Jordan Cohen</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/8" >(X-NS) 8-Matthew Haag & Mike Cailean</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/9" >(X-NS) 9-Soren Bilde & Soren Caspersen</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/10" >(X-NS) 10-Tim Van De Paverd & Selena Pepic</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/11" >(X-NS) 11-Tom Carmichael & Alexander Kolesnik</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/12" >(X-NS) 12-Julian Gibson & Denis Murphy</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/N/13" >(X-NS) 13-Irene Baroni & Mike Rippey</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/1" >(X-EW) 1-Vincent Demuy & John Hurd</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/2" >(X-EW) 2-Sally Wheeler & Buddy Hanby</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/3" >(X-EW) 3-Kevin Dwyer Rimstedt & Tod Moses</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/4" >(X-EW) 4-Dean Panagopoulos & Louis Glasthal</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/5" >(X-EW) 5-Andy Hung & Sartaj Hans</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/6" >(X-EW) 6-Sanna Clementsson & Simon Hult</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/7" >(X-EW) 7-Jerome Rombaut & Leo Rombaut</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/8" >(X-EW) 8-Grazyna Brewiak & Jaroslaw Piasecki</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/9" >(X-EW) 9-Boye Brogeland & Richard Zeckhauser</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/10" >(X-EW) 10-Anam Tebha & Oscar Nijssen</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/11" >(X-EW) 11-Steven Ashe & Luc Tijssen</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/12" >(X-EW) 12-James Breihan & Joe Yassi</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/X/E/13" >(X-EW) 13-Brian Senior & Nigel Bird</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/1" >(Y-NS) 1-Agustin Madala & Fredrik Nystrom</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/2" >(Y-NS) 2-Michael Hargreaves & Gordon McOrmond</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/3" >(Y-NS) 3-Michal Klukowski & Jodi Edmonds</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/4" >(Y-NS) 4-Sumner Steinfeldt & Kent Hartman</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/5" >(Y-NS) 5-Greg Hinze & Jason Feldman</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/6" >(Y-NS) 6-Robert Cappelli & Barry Bragin</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/7" >(Y-NS) 7-Peter Weichsel & James Krekorian</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/8" >(Y-NS) 8-Bob Lyon & Bob Stitt</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/9" >(Y-NS) 9-Stephen Sanborn & Kerri Sanborn</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/10" >(Y-NS) 10-Shihong You & Richard Chan</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/11" >(Y-NS) 11-Jamie Thompson & Alexander Smirnov</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/12" >(Y-NS) 12-Jeffrey Blond & David Willis</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/N/13" >(Y-NS) 13-Ron Smith & Sidney Brownstein</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/1" >(Y-EW) 1-Nabil Edgtton & Michael Whibley</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/2" >(Y-EW) 2-Drew Cavalier & Eric Xiao</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/3" >(Y-EW) 3-Nicholas Gartaganis & Judith Gartaganis</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/4" >(Y-EW) 4-Daniel Wilderman & Kenneth Zuckerberg</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/5" >(Y-EW) 5-Dror Padon & Yinghao Liu</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/6" >(Y-EW) 6-Steve Raine & Matthew Weingarten</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/7" >(Y-EW) 7-Bob Hamman & Kristen Onsgard</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/8" >(Y-EW) 8-Alan Malloy & Michael Bodell</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/9" >(Y-EW) 9-Jacek Kalita & Fernando Piedra</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/10" >(Y-EW) 10-Daniel Miles & Stefan Skorchev</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/11" >(Y-EW) 11-Richard Oshlag & Robb Gordon</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/12" >(Y-EW) 12-Arif Janjua & Stefan Thorpe</option>
											<option value='' data-url="/event/NABC242/VZLM/6/scores/Y/E/13" >(Y-EW) 13-Andrea Nilsson & Antonio Palma</option>
									</select>
			</div>
		</div>		
	</div>
</div>
<div class="row" style="margin-top: 20px">
	<div class="col-sm-12">
		<div class="table-responsive">
			<table class="tablesorter scorecard table">
				<thead>
				  <tr>
				  	<th></th>				    <th>Board</th>
				    <th>Contract</th>
				    <th>By</th>
				    <th>Plus</th>
				    <th>Minus</th>
				    <th>Matchpoints</th><th>%</th>				    <th>Vs</th>				  </tr>
				</thead>
				<tbody>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cj532dk10sk103hk542&s=caq1094d-----sq962haqj8&e=c876dq87saj754h97&w=ckdaj965432s8h1063&d=n&v=-&b=1&a=pp6hppp&nn= Brian Platnick &sn= Danny Sprung&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 6%21H = Score: 50 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B450%205%21H-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %205%21C%205%21H%204%21S%204NT%20%21D4 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21D%20%21C1%20%21H1%20%21S3%20NT2&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=1'>01</a>							</td>
							<td> 6<span class='hearts symbol contract'></span></td>
							<td>S</td>
							<td>50</td>
							<td></td>
							<td>30.5</td><td>80</td>							<td class="vs">7 - Brian Platnick - Danny Sprung</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=caq75daj7skq95h83&s=ck104d964s732haj54&e=cj86dq532sj1086hk10&w=c932dk108sa4hq9762&d=e&v=-&b=2&a=ppp1nppp&nn= Brian Platnick &sn= Danny Sprung&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 1NT = Score: -120 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B120%202NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21C%202%21D%201%21H%202%21S%202NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C5%20%21D5%20%21H6%20%21S5%20NT5&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=2'>02</a>							</td>
							<td>1NT</td>
							<td>N</td>
							<td></td>
							<td>-120</td>
							<td>21</td><td>55</td>							<td class="vs">7 - Brian Platnick - Danny Sprung</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ck872d107sj986hk65&s=cj104dakq652sa32h2&e=caq63dj94s105ha1083&w=c95d83skq74hqj974&d=s&v=e&b=3&a=p3hppp&nn= Debbie Hargreaves &sn= Ernie Tradewell&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3%21H = Score: 140 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-140%203%21H-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%202%2F1%21D%201%21S%201%2F-NT%20%21H4%2F3%20NT7%2F6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21H%20%21C6%20%21D5%20%21S6%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=3'>03</a>							</td>
							<td> 3<span class='hearts symbol contract'></span></td>
							<td>W</td>
							<td>140</td>
							<td></td>
							<td>28.5</td><td>75</td>							<td class="vs">8 - Debbie Hargreaves - Ernie Tradewell</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=caqj75da762sq2h52&s=c98dj954skj76h843&e=c10643dk103sa1083hk10&w=ck2dq8s954haqj976&d=w&v=b&b=4&a=2hppp&nn= Debbie Hargreaves &sn= Ernie Tradewell&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 2%21H = Score: 110 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-120%202NT-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%202%21D%20%21H5%20%21S6%20NT5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %202%21H%201%21S%202NT%20%21C6%20%21D5&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=4'>04</a>							</td>
							<td> 2<span class='hearts symbol contract'></span></td>
							<td>W</td>
							<td>110</td>
							<td></td>
							<td>21.5</td><td>57</td>							<td class="vs">8 - Debbie Hargreaves - Ernie Tradewell</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cak9754dj8s982haj&s=c-----dq10965sqj10hk8543&e=cq863da432s654hq7&w=cj102dk7sak73h10962&d=n&v=-&b=5&a=2cppp&nn= Steve Garner &sn= Joseph Stokes&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 2%21C = Score: 100 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B90%202%21D-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21D%201%21H%20%21C6%20%21S5%20NT6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C6%20%21D4%20%21H5%20%21S6%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=5'>05</a>							</td>
							<td> 2<span class='clubs symbol contract'></span></td>
							<td>N</td>
							<td>100</td>
							<td></td>
							<td>21.5</td><td>57</td>							<td class="vs">9 - Steve Garner - Joseph Stokes</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ca63d752s9754ha84&s=ckj10d-----sa108632hkj65&e=c754daj96sqjhq1072&w=cq982dkq10843skh93&d=e&v=e&b=6&a=p3sppp&nn= Steve Garner &sn= Joseph Stokes&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3%21S = Score: -230 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B980%206%21S-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%203%21H%206%21S%201NT%20%21D6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %201%21D%20%21C5%20%21H4%2F3%20%21S1%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=6'>06</a>							</td>
							<td> 3<span class='spades symbol contract'></span></td>
							<td>S</td>
							<td></td>
							<td>-230</td>
							<td>34.5</td><td>91</td>							<td class="vs">9 - Steve Garner - Joseph Stokes</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ckqj10865d5sjhj1084&s=c7dq107632skq62h76&e=ca432dakjs107hak32&w=c9d984sa98543hq95&d=s&v=b&b=7&a=p4sppp&nn= Ulf Nilsson &sn= Stanley Landers&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 4%21S = Score: 650 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-650%205%21S-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %20%21C6%20%21D5%20%21H4%20%21S2%20NT2 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20-%2F1%21C%202%21D%203%21H%205%21S%202NT%20%21C6%2F7&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=7'>07</a>							</td>
							<td> 4<span class='spades symbol contract'></span></td>
							<td>W</td>
							<td>650</td>
							<td></td>
							<td>26.5</td><td>70</td>							<td class="vs">10 - Ulf Nilsson - Stanley Landers</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c93dkq10985sa87h65&s=ck82dj63sq63hqj108&e=caq75d42s10942h974&w=cj1064da7skj5hak32&d=w&v=-&b=8&a=1nppp&nn= Ulf Nilsson &sn= Stanley Landers&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 1NT = Score: 150 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-100%203%21D%2A-%21S-1&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%2F2%21D%201NT%20%21C4%20%21H5%20%21S4%2F5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21C%201%21H%202%21S%20%21D5%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=8'>08</a>							</td>
							<td>1NT</td>
							<td>W</td>
							<td>150</td>
							<td></td>
							<td>36</td><td>95</td>							<td class="vs">10 - Ulf Nilsson - Stanley Landers</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c863da8sa108ha9843&s=cj752dq53skj3h752&e=ckq1094dj1072sq2hkj&w=cadk964s97654hq106&d=n&v=e&b=9&a=p3cxppp&nn= Allison Hunt &sn= John Kranyak&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3%21Cx = Score: -200 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-110%203%21D-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21H%20%21C5%20%21D4%20%21S6%20NT5%2F6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %201%21C%203%21D%201%21S%20%21H6%20NT6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=9'>09</a>							</td>
							<td> 3<span class='clubs symbol contract'></span>x</td>
							<td>E</td>
							<td></td>
							<td>-200</td>
							<td>0.5</td><td>1</td>							<td class="vs">11 - Allison Hunt - John Kranyak</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cq974djsaq1065hq65&s=cak1082da75s4hakj2&e=c3dk98643sj2h10943&w=cj65dq102sk9873h87&d=e&v=b&b=10&a=p7cppp&nn= Allison Hunt &sn= John Kranyak&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 7%21C = Score: -2140 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B2210%207%21H-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %207%21C%202%2F1%21D%207%21H%205%21S%206NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C0%20%21D5%20%21H0%20%21S2%20NT1&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=10'>10</a>							</td>
							<td> 7<span class='clubs symbol contract'></span></td>
							<td>S</td>
							<td></td>
							<td>-2140</td>
							<td>3.5</td><td>9</td>							<td class="vs">11 - Allison Hunt - John Kranyak</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cq1093d62saq105hkq7&s=cakdaq109sk43h9542&e=cj764dkj8s82hj1086&w=c852d7543sj976ha3&d=s&v=-&b=11&a=pp3nppp&nn= Hila Levi &sn= Adi Asulin&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3NT = Score: -460 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B990%206NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %205%21C%206%21D%205%21H%206%21S%206NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C2%20%21D1%20%21H2%20%21S1%20NT1&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=11'>11</a>							</td>
							<td>3NT</td>
							<td>N</td>
							<td></td>
							<td>-460</td>
							<td>33</td><td>87</td>							<td class="vs">12 - Hila Levi - Adi Asulin</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cj96dak9s876hj872&s=cak42dqj6s10943ha10&e=cq875d2sqj5hq9653&w=c103d1087543sak2hk4&d=w&v=-&b=12&a=p1nppp&nn= Hila Levi &sn= Adi Asulin&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 1NT = Score: -90 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B120%202NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%201%21D%201%21S%202NT%20%21H6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %201%21H%20%21C5%20%21D6%20%21S5%20NT5&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=12'>12</a>							</td>
							<td>1NT</td>
							<td>N</td>
							<td></td>
							<td>-90</td>
							<td>13</td><td>34</td>							<td class="vs">12 - Hila Levi - Adi Asulin</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c42dak765s53hkj72&s=cqj97dq3saq97hq108&e=cak10853d42s64ha54&w=c6dj1098skj1082h963&d=n&v=b&b=13&a=pp3nppp&nn= John McLaughlin &sn= Zachary Grossack&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3NT = Score: -600 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B140%203%21H-%21S&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%202%21D%202%2F3%21H%202NT%20%21S6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %201%21S%20%21C6%20%21D5%20%21H4%20NT4&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=13'>13</a>							</td>
							<td>3NT</td>
							<td>S</td>
							<td></td>
							<td>-600</td>
							<td>11</td><td>29</td>							<td class="vs">13 - John McLaughlin - Zachary Grossack</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c8652d9763skqjhq7&s=caq1074d104s52hj862&e=ckdqj82s9873hk1054&w=cj93dak5sa1064ha93&d=e&v=-&b=14&a=p3cxppp&nn= John McLaughlin &sn= Zachary Grossack&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3%21Cx = Score: 300 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-420%204%21S-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%20%21D4%20%21H4%20%21S3%20NT5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21D%203%21H%204%21S%202NT%20%21C6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=14'>14</a>							</td>
							<td> 3<span class='clubs symbol contract'></span>x</td>
							<td>S</td>
							<td>300</td>
							<td></td>
							<td>21.5</td><td>57</td>							<td class="vs">13 - John McLaughlin - Zachary Grossack</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cadakq108sak10hj1075&s=cj1095d-----sq753hakq94&e=c8743d97653sj86h3&w=ckq62dj42s942h862&d=s&v=-&b=15&a=7hppp&nn= Mikael Rimstedt &sn= Zia Mahmood&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 7%21H = Score: -2210 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B2220%207NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %204%21C%206%21D%207%21H%207%21S%207NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C3%20%21D1%20%21H0%20%21S0%20NT0&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=15'>15</a>							</td>
							<td> 7<span class='hearts symbol contract'></span></td>
							<td>S</td>
							<td></td>
							<td>-2210</td>
							<td>23</td><td>61</td>							<td class="vs">1 - Mikael Rimstedt - Zia Mahmood</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c54dj92sk103ha9842&s=caj9876da10s9864hq&e=c102dkq854sqj5hk103&w=ckq3d763sa72hj765&d=w&v=e&b=16&a=pp2dppp&nn= Mikael Rimstedt &sn= Zia Mahmood&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 2%21D = Score: 90 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-100%203%21C%2A-NS-1&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21C%201%21S%20%21D5%20%21H6%20NT5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %202%21D%201%21H%201%2F2NT%20%21C5%20%21S6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=16'>16</a>							</td>
							<td> 2<span class='diams symbol contract'></span></td>
							<td>E</td>
							<td>90</td>
							<td></td>
							<td>28</td><td>74</td>							<td class="vs">1 - Mikael Rimstedt - Zia Mahmood</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c108dakj74s74hkq105&s=c2dq10983saj532haj&e=c763d652sq6h87643&w=cakqj954d-----sk1098h92&d=n&v=-&b=17&a=5dppp&nn= Alex Perlin &sn= David Yang&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 5%21D = Score: -400 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B400%205%21D-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %205%21D%202%21H%203%21S%20%21C3%2F4%20NT6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21C%20%21D1%20%21H5%20%21S3%20NT3&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=17'>17</a>							</td>
							<td> 5<span class='diams symbol contract'></span></td>
							<td>N</td>
							<td></td>
							<td>-400</td>
							<td>17</td><td>45</td>							<td class="vs">2 - Alex Perlin - David Yang</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ck7dak2sqj752hj87&s=cq6532dqj74sa104h10&e=caj104d863s93ha965&w=c98d1095sk86hkq432&d=e&v=-&b=18&a=ppp2sppp&nn= Alex Perlin &sn= David Yang&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 2%21S = Score: -170 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B500%204NT%2A-EW%2F5%21H%2A-EW-3&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21C%203%21D%203%2F4%21S%20%21H5%20NT6 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %202%21H%201NT%20%21C5%20%21D4%20%21S3&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=18'>18</a>							</td>
							<td> 2<span class='spades symbol contract'></span></td>
							<td>N</td>
							<td></td>
							<td>-170</td>
							<td>23.5</td><td>62</td>							<td class="vs">2 - Alex Perlin - David Yang</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c862dk6sk42ha10742&s=cqj109daqjsa8hk865&e=ca7d985sq9753hj93&w=ck543d107432sj106hq&d=s&v=e&b=19&a=3nppp&nn= Aaron Jones &sn= Todd Werby&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3NT = Score: -400 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B420%204%21H-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %203%21C%201%21D%204%21H%201%21S%203NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C3%20%21D5%20%21H3%20%21S5%20NT4&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=19'>19</a>							</td>
							<td>3NT</td>
							<td>S</td>
							<td></td>
							<td>-400</td>
							<td>36</td><td>95</td>							<td class="vs">3 - Aaron Jones - Todd Werby</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ck6dj83sak652hkq9&s=c1075dq42sq7hj10753&e=ca82da105s10983h642&w=cqj943dk976sj4ha8&d=w&v=b&b=20&a=p2hppp&nn= Aaron Jones &sn= Todd Werby&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 2%21H = Score: -110 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-120%202NT-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21H%201%2F-%21S%20%21C4%20%21D4%20%21S7%2F6%20NT4 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%21C%203%21D%202NT%20%21H5%20%21S6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=20'>20</a>							</td>
							<td> 2<span class='hearts symbol contract'></span></td>
							<td>N</td>
							<td></td>
							<td>-110</td>
							<td>13</td><td>34</td>							<td class="vs">3 - Aaron Jones - Todd Werby</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c962dqj87543sjhaj&s=ckq3dk6sak10763hk6&e=ca1084da2sq985hq87&w=cj75d109s42h1095432&d=n&v=-&b=21&a=3nppp&nn= Marusa Gold &sn= Paul Seguineau&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 3NT = Score: -660 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B660%205NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %202%21C%205%21D%201%21H%204%2F3%21S%205NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C5%20%21D2%20%21H6%20%21S3%20NT2&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=21'>21</a>							</td>
							<td>3NT</td>
							<td>N</td>
							<td></td>
							<td>-660</td>
							<td>14.5</td><td>38</td>							<td class="vs">4 - Marusa Gold - Paul Seguineau</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ckqdaq8642saq10h109&s=ca76dj103s5hak5432&e=c1084d-----skj987642hq7&w=cj9532dk975s3hj86&d=e&v=e&b=22&a=ppp6nppp&nn= Marusa Gold &sn= Paul Seguineau&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 6NT = Score: -990 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20%2B990%206NT-NS&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %204%2F3%21C%206%21D%206%2F5%21H%202%2F1%21S%206NT &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %20%21C3%20%21D0%2F1%20%21H1%20%21S5%20NT1&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=22'>22</a>							</td>
							<td>6NT</td>
							<td>N</td>
							<td></td>
							<td>-990</td>
							<td>10.5</td><td>28</td>							<td class="vs">4 - Marusa Gold - Paul Seguineau</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cj1042dj97s95hk654&s=ck63d8642sk103h1092&e=c95dakq1053s872h73&w=caq87d-----saqj64haqj8&d=s&v=b&b=23&a=p4sppp&nn= Ami Zamir &sn= Oren Toledano&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 4%21S = Score: 680 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-1430%206%21S-W&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %20%21C3%20%21D0%2F1%20%21H2%2F3%20%21S1%2F2%20NT1%2F4 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %203%2F4%21C%206%21D%203%21H%205%2F6%21S%203NT&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=23'>23</a>							</td>
							<td> 4<span class='spades symbol contract'></span></td>
							<td>W</td>
							<td>680</td>
							<td></td>
							<td>28.5</td><td>75</td>							<td class="vs">5 - Ami Zamir - Oren Toledano</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=c9dk987652sakj102h-----&s=c432dq10s9hqj97653&e=cakj876d4s8hak1084&w=cq105daj3sq76543h2&d=w&v=-&b=24&a=pp5cppp&nn= Ami Zamir &sn= Oren Toledano&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 5%21C = Score: 400 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-300%205%21D%2A-NS-2&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %203%21D%20%21C2%20%21H4%20%21S6%20NT4 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %205%21C%202%21H%201%21S%203NT%20%21D3%2F4&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=24'>24</a>							</td>
							<td> 5<span class='clubs symbol contract'></span></td>
							<td>E</td>
							<td>400</td>
							<td></td>
							<td>28.5</td><td>75</td>							<td class="vs">5 - Ami Zamir - Oren Toledano</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=cqj942d8732s4hkq8&s=c6dakj95s1063h10754&e=ck87d1064skq52h963&w=ca1053dqsaj987haj2&d=n&v=e&b=25&a=ppp4sppp&nn= Daniel Boye &sn= Richard Popper&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 4%21S = Score: 620 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-300%205%21D%2A-NS-2&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %203%21D%201%21H%20%21C5%20%21S3%20NT5 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %201%21C%203%2F4%21S%202NT%20%21D3%2F4%20%21H6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=25'>25</a>							</td>
							<td> 4<span class='spades symbol contract'></span></td>
							<td>W</td>
							<td>620</td>
							<td></td>
							<td>36</td><td>95</td>							<td class="vs">6 - Daniel Boye - Richard Popper</td>						</tr>
											<tr>
							<td><a class="btn btn-sm btn-play" href="http://www.bridgebase.com/tools/handviewer.html?n=ckq108d1043s5hk10765&s=caj763d652sj72h43&e=c54dkq9sa9643haj9&w=c92daj87skq108hq82&d=e&v=b&b=26&a=4sppp&nn= Daniel Boye &sn= Richard Popper&en=Adam Wildavsky&wn=Ron Gerard&tbt=y&p={&lt;p&gt;&lt;a href=&quot;https://live.acbl.org&quot;&gt;ACBL Live&lt;/a&gt;&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Event:&lt;/b&gt; 2024%20Summer%20NABC%2C%20VON%20ZEDTWITZ%20LIFE%20MASTER%20PAIRS%2C%20Jul%2021%2C%202024&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Final Contract:&lt;/b&gt; 4%21S = Score: 680 &lt;b&gt;Optimal Contract:&lt;/b&gt; %20-650%205%21S-EW&lt;/p&gt;
	    		  &lt;p&gt;&lt;b&gt;Double Dummy N/S:&lt;/b&gt; %201%21C%20%21D1%20%21H4%20%21S1%20NT1 &lt;b&gt;Double Dummy E/W:&lt;/b&gt; %205%21D%203%21H%205%21S%202NT%20%21C6&lt;/p&gt;
	    		}">Play&nbsp;</a></td>							<td><a class='' href='/event/NABC242/VZLM/6/board-detail/W?board_num=26'>26</a>							</td>
							<td> 4<span class='spades symbol contract'></span></td>
							<td>E</td>
							<td>680</td>
							<td></td>
							<td>22</td><td>58</td>							<td class="vs">6 - Daniel Boye - Richard Popper</td>						</tr>
									</tbody>
			</table>
		</div>
	</div>
</div>
	            	</div>
            	</div>
            	<div style="clear:both"></div>
       		</div>
        </div> <!-- /container -->
	</div>
</div>
<div class="over-lay"></div>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"e48e6cc945","applicationID":"14218737","transactionName":"NFVVN0pRDUNWB0BQCg0fdgBMWQxeGAVXWwlOXF4VXR8GRlIKQBYWAF9FBks=","queueTime":0,"applicationTime":191,"atts":"GBJWQQJLHk0=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
<!-- Scripts -->
</html>
`;