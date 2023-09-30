import{M as He,N as Ue,u as Ce,d as Te,e as se,r as Ke,c as C,B as Ge,O as Je,k as F,l as ie,I as A,P as ce,Q as le,z as We,R as Xe,S as Ye,v as Ze,t as et,_ as tt}from"./entry.ddc87128.js";import{u as nt}from"./config.8dc7a8e8.js";const ot="$s";function rt(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const o=ot+n,s=Ce(),i=He(s.payload.state,o);if(i.value===void 0&&r){const c=r();if(Ue(c))return s.payload.state[o]=c,c;i.value=c}return i}const je=Object.freeze({left:0,top:0,width:16,height:16}),Pe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...je,...Pe});Object.freeze({...X,body:"",hidden:!1});({...je});const Oe=Object.freeze({width:null,height:null}),Ee=Object.freeze({...Oe,...Pe});function st(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Oe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const it=/[\s,]+/;function ct(e,t){t.split(it).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function lt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const at=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ut=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ae(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(at);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=ut.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const ft=e=>e==="unset"||e==="undefined"||e==="none";function dt(e,t){const n={...X,...e},r={...Ee,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(d=>{const h=[],p=d.hFlip,x=d.vFlip;let v=d.rotate;p?x?v+=2:(h.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),h.push("scale(-1 1)"),o.top=o.left=0):x&&(h.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),h.push("scale(1 -1)"),o.top=o.left=0);let b;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:b=o.height/2+o.top,h.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:h.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,h.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}v%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),h.length&&(s='<g transform="'+h.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let u,f;i===null?(f=c===null?"1em":c==="auto"?a:c,u=ae(f,l/a)):(u=i==="auto"?l:i,f=c===null?ae(u,a/l):c==="auto"?a:c);const g={},y=(d,h)=>{ft(h)||(g[d]=h.toString())};return y("width",u),y("height",f),g.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:g,body:s}}const pt=/\sid="(\S+)"/g,ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gt=0;function mt(e,t=ht){const n=[];let r;for(;r=pt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(gt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function yt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function vt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function bt(e){return"data:image/svg+xml,"+vt(e)}function wt(e){return'url("'+bt(e)+'")'}const ue={...Ee,inline:!1},xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},It={display:"inline-block"},q={backgroundColor:"currentColor"},Fe={backgroundColor:"transparent"},fe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},de={webkitMask:q,mask:q,background:Fe};for(const e in de){const t=de[e];for(const n in fe)t[e+n]=fe[n]}const _={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";_[e+"-flip"]=t,_[e.slice(0,1)+"-flip"]=t,_[e+"Flip"]=t});function pe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const St=(e,t)=>{const n=st(ue,t),r={...xt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let h in t){const p=t[h];if(p!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[h]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&ct(n,p);break;case"color":s.color=p;break;case"rotate":typeof p=="string"?n[h]=lt(p):typeof p=="number"&&(n[h]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:{const x=_[h];x?(p===!0||p==="true"||p===1)&&(n[x]=!0):ue[h]===void 0&&(r[h]=p)}}}const l=dt(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let h=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),r.innerHTML=mt(l.body,p?()=>p+"ID"+h++:"iconifyVue"),se("svg",r)}const{body:u,width:f,height:g}=e,y=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),d=yt(u,{...a,width:f+"",height:g+""});return r.style={...s,"--svg":wt(d),width:pe(a.width),height:pe(a.height),...It,...y?q:Fe,...c},se("span",r)},kt=Object.create(null),Ct=Te({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?kt[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:St({...X,...n},e)}}),j=/^[a-z0-9]+(-[a-z0-9]+)*$/,N=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!z(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!z(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!z(c,n)?null:c}return null},z=(e,t)=>e?!!((e.provider===""||e.provider.match(j))&&(t&&e.prefix===""||e.prefix.match(j))&&e.name.match(j)):!1,Ae=Object.freeze({left:0,top:0,width:16,height:16}),$=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...Ae,...$}),H=Object.freeze({...Y,body:"",hidden:!1});function Tt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function he(e,t){const n=Tt(e,t);for(const r in H)r in $?r in e&&!(r in n)&&(n[r]=$[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function jt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Pt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=he(r[c]||o[c],s)}return i(t),n.forEach(i),he(e,s)}function Me(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=jt(e);for(const o in r){const s=r[o];s&&(t(o,Pt(e,o,s)),n.push(o))}return n}const Ot={provider:"",aliases:{},not_found:{},...Ae};function B(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function _e(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!B(e,Ot))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(j)||typeof s.body!="string"||!B(s,H))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(j)||typeof i!="string"||!n[i]&&!r[i]||!B(s,H))return null}return t}const ge=Object.create(null);function Et(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function S(e,t){const n=ge[e]||(ge[e]=Object.create(null));return n[t]||(n[t]=Et(e,t))}function Z(e,t){return _e(t)?Me(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Ft(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function ze(e){return typeof e=="boolean"&&(P=e),P}function At(e){const t=typeof e=="string"?N(e,!0,P):e;if(t){const n=S(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Mt(e,t){const n=N(e,!0,P);if(!n)return!1;const r=S(n.provider,n.prefix);return Ft(r,n.name,t)}function _t(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return _e(e)&&(e.prefix="",Me(e,(s,i)=>{i&&Mt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!z({provider:t,prefix:n,name:"a"}))return!1;const r=S(t,n);return!!Z(r,e)}const zt=Object.freeze({width:null,height:null}),Lt=Object.freeze({...zt,...$});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const U=Object.create(null);function $t(e,t){U[e]=t}function K(e){return U[e]||U[""]}function ee(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const te=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;T.length>0;)T.length===1||Math.random()>.5?L.push(T.shift()):L.push(T.pop());te[""]=ee({resources:["https://api.iconify.design"].concat(L)});function Nt(e,t){const n=ee(t);return n===null?!1:(te[e]=n,!0)}function ne(e){return te[e]}const Dt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let me=Dt();function Rt(e,t){const n=ne(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Bt(e){return e===404}const Qt=(e,t,n)=>{const r=[],o=Rt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Vt(e){if(typeof e=="string"){const t=ne(e);if(t)return t.path}return"/"}const qt=(e,t,n)=>{if(!me){n("abort",424);return}let r=Vt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;me(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Bt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ht={prepare:Qt,send:qt};function Ut(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=S(s,i));let u;c in a.icons?u=t.loaded:i===""||a.missing.has(c)?u=t.missing:u=t.pending;const f={provider:s,prefix:i,name:c};u.push(f)}),t}function Le(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Kt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Le([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Gt=0;function Jt(e,t,n){const r=Gt++,o=Le.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Wt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?N(o,t,n):o;s&&r.push(s)}),r}var Xt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Yt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let m=e.resources.slice(0);for(i=[];m.length>1;){const w=Math.floor(Math.random()*m.length);i.push(m[w]),m=m.slice(0,w).concat(m.slice(w+1))}i=i.concat(m)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,f=null,g=[],y=[];typeof r=="function"&&y.push(r);function d(){f&&(clearTimeout(f),f=null)}function h(){l==="pending"&&(l="aborted"),d(),g.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),g=[]}function p(m,w){w&&(y=[]),typeof m=="function"&&y.push(m)}function x(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:g.length,subscribe:p,abort:h}}function v(){l="failed",y.forEach(m=>{m(void 0,u)})}function b(){g.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),g=[]}function qe(m,w,k){const E=w!=="success";switch(g=g.filter(I=>I!==m),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=k,v();return}if(E){u=k,g.length||(i.length?R():v());return}if(d(),b(),!e.random){const I=e.resources.indexOf(m.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",y.forEach(I=>{I(k)})}function R(){if(l!=="pending")return;d();const m=i.shift();if(m===void 0){if(g.length){f=setTimeout(()=>{d(),l==="pending"&&(b(),v())},e.timeout);return}v();return}const w={status:"pending",resource:m,callback:(k,E)=>{qe(w,k,E)}};g.push(w),a++,f=setTimeout(R,e.rotate),n(m,t,w.callback)}return setTimeout(R),x}function $e(e){const t={...Xt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const u=Yt(t,c,l,(f,g)=>{r(),a&&a(f,g)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function ye(){}const Q=Object.create(null);function Zt(e){if(!Q[e]){const t=ne(e);if(!t)return;const n=$e(t),r={config:t,redundancy:n};Q[e]=r}return Q[e]}function en(e,t,n){let r,o;if(typeof e=="string"){const s=K(e);if(!s)return n(void 0,424),ye;o=s.send;const i=Zt(e);i&&(r=i.redundancy)}else{const s=ee(e);if(s){r=$e(s);const i=e.resources?e.resources[0]:"",c=K(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ye):r.query(t,o,n)().abort}const ve="iconify2",O="iconify",Ne=O+"-count",be=O+"-version",De=36e5,tn=168;function G(e,t){try{return e.getItem(t)}catch{}}function oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function we(e,t){try{e.removeItem(t)}catch{}}function J(e,t){return oe(e,Ne,t.toString())}function W(e){return parseInt(G(e,Ne))||0}const D={local:!0,session:!0},Re={local:new Set,session:new Set};let re=!1;function nn(e){re=e}let M=typeof window>"u"?{}:window;function Be(e){const t=e+"Storage";try{if(M&&M[t]&&typeof M[t].length=="number")return M[t]}catch{}D[e]=!1}function Qe(e,t){const n=Be(e);if(!n)return;const r=G(n,be);if(r!==ve){if(r){const c=W(n);for(let l=0;l<c;l++)we(n,O+l.toString())}oe(n,be,ve),J(n,0);return}const o=Math.floor(Date.now()/De)-tn,s=c=>{const l=O+c.toString(),a=G(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}we(n,l)}};let i=W(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,J(n,i)):Re[e].add(c))}function Ve(){if(!re){nn(!0);for(const e in D)Qe(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=S(r,o);if(!Z(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function on(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in D)Qe(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function rn(e,t){re||Ve();function n(r){let o;if(!D[r]||!(o=Be(r)))return;const s=Re[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=W(o),!J(o,i+1))return;const c={cached:Math.floor(Date.now()/De),provider:e.provider,data:t};return oe(o,O+i.toString(),JSON.stringify(c))}t.lastModified&&!on(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function xe(){}function sn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Kt(e)}))}function cn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=K(n)))return;s.prepare(n,r,o).forEach(c=>{en(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=Z(e,l);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(f=>{u.delete(f)}),rn(e,l)}catch(a){console.error(a)}sn(e)})})}))}const ln=(e,t)=>{const n=Wt(e,!0,ze()),r=Ut(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,xe)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(S(a,u));const f=o[a]||(o[a]=Object.create(null));f[u]||(f[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:f}=l,g=S(a,u),y=g.pendingIcons||(g.pendingIcons=new Set);y.has(f)||(y.add(f),o[a][u].push(f))}),s.forEach(l=>{const{provider:a,prefix:u}=l;o[a][u].length&&cn(l,o[a][u])}),t?Jt(t,r,s):xe},an=e=>new Promise((t,n)=>{const r=typeof e=="string"?N(e,!0):e;if(!r){n(e);return}ln([r||e],o=>{if(o.length&&r){const s=At(r);if(s){t({...Y,...s});return}}n(e)})});({...Lt});const Ie={backgroundColor:"currentColor"},un={backgroundColor:"transparent"},Se={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ke={webkitMask:Ie,mask:Ie,background:un};for(const e in ke){const t=ke[e];for(const n in Se)t[e+n]=Se[n]}const V={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";V[e+"-flip"]=t,V[e.slice(0,1)+"-flip"]=t,V[e+"Flip"]=t});ze(!0);$t("",Ht);if(typeof document<"u"&&typeof window<"u"){Ve();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!_t(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Nt(n,o)||console.error(r)}catch{console.error(r)}}}}({...Y});const fn=Te({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let t,n;const r=e,o=Ce(),s=nt(),i=rt("icons",()=>({})),c=Ke(!1),l=C(()=>{var d;return((((d=s.nuxtIcon)==null?void 0:d.aliases)||{})[r.name]||r.name).replace(/^i-/,"")}),a=C(()=>{var d;return(d=i.value)==null?void 0:d[l.value]}),u=C(()=>o.vueApp.component(l.value)),f=C(()=>{var h,p,x;if(!r.size&&typeof((h=s.nuxtIcon)==null?void 0:h.size)=="boolean"&&!((p=s.nuxtIcon)!=null&&p.size))return;const d=r.size||((x=s.nuxtIcon)==null?void 0:x.size)||"1em";return String(Number(d))===d?`${d}px`:d}),g=C(()=>{var d;return((d=s==null?void 0:s.nuxtIcon)==null?void 0:d.class)??"icon"});async function y(){var d;u.value||(d=i.value)!=null&&d[l.value]||(c.value=!0,i.value[l.value]=await an(l.value).catch(()=>{}),c.value=!1)}return Ge(()=>l.value,y),!u.value&&([t,n]=Je(()=>y()),t=await t,n()),(d,h)=>c.value?(F(),ie("span",{key:0,class:A(g.value),style:ce({width:f.value,height:f.value})},null,6)):a.value?(F(),le(We(Ct),{key:1,icon:a.value,class:A(g.value),width:f.value,height:f.value},null,8,["icon","class","width","height"])):u.value?(F(),le(Xe(u.value),{key:2,class:A(g.value),width:f.value,height:f.value},null,8,["class","width","height"])):(F(),ie("span",{key:3,class:A(g.value),style:ce({fontSize:f.value,lineHeight:f.value,width:f.value,height:f.value})},[Ye(d.$slots,"default",{},()=>[Ze(et(e.name),1)],!0)],6))}});const hn=tt(fn,[["__scopeId","data-v-f21d8b6d"]]);export{hn as default};
