// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";function b(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})})),t}var j="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function v(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}var _=v,w=y;function x(e){if(_===setTimeout)return setTimeout(e,0);if((_===v||!_)&&setTimeout)return _=setTimeout,setTimeout(e,0);try{return _(e,0)}catch(t){try{return _.call(null,e,0)}catch(t){return _.call(this,e,0)}}}"function"==typeof j.setTimeout&&(_=setTimeout),"function"==typeof j.clearTimeout&&(w=clearTimeout);var T,M=[],E=!1,O=-1;function P(){E&&T&&(E=!1,T.length?M=T.concat(M):O=-1,M.length&&k())}function k(){if(!E){var e=x(P);E=!0;for(var t=M.length;t;){for(T=M,M=[];++O<t;)T&&T[O].run();O=-1,t=M.length}T=null,E=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===y||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function L(e,t){this.fun=e,this.array=t}L.prototype.run=function(){this.fun.apply(null,this.array)};function R(){}var W=R,q=R,D=R,N=R,S=R,A=R,z=R;var G=j.performance||{},V=G.now||G.mozNow||G.msNow||G.oNow||G.webkitNow||function(){return(new Date).getTime()};var C=new Date;var J={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];M.push(new L(e,t)),1!==M.length||E||x(k)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:W,addListener:q,once:D,off:N,removeListener:S,removeAllListeners:A,emit:z,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*V.call(G),r=Math.floor(t),i=Math.floor(t%1*1e9);return e&&(r-=e[0],(i-=e[1])<0&&(r--,i+=1e9)),[r,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-C)/1e3}},B=require("stream");"disable"===J.env.READABLE_STREAM&&B?(module.exports=B,exports=module.exports=B.Readable,exports.Readable=B.Readable,exports.Writable=B.Writable,exports.Duplex=B.Duplex,exports.Transform=B.Transform,exports.PassThrough=B.PassThrough,exports.Stream=B):(exports=module.exports=require("./lib/_stream_readable.js"),exports.Stream=B||exports,exports.Readable=exports,exports.Writable=require("./lib/_stream_writable.js"),exports.Duplex=require("./lib/_stream_duplex.js"),exports.Transform=require("./lib/_stream_transform.js"),exports.PassThrough=require("./lib/_stream_passthrough.js"));var F=b(Object.freeze({__proto__:null})),I={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308,name:"mt19937"},H=u,K=l,Q=m.isPrimitive,U=h.isPrimitive,X=c.isPrimitive,Y=f.isPrimitive,Z=g.isPrimitive;var $=function(e,t){return H(t)?K(t,"sep")&&(e.sep=t.sep,!X(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):K(t,"objectMode")&&(e.objectMode=t.objectMode,!Q(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):K(t,"encoding")&&(e.encoding=t.encoding,!X(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):K(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!U(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):K(t,"iter")&&(e.iter=t.iter,!Z(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):K(t,"siter")&&(e.siter=t.siter,!Y(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(K(t,"name")&&(e.name=t.name),K(t,"seed")&&(e.seed=t.seed),K(t,"state")&&(e.state=t.state),K(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")};module.exports=void 0!==J&&"renderer"===J.type?require("./browser.js"):require("./node.js");var ee=b(Object.freeze({__proto__:null}))("random:streams:randu"),te=F.Readable,re=t,ie=r,ne=i,se=n,oe=e,ae=s,de=o,pe=a.factory,ue=d,le=p,me=I,he=$,ce=ee;function fe(e){var t,r;if(!(this instanceof fe))return arguments.length>0?new fe(e):new fe;if(t=ie(me),arguments.length>0&&(r=he(t,e)))throw r;return ce("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),te.call(this,t),se(this,"_destroyed",!1),oe(this,"_objectMode",t.objectMode),oe(this,"_sep",t.sep),oe(this,"_iter",t.iter),oe(this,"_siter",t.siter),se(this,"_i",0),oe(this,"_prng",pe(t)),oe(this,"PRNG",this._prng.PRNG),this}ne(fe,te),ae(fe.prototype,"seed",(function(){return this._prng.seed})),ae(fe.prototype,"seedLength",(function(){return this._prng.seedLength})),de(fe.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),ae(fe.prototype,"stateLength",(function(){return this._prng.stateLength})),ae(fe.prototype,"byteLength",(function(){return this._prng.byteLength})),oe(fe.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return ce("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),ce("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?ue(t):ue(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),oe(fe.prototype,"destroy",(function(e){var t;return this._destroyed?(ce("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,le((function(){e&&(ce("Stream was destroyed due to an error. Error: %s.",re(e)?e.message:JSON.stringify(e)),t.emit("error",e));ce("Closing the stream..."),t.emit("close")})),this)}));var ge=u,be=r,je=fe;var ve=r,ye=fe;var _e=e,we=fe,xe=function(e){var t;if(arguments.length>0){if(!ge(t=e))throw new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.");t=be(e,1)}else t={};return t.objectMode=!0,new je(t)},Te=function(e){var t;return t=arguments.length>0?ve(e,1):{},r;function r(){return new ye(t)}};_e(we,"objectMode",xe),_e(we,"factory",Te);var Me=we;export{Me as default,Te as factory,xe as objectMode};
//# sourceMappingURL=index.mjs.map
