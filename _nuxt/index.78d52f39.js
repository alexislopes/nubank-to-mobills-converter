import Te from"./Icon.cec684fe.js";import{r as B,z as Ye,A as et,B as Ue,C as xe,u as tt,D as de,E as nt,F as rt,G as st,H as at,I as it,J as ot,K as He,L as lt,d as Ce,k as ce,l as pe,m as k,M as We,N as ut,c as Ne,q as oe,O as Ve,v as Fe,o as ct,t as ye,P as dt,Q as ft,j as ht,s as je,R as pt,S as $e,T as mt,U as _t,V as gt,W as vt,X as yt,Y as bt,Z as wt,x as xt,y as kt,_ as Dt}from"./entry.4dc277f0.js";import"./config.e628284b.js";const Ct=()=>null;function Et(...n){const l=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(l);let[a,i,o={}]=n;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");o.server=o.server??!0,o.default=o.default??Ct,o.lazy=o.lazy??!1,o.immediate=o.immediate??!0;const u=tt(),D=()=>u.isHydrating?u.payload.data[a]:u.static.data[a],_=()=>D()!==void 0;(!u._asyncData[a]||!o.immediate)&&(u._asyncData[a]={data:B(D()??o.default()),pending:B(!_()),error:Ye(u.payload._errors,a),status:B("idle")});const r={...u._asyncData[a]};r.refresh=r.execute=(O={})=>{if(u._asyncDataPromises[a]){if(O.dedupe===!1)return u._asyncDataPromises[a];u._asyncDataPromises[a].cancelled=!0}if((O._initial||u.isHydrating&&O._initial!==!1)&&_())return D();r.pending.value=!0,r.status.value="pending";const S=new Promise((h,x)=>{try{h(i(u))}catch(U){x(U)}}).then(h=>{if(S.cancelled)return u._asyncDataPromises[a];let x=h;o.transform&&(x=o.transform(h)),o.pick&&(x=Ot(x,o.pick)),r.data.value=x,r.error.value=null,r.status.value="success"}).catch(h=>{if(S.cancelled)return u._asyncDataPromises[a];r.error.value=h,r.data.value=de(o.default()),r.status.value="error"}).finally(()=>{S.cancelled||(r.pending.value=!1,u.payload.data[a]=r.data.value,r.error.value&&(u.payload._errors[a]=nt(r.error.value)),delete u._asyncDataPromises[a])});return u._asyncDataPromises[a]=S,u._asyncDataPromises[a]};const g=()=>r.refresh({_initial:!0}),v=o.server!==!1&&u.payload.serverRendered;{const O=rt();if(O&&!O._nuxtOnBeforeMountCbs){O._nuxtOnBeforeMountCbs=[];const h=O._nuxtOnBeforeMountCbs;O&&(et(()=>{h.forEach(x=>{x()}),h.splice(0,h.length)}),Ue(()=>h.splice(0,h.length)))}v&&u.isHydrating&&_()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):O&&(u.payload.serverRendered&&u.isHydrating||o.lazy)&&o.immediate?O._nuxtOnBeforeMountCbs.push(g):o.immediate&&g(),o.watch&&xe(o.watch,()=>r.refresh());const S=u.hook("app:data:refresh",h=>{if(!h||h.includes(a))return r.refresh()});O&&Ue(S)}const C=Promise.resolve(u._asyncDataPromises[a]).then(()=>r);return Object.assign(C,r),C}function Ot(n,l){const a={};for(const i of l)a[i]=n[i];return a}function Me(n){return it()?(ot(n),!0):!1}function Ie(n){return typeof n=="function"?n():de(n)}const Re=typeof window<"u"&&typeof document<"u",St=Object.prototype.toString,Rt=n=>St.call(n)==="[object Object]",At=()=>{};function Tt(n,l){function a(...i){return new Promise((o,u)=>{Promise.resolve(n(()=>l.apply(this,i),{fn:l,thisArg:this,args:i})).then(o).catch(u)})}return a}const Ke=n=>n();function It(n=Ke){const l=B(!0);function a(){l.value=!1}function i(){l.value=!0}const o=(...u)=>{l.value&&n(...u)};return{isActive:at(l),pause:a,resume:i,eventFilter:o}}function Lt(n,l,a={}){const{eventFilter:i=Ke,...o}=a;return xe(n,Tt(i,l),o)}function Ft(n,l,a={}){const{eventFilter:i,...o}=a,{eventFilter:u,pause:D,resume:_,isActive:r}=It(i);return{stop:Lt(n,l,{...o,eventFilter:u}),pause:D,resume:_,isActive:r}}function Mt(n,l=1e3,a={}){const{immediate:i=!0,immediateCallback:o=!1}=a;let u=null;const D=B(!1);function _(){u&&(clearInterval(u),u=null)}function r(){D.value=!1,_()}function g(){const v=Ie(l);v<=0||(D.value=!0,o&&n(),_(),u=setInterval(n,v))}if(i&&Re&&g(),st(l)||typeof l=="function"){const v=xe(l,()=>{D.value&&Re&&g()});Me(v)}return Me(r),{isActive:D,pause:r,resume:g}}function Pt(n){var l;const a=Ie(n);return(l=a==null?void 0:a.$el)!=null?l:a}const Ae=Re?window:void 0;function De(...n){let l,a,i,o;if(typeof n[0]=="string"||Array.isArray(n[0])?([a,i,o]=n,l=Ae):[l,a,i,o]=n,!l)return At;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const u=[],D=()=>{u.forEach(v=>v()),u.length=0},_=(v,C,O,S)=>(v.addEventListener(C,O,S),()=>v.removeEventListener(C,O,S)),r=xe(()=>[Pt(l),Ie(o)],([v,C])=>{if(D(),!v)return;const O=Rt(C)?{...C}:C;u.push(...a.flatMap(S=>i.map(h=>_(v,S,h,O))))},{immediate:!0,flush:"post"}),g=()=>{r(),D()};return Me(g),g}const Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Se="__vueuse_ssr_handlers__",Nt=zt();function zt(){return Se in Oe||(Oe[Se]=Oe[Se]||{}),Oe[Se]}function Bt(n,l){return Nt[n]||l}function Ut(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const jt={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},qe="vueuse-storage";function $t(n,l,a,i={}){var o;const{flush:u="pre",deep:D=!0,listenToStorageChanges:_=!0,writeDefaults:r=!0,mergeDefaults:g=!1,shallow:v,window:C=Ae,eventFilter:O,onError:S=e=>{console.error(e)}}=i,h=(v?He:B)(l);if(!a)try{a=Bt("getDefaultStorage",()=>{var e;return(e=Ae)==null?void 0:e.localStorage})()}catch(e){S(e)}if(!a)return h;const x=Ie(l),U=Ut(x),I=(o=i.serializer)!=null?o:jt[U],{pause:Y,resume:se}=Ft(h,()=>me(h.value),{flush:u,deep:D,eventFilter:O});return C&&_&&(De(C,"storage",d),De(C,qe,H)),d(),h;function me(e){try{if(e==null)a.removeItem(n);else{const t=I.write(e),s=a.getItem(n);s!==t&&(a.setItem(n,t),C&&C.dispatchEvent(new CustomEvent(qe,{detail:{key:n,oldValue:s,newValue:t,storageArea:a}})))}}catch(t){S(t)}}function le(e){const t=e?e.newValue:a.getItem(n);if(t==null)return r&&x!==null&&a.setItem(n,I.write(x)),x;if(!e&&g){const s=I.read(t);return typeof g=="function"?g(s,x):U==="object"&&!Array.isArray(s)?{...x,...s}:s}else return typeof t!="string"?t:I.read(t)}function H(e){d(e.detail)}function d(e){if(!(e&&e.storageArea!==a)){if(e&&e.key==null){h.value=x;return}if(!(e&&e.key!==n)){Y();try{(e==null?void 0:e.newValue)!==I.write(h.value)&&(h.value=le(e))}catch(t){S(t)}finally{e?lt(se):se()}}}}}function qt(n,l={}){const a=B(!1),i=He(null);let o=0;if(Re){const u=typeof l=="function"?{onDrop:l}:l,D=_=>{var r,g;const v=Array.from((g=(r=_.dataTransfer)==null?void 0:r.files)!=null?g:[]);return i.value=v.length===0?null:v};De(n,"dragenter",_=>{var r;_.preventDefault(),o+=1,a.value=!0,(r=u.onEnter)==null||r.call(u,D(_),_)}),De(n,"dragover",_=>{var r;_.preventDefault(),(r=u.onOver)==null||r.call(u,D(_),_)}),De(n,"dragleave",_=>{var r;_.preventDefault(),o-=1,o===0&&(a.value=!1),(r=u.onLeave)==null||r.call(u,D(_),_)}),De(n,"drop",_=>{var r;_.preventDefault(),o=0,a.value=!1,(r=u.onDrop)==null||r.call(u,D(_),_)})}return{files:i,isOverDropZone:a}}function Pe(n,l,a={}){const{window:i=Ae}=a;return $t(n,l,i==null?void 0:i.localStorage,a)}const Ht={class:"join"},Wt=Ce({__name:"NovaConta",setup(n){const l=B(""),a=Pe("contas",[],{serializer:{read:i=>i?JSON.parse(i):null,write:i=>JSON.stringify(i)}});return(i,o)=>(ce(),pe("div",null,[k("div",Ht,[We(k("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>l.value=u),class:"input input-bordered join-item",placeholder:"Crie uma nova conta"},null,512),[[ut,l.value]]),k("button",{class:"btn join-item rounded-r-full",onClick:o[1]||(o[1]=u=>de(a).push(l.value))},"Criar")])]))}});var Je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ze={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,l){(function(a,i){n.exports=i()})(Je,function a(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},o=!i.document&&!!i.postMessage,u=i.IS_PAPA_WORKER||!1,D={},_=0,r={parse:function(e,t){var s=(t=t||{}).dynamicTyping||!1;if(d(s)&&(t.dynamicTypingFunction=s,s={}),t.dynamicTyping=s,t.transform=!!d(t.transform)&&t.transform,t.worker&&r.WORKERS_SUPPORTED){var c=function(){if(!r.WORKERS_SUPPORTED)return!1;var y=(J=i.URL||i.webkitURL||null,N=a.toString(),r.BLOB_URL||(r.BLOB_URL=J.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",N,")();"],{type:"text/javascript"})))),E=new i.Worker(y),J,N;return E.onmessage=Y,E.id=_++,D[E.id]=E}();return c.userStep=t.step,c.userChunk=t.chunk,c.userComplete=t.complete,c.userError=t.error,t.step=d(t.step),t.chunk=d(t.chunk),t.complete=d(t.complete),t.error=d(t.error),delete t.worker,void c.postMessage({input:e,config:t,workerId:c.id})}var p=null;return r.NODE_STREAM_INPUT,typeof e=="string"?(e=function(y){return y.charCodeAt(0)===65279?y.slice(1):y}(e),p=t.download?new C(t):new S(t)):e.readable===!0&&d(e.read)&&d(e.on)?p=new h(t):(i.File&&e instanceof File||e instanceof Object)&&(p=new O(t)),p.stream(e)},unparse:function(e,t){var s=!1,c=!0,p=",",y=`\r
`,E='"',J=E+E,N=!1,m=null,j=!1;(function(){if(typeof t=="object"){if(typeof t.delimiter!="string"||r.BAD_DELIMITERS.filter(function(f){return t.delimiter.indexOf(f)!==-1}).length||(p=t.delimiter),(typeof t.quotes=="boolean"||typeof t.quotes=="function"||Array.isArray(t.quotes))&&(s=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(N=t.skipEmptyLines),typeof t.newline=="string"&&(y=t.newline),typeof t.quoteChar=="string"&&(E=t.quoteChar),typeof t.header=="boolean"&&(c=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");m=t.columns}t.escapeChar!==void 0&&(J=t.escapeChar+E),(typeof t.escapeFormulae=="boolean"||t.escapeFormulae instanceof RegExp)&&(j=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var w=new RegExp(U(E),"g");if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return ae(null,e,N);if(typeof e[0]=="object")return ae(m||Object.keys(e[0]),e,N)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||m),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),ae(e.fields||[],e.data||[],N);throw new Error("Unable to serialize unrecognized input");function ae(f,F,G){var z="";typeof f=="string"&&(f=JSON.parse(f)),typeof F=="string"&&(F=JSON.parse(F));var Q=Array.isArray(f)&&0<f.length,V=!Array.isArray(F[0]);if(Q&&c){for(var K=0;K<f.length;K++)0<K&&(z+=p),z+=Z(f[K],K);0<F.length&&(z+=y)}for(var b=0;b<F.length;b++){var R=Q?f.length:F[b].length,M=!1,W=Q?Object.keys(F[b]).length===0:F[b].length===0;if(G&&!Q&&(M=G==="greedy"?F[b].join("").trim()==="":F[b].length===1&&F[b][0].length===0),G==="greedy"&&Q){for(var T=[],X=0;X<R;X++){var $=V?f[X]:X;T.push(F[b][$])}M=T.join("").trim()===""}if(!M){for(var L=0;L<R;L++){0<L&&!W&&(z+=p);var ie=Q&&V?f[L]:L;z+=Z(F[b][ie],L)}b<F.length-1&&(!G||0<R&&!W)&&(z+=y)}}return z}function Z(f,F){if(f==null)return"";if(f.constructor===Date)return JSON.stringify(f).slice(1,25);var G=!1;j&&typeof f=="string"&&j.test(f)&&(f="'"+f,G=!0);var z=f.toString().replace(w,J);return(G=G||s===!0||typeof s=="function"&&s(f,F)||Array.isArray(s)&&s[F]||function(Q,V){for(var K=0;K<V.length;K++)if(-1<Q.indexOf(V[K]))return!0;return!1}(z,r.BAD_DELIMITERS)||-1<z.indexOf(p)||z.charAt(0)===" "||z.charAt(z.length-1)===" ")?E+z+E:z}}};if(r.RECORD_SEP=String.fromCharCode(30),r.UNIT_SEP=String.fromCharCode(31),r.BYTE_ORDER_MARK="\uFEFF",r.BAD_DELIMITERS=["\r",`
`,'"',r.BYTE_ORDER_MARK],r.WORKERS_SUPPORTED=!o&&!!i.Worker,r.NODE_STREAM_INPUT=1,r.LocalChunkSize=10485760,r.RemoteChunkSize=5242880,r.DefaultDelimiter=",",r.Parser=I,r.ParserHandle=x,r.NetworkStreamer=C,r.FileStreamer=O,r.StringStreamer=S,r.ReadableStreamStreamer=h,i.jQuery){var g=i.jQuery;g.fn.parse=function(e){var t=e.config||{},s=[];return this.each(function(y){if(!(g(this).prop("tagName").toUpperCase()==="INPUT"&&g(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var E=0;E<this.files.length;E++)s.push({file:this.files[E],inputElem:this,instanceConfig:g.extend({},t)})}),c(),this;function c(){if(s.length!==0){var y,E,J,N,m=s[0];if(d(e.before)){var j=e.before(m.file,m.inputElem);if(typeof j=="object"){if(j.action==="abort")return y="AbortError",E=m.file,J=m.inputElem,N=j.reason,void(d(e.error)&&e.error({name:y},E,J,N));if(j.action==="skip")return void p();typeof j.config=="object"&&(m.instanceConfig=g.extend(m.instanceConfig,j.config))}else if(j==="skip")return void p()}var w=m.instanceConfig.complete;m.instanceConfig.complete=function(ae){d(w)&&w(ae,m.file,m.inputElem),p()},r.parse(m.file,m.instanceConfig)}else d(e.complete)&&e.complete()}function p(){s.splice(0,1),c()}}}function v(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var s=le(t);s.chunkSize=parseInt(s.chunkSize),t.step||t.chunk||(s.chunkSize=null),this._handle=new x(s),(this._handle.streamer=this)._config=s}).call(this,e),this.parseChunk=function(t,s){if(this.isFirstChunk&&d(this._config.beforeFirstChunk)){var c=this._config.beforeFirstChunk(t);c!==void 0&&(t=c)}this.isFirstChunk=!1,this._halted=!1;var p=this._partialLine+t;this._partialLine="";var y=this._handle.parse(p,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var E=y.meta.cursor;this._finished||(this._partialLine=p.substring(E-this._baseIndex),this._baseIndex=E),y&&y.data&&(this._rowCount+=y.data.length);var J=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(u)i.postMessage({results:y,workerId:r.WORKER_ID,finished:J});else if(d(this._config.chunk)&&!s){if(this._config.chunk(y,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);y=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(y.data),this._completeResults.errors=this._completeResults.errors.concat(y.errors),this._completeResults.meta=y.meta),this._completed||!J||!d(this._config.complete)||y&&y.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),J||y&&y.meta.paused||this._nextChunk(),y}this._halted=!0},this._sendError=function(t){d(this._config.error)?this._config.error(t):u&&this._config.error&&i.postMessage({workerId:r.WORKER_ID,error:t,finished:!1})}}function C(e){var t;(e=e||{}).chunkSize||(e.chunkSize=r.RemoteChunkSize),v.call(this,e),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(s){this._input=s,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),o||(t.onload=H(this._chunkLoaded,this),t.onerror=H(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var s=this._config.downloadRequestHeaders;for(var c in s)t.setRequestHeader(c,s[c])}if(this._config.chunkSize){var p=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+p)}try{t.send(this._config.downloadRequestBody)}catch(y){this._chunkError(y.message)}o&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(s){var c=s.getResponseHeader("Content-Range");return c===null?-1:parseInt(c.substring(c.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(s){var c=t.statusText||s;this._sendError(new Error(c))}}function O(e){var t,s;(e=e||{}).chunkSize||(e.chunkSize=r.LocalChunkSize),v.call(this,e);var c=typeof FileReader<"u";this.stream=function(p){this._input=p,s=p.slice||p.webkitSlice||p.mozSlice,c?((t=new FileReader).onload=H(this._chunkLoaded,this),t.onerror=H(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var p=this._input;if(this._config.chunkSize){var y=Math.min(this._start+this._config.chunkSize,this._input.size);p=s.call(p,this._start,y)}var E=t.readAsText(p,this._config.encoding);c||this._chunkLoaded({target:{result:E}})},this._chunkLoaded=function(p){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(p.target.result)},this._chunkError=function(){this._sendError(t.error)}}function S(e){var t;v.call(this,e=e||{}),this.stream=function(s){return t=s,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var s,c=this._config.chunkSize;return c?(s=t.substring(0,c),t=t.substring(c)):(s=t,t=""),this._finished=!t,this.parseChunk(s)}}}function h(e){v.call(this,e=e||{});var t=[],s=!0,c=!1;this.pause=function(){v.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){v.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(p){this._input=p,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){c&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):s=!0},this._streamData=H(function(p){try{t.push(typeof p=="string"?p:p.toString(this._config.encoding)),s&&(s=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(y){this._streamError(y)}},this),this._streamError=H(function(p){this._streamCleanUp(),this._sendError(p)},this),this._streamEnd=H(function(){this._streamCleanUp(),c=!0,this._streamData("")},this),this._streamCleanUp=H(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(e){var t,s,c,p=Math.pow(2,53),y=-p,E=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,J=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,N=this,m=0,j=0,w=!1,ae=!1,Z=[],f={data:[],errors:[],meta:{}};if(d(e.step)){var F=e.step;e.step=function(b){if(f=b,Q())z();else{if(z(),f.data.length===0)return;m+=b.data.length,e.preview&&m>e.preview?s.abort():(f.data=f.data[0],F(f,N))}}}function G(b){return e.skipEmptyLines==="greedy"?b.join("").trim()==="":b.length===1&&b[0].length===0}function z(){return f&&c&&(K("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+r.DefaultDelimiter+"'"),c=!1),e.skipEmptyLines&&(f.data=f.data.filter(function(b){return!G(b)})),Q()&&function(){if(!f)return;function b(M,W){d(e.transformHeader)&&(M=e.transformHeader(M,W)),Z.push(M)}if(Array.isArray(f.data[0])){for(var R=0;Q()&&R<f.data.length;R++)f.data[R].forEach(b);f.data.splice(0,1)}else f.data.forEach(b)}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function b(M,W){var T,X=e.header?{}:[];for(T=0;T<M.length;T++){var $=T,L=M[T];e.header&&($=T>=Z.length?"__parsed_extra":Z[T]),e.transform&&(L=e.transform(L,$)),L=V($,L),$==="__parsed_extra"?(X[$]=X[$]||[],X[$].push(L)):X[$]=L}return e.header&&(T>Z.length?K("FieldMismatch","TooManyFields","Too many fields: expected "+Z.length+" fields but parsed "+T,j+W):T<Z.length&&K("FieldMismatch","TooFewFields","Too few fields: expected "+Z.length+" fields but parsed "+T,j+W)),X}var R=1;return!f.data.length||Array.isArray(f.data[0])?(f.data=f.data.map(b),R=f.data.length):f.data=b(f.data,0),e.header&&f.meta&&(f.meta.fields=Z),j+=R,f}()}function Q(){return e.header&&Z.length===0}function V(b,R){return M=b,e.dynamicTypingFunction&&e.dynamicTyping[M]===void 0&&(e.dynamicTyping[M]=e.dynamicTypingFunction(M)),(e.dynamicTyping[M]||e.dynamicTyping)===!0?R==="true"||R==="TRUE"||R!=="false"&&R!=="FALSE"&&(function(W){if(E.test(W)){var T=parseFloat(W);if(y<T&&T<p)return!0}return!1}(R)?parseFloat(R):J.test(R)?new Date(R):R===""?null:R):R;var M}function K(b,R,M,W){var T={type:b,code:R,message:M};W!==void 0&&(T.row=W),f.errors.push(T)}this.parse=function(b,R,M){var W=e.quoteChar||'"';if(e.newline||(e.newline=function($,L){$=$.substring(0,1048576);var ie=new RegExp(U(L)+"([^]*?)"+U(L),"gm"),ee=($=$.replace(ie,"")).split("\r"),ue=$.split(`
`),fe=1<ue.length&&ue[0].length<ee[0].length;if(ee.length===1||fe)return`
`;for(var te=0,P=0;P<ee.length;P++)ee[P][0]===`
`&&te++;return te>=ee.length/2?`\r
`:"\r"}(b,W)),c=!1,e.delimiter)d(e.delimiter)&&(e.delimiter=e.delimiter(b),f.meta.delimiter=e.delimiter);else{var T=function($,L,ie,ee,ue){var fe,te,P,q;ue=ue||[",","	","|",";",r.RECORD_SEP,r.UNIT_SEP];for(var be=0;be<ue.length;be++){var A=ue[be],ke=0,he=0,we=0;P=void 0;for(var _e=new I({comments:ee,delimiter:A,newline:L,preview:10}).parse($),ge=0;ge<_e.data.length;ge++)if(ie&&G(_e.data[ge]))we++;else{var ve=_e.data[ge].length;he+=ve,P!==void 0?0<ve&&(ke+=Math.abs(ve-P),P=ve):P=ve}0<_e.data.length&&(he/=_e.data.length-we),(te===void 0||ke<=te)&&(q===void 0||q<he)&&1.99<he&&(te=ke,fe=A,q=he)}return{successful:!!(e.delimiter=fe),bestDelimiter:fe}}(b,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);T.successful?e.delimiter=T.bestDelimiter:(c=!0,e.delimiter=r.DefaultDelimiter),f.meta.delimiter=e.delimiter}var X=le(e);return e.preview&&e.header&&X.preview++,t=b,s=new I(X),f=s.parse(t,R,M),z(),w?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return w},this.pause=function(){w=!0,s.abort(),t=d(e.chunk)?"":t.substring(s.getCharIndex())},this.resume=function(){N.streamer._halted?(w=!1,N.streamer.parseChunk(t,!0)):setTimeout(N.resume,3)},this.aborted=function(){return ae},this.abort=function(){ae=!0,s.abort(),f.meta.aborted=!0,d(e.complete)&&e.complete(f),t=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function I(e){var t,s=(e=e||{}).delimiter,c=e.newline,p=e.comments,y=e.step,E=e.preview,J=e.fastMode,N=t=e.quoteChar===void 0||e.quoteChar===null?'"':e.quoteChar;if(e.escapeChar!==void 0&&(N=e.escapeChar),(typeof s!="string"||-1<r.BAD_DELIMITERS.indexOf(s))&&(s=","),p===s)throw new Error("Comment character same as delimiter");p===!0?p="#":(typeof p!="string"||-1<r.BAD_DELIMITERS.indexOf(p))&&(p=!1),c!==`
`&&c!=="\r"&&c!==`\r
`&&(c=`
`);var m=0,j=!1;this.parse=function(w,ae,Z){if(typeof w!="string")throw new Error("Input must be a string");var f=w.length,F=s.length,G=c.length,z=p.length,Q=d(y),V=[],K=[],b=[],R=m=0;if(!w)return ne();if(e.header&&!ae){var M=w.split(c)[0].split(s),W=[],T={},X=!1;for(var $ in M){var L=M[$];d(e.transformHeader)&&(L=e.transformHeader(L,$));var ie=L,ee=T[L]||0;for(0<ee&&(X=!0,ie=L+"_"+ee),T[L]=ee+1;W.includes(ie);)ie=ie+"_"+ee;W.push(ie)}if(X){var ue=w.split(c);ue[0]=W.join(s),w=ue.join(c)}}if(J||J!==!1&&w.indexOf(t)===-1){for(var fe=w.split(c),te=0;te<fe.length;te++){if(b=fe[te],m+=b.length,te!==fe.length-1)m+=c.length;else if(Z)return ne();if(!p||b.substring(0,z)!==p){if(Q){if(V=[],we(b.split(s)),Ee(),j)return ne()}else we(b.split(s));if(E&&E<=te)return V=V.slice(0,E),ne(!0)}}return ne()}for(var P=w.indexOf(s,m),q=w.indexOf(c,m),be=new RegExp(U(N)+U(t),"g"),A=w.indexOf(t,m);;)if(w[m]!==t)if(p&&b.length===0&&w.substring(m,m+z)===p){if(q===-1)return ne();m=q+G,q=w.indexOf(c,m),P=w.indexOf(s,m)}else if(P!==-1&&(P<q||q===-1))b.push(w.substring(m,P)),m=P+F,P=w.indexOf(s,m);else{if(q===-1)break;if(b.push(w.substring(m,q)),ve(q+G),Q&&(Ee(),j))return ne();if(E&&V.length>=E)return ne(!0)}else for(A=m,m++;;){if((A=w.indexOf(t,A+1))===-1)return Z||K.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:V.length,index:m}),ge();if(A===f-1)return ge(w.substring(m,A).replace(be,t));if(t!==N||w[A+1]!==N){if(t===N||A===0||w[A-1]!==N){P!==-1&&P<A+1&&(P=w.indexOf(s,A+1)),q!==-1&&q<A+1&&(q=w.indexOf(c,A+1));var ke=_e(q===-1?P:Math.min(P,q));if(w.substr(A+1+ke,F)===s){b.push(w.substring(m,A).replace(be,t)),w[m=A+1+ke+F]!==t&&(A=w.indexOf(t,m)),P=w.indexOf(s,m),q=w.indexOf(c,m);break}var he=_e(q);if(w.substring(A+1+he,A+1+he+G)===c){if(b.push(w.substring(m,A).replace(be,t)),ve(A+1+he+G),P=w.indexOf(s,m),A=w.indexOf(t,m),Q&&(Ee(),j))return ne();if(E&&V.length>=E)return ne(!0);break}K.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:V.length,index:m}),A++}}else A++}return ge();function we(re){V.push(re),R=m}function _e(re){var Be=0;if(re!==-1){var Le=w.substring(A+1,re);Le&&Le.trim()===""&&(Be=Le.length)}return Be}function ge(re){return Z||(re===void 0&&(re=w.substring(m)),b.push(re),m=f,we(b),Q&&Ee()),ne()}function ve(re){m=re,we(b),b=[],q=w.indexOf(c,m)}function ne(re){return{data:V,errors:K,meta:{delimiter:s,linebreak:c,aborted:j,truncated:!!re,cursor:R+(ae||0)}}}function Ee(){y(ne()),V=[],K=[]}},this.abort=function(){j=!0},this.getCharIndex=function(){return m}}function Y(e){var t=e.data,s=D[t.workerId],c=!1;if(t.error)s.userError(t.error,t.file);else if(t.results&&t.results.data){var p={abort:function(){c=!0,se(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:me,resume:me};if(d(s.userStep)){for(var y=0;y<t.results.data.length&&(s.userStep({data:t.results.data[y],errors:t.results.errors,meta:t.results.meta},p),!c);y++);delete t.results}else d(s.userChunk)&&(s.userChunk(t.results,p,t.file),delete t.results)}t.finished&&!c&&se(t.workerId,t.results)}function se(e,t){var s=D[e];d(s.userComplete)&&s.userComplete(t),s.terminate(),delete D[e]}function me(){throw new Error("Not implemented.")}function le(e){if(typeof e!="object"||e===null)return e;var t=Array.isArray(e)?[]:{};for(var s in e)t[s]=le(e[s]);return t}function H(e,t){return function(){e.apply(t,arguments)}}function d(e){return typeof e=="function"}return u&&(i.onmessage=function(e){var t=e.data;if(r.WORKER_ID===void 0&&t&&(r.WORKER_ID=t.workerId),typeof t.input=="string")i.postMessage({workerId:r.WORKER_ID,results:r.parse(t.input,t.config),finished:!0});else if(i.File&&t.input instanceof File||t.input instanceof Object){var s=r.parse(t.input,t.config);s&&i.postMessage({workerId:r.WORKER_ID,results:s,finished:!0})}}),(C.prototype=Object.create(v.prototype)).constructor=C,(O.prototype=Object.create(v.prototype)).constructor=O,(S.prototype=Object.create(S.prototype)).constructor=S,(h.prototype=Object.create(v.prototype)).constructor=h,r})})(Ze);var Vt=Ze.exports;const Kt=Qe(Vt),Ge=n=>{console.log("🚀 ~ file: usePapaparse.ts:4 ~ usePapaparse ~ file:",n.value);const l=B([]),a=B([]);return xe(n,i=>{i&&Kt.parse(i,{header:!0,skipEmptyLines:!0,complete:function(o){a.value=o.meta.fields,console.log("🚀 ~ file: usePapaparse.ts:21 ~ watch ~ rslts:",o),l.value=o.data}})}),{csv:l,header:a}},Jt=k("label",{class:"font-medium text-slate-600"},[Fe("Arraste e solte ou "),k("label",{for:"input-file",class:"text-violet-600 cursor-pointer"},"Escolha um arquivo"),Fe(" para upload")],-1),Qt=k("p",{class:"text-slate-600"},"CSV",-1),Zt=Ce({__name:"Dropzone",emits:["onDrop","onDropError"],setup(n,{emit:l}){const a=B(),i=B(),o=B(["Data","Valor","Identificador","Descrição"]),{header:u}=Ge(i),D=Ne(()=>o.value.filter(v=>u.value.includes(v)).length===o.value.length);function _(v){i.value=v==null?void 0:v[0];const{type:C}=i.value;C!=="text/csv"?l("onDropError",{message:"Tipo de arquivo inválido"}):D.value?l("onDrop",v):l("onDropError",{message:"Arquivo contém estrutura inválida"})}const{files:r,isOverDropZone:g}=qt(a,_);return(v,C)=>{const O=Te;return ce(),pe("div",{ref_key:"dropZoneRef",ref:a,class:Ve(["flex flex-col items-center gap-6 p-4 border-2 border-spacing-2 rounded-md",de(g)?"border-violet-600 bg-violet-600/10":"border-dashed border-slate-700"])},[oe(O,{name:"bi:upload",class:"text-2xl",color:"black"}),Jt,Qt,k("input",{type:"file",id:"input-file",class:"hidden",accept:".csv",onChange:C[0]||(C[0]=S=>_(S.target.files))},null,32)],2)}}}),Gt={class:"flex gap-4 bg-slate-600 p-4 rounded-md"},Xt={class:"w-full"},Yt={class:"flex justify-between"},en=["value"],tn=Ce({__name:"FileItem",props:{file:{type:Object,required:!0}},setup(n){const l=B(0),a=B(),i=()=>{l.value>=100?clearInterval(a.value):l.value+=1};return ct(()=>{a.value=setInterval(i,10)}),(o,u)=>{const D=Te;return ce(),pe("div",Gt,[oe(D,{name:"teenyicons:spreadsheet-outline",class:"text-4xl"}),k("div",Xt,[k("div",null,[k("p",null,ye(n.file.name),1),k("div",Yt,[k("span",null,ye(n.file.size)+" B",1),k("p",null,ye(de(l))+"%",1)])]),k("progress",{class:"progress",value:de(l),max:"100"},null,8,en)])])}}}),nn={class:"flex hover:shadow-lg w-fit py-2 px-3 rounded-full gap-4 items-center"},rn=["src"],sn={class:"relative flex flex-col"},an=k("span",{class:"text-[8px] text-center mb-[2px]"},"Developed with 💘 by",-1),on=["href"],ln={class:"text-lg hover:underline !leading-3"},un=["href"],cn={class:"text-sm hover:underline"},dn=Ce({__name:"ProfileBadge",props:{github:{default:"alexislopes"},socials:{default:()=>[{icon:"tabler:brand-x",handler:"alexislxpes",link:"https://twitter.com/alexislxpes"},{icon:"mdi:instagram",handler:"alexislopes",link:"https://www.instagram.com/alexislopes/"}]},website:{default:"https://alexislopes.github.io/alexisme/"}},async setup(n){let l,a;const i=n,{github:o,socials:u,website:D}=dt(i),_=B(0),{data:r}=([l,a]=ft(()=>Et("user",()=>$fetch("https://api.github.com/users/"+o.value))),l=await l,a(),l);Mt(()=>{_.value++,_.value+1>u.value.length&&(_.value=0)},3e3);const g=Ne(()=>u.value[_.value]);return(v,C)=>{const O=Te;return ce(),pe("div",nn,[k("img",{class:"rounded-full w-[45px] h-[45px]",src:de(r).avatar_url,alt:""},null,8,rn),k("div",sn,[an,k("a",{href:de(D),target:"_blank",class:"flex items-center gap-2"},[k("p",ln,ye(de(r).name),1),oe(O,{name:"fa6-solid:angle-right",class:"!text-[11px]"})],8,on),k("a",{href:g.value.link,target:"_blank",class:"pt-[5px]"},[(ce(),pe("div",{key:_.value,class:"flex items-center gap-1"},[oe(O,{name:g.value.icon},null,8,["name"]),k("p",cn,ye(g.value.handler),1)]))],8,un)])])}}});var Xe={exports:{}};(function(n,l){(function(a,i){n.exports=i()})(Je,function(){return function a(i,o,u){var D=window,_="application/octet-stream",r=u||_,g=i,v=!o&&!u&&g,C=document.createElement("a"),O=function(d){return String(d)},S=D.Blob||D.MozBlob||D.WebKitBlob||O,h=o||"download",x,U;if(S=S.call?S.bind(D):Blob,String(this)==="true"&&(g=[g,r],r=g[0],g=g[1]),v&&v.length<2048&&(h=v.split("/").pop().split("?")[0],C.href=v,C.href.indexOf(v)!==-1)){var I=new XMLHttpRequest;return I.open("GET",v,!0),I.responseType="blob",I.onload=function(d){a(d.target.response,h,_)},setTimeout(function(){I.send()},0),I}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(g))if(g.length>1024*1024*1.999&&S!==O)g=le(g),r=g.type||_;else return navigator.msSaveBlob?navigator.msSaveBlob(le(g),h):H(g);else if(/([\x80-\xff])/.test(g)){var Y=0,se=new Uint8Array(g.length),me=se.length;for(Y;Y<me;++Y)se[Y]=g.charCodeAt(Y);g=new S([se],{type:r})}x=g instanceof S?g:new S([g],{type:r});function le(d){var e=d.split(/[:;,]/),t=e[1],s=e[2]=="base64"?atob:decodeURIComponent,c=s(e.pop()),p=c.length,y=0,E=new Uint8Array(p);for(y;y<p;++y)E[y]=c.charCodeAt(y);return new S([E],{type:t})}function H(d,e){if("download"in C)return C.href=d,C.setAttribute("download",h),C.className="download-js-link",C.innerHTML="downloading...",C.style.display="none",document.body.appendChild(C),setTimeout(function(){C.click(),document.body.removeChild(C),e===!0&&setTimeout(function(){D.URL.revokeObjectURL(C.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(d)&&(d="data:"+d.replace(/^data:([\w\/\-\+]+)/,_)),window.open(d)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=d),!0;var t=document.createElement("iframe");document.body.appendChild(t),!e&&/^data:/.test(d)&&(d="data:"+d.replace(/^data:([\w\/\-\+]+)/,_)),t.src=d,setTimeout(function(){document.body.removeChild(t)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(x,h);if(D.URL)H(D.URL.createObjectURL(x),!0);else{if(typeof x=="string"||x.constructor===O)try{return H("data:"+r+";base64,"+D.btoa(x))}catch{return H("data:"+r+","+encodeURIComponent(x))}U=new FileReader,U.onload=function(d){H(this.result)},U.readAsDataURL(x)}return!0}})})(Xe);var fn=Xe.exports;const hn=Qe(fn),ze=n=>(xt("data-v-9100721d"),n=n(),kt(),n),pn={class:"flex items-center justify-center h-screen flex-col gap-6"},mn=["onClick"],_n={class:"flex justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700 border-r border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"},gn=["value"],vn={id:"my_modal_1",class:"modal"},yn={class:"modal-box flex justify-between items-center"},bn=ze(()=>k("form",{method:"dialog"},[k("button",{class:"btn btn-circle btn-outline btn-sm"},[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])])],-1)),wn={class:"flex gap-4"},xn={class:"flex flex-col"},kn={class:"bg-[#fefefe] rounded-md p-5 flex gap-4 flex-col"},Dn=ze(()=>k("h1",{class:"text-xl font-medium text-slate-600"},"Adicione novas transferências",-1)),Cn=["disabled"],En={class:"label cursor-pointer flex gap-2"},On=["value"],Sn={class:"label-text w-full !text-start"},Rn={onclick:"my_modal_1.showModal()",class:"btn btn-ghost w-full"},An=ze(()=>k("div",{class:"stats shadow"},null,-1)),Tn={class:"absolute top-0 right-0 p-8"},In={key:0,class:"toast"},Ln={class:"alert alert-error"},Fn=Ce({__name:"index",setup(n){ht({title:"Konverti by Alexis Lopes",link:[{rel:"icon",type:"image/png",href:"/favicon.ico"}]});const l=B(""),a=B(),i=B(""),{csv:o}=Ge(a),u=Pe("contas",[],{serializer:{read:h=>h?JSON.parse(h):null,write:h=>JSON.stringify(h)}}),D=(h="")=>(h=new Date(...h.split("/").map(x=>Number(x)).reverse()),new Date(h.setMonth(h.getMonth()-1))),_=B({start:new Date,end:new Date}),r=B([{key:"today",highlight:{color:"#7c3aed",fillMode:"solid"},dates:new Date}]),g=B({hours:0,minutes:0,seconds:0,milliseconds:0}),v=Ne(()=>o.value.filter(h=>{const x=new Date(D(h.Data));return x.getTime()>=_.value.start.getTime()&&x.getTime()<=_.value.end.getTime()})),C=Pe("lastImport",0),O=()=>{const h=["Data","Descrição","Valor","Conta","Categoria"],x=v==null?void 0:v.value.map(I=>({...I,Conta:l.value})).map(I=>h.map(Y=>`"${I[Y]}"`)),U=[h.map(I=>`"${I}"`),...x].map(I=>I.join(";")).join(`\r
`);hn(U,`NUB2MOB Converter for ${l.value} at ${new Date().toLocaleDateString(navigator.language,{day:"numeric",month:"2-digit",year:"2-digit",hour:"numeric",minute:"numeric"})}.csv`,"text/csv"),C.value=new Date().getTime()},S=h=>{i.value=h.message};return xe(o,h=>{const x=[...new Set(h.map(U=>D(U.Data).getTime()))];_.value={start:new Date(Math.min(...x)),end:new Date(Math.max(...x))}}),xe(i,h=>{h&&setTimeout(()=>{i.value=""},3e3)}),(h,x)=>{var H;const U=Te,I=vt,Y=Wt,se=Zt,me=tn,le=dn;return ce(),pe("div",pn,[oe(I,{isDark:"",modelValue:_.value,"onUpdate:modelValue":x[0]||(x[0]=d=>_.value=d),modelModifiers:{range:!0},attributes:r.value,"max-date":new Date,color:"indigo",rules:g.value,disabled:!v.value.length},{default:je(({togglePopover:d,inputValue:e,inputEvents:t})=>[k("div",{class:"flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden cursor-pointer",onClick:d},[k("button",_n,[oe(U,{name:"octicon:calendar-16",class:"text-xl"})]),k("input",yt({readonly:"",value:`${e.start} - ${e.end}`},bt(t,!0),{class:"flex-grow px-2 py-1 bg-white dark:bg-gray-700 cursor-pointer"}),null,16,gn)],8,mn)]),_:1},8,["modelValue","attributes","max-date","rules","disabled"]),k("dialog",vn,[k("div",yn,[oe(Y),bn])]),k("div",wn,[k("div",xn,[k("div",kn,[Dn,oe(se,{onOnDrop:x[1]||(x[1]=d=>a.value=d[0]),onOnDropError:S,class:"w-full"}),a.value?(ce(),pt(me,{key:0,file:a.value},null,8,["file"])):$e("",!0),k("div",{class:Ve(a.value||!l.value?"tooltip":""),"data-tip":"Você precisa importar o arquivo de transferências e selecionar uma conta."},[k("button",{disabled:!((H=a.value)!=null&&H.name)||!l.value,class:"btn btn-block btn-primary",onClick:O}," converter "+ye(v.value.length)+" entradas",9,Cn)],2)])]),k("div",null,[(ce(!0),pe(mt,null,_t(de(u),d=>(ce(),pe("div",{class:"form-control",key:d},[k("label",En,[We(k("input",{type:"radio",name:"radio-10",class:"radio checked:bg-red-500","onUpdate:modelValue":x[2]||(x[2]=e=>l.value=e),value:d},null,8,On),[[wt,l.value]]),k("span",Sn,ye(d),1)])]))),128)),k("button",Rn,[oe(U,{name:"octicon:plus-16",class:"text-xl"}),Fe(" Nova conta ")])]),An]),k("div",Tn,[oe(le)]),oe(gt,{name:"slide-fade"},{default:je(()=>[i.value?(ce(),pe("div",In,[k("div",Ln,[k("span",null,ye(i.value),1)])])):$e("",!0)]),_:1})])}}});const zn=Dt(Fn,[["__scopeId","data-v-9100721d"]]);export{zn as default};