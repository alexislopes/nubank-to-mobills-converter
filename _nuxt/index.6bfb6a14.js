import Ie from"./Icon.05f9e119.js";import{r as V,z as Ge,A as Xe,B as Pe,C as Ce,u as Ye,D as pe,E as et,F as tt,G as nt,H as rt,I as it,J as st,K as qe,L as at,d as De,k as ce,l as de,m as x,M as Ve,N as ot,q as le,O as He,v as Me,o as lt,t as xe,P as ut,c as Re,j as ct,s as dt,Q as Ue,R as je,S as ft,T as ht,U as pt,V as mt}from"./entry.8a614d08.js";import"./config.e1c52533.js";const gt=()=>null;function _t(...n){const d=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(d);let[s,a,l={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof a!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");l.server=l.server??!0,l.default=l.default??gt,l.lazy=l.lazy??!1,l.immediate=l.immediate??!0;const o=Ye(),b=()=>o.isHydrating?o.payload.data[s]:o.static.data[s],k=()=>b()!==void 0;(!o._asyncData[s]||!l.immediate)&&(o._asyncData[s]={data:V(b()??l.default()),pending:V(!k()),error:Ge(o.payload._errors,s),status:V("idle")});const r={...o._asyncData[s]};r.refresh=r.execute=(S={})=>{if(o._asyncDataPromises[s]){if(S.dedupe===!1)return o._asyncDataPromises[s];o._asyncDataPromises[s].cancelled=!0}if((S._initial||o.isHydrating&&S._initial!==!1)&&k())return b();r.pending.value=!0,r.status.value="pending";const g=new Promise((u,C)=>{try{u(a(o))}catch(A){C(A)}}).then(u=>{if(g.cancelled)return o._asyncDataPromises[s];let C=u;l.transform&&(C=l.transform(u)),l.pick&&(C=vt(C,l.pick)),r.data.value=C,r.error.value=null,r.status.value="success"}).catch(u=>{if(g.cancelled)return o._asyncDataPromises[s];r.error.value=u,r.data.value=pe(l.default()),r.status.value="error"}).finally(()=>{g.cancelled||(r.pending.value=!1,o.payload.data[s]=r.data.value,r.error.value&&(o.payload._errors[s]=et(r.error.value)),delete o._asyncDataPromises[s])});return o._asyncDataPromises[s]=g,o._asyncDataPromises[s]};const m=()=>r.refresh({_initial:!0}),D=l.server!==!1&&o.payload.serverRendered;{const S=tt();if(S&&!S._nuxtOnBeforeMountCbs){S._nuxtOnBeforeMountCbs=[];const u=S._nuxtOnBeforeMountCbs;S&&(Xe(()=>{u.forEach(C=>{C()}),u.splice(0,u.length)}),Pe(()=>u.splice(0,u.length)))}D&&o.isHydrating&&k()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):S&&(o.payload.serverRendered&&o.isHydrating||l.lazy)&&l.immediate?S._nuxtOnBeforeMountCbs.push(m):l.immediate&&m(),l.watch&&Ce(l.watch,()=>r.refresh());const g=o.hook("app:data:refresh",u=>{if(!u||u.includes(s))return r.refresh()});S&&Pe(g)}const O=Promise.resolve(o._asyncDataPromises[s]).then(()=>r);return Object.assign(O,r),O}function vt(n,d){const s={};for(const a of d)s[a]=n[a];return s}function Ne(n){return it()?(st(n),!0):!1}function Le(n){return typeof n=="function"?n():pe(n)}const Ae=typeof window<"u"&&typeof document<"u",yt=Object.prototype.toString,bt=n=>yt.call(n)==="[object Object]",wt=()=>{};function kt(n,d){function s(...a){return new Promise((l,o)=>{Promise.resolve(n(()=>d.apply(this,a),{fn:d,thisArg:this,args:a})).then(l).catch(o)})}return s}const We=n=>n();function xt(n=We){const d=V(!0);function s(){d.value=!1}function a(){d.value=!0}const l=(...o)=>{d.value&&n(...o)};return{isActive:rt(d),pause:s,resume:a,eventFilter:l}}function Ct(n,d,s={}){const{eventFilter:a=We,...l}=s;return Ce(n,kt(a,d),l)}function Dt(n,d,s={}){const{eventFilter:a,...l}=s,{eventFilter:o,pause:b,resume:k,isActive:r}=xt(a);return{stop:Ct(n,d,{...l,eventFilter:o}),pause:b,resume:k,isActive:r}}function Et(n,d=1e3,s={}){const{immediate:a=!0,immediateCallback:l=!1}=s;let o=null;const b=V(!1);function k(){o&&(clearInterval(o),o=null)}function r(){b.value=!1,k()}function m(){const D=Le(d);D<=0||(b.value=!0,l&&n(),k(),o=setInterval(n,D))}if(a&&Ae&&m(),nt(d)||typeof d=="function"){const D=Ce(d,()=>{b.value&&Ae&&m()});Ne(D)}return Ne(r),{isActive:b,pause:r,resume:m}}function Ot(n){var d;const s=Le(n);return(d=s==null?void 0:s.$el)!=null?d:s}const Te=Ae?window:void 0;function ke(...n){let d,s,a,l;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,a,l]=n,d=Te):[d,s,a,l]=n,!d)return wt;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const o=[],b=()=>{o.forEach(D=>D()),o.length=0},k=(D,O,S,g)=>(D.addEventListener(O,S,g),()=>D.removeEventListener(O,S,g)),r=Ce(()=>[Ot(d),Le(l)],([D,O])=>{if(b(),!D)return;const S=bt(O)?{...O}:O;o.push(...s.flatMap(g=>a.map(u=>k(D,g,u,S))))},{immediate:!0,flush:"post"}),m=()=>{r(),b()};return Ne(m),m}const Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Se="__vueuse_ssr_handlers__",St=Rt();function Rt(){return Se in Oe||(Oe[Se]=Oe[Se]||{}),Oe[Se]}function At(n,d){return St[n]||d}function Tt(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const It={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},$e="vueuse-storage";function Lt(n,d,s,a={}){var l;const{flush:o="pre",deep:b=!0,listenToStorageChanges:k=!0,writeDefaults:r=!0,mergeDefaults:m=!1,shallow:D,window:O=Te,eventFilter:S,onError:g=e=>{console.error(e)}}=a,u=(D?qe:V)(d);if(!s)try{s=At("getDefaultStorage",()=>{var e;return(e=Te)==null?void 0:e.localStorage})()}catch(e){g(e)}if(!s)return u;const C=Le(d),A=Tt(C),H=(l=a.serializer)!=null?l:It[A],{pause:ie,resume:se}=Dt(u,()=>me(u.value),{flush:o,deep:b,eventFilter:S});return O&&k&&(ke(O,"storage",_),ke(O,$e,U)),_(),u;function me(e){try{if(e==null)s.removeItem(n);else{const t=H.write(e),i=s.getItem(n);i!==t&&(s.setItem(n,t),O&&O.dispatchEvent(new CustomEvent($e,{detail:{key:n,oldValue:i,newValue:t,storageArea:s}})))}}catch(t){g(t)}}function P(e){const t=e?e.newValue:s.getItem(n);if(t==null)return r&&C!==null&&s.setItem(n,H.write(C)),C;if(!e&&m){const i=H.read(t);return typeof m=="function"?m(i,C):A==="object"&&!Array.isArray(i)?{...C,...i}:i}else return typeof t!="string"?t:H.read(t)}function U(e){_(e.detail)}function _(e){if(!(e&&e.storageArea!==s)){if(e&&e.key==null){u.value=C;return}if(!(e&&e.key!==n)){ie();try{(e==null?void 0:e.newValue)!==H.write(u.value)&&(u.value=P(e))}catch(t){g(t)}finally{e?at(se):se()}}}}}function Ft(n,d={}){const s=V(!1),a=qe(null);let l=0;if(Ae){const o=typeof d=="function"?{onDrop:d}:d,b=k=>{var r,m;const D=Array.from((m=(r=k.dataTransfer)==null?void 0:r.files)!=null?m:[]);return a.value=D.length===0?null:D};ke(n,"dragenter",k=>{var r;k.preventDefault(),l+=1,s.value=!0,(r=o.onEnter)==null||r.call(o,b(k),k)}),ke(n,"dragover",k=>{var r;k.preventDefault(),(r=o.onOver)==null||r.call(o,b(k),k)}),ke(n,"dragleave",k=>{var r;k.preventDefault(),l-=1,l===0&&(s.value=!1),(r=o.onLeave)==null||r.call(o,b(k),k)}),ke(n,"drop",k=>{var r;k.preventDefault(),l=0,s.value=!1,(r=o.onDrop)==null||r.call(o,b(k),k)})}return{files:a,isOverDropZone:s}}function ze(n,d,s={}){const{window:a=Te}=s;return Lt(n,d,a==null?void 0:a.localStorage,s)}const Mt={class:"join"},Nt=De({__name:"NovaConta",setup(n){const d=V(""),s=ze("contas",[],{serializer:{read:a=>a?JSON.parse(a):null,write:a=>JSON.stringify(a)}});return(a,l)=>(ce(),de("div",null,[x("div",Mt,[Ve(x("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>d.value=o),class:"input input-bordered join-item",placeholder:"Crie uma nova conta"},null,512),[[ot,d.value]]),x("button",{class:"btn join-item rounded-r-full",onClick:l[1]||(l[1]=o=>pe(s).push(d.value))},"Criar")])]))}}),zt=x("label",{class:"font-medium text-slate-600"},[Me("Arraste e solte ou "),x("label",{for:"input-file",class:"text-violet-600 cursor-pointer"},"Escolha um arquivo"),Me(" para upload")],-1),Bt=x("p",{class:"text-slate-600"},"CSV",-1),Pt=De({__name:"Dropzone",emits:["onDrop"],setup(n,{emit:d}){const s=V();function a(o){d("onDrop",o)}const{isOverDropZone:l}=Ft(s,a);return(o,b)=>{const k=Ie;return ce(),de("div",{ref_key:"dropZoneRef",ref:s,class:He(["flex flex-col items-center gap-6 p-4 border-2 border-spacing-2 rounded-md",pe(l)?"border-violet-600 bg-violet-600/10":"border-dashed border-slate-700"])},[le(k,{name:"bi:upload",class:"text-2xl",color:"black"}),zt,Bt,x("input",{type:"file",id:"input-file",class:"hidden",onChange:b[0]||(b[0]=r=>a(r.target.files))},null,32)],2)}}}),Ut={class:"flex gap-4 bg-slate-600 p-4 rounded-md"},jt={class:"w-full"},$t={class:"flex justify-between"},qt=["value"],Vt=De({__name:"FileItem",props:{file:{type:Object,required:!0}},setup(n){const d=V(0),s=V(),a=()=>{d.value>=100?clearInterval(s.value):d.value+=1};return lt(()=>{s.value=setInterval(a,10)}),(l,o)=>{const b=Ie;return ce(),de("div",Ut,[le(b,{name:"teenyicons:spreadsheet-outline",class:"text-4xl"}),x("div",jt,[x("div",null,[x("p",null,xe(n.file.name),1),x("div",$t,[x("span",null,xe(n.file.size)+" B",1),x("p",null,xe(pe(d))+"%",1)])]),x("progress",{class:"progress",value:pe(d),max:"100"},null,8,qt)])])}}}),Ht={class:"flex hover:shadow-md w-fit py-2 px-4 rounded-full gap-4 items-center"},Wt=["src"],Kt={class:"relative"},Jt={href:"https://alexislopes.github.io/alexisme/",target:"_blank",class:"flex items-center gap-2"},Qt={class:"text-lg hover:underline"},Zt=["href"],Gt={class:"text-sm hover:underline"},Xt=De({__name:"ProfileBadge",async setup(n){let d,s;const a=V(0),l=V([{icon:"tabler:brand-x",handler:"panzeeh",link:"https://twitter.com/panzeeh"},{icon:"mdi:instagram",handler:"alexislopes",link:"https://www.instagram.com/alexislopes/"}]),{data:o}=([d,s]=ut(()=>_t("user",()=>$fetch("https://api.github.com/users/alexislopes"))),d=await d,s(),d);Et(()=>{a.value++,a.value+1>l.value.length&&(a.value=0),console.log(a.value)},3e3);const b=Re(()=>l.value[a.value]);return(k,r)=>{const m=Ie;return ce(),de("div",Ht,[x("img",{class:"rounded-full w-[40px] h-[40px]",src:pe(o).avatar_url,alt:""},null,8,Wt),x("div",Kt,[x("a",Jt,[x("p",Qt,xe(pe(o).name),1),le(m,{name:"fa6-solid:angle-right",class:"!text-[11px]"})]),x("a",{href:b.value.link,target:"_blank"},[(ce(),de("div",{key:a.value,class:"flex items-center gap-1"},[le(m,{name:b.value.icon},null,8,["name"]),x("p",Gt,xe(b.value.handler),1)]))],8,Zt)])])}}});var Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Je(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qe={exports:{}};(function(n,d){(function(s,a){n.exports=a()})(Ke,function(){return function s(a,l,o){var b=window,k="application/octet-stream",r=o||k,m=a,D=!l&&!o&&m,O=document.createElement("a"),S=function(_){return String(_)},g=b.Blob||b.MozBlob||b.WebKitBlob||S,u=l||"download",C,A;if(g=g.call?g.bind(b):Blob,String(this)==="true"&&(m=[m,r],r=m[0],m=m[1]),D&&D.length<2048&&(u=D.split("/").pop().split("?")[0],O.href=D,O.href.indexOf(D)!==-1)){var H=new XMLHttpRequest;return H.open("GET",D,!0),H.responseType="blob",H.onload=function(_){s(_.target.response,u,k)},setTimeout(function(){H.send()},0),H}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(m))if(m.length>1024*1024*1.999&&g!==S)m=P(m),r=m.type||k;else return navigator.msSaveBlob?navigator.msSaveBlob(P(m),u):U(m);else if(/([\x80-\xff])/.test(m)){var ie=0,se=new Uint8Array(m.length),me=se.length;for(ie;ie<me;++ie)se[ie]=m.charCodeAt(ie);m=new g([se],{type:r})}C=m instanceof g?m:new g([m],{type:r});function P(_){var e=_.split(/[:;,]/),t=e[1],i=e[2]=="base64"?atob:decodeURIComponent,c=i(e.pop()),h=c.length,v=0,E=new Uint8Array(h);for(v;v<h;++v)E[v]=c.charCodeAt(v);return new g([E],{type:t})}function U(_,e){if("download"in O)return O.href=_,O.setAttribute("download",u),O.className="download-js-link",O.innerHTML="downloading...",O.style.display="none",document.body.appendChild(O),setTimeout(function(){O.click(),document.body.removeChild(O),e===!0&&setTimeout(function(){b.URL.revokeObjectURL(O.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(_)&&(_="data:"+_.replace(/^data:([\w\/\-\+]+)/,k)),window.open(_)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=_),!0;var t=document.createElement("iframe");document.body.appendChild(t),!e&&/^data:/.test(_)&&(_="data:"+_.replace(/^data:([\w\/\-\+]+)/,k)),t.src=_,setTimeout(function(){document.body.removeChild(t)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(C,u);if(b.URL)U(b.URL.createObjectURL(C),!0);else{if(typeof C=="string"||C.constructor===S)try{return U("data:"+r+";base64,"+b.btoa(C))}catch{return U("data:"+r+","+encodeURIComponent(C))}A=new FileReader,A.onload=function(_){U(this.result)},A.readAsDataURL(C)}return!0}})})(Qe);var Yt=Qe.exports;const en=Je(Yt);var Ze={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,d){(function(s,a){n.exports=a()})(Ke,function s(){var a=typeof self<"u"?self:typeof window<"u"?window:a!==void 0?a:{},l=!a.document&&!!a.postMessage,o=a.IS_PAPA_WORKER||!1,b={},k=0,r={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;if(_(i)&&(t.dynamicTypingFunction=i,i={}),t.dynamicTyping=i,t.transform=!!_(t.transform)&&t.transform,t.worker&&r.WORKERS_SUPPORTED){var c=function(){if(!r.WORKERS_SUPPORTED)return!1;var v=(Q=a.URL||a.webkitURL||null,z=s.toString(),r.BLOB_URL||(r.BLOB_URL=Q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",z,")();"],{type:"text/javascript"})))),E=new a.Worker(v),Q,z;return E.onmessage=ie,E.id=k++,b[E.id]=E}();return c.userStep=t.step,c.userChunk=t.chunk,c.userComplete=t.complete,c.userError=t.error,t.step=_(t.step),t.chunk=_(t.chunk),t.complete=_(t.complete),t.error=_(t.error),delete t.worker,void c.postMessage({input:e,config:t,workerId:c.id})}var h=null;return r.NODE_STREAM_INPUT,typeof e=="string"?(e=function(v){return v.charCodeAt(0)===65279?v.slice(1):v}(e),h=t.download?new O(t):new g(t)):e.readable===!0&&_(e.read)&&_(e.on)?h=new u(t):(a.File&&e instanceof File||e instanceof Object)&&(h=new S(t)),h.stream(e)},unparse:function(e,t){var i=!1,c=!0,h=",",v=`\r
`,E='"',Q=E+E,z=!1,p=null,j=!1;(function(){if(typeof t=="object"){if(typeof t.delimiter!="string"||r.BAD_DELIMITERS.filter(function(f){return t.delimiter.indexOf(f)!==-1}).length||(h=t.delimiter),(typeof t.quotes=="boolean"||typeof t.quotes=="function"||Array.isArray(t.quotes))&&(i=t.quotes),typeof t.skipEmptyLines!="boolean"&&typeof t.skipEmptyLines!="string"||(z=t.skipEmptyLines),typeof t.newline=="string"&&(v=t.newline),typeof t.quoteChar=="string"&&(E=t.quoteChar),typeof t.header=="boolean"&&(c=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw new Error("Option columns is empty");p=t.columns}t.escapeChar!==void 0&&(Q=t.escapeChar+E),(typeof t.escapeFormulae=="boolean"||t.escapeFormulae instanceof RegExp)&&(j=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var w=new RegExp(A(E),"g");if(typeof e=="string"&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return ae(null,e,z);if(typeof e[0]=="object")return ae(p||Object.keys(e[0]),e,z)}else if(typeof e=="object")return typeof e.data=="string"&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||p),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]=="object"?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]=="object"||(e.data=[e.data])),ae(e.fields||[],e.data||[],z);throw new Error("Unable to serialize unrecognized input");function ae(f,F,X){var B="";typeof f=="string"&&(f=JSON.parse(f)),typeof F=="string"&&(F=JSON.parse(F));var Z=Array.isArray(f)&&0<f.length,K=!Array.isArray(F[0]);if(Z&&c){for(var J=0;J<f.length;J++)0<J&&(B+=h),B+=G(f[J],J);0<F.length&&(B+=v)}for(var y=0;y<F.length;y++){var R=Z?f.length:F[y].length,M=!1,W=Z?Object.keys(F[y]).length===0:F[y].length===0;if(X&&!Z&&(M=X==="greedy"?F[y].join("").trim()==="":F[y].length===1&&F[y][0].length===0),X==="greedy"&&Z){for(var I=[],Y=0;Y<R;Y++){var $=K?f[Y]:Y;I.push(F[y][$])}M=I.join("").trim()===""}if(!M){for(var L=0;L<R;L++){0<L&&!W&&(B+=h);var oe=Z&&K?f[L]:L;B+=G(F[y][oe],L)}y<F.length-1&&(!X||0<R&&!W)&&(B+=v)}}return B}function G(f,F){if(f==null)return"";if(f.constructor===Date)return JSON.stringify(f).slice(1,25);var X=!1;j&&typeof f=="string"&&j.test(f)&&(f="'"+f,X=!0);var B=f.toString().replace(w,Q);return(X=X||i===!0||typeof i=="function"&&i(f,F)||Array.isArray(i)&&i[F]||function(Z,K){for(var J=0;J<K.length;J++)if(-1<Z.indexOf(K[J]))return!0;return!1}(B,r.BAD_DELIMITERS)||-1<B.indexOf(h)||B.charAt(0)===" "||B.charAt(B.length-1)===" ")?E+B+E:B}}};if(r.RECORD_SEP=String.fromCharCode(30),r.UNIT_SEP=String.fromCharCode(31),r.BYTE_ORDER_MARK="\uFEFF",r.BAD_DELIMITERS=["\r",`
`,'"',r.BYTE_ORDER_MARK],r.WORKERS_SUPPORTED=!l&&!!a.Worker,r.NODE_STREAM_INPUT=1,r.LocalChunkSize=10485760,r.RemoteChunkSize=5242880,r.DefaultDelimiter=",",r.Parser=H,r.ParserHandle=C,r.NetworkStreamer=O,r.FileStreamer=S,r.StringStreamer=g,r.ReadableStreamStreamer=u,a.jQuery){var m=a.jQuery;m.fn.parse=function(e){var t=e.config||{},i=[];return this.each(function(v){if(!(m(this).prop("tagName").toUpperCase()==="INPUT"&&m(this).attr("type").toLowerCase()==="file"&&a.FileReader)||!this.files||this.files.length===0)return!0;for(var E=0;E<this.files.length;E++)i.push({file:this.files[E],inputElem:this,instanceConfig:m.extend({},t)})}),c(),this;function c(){if(i.length!==0){var v,E,Q,z,p=i[0];if(_(e.before)){var j=e.before(p.file,p.inputElem);if(typeof j=="object"){if(j.action==="abort")return v="AbortError",E=p.file,Q=p.inputElem,z=j.reason,void(_(e.error)&&e.error({name:v},E,Q,z));if(j.action==="skip")return void h();typeof j.config=="object"&&(p.instanceConfig=m.extend(p.instanceConfig,j.config))}else if(j==="skip")return void h()}var w=p.instanceConfig.complete;p.instanceConfig.complete=function(ae){_(w)&&w(ae,p.file,p.inputElem),h()},r.parse(p.file,p.instanceConfig)}else _(e.complete)&&e.complete()}function h(){i.splice(0,1),c()}}}function D(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(t){var i=P(t);i.chunkSize=parseInt(i.chunkSize),t.step||t.chunk||(i.chunkSize=null),this._handle=new C(i),(this._handle.streamer=this)._config=i}).call(this,e),this.parseChunk=function(t,i){if(this.isFirstChunk&&_(this._config.beforeFirstChunk)){var c=this._config.beforeFirstChunk(t);c!==void 0&&(t=c)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+t;this._partialLine="";var v=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var E=v.meta.cursor;this._finished||(this._partialLine=h.substring(E-this._baseIndex),this._baseIndex=E),v&&v.data&&(this._rowCount+=v.data.length);var Q=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)a.postMessage({results:v,workerId:r.WORKER_ID,finished:Q});else if(_(this._config.chunk)&&!i){if(this._config.chunk(v,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);v=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(v.data),this._completeResults.errors=this._completeResults.errors.concat(v.errors),this._completeResults.meta=v.meta),this._completed||!Q||!_(this._config.complete)||v&&v.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Q||v&&v.meta.paused||this._nextChunk(),v}this._halted=!0},this._sendError=function(t){_(this._config.error)?this._config.error(t):o&&this._config.error&&a.postMessage({workerId:r.WORKER_ID,error:t,finished:!1})}}function O(e){var t;(e=e||{}).chunkSize||(e.chunkSize=r.RemoteChunkSize),D.call(this,e),this._nextChunk=l?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),l||(t.onload=U(this._chunkLoaded,this),t.onerror=U(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!l),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var c in i)t.setRequestHeader(c,i[c])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{t.send(this._config.downloadRequestBody)}catch(v){this._chunkError(v.message)}l&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(i){var c=i.getResponseHeader("Content-Range");return c===null?-1:parseInt(c.substring(c.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(i){var c=t.statusText||i;this._sendError(new Error(c))}}function S(e){var t,i;(e=e||{}).chunkSize||(e.chunkSize=r.LocalChunkSize),D.call(this,e);var c=typeof FileReader<"u";this.stream=function(h){this._input=h,i=h.slice||h.webkitSlice||h.mozSlice,c?((t=new FileReader).onload=U(this._chunkLoaded,this),t.onerror=U(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var v=Math.min(this._start+this._config.chunkSize,this._input.size);h=i.call(h,this._start,v)}var E=t.readAsText(h,this._config.encoding);c||this._chunkLoaded({target:{result:E}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(t.error)}}function g(e){var t;D.call(this,e=e||{}),this.stream=function(i){return t=i,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var i,c=this._config.chunkSize;return c?(i=t.substring(0,c),t=t.substring(c)):(i=t,t=""),this._finished=!t,this.parseChunk(i)}}}function u(e){D.call(this,e=e||{});var t=[],i=!0,c=!1;this.pause=function(){D.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){D.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){c&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=U(function(h){try{t.push(typeof h=="string"?h:h.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(v){this._streamError(v)}},this),this._streamError=U(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=U(function(){this._streamCleanUp(),c=!0,this._streamData("")},this),this._streamCleanUp=U(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function C(e){var t,i,c,h=Math.pow(2,53),v=-h,E=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,z=this,p=0,j=0,w=!1,ae=!1,G=[],f={data:[],errors:[],meta:{}};if(_(e.step)){var F=e.step;e.step=function(y){if(f=y,Z())B();else{if(B(),f.data.length===0)return;p+=y.data.length,e.preview&&p>e.preview?i.abort():(f.data=f.data[0],F(f,z))}}}function X(y){return e.skipEmptyLines==="greedy"?y.join("").trim()==="":y.length===1&&y[0].length===0}function B(){return f&&c&&(J("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+r.DefaultDelimiter+"'"),c=!1),e.skipEmptyLines&&(f.data=f.data.filter(function(y){return!X(y)})),Z()&&function(){if(!f)return;function y(M,W){_(e.transformHeader)&&(M=e.transformHeader(M,W)),G.push(M)}if(Array.isArray(f.data[0])){for(var R=0;Z()&&R<f.data.length;R++)f.data[R].forEach(y);f.data.splice(0,1)}else f.data.forEach(y)}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function y(M,W){var I,Y=e.header?{}:[];for(I=0;I<M.length;I++){var $=I,L=M[I];e.header&&($=I>=G.length?"__parsed_extra":G[I]),e.transform&&(L=e.transform(L,$)),L=K($,L),$==="__parsed_extra"?(Y[$]=Y[$]||[],Y[$].push(L)):Y[$]=L}return e.header&&(I>G.length?J("FieldMismatch","TooManyFields","Too many fields: expected "+G.length+" fields but parsed "+I,j+W):I<G.length&&J("FieldMismatch","TooFewFields","Too few fields: expected "+G.length+" fields but parsed "+I,j+W)),Y}var R=1;return!f.data.length||Array.isArray(f.data[0])?(f.data=f.data.map(y),R=f.data.length):f.data=y(f.data,0),e.header&&f.meta&&(f.meta.fields=G),j+=R,f}()}function Z(){return e.header&&G.length===0}function K(y,R){return M=y,e.dynamicTypingFunction&&e.dynamicTyping[M]===void 0&&(e.dynamicTyping[M]=e.dynamicTypingFunction(M)),(e.dynamicTyping[M]||e.dynamicTyping)===!0?R==="true"||R==="TRUE"||R!=="false"&&R!=="FALSE"&&(function(W){if(E.test(W)){var I=parseFloat(W);if(v<I&&I<h)return!0}return!1}(R)?parseFloat(R):Q.test(R)?new Date(R):R===""?null:R):R;var M}function J(y,R,M,W){var I={type:y,code:R,message:M};W!==void 0&&(I.row=W),f.errors.push(I)}this.parse=function(y,R,M){var W=e.quoteChar||'"';if(e.newline||(e.newline=function($,L){$=$.substring(0,1048576);var oe=new RegExp(A(L)+"([^]*?)"+A(L),"gm"),ee=($=$.replace(oe,"")).split("\r"),ue=$.split(`
`),fe=1<ue.length&&ue[0].length<ee[0].length;if(ee.length===1||fe)return`
`;for(var te=0,N=0;N<ee.length;N++)ee[N][0]===`
`&&te++;return te>=ee.length/2?`\r
`:"\r"}(y,W)),c=!1,e.delimiter)_(e.delimiter)&&(e.delimiter=e.delimiter(y),f.meta.delimiter=e.delimiter);else{var I=function($,L,oe,ee,ue){var fe,te,N,q;ue=ue||[",","	","|",";",r.RECORD_SEP,r.UNIT_SEP];for(var ye=0;ye<ue.length;ye++){var T=ue[ye],we=0,he=0,be=0;N=void 0;for(var ge=new H({comments:ee,delimiter:T,newline:L,preview:10}).parse($),_e=0;_e<ge.data.length;_e++)if(oe&&X(ge.data[_e]))be++;else{var ve=ge.data[_e].length;he+=ve,N!==void 0?0<ve&&(we+=Math.abs(ve-N),N=ve):N=ve}0<ge.data.length&&(he/=ge.data.length-be),(te===void 0||we<=te)&&(q===void 0||q<he)&&1.99<he&&(te=we,fe=T,q=he)}return{successful:!!(e.delimiter=fe),bestDelimiter:fe}}(y,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);I.successful?e.delimiter=I.bestDelimiter:(c=!0,e.delimiter=r.DefaultDelimiter),f.meta.delimiter=e.delimiter}var Y=P(e);return e.preview&&e.header&&Y.preview++,t=y,i=new H(Y),f=i.parse(t,R,M),B(),w?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return w},this.pause=function(){w=!0,i.abort(),t=_(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){z.streamer._halted?(w=!1,z.streamer.parseChunk(t,!0)):setTimeout(z.resume,3)},this.aborted=function(){return ae},this.abort=function(){ae=!0,i.abort(),f.meta.aborted=!0,_(e.complete)&&e.complete(f),t=""}}function A(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function H(e){var t,i=(e=e||{}).delimiter,c=e.newline,h=e.comments,v=e.step,E=e.preview,Q=e.fastMode,z=t=e.quoteChar===void 0||e.quoteChar===null?'"':e.quoteChar;if(e.escapeChar!==void 0&&(z=e.escapeChar),(typeof i!="string"||-1<r.BAD_DELIMITERS.indexOf(i))&&(i=","),h===i)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<r.BAD_DELIMITERS.indexOf(h))&&(h=!1),c!==`
`&&c!=="\r"&&c!==`\r
`&&(c=`
`);var p=0,j=!1;this.parse=function(w,ae,G){if(typeof w!="string")throw new Error("Input must be a string");var f=w.length,F=i.length,X=c.length,B=h.length,Z=_(v),K=[],J=[],y=[],R=p=0;if(!w)return ne();if(e.header&&!ae){var M=w.split(c)[0].split(i),W=[],I={},Y=!1;for(var $ in M){var L=M[$];_(e.transformHeader)&&(L=e.transformHeader(L,$));var oe=L,ee=I[L]||0;for(0<ee&&(Y=!0,oe=L+"_"+ee),I[L]=ee+1;W.includes(oe);)oe=oe+"_"+ee;W.push(oe)}if(Y){var ue=w.split(c);ue[0]=W.join(i),w=ue.join(c)}}if(Q||Q!==!1&&w.indexOf(t)===-1){for(var fe=w.split(c),te=0;te<fe.length;te++){if(y=fe[te],p+=y.length,te!==fe.length-1)p+=c.length;else if(G)return ne();if(!h||y.substring(0,B)!==h){if(Z){if(K=[],be(y.split(i)),Ee(),j)return ne()}else be(y.split(i));if(E&&E<=te)return K=K.slice(0,E),ne(!0)}}return ne()}for(var N=w.indexOf(i,p),q=w.indexOf(c,p),ye=new RegExp(A(z)+A(t),"g"),T=w.indexOf(t,p);;)if(w[p]!==t)if(h&&y.length===0&&w.substring(p,p+B)===h){if(q===-1)return ne();p=q+X,q=w.indexOf(c,p),N=w.indexOf(i,p)}else if(N!==-1&&(N<q||q===-1))y.push(w.substring(p,N)),p=N+F,N=w.indexOf(i,p);else{if(q===-1)break;if(y.push(w.substring(p,q)),ve(q+X),Z&&(Ee(),j))return ne();if(E&&K.length>=E)return ne(!0)}else for(T=p,p++;;){if((T=w.indexOf(t,T+1))===-1)return G||J.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:K.length,index:p}),_e();if(T===f-1)return _e(w.substring(p,T).replace(ye,t));if(t!==z||w[T+1]!==z){if(t===z||T===0||w[T-1]!==z){N!==-1&&N<T+1&&(N=w.indexOf(i,T+1)),q!==-1&&q<T+1&&(q=w.indexOf(c,T+1));var we=ge(q===-1?N:Math.min(N,q));if(w.substr(T+1+we,F)===i){y.push(w.substring(p,T).replace(ye,t)),w[p=T+1+we+F]!==t&&(T=w.indexOf(t,p)),N=w.indexOf(i,p),q=w.indexOf(c,p);break}var he=ge(q);if(w.substring(T+1+he,T+1+he+X)===c){if(y.push(w.substring(p,T).replace(ye,t)),ve(T+1+he+X),N=w.indexOf(i,p),T=w.indexOf(t,p),Z&&(Ee(),j))return ne();if(E&&K.length>=E)return ne(!0);break}J.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:K.length,index:p}),T++}}else T++}return _e();function be(re){K.push(re),R=p}function ge(re){var Be=0;if(re!==-1){var Fe=w.substring(T+1,re);Fe&&Fe.trim()===""&&(Be=Fe.length)}return Be}function _e(re){return G||(re===void 0&&(re=w.substring(p)),y.push(re),p=f,be(y),Z&&Ee()),ne()}function ve(re){p=re,be(y),y=[],q=w.indexOf(c,p)}function ne(re){return{data:K,errors:J,meta:{delimiter:i,linebreak:c,aborted:j,truncated:!!re,cursor:R+(ae||0)}}}function Ee(){v(ne()),K=[],J=[]}},this.abort=function(){j=!0},this.getCharIndex=function(){return p}}function ie(e){var t=e.data,i=b[t.workerId],c=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var h={abort:function(){c=!0,se(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:me,resume:me};if(_(i.userStep)){for(var v=0;v<t.results.data.length&&(i.userStep({data:t.results.data[v],errors:t.results.errors,meta:t.results.meta},h),!c);v++);delete t.results}else _(i.userChunk)&&(i.userChunk(t.results,h,t.file),delete t.results)}t.finished&&!c&&se(t.workerId,t.results)}function se(e,t){var i=b[e];_(i.userComplete)&&i.userComplete(t),i.terminate(),delete b[e]}function me(){throw new Error("Not implemented.")}function P(e){if(typeof e!="object"||e===null)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=P(e[i]);return t}function U(e,t){return function(){e.apply(t,arguments)}}function _(e){return typeof e=="function"}return o&&(a.onmessage=function(e){var t=e.data;if(r.WORKER_ID===void 0&&t&&(r.WORKER_ID=t.workerId),typeof t.input=="string")a.postMessage({workerId:r.WORKER_ID,results:r.parse(t.input,t.config),finished:!0});else if(a.File&&t.input instanceof File||t.input instanceof Object){var i=r.parse(t.input,t.config);i&&a.postMessage({workerId:r.WORKER_ID,results:i,finished:!0})}}),(O.prototype=Object.create(D.prototype)).constructor=O,(S.prototype=Object.create(D.prototype)).constructor=S,(g.prototype=Object.create(g.prototype)).constructor=g,(u.prototype=Object.create(D.prototype)).constructor=u,r})})(Ze);var tn=Ze.exports;const nn=Je(tn),rn={class:"flex items-center justify-center h-screen flex-col gap-6"},sn=["onClick"],an={class:"flex justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700 border-r border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"},on=["value"],ln={id:"my_modal_1",class:"modal"},un={class:"modal-box flex justify-between items-center"},cn=x("form",{method:"dialog"},[x("button",{class:"btn btn-circle btn-outline btn-sm"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])])],-1),dn={class:"flex gap-4"},fn={class:"flex flex-col"},hn={class:"bg-[#fefefe] rounded-md p-5 flex gap-4 flex-col"},pn=x("h1",{class:"text-xl font-medium text-slate-600"},"Adicione novas transferências",-1),mn=["disabled"],gn={class:"label cursor-pointer flex gap-2"},_n=["value"],vn={class:"label-text w-full !text-start"},yn={onclick:"my_modal_1.showModal()",class:"btn btn-ghost w-full"},bn=x("div",{class:"stats shadow"},null,-1),wn={class:"absolute top-0 right-0 p-8"},Dn=De({__name:"index",setup(n){ct({title:"Konverti by Alexis Lopes",link:[{rel:"icon",type:"image/png",href:"/favicon.ico"}]});const d=V([]),s=V("");V([]);const a=V([]),l=ze("contas",[],{serializer:{read:g=>g?JSON.parse(g):null,write:g=>JSON.stringify(g)}}),o=(g="")=>(g=new Date(...g.split("/").map(u=>Number(u)).reverse()),new Date(g.setMonth(g.getMonth()-1))),b=V({start:new Date,end:new Date}),k=V([{key:"today",highlight:{color:"#7c3aed",fillMode:"solid"},dates:new Date}]),r=V({hours:0,minutes:0,seconds:0,milliseconds:0}),m=Re(()=>d.value.filter(g=>{const u=new Date(o(g.Data));return u.getTime()>=b.value.start.getTime()&&u.getTime()<=b.value.end.getTime()})),D=ze("lastImport",0),O=g=>{nn.parse(g,{header:!0,skipEmptyLines:!0,complete:(function(u){d.value=u.data.map(A=>({...A,Conta:s.value,Categoria:""}));const C=[...new Set(d.value.map(A=>o(A.Data).getTime()))];b.value={start:new Date(Math.min(...C)),end:new Date(Math.max(...C))}}).bind(this)})},S=()=>{const g=["Data","Descrição","Valor","Conta","Categoria"],u=m==null?void 0:m.value.map(A=>({...A,Conta:s.value})).map(A=>g.map(H=>`"${A[H]}"`)),C=[g.map(A=>`"${A}"`),...u].map(A=>A.join(";")).join(`\r
`);en(C,`NUB2MOB Converter for ${s.value} at ${new Date().toLocaleDateString(navigator.language,{day:"numeric",month:"2-digit",year:"2-digit",hour:"numeric",minute:"numeric"})}.csv`,"text/csv"),D.value=new Date().getTime()};return Ce(a,g=>{O(g[0])}),Re(()=>{const g=m.value.filter(u=>Number(u.Valor)>0).map(u=>Number(u.Valor)).reduce((u,C)=>u+C,0);return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(g)}),Re(()=>{const g=m.value.filter(u=>Number(u.Valor)<0).map(u=>Number(u.Valor)).reduce((u,C)=>u+C,0);return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(g)}),(g,u)=>{const C=Ie,A=ft,H=Nt,ie=Pt,se=Vt,me=Xt;return ce(),de("div",rn,[le(A,{isDark:"",modelValue:b.value,"onUpdate:modelValue":u[0]||(u[0]=P=>b.value=P),modelModifiers:{range:!0},attributes:k.value,"max-date":new Date,color:"indigo",rules:r.value,disabled:!m.value.length},{default:dt(({togglePopover:P,inputValue:U,inputEvents:_})=>[x("div",{class:"flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden cursor-pointer",onClick:P},[x("button",an,[le(C,{name:"octicon:calendar-16",class:"text-xl"})]),x("input",ht({readonly:"",value:`${U.start} - ${U.end}`},pt(_,!0),{class:"flex-grow px-2 py-1 bg-white dark:bg-gray-700 cursor-pointer"}),null,16,on)],8,sn)]),_:1},8,["modelValue","attributes","max-date","rules","disabled"]),x("dialog",ln,[x("div",un,[le(H),cn])]),x("div",dn,[x("div",fn,[x("div",hn,[pn,le(ie,{onOnDrop:u[1]||(u[1]=P=>a.value=P),class:"w-full"}),(ce(!0),de(Ue,null,je(a.value,P=>(ce(),de("div",{key:P.name},[le(se,{file:P},null,8,["file"])]))),128)),x("div",{class:He(a.value.length===0||!s.value?"tooltip":""),"data-tip":"Você precisa importar o arquivo de transferências e selecionar uma conta."},[x("button",{disabled:a.value.length===0||!s.value,class:"btn btn-block btn-primary",onClick:S},"converter",8,mn)],2)])]),x("div",null,[(ce(!0),de(Ue,null,je(pe(l),P=>(ce(),de("div",{class:"form-control",key:P},[x("label",gn,[Ve(x("input",{type:"radio",name:"radio-10",class:"radio checked:bg-red-500","onUpdate:modelValue":u[2]||(u[2]=U=>s.value=U),value:P},null,8,_n),[[mt,s.value]]),x("span",vn,xe(P),1)])]))),128)),x("button",yn,[le(C,{name:"octicon:plus-16",class:"text-xl"}),Me(" Nova conta ")])]),bn]),x("div",wn,[le(me)])])}}});export{Dn as default};
