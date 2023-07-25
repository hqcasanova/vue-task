var oI=Object.defineProperty;var aI=(t,e,n)=>e in t?oI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xs=(t,e,n)=>(aI(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ah(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ae={},cr=[],Qt=()=>{},lI=()=>!1,cI=/^on[^a-z]/,el=t=>cI.test(t),lh=t=>t.startsWith("onUpdate:"),Xe=Object.assign,ch=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uI=Object.prototype.hasOwnProperty,le=(t,e)=>uI.call(t,e),G=Array.isArray,ur=t=>tl(t)==="[object Map]",Cm=t=>tl(t)==="[object Set]",Z=t=>typeof t=="function",Me=t=>typeof t=="string",uh=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Sm=t=>Ne(t)&&Z(t.then)&&Z(t.catch),bm=Object.prototype.toString,tl=t=>bm.call(t),hI=t=>tl(t).slice(8,-1),Pm=t=>tl(t)==="[object Object]",hh=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sa=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fI=/-(\w)/g,_n=nl(t=>t.replace(fI,(e,n)=>n?n.toUpperCase():"")),dI=/\B([A-Z])/g,Fr=nl(t=>t.replace(dI,"-$1").toLowerCase()),sl=nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=nl(t=>t?`on${sl(t)}`:""),xi=(t,e)=>!Object.is(t,e),ra=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rd;const Wc=()=>Rd||(Rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Me(s)?_I(s):rl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Me(t))return t;if(Ne(t))return t}}const pI=/;(?![^(]*\))/g,gI=/:([^]+)/,mI=/\/\*[^]*?\*\//g;function _I(t){const e={};return t.replace(mI,"").split(pI).forEach(n=>{if(n){const s=n.split(gI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bs(t){let e="";if(Me(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Bs(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function yI(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Me(e)&&(t.class=Bs(e)),n&&(t.style=rl(n)),t}const vI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",EI=ah(vI);function km(t){return!!t||t===""}const Cs=t=>Me(t)?t:t==null?"":G(t)||Ne(t)&&(t.toString===bm||!Z(t.toString))?JSON.stringify(t,Nm,2):String(t),Nm=(t,e)=>e&&e.__v_isRef?Nm(t,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Cm(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!G(e)&&!Pm(e)?String(e):e;let Nt;class Dm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function TI(t){return new Dm(t)}function II(t,e=Nt){e&&e.active&&e.effects.push(t)}function xm(){return Nt}function wI(t){Nt&&Nt.cleanups.push(t)}const fh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Om=t=>(t.w&es)>0,Mm=t=>(t.n&es)>0,AI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=es},RI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Om(r)&&!Mm(r)?r.delete(t):e[n++]=r,r.w&=~es,r.n&=~es}e.length=n}},Kc=new WeakMap;let li=0,es=1;const zc=30;let qt;const Ss=Symbol(""),Gc=Symbol("");class dh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,II(this,s)}run(){if(!this.active)return this.fn();let e=qt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Gn=!0,es=1<<++li,li<=zc?AI(this):Cd(this),this.fn()}finally{li<=zc&&RI(this),es=1<<--li,qt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Cd(this),this.onStop&&this.onStop(),this.active=!1)}}function Cd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gn=!0;const Vm=[];function Ur(){Vm.push(Gn),Gn=!1}function Br(){const t=Vm.pop();Gn=t===void 0?!0:t}function bt(t,e,n){if(Gn&&qt){let s=Kc.get(t);s||Kc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=fh()),Lm(r)}}function Lm(t,e){let n=!1;li<=zc?Mm(t)||(t.n|=es,n=!Om(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function Dn(t,e,n,s,r,i){const o=Kc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?hh(n)&&a.push(o.get("length")):(a.push(o.get(Ss)),ur(t)&&a.push(o.get(Gc)));break;case"delete":G(t)||(a.push(o.get(Ss)),ur(t)&&a.push(o.get(Gc)));break;case"set":ur(t)&&a.push(o.get(Ss));break}if(a.length===1)a[0]&&Qc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Qc(fh(l))}}function Qc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Sd(s);for(const s of n)s.computed||Sd(s)}function Sd(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const CI=ah("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uh)),SI=ph(),bI=ph(!1,!0),PI=ph(!0),bd=kI();function kI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let i=0,o=this.length;i<o;i++)bt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ur();const s=he(this)[e].apply(this,n);return Br(),s}}),t}function NI(t){const e=he(this);return bt(e,"has",t),e.hasOwnProperty(t)}function ph(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?zI:Hm:e?jm:$m).get(s))return s;const o=G(s);if(!t){if(o&&le(bd,r))return Reflect.get(bd,r,i);if(r==="hasOwnProperty")return NI}const a=Reflect.get(s,r,i);return(uh(r)?Fm.has(r):CI(r))||(t||bt(s,"get",r),e)?a:st(a)?o&&hh(r)?a:a.value:Ne(a)?t?Wm(a):ol(a):a}}const DI=Um(),xI=Um(!0);function Um(t=!1){return function(n,s,r,i){let o=n[s];if(Ir(o)&&st(o)&&!st(r))return!1;if(!t&&(!ga(r)&&!Ir(r)&&(o=he(o),r=he(r)),!G(n)&&st(o)&&!st(r)))return o.value=r,!0;const a=G(n)&&hh(s)?Number(s)<n.length:le(n,s),l=Reflect.set(n,s,r,i);return n===he(i)&&(a?xi(r,o)&&Dn(n,"set",s,r):Dn(n,"add",s,r)),l}}function OI(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Dn(t,"delete",e,void 0),s}function MI(t,e){const n=Reflect.has(t,e);return(!uh(e)||!Fm.has(e))&&bt(t,"has",e),n}function VI(t){return bt(t,"iterate",G(t)?"length":Ss),Reflect.ownKeys(t)}const Bm={get:SI,set:DI,deleteProperty:OI,has:MI,ownKeys:VI},LI={get:PI,set(t,e){return!0},deleteProperty(t,e){return!0}},FI=Xe({},Bm,{get:bI,set:xI}),gh=t=>t,il=t=>Reflect.getPrototypeOf(t);function Oo(t,e,n=!1,s=!1){t=t.__v_raw;const r=he(t),i=he(e);n||(e!==i&&bt(r,"get",e),bt(r,"get",i));const{has:o}=il(r),a=s?gh:n?yh:Oi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Mo(t,e=!1){const n=this.__v_raw,s=he(n),r=he(t);return e||(t!==r&&bt(s,"has",t),bt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Vo(t,e=!1){return t=t.__v_raw,!e&&bt(he(t),"iterate",Ss),Reflect.get(t,"size",t)}function Pd(t){t=he(t);const e=he(this);return il(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function kd(t,e){e=he(e);const n=he(this),{has:s,get:r}=il(n);let i=s.call(n,t);i||(t=he(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?xi(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Nd(t){const e=he(this),{has:n,get:s}=il(e);let r=n.call(e,t);r||(t=he(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Dn(e,"delete",t,void 0),i}function Dd(){const t=he(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function Lo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=he(o),l=e?gh:t?yh:Oi;return!t&&bt(a,"iterate",Ss),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Fo(t,e,n){return function(...s){const r=this.__v_raw,i=he(r),o=ur(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?gh:e?yh:Oi;return!e&&bt(i,"iterate",l?Gc:Ss),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function UI(){const t={get(i){return Oo(this,i)},get size(){return Vo(this)},has:Mo,add:Pd,set:kd,delete:Nd,clear:Dd,forEach:Lo(!1,!1)},e={get(i){return Oo(this,i,!1,!0)},get size(){return Vo(this)},has:Mo,add:Pd,set:kd,delete:Nd,clear:Dd,forEach:Lo(!1,!0)},n={get(i){return Oo(this,i,!0)},get size(){return Vo(this,!0)},has(i){return Mo.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Lo(!0,!1)},s={get(i){return Oo(this,i,!0,!0)},get size(){return Vo(this,!0)},has(i){return Mo.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fo(i,!1,!1),n[i]=Fo(i,!0,!1),e[i]=Fo(i,!1,!0),s[i]=Fo(i,!0,!0)}),[t,n,e,s]}const[BI,$I,jI,HI]=UI();function mh(t,e){const n=e?t?HI:jI:t?$I:BI;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const qI={get:mh(!1,!1)},WI={get:mh(!1,!0)},KI={get:mh(!0,!1)},$m=new WeakMap,jm=new WeakMap,Hm=new WeakMap,zI=new WeakMap;function GI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QI(t){return t.__v_skip||!Object.isExtensible(t)?0:GI(hI(t))}function ol(t){return Ir(t)?t:_h(t,!1,Bm,qI,$m)}function qm(t){return _h(t,!1,FI,WI,jm)}function Wm(t){return _h(t,!0,LI,KI,Hm)}function _h(t,e,n,s,r){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=QI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hr(t){return Ir(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function ga(t){return!!(t&&t.__v_isShallow)}function Km(t){return hr(t)||Ir(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function zm(t){return pa(t,"__v_skip",!0),t}const Oi=t=>Ne(t)?ol(t):t,yh=t=>Ne(t)?Wm(t):t;function Gm(t){Gn&&qt&&(t=he(t),Lm(t.dep||(t.dep=fh())))}function Qm(t,e){t=he(t);const n=t.dep;n&&Qc(n)}function st(t){return!!(t&&t.__v_isRef===!0)}function Yt(t){return Xm(t,!1)}function Ym(t){return Xm(t,!0)}function Xm(t,e){return st(t)?t:new YI(t,e)}class YI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Oi(e)}get value(){return Gm(this),this._value}set value(e){const n=this.__v_isShallow||ga(e)||Ir(e);e=n?e:he(e),xi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Oi(e),Qm(this))}}function Be(t){return st(t)?t.value:t}const XI={get:(t,e,n)=>Be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return st(r)&&!st(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Jm(t){return hr(t)?t:new Proxy(t,XI)}class JI{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dh(e,()=>{this._dirty||(this._dirty=!0,Qm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=he(this);return Gm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ZI(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Qt):(s=t.get,r=t.set),new JI(s,r,i||!r,n)}function Qn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){al(i,e,n)}return r}function Xt(t,e,n,s){if(Z(t)){const i=Qn(t,e,n,s);return i&&Sm(i)&&i.catch(o=>{al(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Xt(t[i],e,n,s));return r}function al(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Qn(l,null,10,[t,o,a]);return}}ew(t,n,r,s)}function ew(t,e,n,s=!0){console.error(t)}let Mi=!1,Yc=!1;const ft=[];let cn=0;const fr=[];let Sn=null,ys=0;const Zm=Promise.resolve();let vh=null;function e_(t){const e=vh||Zm;return t?e.then(this?t.bind(this):t):e}function tw(t){let e=cn+1,n=ft.length;for(;e<n;){const s=e+n>>>1;Vi(ft[s])<t?e=s+1:n=s}return e}function Eh(t){(!ft.length||!ft.includes(t,Mi&&t.allowRecurse?cn+1:cn))&&(t.id==null?ft.push(t):ft.splice(tw(t.id),0,t),t_())}function t_(){!Mi&&!Yc&&(Yc=!0,vh=Zm.then(s_))}function nw(t){const e=ft.indexOf(t);e>cn&&ft.splice(e,1)}function sw(t){G(t)?fr.push(...t):(!Sn||!Sn.includes(t,t.allowRecurse?ys+1:ys))&&fr.push(t),t_()}function xd(t,e=Mi?cn+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function n_(t){if(fr.length){const e=[...new Set(fr)];if(fr.length=0,Sn){Sn.push(...e);return}for(Sn=e,Sn.sort((n,s)=>Vi(n)-Vi(s)),ys=0;ys<Sn.length;ys++)Sn[ys]();Sn=null,ys=0}}const Vi=t=>t.id==null?1/0:t.id,rw=(t,e)=>{const n=Vi(t)-Vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function s_(t){Yc=!1,Mi=!0,ft.sort(rw);const e=Qt;try{for(cn=0;cn<ft.length;cn++){const n=ft[cn];n&&n.active!==!1&&Qn(n,null,14)}}finally{cn=0,ft.length=0,n_(),Mi=!1,vh=null,(ft.length||fr.length)&&s_()}}function iw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f&&(r=n.map(d=>Me(d)?d.trim():d)),h&&(r=n.map(qc))}let a,l=s[a=sc(e)]||s[a=sc(_n(e))];!l&&i&&(l=s[a=sc(Fr(e))]),l&&Xt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(c,t,6,r)}}function r_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=r_(c,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ne(t)&&s.set(t,null),null):(G(i)?i.forEach(l=>o[l]=null):Xe(o,i),Ne(t)&&s.set(t,o),o)}function ll(t,e){return!t||!el(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Fr(e))||le(t,e))}let rt=null,cl=null;function ma(t){const e=rt;return rt=t,cl=t&&t.type.__scopeId||null,e}function MM(t){cl=t}function VM(){cl=null}function Kn(t,e=rt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Wd(-1);const i=ma(e);let o;try{o=t(...r)}finally{ma(i),s._d&&Wd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t;let v,T;const b=ma(t);try{if(n.shapeFlag&4){const A=r||s;v=ln(u.call(A,A,h,i,d,f,m)),T=l}else{const A=e;v=ln(A.length>1?A(i,{attrs:l,slots:a,emit:c}):A(i,null)),T=e.props?l:ow(l)}}catch(A){Ei.length=0,al(A,t,1),v=Ce(ts)}let k=v;if(T&&y!==!1){const A=Object.keys(T),{shapeFlag:K}=k;A.length&&K&7&&(o&&A.some(lh)&&(T=aw(T,o)),k=wr(k,T))}return n.dirs&&(k=wr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,ma(b),v}const ow=t=>{let e;for(const n in t)(n==="class"||n==="style"||el(n))&&((e||(e={}))[n]=t[n]);return e},aw=(t,e)=>{const n={};for(const s in t)(!lh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function lw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Od(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ll(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Od(s,o,c):!0:!!o;return!1}function Od(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ll(n,i))return!0}return!1}function cw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uw=t=>t.__isSuspense;function hw(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):sw(t)}function fw(t,e){return Th(t,null,{flush:"post"})}const Uo={};function mi(t,e,n){return Th(t,e,n)}function Th(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ae){var a;const l=xm()===((a=Ge)==null?void 0:a.scope)?Ge:null;let c,u=!1,h=!1;if(st(t)?(c=()=>t.value,u=ga(t)):hr(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(A=>hr(A)||ga(A)),c=()=>t.map(A=>{if(st(A))return A.value;if(hr(A))return Es(A);if(Z(A))return Qn(A,l,2)})):Z(t)?e?c=()=>Qn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Xt(t,l,3,[d])}:c=Qt,e&&s){const A=c;c=()=>Es(A())}let f,d=A=>{f=b.onStop=()=>{Qn(A,l,4)}},m;if(Fi)if(d=Qt,e?n&&Xt(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const A=o0();m=A.__watcherHandles||(A.__watcherHandles=[])}else return Qt;let y=h?new Array(t.length).fill(Uo):Uo;const v=()=>{if(b.active)if(e){const A=b.run();(s||u||(h?A.some((K,j)=>xi(K,y[j])):xi(A,y)))&&(f&&f(),Xt(e,l,3,[A,y===Uo?void 0:h&&y[0]===Uo?[]:y,d]),y=A)}else b.run()};v.allowRecurse=!!e;let T;r==="sync"?T=v:r==="post"?T=()=>wt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),T=()=>Eh(v));const b=new dh(c,T);e?n?v():y=b.run():r==="post"?wt(b.run.bind(b),l&&l.suspense):b.run();const k=()=>{b.stop(),l&&l.scope&&ch(l.scope.effects,b)};return m&&m.push(k),k}function dw(t,e,n){const s=this.proxy,r=Me(t)?t.includes(".")?i_(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Ge;Ar(this);const a=Th(r,i.bind(s),n);return o?Ar(o):bs(),a}function i_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Es(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))Es(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Es(t[n],e);else if(Cm(t)||ur(t))t.forEach(n=>{Es(n,e)});else if(Pm(t))for(const n in t)Es(t[n],e);return t}function LM(t,e){const n=rt;if(n===null)return t;const s=pl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ae]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Es(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function hs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Ur(),Xt(l,n,8,[t.el,a,t,e]),Br())}}function wn(t,e){return Z(t)?(()=>Xe({name:t.name},e,{setup:t}))():t}const _i=t=>!!t.type.__asyncLoader,o_=t=>t.type.__isKeepAlive;function pw(t,e){a_(t,"a",e)}function gw(t,e){a_(t,"da",e)}function a_(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ul(e,s,n),n){let r=n.parent;for(;r&&r.parent;)o_(r.parent.vnode)&&mw(s,e,n,r),r=r.parent}}function mw(t,e,n,s){const r=ul(e,t,s,!0);wh(()=>{ch(s[e],r)},n)}function ul(t,e,n=Ge,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ur(),Ar(n);const a=Xt(e,n,t,o);return bs(),Br(),a});return s?r.unshift(i):r.push(i),i}}const Ln=t=>(e,n=Ge)=>(!Fi||t==="sp")&&ul(t,(...s)=>e(...s),n),_w=Ln("bm"),Ih=Ln("m"),yw=Ln("bu"),vw=Ln("u"),Ew=Ln("bum"),wh=Ln("um"),l_=Ln("sp"),Tw=Ln("rtg"),Iw=Ln("rtc");function ww(t,e=Ge){ul("ec",t,e)}const c_="components";function Aw(t,e){return Cw(c_,t,!0,e)||t}const Rw=Symbol.for("v-ndc");function Cw(t,e,n=!0,s=!1){const r=rt||Ge;if(r){const i=r.type;if(t===c_){const a=s0(i,!1);if(a&&(a===e||a===_n(e)||a===sl(_n(e))))return i}const o=Md(r[t]||i[t],e)||Md(r.appContext[t],e);return!o&&s?i:o}}function Md(t,e){return t&&(t[e]||t[_n(e)]||t[sl(_n(e))])}function Sw(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function dr(t,e,n={},s,r){if(rt.isCE||rt.parent&&_i(rt.parent)&&rt.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Ye();const o=i&&u_(i(n)),a=ao(At,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function u_(t){return t.some(e=>va(e)?!(e.type===ts||e.type===At&&!u_(e.children)):!0)?t:null}const Xc=t=>t?A_(t)?pl(t)||t.proxy:Xc(t.parent):null,yi=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$emit:t=>t.emit,$options:t=>Ah(t),$forceUpdate:t=>t.f||(t.f=()=>Eh(t.update)),$nextTick:t=>t.n||(t.n=e_.bind(t.proxy)),$watch:t=>dw.bind(t)}),ic=(t,e)=>t!==Ae&&!t.__isScriptSetup&&le(t,e),bw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ic(s,e))return o[e]=1,s[e];if(r!==Ae&&le(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==Ae&&le(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const u=yi[e];let h,f;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&le(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,le(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ic(r,e)?(r[e]=n,!0):s!==Ae&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&le(t,o)||ic(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(yi,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function Pw(t){const e=Ah(t),n=t.proxy,s=t.ctx;Jc=!1,e.beforeCreate&&Ld(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:v,beforeDestroy:T,beforeUnmount:b,destroyed:k,unmounted:A,render:K,renderTracked:j,renderTriggered:ee,errorCaptured:ae,serverPrefetch:Ve,expose:Oe,inheritAttrs:Pt,components:us,directives:sn,filters:Jr}=e;if(c&&kw(c,s,null),o)for(const Ee in o){const fe=o[Ee];Z(fe)&&(s[Ee]=fe.bind(n))}if(r){const Ee=r.call(n,n);Ne(Ee)&&(t.data=ol(Ee))}if(Jc=!0,i)for(const Ee in i){const fe=i[Ee],Rn=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):Qt,Bn=!Z(fe)&&Z(fe.set)?fe.set.bind(n):Qt,rn=$e({get:Rn,set:Bn});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>rn.value,set:It=>rn.value=It})}if(a)for(const Ee in a)h_(a[Ee],s,n,Ee);if(l){const Ee=Z(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(fe=>{ia(fe,Ee[fe])})}u&&Ld(u,t,"c");function We(Ee,fe){G(fe)?fe.forEach(Rn=>Ee(Rn.bind(n))):fe&&Ee(fe.bind(n))}if(We(_w,h),We(Ih,f),We(yw,d),We(vw,m),We(pw,y),We(gw,v),We(ww,ae),We(Iw,j),We(Tw,ee),We(Ew,b),We(wh,A),We(l_,Ve),G(Oe))if(Oe.length){const Ee=t.exposed||(t.exposed={});Oe.forEach(fe=>{Object.defineProperty(Ee,fe,{get:()=>n[fe],set:Rn=>n[fe]=Rn})})}else t.exposed||(t.exposed={});K&&t.render===Qt&&(t.render=K),Pt!=null&&(t.inheritAttrs=Pt),us&&(t.components=us),sn&&(t.directives=sn)}function kw(t,e,n=Qt){G(t)&&(t=Zc(t));for(const s in t){const r=t[s];let i;Ne(r)?"default"in r?i=Bt(r.from||s,r.default,!0):i=Bt(r.from||s):i=Bt(r),st(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ld(t,e,n){Xt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function h_(t,e,n,s){const r=s.includes(".")?i_(n,s):()=>n[s];if(Me(t)){const i=e[t];Z(i)&&mi(r,i)}else if(Z(t))mi(r,t.bind(n));else if(Ne(t))if(G(t))t.forEach(i=>h_(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&mi(r,i,t)}}function Ah(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>_a(l,c,o,!0)),_a(l,e,o)),Ne(e)&&i.set(e,l),l}function _a(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&_a(t,i,n,!0),r&&r.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Nw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Nw={data:Fd,props:Ud,emits:Ud,methods:ci,computed:ci,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:ci,directives:ci,watch:xw,provide:Fd,inject:Dw};function Fd(t,e){return e?t?function(){return Xe(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Dw(t,e){return ci(Zc(t),Zc(e))}function Zc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ci(t,e){return t?Xe(Object.create(null),t,e):e}function Ud(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Vd(t),Vd(e??{})):e}function xw(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=vt(t[s],e[s]);return n}function f_(){return{app:null,config:{isNativeTag:lI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ow=0;function Mw(t,e){return function(s,r=null){Z(s)||(s=Xe({},s)),r!=null&&!Ne(r)&&(r=null);const i=f_(),o=new Set;let a=!1;const l=i.app={_uid:Ow++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:a0,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=Ce(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,pl(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ya=l;try{return c()}finally{ya=null}}};return l}}let ya=null;function ia(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function Bt(t,e,n=!1){const s=Ge||rt;if(s||ya){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ya._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function Vw(t,e,n,s=!1){const r={},i={};pa(i,fl,1),t.propsDefaults=Object.create(null),d_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:qm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Lw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=he(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ll(t.emitsOptions,f))continue;const d=e[f];if(l)if(le(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const m=_n(f);r[m]=eu(l,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{d_(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Fr(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=eu(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&Dn(t,"set","$attrs")}function d_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(sa(l))continue;const c=e[l];let u;r&&le(r,u=_n(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ll(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=he(n),c=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=eu(r,l,h,c[h],t,!le(c,h))}}return o}function eu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Ar(r),s=c[n]=l.call(null,e),bs())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fr(n))&&(s=!0))}return s}function p_(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[f,d]=p_(h,e,!0);Xe(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ne(t)&&s.set(t,cr),cr;if(G(i))for(let u=0;u<i.length;u++){const h=_n(i[u]);Bd(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=_n(u);if(Bd(h)){const f=i[u],d=o[h]=G(f)||Z(f)?{type:f}:Xe({},f);if(d){const m=Hd(Boolean,d.type),y=Hd(String,d.type);d[0]=m>-1,d[1]=y<0||m<y,(m>-1||le(d,"default"))&&a.push(h)}}}const c=[o,a];return Ne(t)&&s.set(t,c),c}function Bd(t){return t[0]!=="$"}function $d(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jd(t,e){return $d(t)===$d(e)}function Hd(t,e){return G(e)?e.findIndex(n=>jd(n,t)):Z(e)&&jd(e,t)?0:-1}const g_=t=>t[0]==="_"||t==="$stable",Rh=t=>G(t)?t.map(ln):[ln(t)],Fw=(t,e,n)=>{if(e._n)return e;const s=Kn((...r)=>Rh(e(...r)),n);return s._c=!1,s},m_=(t,e,n)=>{const s=t._ctx;for(const r in t){if(g_(r))continue;const i=t[r];if(Z(i))e[r]=Fw(r,i,s);else if(i!=null){const o=Rh(i);e[r]=()=>o}}},__=(t,e)=>{const n=Rh(e);t.slots.default=()=>n},Uw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),pa(e,"_",n)):m_(e,t.slots={})}else t.slots={},e&&__(t,e);pa(t.slots,fl,1)},Bw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,m_(e,r)),o=e}else e&&(__(t,e),o={default:1});if(i)for(const a in r)!g_(a)&&!(a in o)&&delete r[a]};function tu(t,e,n,s,r=!1){if(G(t)){t.forEach((f,d)=>tu(f,e&&(G(e)?e[d]:e),n,s,r));return}if(_i(s)&&!r)return;const i=s.shapeFlag&4?pl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,le(h,c)&&(h[c]=null)):st(c)&&(c.value=null)),Z(l))Qn(l,a,12,[o,u]);else{const f=Me(l),d=st(l);if(f||d){const m=()=>{if(t.f){const y=f?le(h,l)?h[l]:u[l]:l.value;r?G(y)&&ch(y,i):G(y)?y.includes(i)||y.push(i):f?(u[l]=[i],le(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,le(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,wt(m,n)):m()}}}const wt=hw;function $w(t){return jw(t)}function jw(t,e){const n=Wc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Qt,insertStaticContent:m}=t,y=(p,g,_,E=null,w=null,C=null,V=!1,N=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!ei(p,g)&&(E=I(p),It(p,w,C,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:S,ref:H,shapeFlag:F}=g;switch(S){case hl:v(p,g,_,E);break;case ts:T(p,g,_,E);break;case oa:p==null&&b(g,_,E,V);break;case At:us(p,g,_,E,w,C,V,N,D);break;default:F&1?K(p,g,_,E,w,C,V,N,D):F&6?sn(p,g,_,E,w,C,V,N,D):(F&64||F&128)&&S.process(p,g,_,E,w,C,V,N,D,x)}H!=null&&w&&tu(H,p&&p.ref,C,g||p,!g)},v=(p,g,_,E)=>{if(p==null)s(g.el=a(g.children),_,E);else{const w=g.el=p.el;g.children!==p.children&&c(w,g.children)}},T=(p,g,_,E)=>{p==null?s(g.el=l(g.children||""),_,E):g.el=p.el},b=(p,g,_,E)=>{[p.el,p.anchor]=m(p.children,g,_,E,p.el,p.anchor)},k=({el:p,anchor:g},_,E)=>{let w;for(;p&&p!==g;)w=f(p),s(p,_,E),p=w;s(g,_,E)},A=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=f(p),r(p),p=_;r(g)},K=(p,g,_,E,w,C,V,N,D)=>{V=V||g.type==="svg",p==null?j(g,_,E,w,C,V,N,D):Ve(p,g,w,C,V,N,D)},j=(p,g,_,E,w,C,V,N)=>{let D,S;const{type:H,props:F,shapeFlag:q,transition:Y,dirs:te}=p;if(D=p.el=o(p.type,C,F&&F.is,F),q&8?u(D,p.children):q&16&&ae(p.children,D,null,E,w,C&&H!=="foreignObject",V,N),te&&hs(p,null,E,"created"),ee(D,p,p.scopeId,V,E),F){for(const ye in F)ye!=="value"&&!sa(ye)&&i(D,ye,null,F[ye],C,p.children,E,w,ot);"value"in F&&i(D,"value",null,F.value),(S=F.onVnodeBeforeMount)&&an(S,E,p)}te&&hs(p,null,E,"beforeMount");const Te=(!w||w&&!w.pendingBranch)&&Y&&!Y.persisted;Te&&Y.beforeEnter(D),s(D,g,_),((S=F&&F.onVnodeMounted)||Te||te)&&wt(()=>{S&&an(S,E,p),Te&&Y.enter(D),te&&hs(p,null,E,"mounted")},w)},ee=(p,g,_,E,w)=>{if(_&&d(p,_),E)for(let C=0;C<E.length;C++)d(p,E[C]);if(w){let C=w.subTree;if(g===C){const V=w.vnode;ee(p,V,V.scopeId,V.slotScopeIds,w.parent)}}},ae=(p,g,_,E,w,C,V,N,D=0)=>{for(let S=D;S<p.length;S++){const H=p[S]=N?qn(p[S]):ln(p[S]);y(null,H,g,_,E,w,C,V,N)}},Ve=(p,g,_,E,w,C,V)=>{const N=g.el=p.el;let{patchFlag:D,dynamicChildren:S,dirs:H}=g;D|=p.patchFlag&16;const F=p.props||Ae,q=g.props||Ae;let Y;_&&fs(_,!1),(Y=q.onVnodeBeforeUpdate)&&an(Y,_,g,p),H&&hs(g,p,_,"beforeUpdate"),_&&fs(_,!0);const te=w&&g.type!=="foreignObject";if(S?Oe(p.dynamicChildren,S,N,_,E,te,C):V||fe(p,g,N,null,_,E,te,C,!1),D>0){if(D&16)Pt(N,g,F,q,_,E,w);else if(D&2&&F.class!==q.class&&i(N,"class",null,q.class,w),D&4&&i(N,"style",F.style,q.style,w),D&8){const Te=g.dynamicProps;for(let ye=0;ye<Te.length;ye++){const Le=Te[ye],Ht=F[Le],Ys=q[Le];(Ys!==Ht||Le==="value")&&i(N,Le,Ht,Ys,w,p.children,_,E,ot)}}D&1&&p.children!==g.children&&u(N,g.children)}else!V&&S==null&&Pt(N,g,F,q,_,E,w);((Y=q.onVnodeUpdated)||H)&&wt(()=>{Y&&an(Y,_,g,p),H&&hs(g,p,_,"updated")},E)},Oe=(p,g,_,E,w,C,V)=>{for(let N=0;N<g.length;N++){const D=p[N],S=g[N],H=D.el&&(D.type===At||!ei(D,S)||D.shapeFlag&70)?h(D.el):_;y(D,S,H,null,E,w,C,V,!0)}},Pt=(p,g,_,E,w,C,V)=>{if(_!==E){if(_!==Ae)for(const N in _)!sa(N)&&!(N in E)&&i(p,N,_[N],null,V,g.children,w,C,ot);for(const N in E){if(sa(N))continue;const D=E[N],S=_[N];D!==S&&N!=="value"&&i(p,N,S,D,V,g.children,w,C,ot)}"value"in E&&i(p,"value",_.value,E.value)}},us=(p,g,_,E,w,C,V,N,D)=>{const S=g.el=p?p.el:a(""),H=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:Y}=g;Y&&(N=N?N.concat(Y):Y),p==null?(s(S,_,E),s(H,_,E),ae(g.children,_,H,w,C,V,N,D)):F>0&&F&64&&q&&p.dynamicChildren?(Oe(p.dynamicChildren,q,_,w,C,V,N),(g.key!=null||w&&g===w.subTree)&&Ch(p,g,!0)):fe(p,g,_,H,w,C,V,N,D)},sn=(p,g,_,E,w,C,V,N,D)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?w.ctx.activate(g,_,E,V,D):Jr(g,_,E,w,C,V,D):zs(p,g,D)},Jr=(p,g,_,E,w,C,V)=>{const N=p.component=Jw(p,E,w);if(o_(p)&&(N.ctx.renderer=x),Zw(N),N.asyncDep){if(w&&w.registerDep(N,We),!p.el){const D=N.subTree=Ce(ts);T(null,D,g,_)}return}We(N,p,g,_,w,C,V)},zs=(p,g,_)=>{const E=g.component=p.component;if(lw(p,g,_))if(E.asyncDep&&!E.asyncResolved){Ee(E,g,_);return}else E.next=g,nw(E.update),E.update();else g.el=p.el,E.vnode=g},We=(p,g,_,E,w,C,V)=>{const N=()=>{if(p.isMounted){let{next:H,bu:F,u:q,parent:Y,vnode:te}=p,Te=H,ye;fs(p,!1),H?(H.el=te.el,Ee(p,H,V)):H=te,F&&ra(F),(ye=H.props&&H.props.onVnodeBeforeUpdate)&&an(ye,Y,H,te),fs(p,!0);const Le=rc(p),Ht=p.subTree;p.subTree=Le,y(Ht,Le,h(Ht.el),I(Ht),p,w,C),H.el=Le.el,Te===null&&cw(p,Le.el),q&&wt(q,w),(ye=H.props&&H.props.onVnodeUpdated)&&wt(()=>an(ye,Y,H,te),w)}else{let H;const{el:F,props:q}=g,{bm:Y,m:te,parent:Te}=p,ye=_i(g);if(fs(p,!1),Y&&ra(Y),!ye&&(H=q&&q.onVnodeBeforeMount)&&an(H,Te,g),fs(p,!0),F&&de){const Le=()=>{p.subTree=rc(p),de(F,p.subTree,p,w,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Le()):Le()}else{const Le=p.subTree=rc(p);y(null,Le,_,E,p,w,C),g.el=Le.el}if(te&&wt(te,w),!ye&&(H=q&&q.onVnodeMounted)){const Le=g;wt(()=>an(H,Te,Le),w)}(g.shapeFlag&256||Te&&_i(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&wt(p.a,w),p.isMounted=!0,g=_=E=null}},D=p.effect=new dh(N,()=>Eh(S),p.scope),S=p.update=()=>D.run();S.id=p.uid,fs(p,!0),S()},Ee=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,Lw(p,g.props,E,_),Bw(p,g.children,_),Ur(),xd(),Br()},fe=(p,g,_,E,w,C,V,N,D=!1)=>{const S=p&&p.children,H=p?p.shapeFlag:0,F=g.children,{patchFlag:q,shapeFlag:Y}=g;if(q>0){if(q&128){Bn(S,F,_,E,w,C,V,N,D);return}else if(q&256){Rn(S,F,_,E,w,C,V,N,D);return}}Y&8?(H&16&&ot(S,w,C),F!==S&&u(_,F)):H&16?Y&16?Bn(S,F,_,E,w,C,V,N,D):ot(S,w,C,!0):(H&8&&u(_,""),Y&16&&ae(F,_,E,w,C,V,N,D))},Rn=(p,g,_,E,w,C,V,N,D)=>{p=p||cr,g=g||cr;const S=p.length,H=g.length,F=Math.min(S,H);let q;for(q=0;q<F;q++){const Y=g[q]=D?qn(g[q]):ln(g[q]);y(p[q],Y,_,null,w,C,V,N,D)}S>H?ot(p,w,C,!0,!1,F):ae(g,_,E,w,C,V,N,D,F)},Bn=(p,g,_,E,w,C,V,N,D)=>{let S=0;const H=g.length;let F=p.length-1,q=H-1;for(;S<=F&&S<=q;){const Y=p[S],te=g[S]=D?qn(g[S]):ln(g[S]);if(ei(Y,te))y(Y,te,_,null,w,C,V,N,D);else break;S++}for(;S<=F&&S<=q;){const Y=p[F],te=g[q]=D?qn(g[q]):ln(g[q]);if(ei(Y,te))y(Y,te,_,null,w,C,V,N,D);else break;F--,q--}if(S>F){if(S<=q){const Y=q+1,te=Y<H?g[Y].el:E;for(;S<=q;)y(null,g[S]=D?qn(g[S]):ln(g[S]),_,te,w,C,V,N,D),S++}}else if(S>q)for(;S<=F;)It(p[S],w,C,!0),S++;else{const Y=S,te=S,Te=new Map;for(S=te;S<=q;S++){const kt=g[S]=D?qn(g[S]):ln(g[S]);kt.key!=null&&Te.set(kt.key,S)}let ye,Le=0;const Ht=q-te+1;let Ys=!1,Id=0;const Zr=new Array(Ht);for(S=0;S<Ht;S++)Zr[S]=0;for(S=Y;S<=F;S++){const kt=p[S];if(Le>=Ht){It(kt,w,C,!0);continue}let on;if(kt.key!=null)on=Te.get(kt.key);else for(ye=te;ye<=q;ye++)if(Zr[ye-te]===0&&ei(kt,g[ye])){on=ye;break}on===void 0?It(kt,w,C,!0):(Zr[on-te]=S+1,on>=Id?Id=on:Ys=!0,y(kt,g[on],_,null,w,C,V,N,D),Le++)}const wd=Ys?Hw(Zr):cr;for(ye=wd.length-1,S=Ht-1;S>=0;S--){const kt=te+S,on=g[kt],Ad=kt+1<H?g[kt+1].el:E;Zr[S]===0?y(null,on,_,Ad,w,C,V,N,D):Ys&&(ye<0||S!==wd[ye]?rn(on,_,Ad,2):ye--)}}},rn=(p,g,_,E,w=null)=>{const{el:C,type:V,transition:N,children:D,shapeFlag:S}=p;if(S&6){rn(p.component.subTree,g,_,E);return}if(S&128){p.suspense.move(g,_,E);return}if(S&64){V.move(p,g,_,x);return}if(V===At){s(C,g,_);for(let F=0;F<D.length;F++)rn(D[F],g,_,E);s(p.anchor,g,_);return}if(V===oa){k(p,g,_);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),s(C,g,_),wt(()=>N.enter(C),w);else{const{leave:F,delayLeave:q,afterLeave:Y}=N,te=()=>s(C,g,_),Te=()=>{F(C,()=>{te(),Y&&Y()})};q?q(C,te,Te):Te()}else s(C,g,_)},It=(p,g,_,E=!1,w=!1)=>{const{type:C,props:V,ref:N,children:D,dynamicChildren:S,shapeFlag:H,patchFlag:F,dirs:q}=p;if(N!=null&&tu(N,null,_,p,!0),H&256){g.ctx.deactivate(p);return}const Y=H&1&&q,te=!_i(p);let Te;if(te&&(Te=V&&V.onVnodeBeforeUnmount)&&an(Te,g,p),H&6)xo(p.component,_,E);else{if(H&128){p.suspense.unmount(_,E);return}Y&&hs(p,null,g,"beforeUnmount"),H&64?p.type.remove(p,g,_,w,x,E):S&&(C!==At||F>0&&F&64)?ot(S,g,_,!1,!0):(C===At&&F&384||!w&&H&16)&&ot(D,g,_),E&&Gs(p)}(te&&(Te=V&&V.onVnodeUnmounted)||Y)&&wt(()=>{Te&&an(Te,g,p),Y&&hs(p,null,g,"unmounted")},_)},Gs=p=>{const{type:g,el:_,anchor:E,transition:w}=p;if(g===At){Qs(_,E);return}if(g===oa){A(p);return}const C=()=>{r(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:V,delayLeave:N}=w,D=()=>V(_,C);N?N(p.el,C,D):D()}else C()},Qs=(p,g)=>{let _;for(;p!==g;)_=f(p),r(p),p=_;r(g)},xo=(p,g,_)=>{const{bum:E,scope:w,update:C,subTree:V,um:N}=p;E&&ra(E),w.stop(),C&&(C.active=!1,It(V,p,g,_)),N&&wt(N,g),wt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ot=(p,g,_,E=!1,w=!1,C=0)=>{for(let V=C;V<p.length;V++)It(p[V],g,_,E,w)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),L=(p,g,_)=>{p==null?g._vnode&&It(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,_),xd(),n_(),g._vnode=p},x={p:y,um:It,m:rn,r:Gs,mt:Jr,mc:ae,pc:fe,pbc:Oe,n:I,o:t};let $,de;return e&&([$,de]=e(x)),{render:L,hydrate:$,createApp:Mw(L,$)}}function fs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ch(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=qn(r[i]),a.el=o.el),n||Ch(o,a)),a.type===hl&&(a.el=o.el)}}function Hw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qw=t=>t.__isTeleport,vi=t=>t&&(t.disabled||t.disabled===""),qd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,nu=(t,e)=>{const n=t&&t.to;return Me(n)?e?e(n):null:n},Ww={__isTeleport:!0,process(t,e,n,s,r,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:m,createText:y,createComment:v}}=c,T=vi(e.props);let{shapeFlag:b,children:k,dynamicChildren:A}=e;if(t==null){const K=e.el=y(""),j=e.anchor=y("");d(K,n,s),d(j,n,s);const ee=e.target=nu(e.props,m),ae=e.targetAnchor=y("");ee&&(d(ae,ee),o=o||qd(ee));const Ve=(Oe,Pt)=>{b&16&&u(k,Oe,Pt,r,i,o,a,l)};T?Ve(n,j):ee&&Ve(ee,ae)}else{e.el=t.el;const K=e.anchor=t.anchor,j=e.target=t.target,ee=e.targetAnchor=t.targetAnchor,ae=vi(t.props),Ve=ae?n:j,Oe=ae?K:ee;if(o=o||qd(j),A?(f(t.dynamicChildren,A,Ve,r,i,o,a),Ch(t,e,!0)):l||h(t,e,Ve,Oe,r,i,o,a,!1),T)ae||Bo(e,n,K,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Pt=e.target=nu(e.props,m);Pt&&Bo(e,Pt,null,c,0)}else ae&&Bo(e,j,ee,c,1)}y_(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!vi(f))&&(i(c),a&16))for(let d=0;d<l.length;d++){const m=l[d];r(m,e,n,!0,!!m.dynamicChildren)}},move:Bo,hydrate:Kw};function Bo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||vi(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);h&&s(a,e,n)}function Kw(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=nu(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(vi(e.props))e.anchor=c(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,r,i)}y_(e)}return e.anchor&&o(e.anchor)}const zw=Ww;function y_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const At=Symbol.for("v-fgt"),hl=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),Ei=[];let Kt=null;function Ye(t=!1){Ei.push(Kt=t?null:[])}function Gw(){Ei.pop(),Kt=Ei[Ei.length-1]||null}let Li=1;function Wd(t){Li+=t}function v_(t){return t.dynamicChildren=Li>0?Kt||cr:null,Gw(),Li>0&&Kt&&Kt.push(t),t}function xt(t,e,n,s,r,i){return v_(Ie(t,e,n,s,r,i,!0))}function ao(t,e,n,s,r){return v_(Ce(t,e,n,s,r,!0))}function va(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const fl="__vInternal",E_=({key:t})=>t??null,aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||st(t)||Z(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function Ie(t,e=null,n=null,s=0,r=null,i=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&E_(e),ref:e&&aa(e),scopeId:cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rt};return a?(Sh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),Li>0&&!o&&Kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Kt.push(l),l}const Ce=Qw;function Qw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Rw)&&(t=ts),va(t)){const a=wr(t,e,!0);return n&&Sh(a,n),Li>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(t)]=a:Kt.push(a)),a.patchFlag|=-2,a}if(r0(t)&&(t=t.__vccOpts),e){e=T_(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=Bs(a)),Ne(l)&&(Km(l)&&!G(l)&&(l=Xe({},l)),e.style=rl(l))}const o=Me(t)?1:uw(t)?128:qw(t)?64:Ne(t)?4:Z(t)?2:0;return Ie(t,e,n,s,r,o,i,!0)}function T_(t){return t?Km(t)||fl in t?Xe({},t):t:null}function wr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?w_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&E_(a),ref:e&&e.ref?n&&r?G(r)?r.concat(aa(e)):[r,aa(e)]:aa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function dl(t=" ",e=0){return Ce(hl,null,t,e)}function I_(t="",e=!1){return e?(Ye(),ao(ts,null,t)):Ce(ts,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ce(ts):G(t)?Ce(At,null,t.slice()):typeof t=="object"?qn(t):Ce(hl,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wr(t)}function Sh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Sh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(fl in e)?e._ctx=rt:r===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[dl(e)]):n=8);t.children=e,t.shapeFlag|=n}function w_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Bs([e.class,s.class]));else if(r==="style")e.style=rl([e.style,s.style]);else if(el(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function an(t,e,n,s=null){Xt(t,e,7,[n,s])}const Yw=f_();let Xw=0;function Jw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yw,i={uid:Xw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p_(s,r),emitsOptions:r_(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iw.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const bh=()=>Ge||rt;let Ph,Js,Kd="__VUE_INSTANCE_SETTERS__";(Js=Wc()[Kd])||(Js=Wc()[Kd]=[]),Js.push(t=>Ge=t),Ph=t=>{Js.length>1?Js.forEach(e=>e(t)):Js[0](t)};const Ar=t=>{Ph(t),t.scope.on()},bs=()=>{Ge&&Ge.scope.off(),Ph(null)};function A_(t){return t.vnode.shapeFlag&4}let Fi=!1;function Zw(t,e=!1){Fi=e;const{props:n,children:s}=t.vnode,r=A_(t);Vw(t,n,r,e),Uw(t,s);const i=r?e0(t,e):void 0;return Fi=!1,i}function e0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zm(new Proxy(t.ctx,bw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?n0(t):null;Ar(t),Ur();const i=Qn(s,t,0,[t.props,r]);if(Br(),bs(),Sm(i)){if(i.then(bs,bs),e)return i.then(o=>{zd(t,o,e)}).catch(o=>{al(o,t,0)});t.asyncDep=i}else zd(t,i,e)}else R_(t,e)}function zd(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Jm(e)),R_(t,n)}let Gd;function R_(t,e,n){const s=t.type;if(!t.render){if(!e&&Gd&&!s.render){const r=s.template||Ah(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Xe(Xe({isCustomElement:i,delimiters:a},o),l);s.render=Gd(r,c)}}t.render=s.render||Qt}Ar(t),Ur(),Pw(t),Br(),bs()}function t0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}}))}function n0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return t0(t)},slots:t.slots,emit:t.emit,expose:e}}function pl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jm(zm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}}))}function s0(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function r0(t){return Z(t)&&"__vccOpts"in t}const $e=(t,e)=>ZI(t,e,Fi);function C_(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!G(e)?va(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&va(n)&&(n=[n]),Ce(t,e,n))}const i0=Symbol.for("v-scx"),o0=()=>Bt(i0),a0="3.3.4",l0="http://www.w3.org/2000/svg",vs=typeof document<"u"?document:null,Qd=vs&&vs.createElement("template"),c0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?vs.createElementNS(l0,t):vs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>vs.createTextNode(t),createComment:t=>vs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Qd.innerHTML=s?`<svg>${t}</svg>`:t;const a=Qd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h0(t,e,n){const s=t.style,r=Me(n);if(n&&!r){if(e&&!Me(e))for(const i in e)n[i]==null&&su(s,i,"");for(const i in n)su(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Yd=/\s*!important$/;function su(t,e,n){if(G(n))n.forEach(s=>su(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=f0(t,e);Yd.test(n)?t.setProperty(Fr(s),n.replace(Yd,""),"important"):t[s]=n}}const Xd=["Webkit","Moz","ms"],oc={};function f0(t,e){const n=oc[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return oc[e]=s;s=sl(s);for(let r=0;r<Xd.length;r++){const i=Xd[r]+s;if(i in t)return oc[e]=i}return e}const Jd="http://www.w3.org/1999/xlink";function d0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jd,e.slice(6,e.length)):t.setAttributeNS(Jd,e,n);else{const i=EI(e);n==null||i&&!km(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function p0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=km(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function tr(t,e,n,s){t.addEventListener(e,n,s)}function g0(t,e,n,s){t.removeEventListener(e,n,s)}function m0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=_0(e);if(s){const c=i[e]=E0(s,r);tr(t,a,c,l)}else o&&(g0(t,a,o,l),i[e]=void 0)}}const Zd=/(?:Once|Passive|Capture)$/;function _0(t){let e;if(Zd.test(t)){e={};let s;for(;s=t.match(Zd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ac=0;const y0=Promise.resolve(),v0=()=>ac||(y0.then(()=>ac=0),ac=Date.now());function E0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(T0(s,n.value),e,5,[s])};return n.value=t,n.attached=v0(),n}function T0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ep=/^on[a-z]/,I0=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?u0(t,s,r):e==="style"?h0(t,n,s):el(e)?lh(e)||m0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w0(t,e,s,r))?p0(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),d0(t,e,s,r))};function w0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ep.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ep.test(e)&&Me(n)?!1:e in t}function A0(t){const e=bh();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>iu(i,r))},s=()=>{const r=t(e.proxy);ru(e.subTree,r),n(r)};fw(s),Ih(()=>{const r=new MutationObserver(s);r.observe(e.subTree.el.parentNode,{childList:!0}),wh(()=>r.disconnect())})}function ru(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ru(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)iu(t.el,e);else if(t.type===At)t.children.forEach(n=>ru(n,e));else if(t.type===oa){let{el:n,anchor:s}=t;for(;n&&(iu(n,e),n!==s);)n=n.nextSibling}}function iu(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const tp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ra(e,n):e};function R0(t){t.target.composing=!0}function np(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const FM={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=tp(r);const i=s||r.props&&r.props.type==="number";tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qc(a)),t._assign(a)}),n&&tr(t,"change",()=>{t.value=t.value.trim()}),e||(tr(t,"compositionstart",R0),tr(t,"compositionend",np),tr(t,"change",np))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=tp(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&qc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},C0=Xe({patchProp:I0},c0);let sp;function S0(){return sp||(sp=$w(C0))}const b0=(...t)=>{const e=S0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=P0(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function P0(t){return Me(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nr=typeof window<"u";function k0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function lc(t,e){const n={};for(const s in e){const r=e[s];n[s]=en(r)?r.map(t):t(r)}return n}const Ti=()=>{},en=Array.isArray,N0=/\/$/,D0=t=>t.replace(N0,"");function cc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=V0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function x0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function O0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Rr(e.matched[s],n.matched[r])&&S_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function S_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!M0(t[n],e[n]))return!1;return!0}function M0(t,e){return en(t)?ip(t,e):en(e)?ip(e,t):t===e}function ip(t,e){return en(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function V0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var Ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ii||(Ii={}));function L0(t){if(!t)if(nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),D0(t)}const F0=/^[^#]+#/;function U0(t,e){return t.replace(F0,"#")+e}function B0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function $0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=B0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function op(t,e){return(history.state?history.state.position-e:-1)+t}const ou=new Map;function j0(t,e){ou.set(t,e)}function H0(t){const e=ou.get(t);return ou.delete(t),e}let q0=()=>location.protocol+"//"+location.host;function b_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),rp(l,"")}return rp(n,t)+s+r}function W0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=b_(t,location),m=n.value,y=e.value;let v=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}v=y?f.position-y.position:0}else s(d);r.forEach(T=>{T(n.value,m,{delta:v,type:Ui.pop,direction:v?v>0?Ii.forward:Ii.back:Ii.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:gl()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ap(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?gl():null}}function K0(t){const{history:e,location:n}=window,s={value:b_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:q0()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=ge({},e.state,ap(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:gl()});i(u.current,u,!0);const h=ge({},ap(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function z0(t){t=L0(t);const e=K0(t),n=W0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:U0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function G0(t){return typeof t=="string"||t&&typeof t=="object"}function P_(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},k_=Symbol("");var lp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lp||(lp={}));function Cr(t,e){return ge(new Error,{type:t,[k_]:!0},e)}function Cn(t,e){return t instanceof Error&&k_ in t&&(e==null||!!(t.type&e))}const cp="[^/]+?",Q0={sensitive:!1,strict:!1,start:!0,end:!0},Y0=/[.+*?^${}()[\]/\\]/g;function X0(t,e){const n=ge({},Q0,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Y0,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:v,regexp:T}=f;i.push({name:m,repeatable:y,optional:v});const b=T||cp;if(b!==cp){d+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+A.message)}}let k=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),r+=k,d+=20,v&&(d+=-8),y&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:v}=d,T=m in c?c[m]:"";if(en(T)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=en(T)?T.join("/"):T;if(!b)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function J0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Z0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=J0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(up(s))return 1;if(up(r))return-1}return r.length-s.length}function up(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eA={type:0,value:""},tA=/[a-zA-Z0-9_]/;function nA(t){if(!t)return[[]];if(t==="/")return[[eA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:tA.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function sA(t,e,n){const s=X0(nA(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rA(t,e){const n=[],s=new Map;e=dp({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=iA(u);m.aliasOf=f&&f.record;const y=dp(e,u),v=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of k)v.push(ge({},m,{components:f?f.record.components:m.components,path:A,aliasOf:f?f.record:m}))}let T,b;for(const k of v){const{path:A}=k;if(h&&A[0]!=="/"){const K=h.record.path,j=K[K.length-1]==="/"?"":"/";k.path=h.record.path+(A&&j+A)}if(T=sA(k,h,y),f?f.alias.push(T):(b=b||T,b!==T&&b.alias.push(T),d&&u.name&&!fp(T)&&o(u.name)),m.children){const K=m.children;for(let j=0;j<K.length;j++)i(K[j],T,f&&f.children[j])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return b?()=>{o(b)}:Ti}function o(u){if(P_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Z0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!N_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fp(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},m,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Cr(1,{location:u});y=f.record.name,d=ge(hp(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&hp(u.params,f.keys.map(b=>b.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(b=>b.re.test(m)),f&&(d=f.parse(m),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Cr(1,{location:u,currentLocation:h});y=f.record.name,d=ge({},h.params,u.params),m=f.stringify(d)}const v=[];let T=f;for(;T;)v.unshift(T.record),T=T.parent;return{name:y,path:m,params:d,matched:v,meta:aA(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function hp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function iA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function fp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aA(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function dp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function N_(t,e){return e.children.some(n=>n===t||N_(t,n))}const D_=/#/g,lA=/&/g,cA=/\//g,uA=/=/g,hA=/\?/g,x_=/\+/g,fA=/%5B/g,dA=/%5D/g,O_=/%5E/g,pA=/%60/g,M_=/%7B/g,gA=/%7C/g,V_=/%7D/g,mA=/%20/g;function kh(t){return encodeURI(""+t).replace(gA,"|").replace(fA,"[").replace(dA,"]")}function _A(t){return kh(t).replace(M_,"{").replace(V_,"}").replace(O_,"^")}function au(t){return kh(t).replace(x_,"%2B").replace(mA,"+").replace(D_,"%23").replace(lA,"%26").replace(pA,"`").replace(M_,"{").replace(V_,"}").replace(O_,"^")}function yA(t){return au(t).replace(uA,"%3D")}function vA(t){return kh(t).replace(D_,"%23").replace(hA,"%3F")}function EA(t){return t==null?"":vA(t).replace(cA,"%2F")}function Ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(x_," "),o=i.indexOf("="),a=Ea(o<0?i:i.slice(0,o)),l=o<0?null:Ea(i.slice(o+1));if(a in e){let c=e[a];en(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function pp(t){let e="";for(let n in t){const s=t[n];if(n=yA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(s)?s.map(i=>i&&au(i)):[s&&au(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=en(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const wA=Symbol(""),gp=Symbol(""),ml=Symbol(""),L_=Symbol(""),lu=Symbol("");function ti(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Cr(4,{from:n,to:e})):h instanceof Error?a(h):G0(h)?a(Cr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function uc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(AA(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Wn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=k0(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Wn(f,n,s,i,o)()}))}}return r}function AA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mp(t){const e=Bt(ml),n=Bt(L_),s=$e(()=>e.resolve(Be(t.to))),r=$e(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rr.bind(null,u));if(f>-1)return f;const d=_p(l[c-2]);return c>1&&_p(u)===d&&h[h.length-1].path!==d?h.findIndex(Rr.bind(null,l[c-2])):f}),i=$e(()=>r.value>-1&&bA(n.params,s.value.params)),o=$e(()=>r.value>-1&&r.value===n.matched.length-1&&S_(n.params,s.value.params));function a(l={}){return SA(l)?e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(Ti):Promise.resolve()}return{route:s,href:$e(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const RA=wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mp,setup(t,{slots:e}){const n=ol(mp(t)),{options:s}=Bt(ml),r=$e(()=>({[yp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:C_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),CA=RA;function SA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!en(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function _p(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yp=(t,e,n)=>t??e??n,PA=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Bt(lu),r=$e(()=>t.route||s.value),i=Bt(gp,0),o=$e(()=>{let c=Be(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=$e(()=>r.value.matched[o.value]);ia(gp,$e(()=>o.value+1)),ia(wA,a),ia(lu,r);const l=Yt();return mi(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Rr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return vp(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,v=C_(f,ge({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return vp(n.default,{Component:v,route:c})||v}}});function vp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const F_=PA;function kA(t){const e=rA(t.routes,t),n=t.parseQuery||TA,s=t.stringifyQuery||pp,r=t.history,i=ti(),o=ti(),a=ti(),l=Ym(jn);let c=jn;nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lc.bind(null,I=>""+I),h=lc.bind(null,EA),f=lc.bind(null,Ea);function d(I,L){let x,$;return P_(I)?(x=e.getRecordMatcher(I),$=L):$=I,e.addRoute($,x)}function m(I){const L=e.getRecordMatcher(I);L&&e.removeRoute(L)}function y(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function T(I,L){if(L=ge({},L||l.value),typeof I=="string"){const _=cc(n,I,L.path),E=e.resolve({path:_.path},L),w=r.createHref(_.fullPath);return ge(_,E,{params:f(E.params),hash:Ea(_.hash),redirectedFrom:void 0,href:w})}let x;if("path"in I)x=ge({},I,{path:cc(n,I.path,L.path).path});else{const _=ge({},I.params);for(const E in _)_[E]==null&&delete _[E];x=ge({},I,{params:h(_)}),L.params=h(L.params)}const $=e.resolve(x,L),de=I.hash||"";$.params=u(f($.params));const p=x0(s,ge({},I,{hash:_A(de),path:$.path})),g=r.createHref(p);return ge({fullPath:p,hash:de,query:s===pp?IA(I.query):I.query||{}},$,{redirectedFrom:void 0,href:g})}function b(I){return typeof I=="string"?cc(n,I,l.value.path):ge({},I)}function k(I,L){if(c!==I)return Cr(8,{from:L,to:I})}function A(I){return ee(I)}function K(I){return A(ge(b(I),{replace:!0}))}function j(I){const L=I.matched[I.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let $=typeof x=="function"?x(I):x;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=b($):{path:$},$.params={}),ge({query:I.query,hash:I.hash,params:"path"in $?{}:I.params},$)}}function ee(I,L){const x=c=T(I),$=l.value,de=I.state,p=I.force,g=I.replace===!0,_=j(x);if(_)return ee(ge(b(_),{state:typeof _=="object"?ge({},de,_.state):de,force:p,replace:g}),L||x);const E=x;E.redirectedFrom=L;let w;return!p&&O0(s,$,x)&&(w=Cr(16,{to:E,from:$}),rn($,$,!0,!1)),(w?Promise.resolve(w):Oe(E,$)).catch(C=>Cn(C)?Cn(C,2)?C:Bn(C):fe(C,E,$)).then(C=>{if(C){if(Cn(C,2))return ee(ge({replace:g},b(C.to),{state:typeof C.to=="object"?ge({},de,C.to.state):de,force:p}),L||E)}else C=us(E,$,!0,g,de);return Pt(E,$,C),C})}function ae(I,L){const x=k(I,L);return x?Promise.reject(x):Promise.resolve()}function Ve(I){const L=Qs.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(I):I()}function Oe(I,L){let x;const[$,de,p]=NA(I,L);x=uc($.reverse(),"beforeRouteLeave",I,L);for(const _ of $)_.leaveGuards.forEach(E=>{x.push(Wn(E,I,L))});const g=ae.bind(null,I,L);return x.push(g),ot(x).then(()=>{x=[];for(const _ of i.list())x.push(Wn(_,I,L));return x.push(g),ot(x)}).then(()=>{x=uc(de,"beforeRouteUpdate",I,L);for(const _ of de)_.updateGuards.forEach(E=>{x.push(Wn(E,I,L))});return x.push(g),ot(x)}).then(()=>{x=[];for(const _ of p)if(_.beforeEnter)if(en(_.beforeEnter))for(const E of _.beforeEnter)x.push(Wn(E,I,L));else x.push(Wn(_.beforeEnter,I,L));return x.push(g),ot(x)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),x=uc(p,"beforeRouteEnter",I,L),x.push(g),ot(x))).then(()=>{x=[];for(const _ of o.list())x.push(Wn(_,I,L));return x.push(g),ot(x)}).catch(_=>Cn(_,8)?_:Promise.reject(_))}function Pt(I,L,x){a.list().forEach($=>Ve(()=>$(I,L,x)))}function us(I,L,x,$,de){const p=k(I,L);if(p)return p;const g=L===jn,_=nr?history.state:{};x&&($||g?r.replace(I.fullPath,ge({scroll:g&&_&&_.scroll},de)):r.push(I.fullPath,de)),l.value=I,rn(I,L,x,g),Bn()}let sn;function Jr(){sn||(sn=r.listen((I,L,x)=>{if(!xo.listening)return;const $=T(I),de=j($);if(de){ee(ge(de,{replace:!0}),$).catch(Ti);return}c=$;const p=l.value;nr&&j0(op(p.fullPath,x.delta),gl()),Oe($,p).catch(g=>Cn(g,12)?g:Cn(g,2)?(ee(g.to,$).then(_=>{Cn(_,20)&&!x.delta&&x.type===Ui.pop&&r.go(-1,!1)}).catch(Ti),Promise.reject()):(x.delta&&r.go(-x.delta,!1),fe(g,$,p))).then(g=>{g=g||us($,p,!1),g&&(x.delta&&!Cn(g,8)?r.go(-x.delta,!1):x.type===Ui.pop&&Cn(g,20)&&r.go(-1,!1)),Pt($,p,g)}).catch(Ti)}))}let zs=ti(),We=ti(),Ee;function fe(I,L,x){Bn(I);const $=We.list();return $.length?$.forEach(de=>de(I,L,x)):console.error(I),Promise.reject(I)}function Rn(){return Ee&&l.value!==jn?Promise.resolve():new Promise((I,L)=>{zs.add([I,L])})}function Bn(I){return Ee||(Ee=!I,Jr(),zs.list().forEach(([L,x])=>I?x(I):L()),zs.reset()),I}function rn(I,L,x,$){const{scrollBehavior:de}=t;if(!nr||!de)return Promise.resolve();const p=!x&&H0(op(I.fullPath,0))||($||!x)&&history.state&&history.state.scroll||null;return e_().then(()=>de(I,L,p)).then(g=>g&&$0(g)).catch(g=>fe(g,I,L))}const It=I=>r.go(I);let Gs;const Qs=new Set,xo={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:v,getRoutes:y,resolve:T,options:t,push:A,replace:K,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:Rn,install(I){const L=this;I.component("RouterLink",CA),I.component("RouterView",F_),I.config.globalProperties.$router=L,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(l)}),nr&&!Gs&&l.value===jn&&(Gs=!0,A(r.location).catch(de=>{}));const x={};for(const de in jn)Object.defineProperty(x,de,{get:()=>l.value[de],enumerable:!0});I.provide(ml,L),I.provide(L_,qm(x)),I.provide(lu,l);const $=I.unmount;Qs.add(I),I.unmount=function(){Qs.delete(I),Qs.size<1&&(c=jn,sn&&sn(),sn=null,l.value=jn,Gs=!1,Ee=!1),$()}}};function ot(I){return I.reduce((L,x)=>L.then(()=>Ve(x)),Promise.resolve())}return xo}function NA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Rr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Rr(c,l))||r.push(l))}return[n,s,r]}function DA(){return Bt(ml)}const xA=wn({__name:"App",setup(t){return(e,n)=>(Ye(),ao(Be(F_)))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+U_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},OA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new MA;const f=i<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $_=function(t){const e=B_(t);return _l.encodeByteArray(e,!0)},Ta=function(t){return $_(t).replace(/\./g,"")},Ia=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return j_(void 0,t)}function j_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LA(n)||(t[n]=j_(t[n],e[n]));return t}function LA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=()=>H_().__FIREBASE_DEFAULTS__,UA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},Nh=()=>{try{return FA()||UA()||BA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$A=t=>{var e,n;return(n=(e=Nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jA=t=>{const e=$A(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},q_=()=>{var t;return(t=Nh())===null||t===void 0?void 0:t.config},HA=t=>{var e;return(e=Nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function WA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K_(){return U_.NODE_ADMIN===!0}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function KA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zA,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?GA(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Fn(r,a,s)}}function GA(t,e){return t.replace(QA,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const QA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Bi(Ia(i[0])||""),n=Bi(Ia(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},YA=function(t){const e=z_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XA=function(t){const e=z_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Sr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function cu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Tp(i)&&Tp(o)){if(!cu(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function ZA(t,e){const n=new eR(t,e);return n.subscribe.bind(n)}class eR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");tR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=hc),r.error===void 0&&(r.error=hc),r.complete===void 0&&(r.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}function nR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},yl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,oR=2,aR=4*60*60*1e3,lR=.5;function cR(t,e=iR,n=oR){const s=e*Math.pow(n,t),r=Math.round(lR*s*(Math.random()-.5)*2);return Math.min(aR,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ns;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fR(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(t){return t===ms?void 0:t}function fR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const pR={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},gR=ce.INFO,mR={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},_R=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=mR[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lo{constructor(e){this.name=e,this._logLevel=gR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const yR=(t,e)=>e.some(n=>t instanceof n);let Ip,wp;function vR(){return Ip||(Ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ER(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G_=new WeakMap,uu=new WeakMap,Q_=new WeakMap,fc=new WeakMap,Mh=new WeakMap;function TR(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G_.set(n,t)}).catch(()=>{}),Mh.set(e,t),e}function IR(t){if(uu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});uu.set(t,e)}let hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wR(t){hu=t(hu)}function AR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dc(this),e,...n);return Q_.set(s,e.sort?e.sort():[e]),Yn(s)}:ER().includes(t)?function(...e){return t.apply(dc(this),e),Yn(G_.get(this))}:function(...e){return Yn(t.apply(dc(this),e))}}function RR(t){return typeof t=="function"?AR(t):(t instanceof IDBTransaction&&IR(t),yR(t,vR())?new Proxy(t,hu):t)}function Yn(t){if(t instanceof IDBRequest)return TR(t);if(fc.has(t))return fc.get(t);const e=RR(t);return e!==t&&(fc.set(t,e),Mh.set(e,t)),e}const dc=t=>Mh.get(t);function CR(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Yn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const SR=["get","getKey","getAll","getAllKeys","count"],bR=["put","add","delete","clear"],pc=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=bR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||SR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return pc.set(e,i),i}wR(t=>({...t,get:(e,n,s)=>Ap(e,n)||t.get(e,n,s),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",Rp="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new lo("@firebase/app"),NR="@firebase/app-compat",DR="@firebase/analytics-compat",xR="@firebase/analytics",OR="@firebase/app-check-compat",MR="@firebase/app-check",VR="@firebase/auth",LR="@firebase/auth-compat",FR="@firebase/database",UR="@firebase/database-compat",BR="@firebase/functions",$R="@firebase/functions-compat",jR="@firebase/installations",HR="@firebase/installations-compat",qR="@firebase/messaging",WR="@firebase/messaging-compat",KR="@firebase/performance",zR="@firebase/performance-compat",GR="@firebase/remote-config",QR="@firebase/remote-config-compat",YR="@firebase/storage",XR="@firebase/storage-compat",JR="@firebase/firestore",ZR="@firebase/firestore-compat",eC="firebase",tC="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="[DEFAULT]",nC={[fu]:"fire-core",[NR]:"fire-core-compat",[xR]:"fire-analytics",[DR]:"fire-analytics-compat",[MR]:"fire-app-check",[OR]:"fire-app-check-compat",[VR]:"fire-auth",[LR]:"fire-auth-compat",[FR]:"fire-rtdb",[UR]:"fire-rtdb-compat",[BR]:"fire-fn",[$R]:"fire-fn-compat",[jR]:"fire-iid",[HR]:"fire-iid-compat",[qR]:"fire-fcm",[WR]:"fire-fcm-compat",[KR]:"fire-perf",[zR]:"fire-perf-compat",[GR]:"fire-rc",[QR]:"fire-rc-compat",[YR]:"fire-gcs",[XR]:"fire-gcs-compat",[JR]:"fire-fst",[ZR]:"fire-fst-compat","fire-js":"fire-js",[eC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Map,pu=new Map;function sC(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(pu.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,t);for(const n of Aa.values())sC(n,t);return!0}function Vh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new jr("app","Firebase",rC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=tC;function Y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Xn.create("bad-app-name",{appName:String(r)});if(n||(n=q_()),!n)throw Xn.create("no-options");const i=Aa.get(r);if(i){if(cu(n,i.options)&&cu(s,i.config))return i;throw Xn.create("duplicate-app",{appName:r})}const o=new dR(r);for(const l of pu.values())o.addComponent(l);const a=new iC(n,s,o);return Aa.set(r,a),a}function Lh(t=du){const e=Aa.get(t);if(!e&&t===du&&q_())return Y_();if(!e)throw Xn.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let r=(s=nC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}vn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-heartbeat-database",aC=1,$i="firebase-heartbeat-store";let gc=null;function X_(){return gc||(gc=CR(oC,aC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),gc}async function lC(t){try{return await(await X_()).transaction($i).objectStore($i).get(J_(t))}catch(e){if(e instanceof Fn)Ds.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function Cp(t,e){try{const s=(await X_()).transaction($i,"readwrite");await s.objectStore($i).put(e,J_(t)),await s.done}catch(n){if(n instanceof Fn)Ds.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(s.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=1024,uC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=uC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sp(),{heartbeatsToSend:n,unsentEntries:s}=fC(this._heartbeatsCache.heartbeats),r=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Sp(){return new Date().toISOString().substring(0,10)}function fC(t,e=cC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),bp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?KA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bp(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){vn(new tn("platform-logger",e=>new PR(e),"PRIVATE")),vn(new tn("heartbeat",e=>new hC(e),"PRIVATE")),Mt(fu,Rp,t),Mt(fu,Rp,"esm2017"),Mt("fire-js","")}pC("");function Z_(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=ey,ty=new jr("auth","Firebase",ey());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new lo("@firebase/auth");function mC(t,...e){Ra.logLevel<=ce.WARN&&Ra.warn(`Auth (${Hr}): ${t}`,...e)}function la(t,...e){Ra.logLevel<=ce.ERROR&&Ra.error(`Auth (${Hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,...e){throw Uh(t,...e)}function Fh(t,...e){return Uh(t,...e)}function _C(t,e,n){const s=Object.assign(Object.assign({},gC()),{[e]:n});return new jr("auth","Firebase",s).create(e,{appName:t.name})}function Uh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ty.create(t,...e)}function me(t,e,...n){if(!t)throw Uh(e,...n)}function wi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function Ca(t,e){t||wi(e)}function yC(){return kp()==="http:"||kp()==="https:"}function kp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yC()||WA()||"connection"in navigator)?navigator.onLine:!0}function EC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ca(n>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||W_()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){Ca(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new co(3e4,6e4);function AC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bh(t,e,n,s,r={}){return sy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Oh(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ny.fetch()(ry(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function sy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},IC),e);try{const r=new RC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _C(t,u,c);Pp(t,u)}}catch(r){if(r instanceof Fn)throw r;Pp(t,"network-request-failed",{message:String(r)})}}function ry(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?TC(t.config,r):`${t.config.apiScheme}://${r}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fh(this.auth,"network-request-failed")),wC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Fh(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return Bh(t,"POST","/v1/accounts:delete",e)}async function SC(t,e){return Bh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bC(t,e=!1){const n=Tt(t),s=await n.getIdToken(e),r=iy(s);me(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ai(mc(r.auth_time)),issuedAtTime:Ai(mc(r.iat)),expirationTime:Ai(mc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function iy(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ia(n);return r?JSON.parse(r):(la("Failed to decode base64 JWT payload"),null)}catch(r){return la("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function PC(t){const e=iy(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&kC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){var e;const n=t.auth,s=await t.getIdToken(),r=await gu(t,SC(n,{idToken:s}));me(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?OC(i.providerUserInfo):[],a=xC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function DC(t){const e=Tt(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function OC(t){return t.map(e=>{var{providerId:n}=e,s=Z_(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e){const n=await sy(t,{},async()=>{const s=Oh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ry(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ny.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return me(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await MC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ji;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(me(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return wi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Z_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gu(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bC(this,e)}reload(){return DC(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gu(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:A,isAnonymous:K,providerData:j,stsTokenManager:ee}=n;me(k&&ee,e,"internal-error");const ae=ji.fromJSON(this.name,ee);me(typeof k=="string",e,"internal-error"),Hn(h,e.name),Hn(f,e.name),me(typeof A=="boolean",e,"internal-error"),me(typeof K=="boolean",e,"internal-error"),Hn(d,e.name),Hn(m,e.name),Hn(y,e.name),Hn(v,e.name),Hn(T,e.name),Hn(b,e.name);const Ve=new pr({uid:k,auth:e,email:f,emailVerified:A,displayName:h,isAnonymous:K,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:ae,createdAt:T,lastLoginAt:b});return j&&Array.isArray(j)&&(Ve.providerData=j.map(Oe=>Object.assign({},Oe))),v&&(Ve._redirectEventId=v),Ve}static async _fromIdTokenResponse(e,n,s=!1){const r=new ji;r.updateFromServerResponse(n);const i=new pr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Sa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Map;function Ts(t){Ca(t instanceof Function,"Expected a class definition");let e=Np.get(t);return e?(Ca(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Np.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ay.type="NONE";const Dp=ay;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e,n){return`firebase:${t}:${e}:${n}`}class gr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=_c(this.userKey,r.apiKey,i),this.fullPersistenceKey=_c("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gr(Ts(Dp),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Ts(Dp);const o=_c(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=pr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new gr(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new gr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($C(e))return"Blackberry";if(jC(e))return"Webos";if(LC(e))return"Safari";if((e.includes("chrome/")||FC(e))&&!e.includes("edge/"))return"Chrome";if(BC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function VC(t=yn()){return/firefox\//i.test(t)}function LC(t=yn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FC(t=yn()){return/crios\//i.test(t)}function UC(t=yn()){return/iemobile/i.test(t)}function BC(t=yn()){return/android/i.test(t)}function $C(t=yn()){return/blackberry/i.test(t)}function jC(t=yn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=xp(yn());break;case"Worker":n=`${xp(yn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${s}`}async function cy(t,e){return Bh(t,"GET","/v2/recaptchaConfig",AC(t,e))}function Op(t){return t!==void 0&&t.enterprise!==void 0}class uy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Fh("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",HC().appendChild(s)})}const WC="https://www.google.com/recaptcha/enterprise.js?render=",KC="recaptcha-enterprise",zC="NO_RECAPTCHA";class GC{constructor(e){this.type=KC,this.auth=hy(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uy(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Op(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(zC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Op(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qC(WC+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mp(this),this.idTokenSubscription=new Mp(this),this.beforeStateQueue=new QC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ty,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ts(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Tt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ts(e))})}async initializeRecaptchaConfig(){const e=await cy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new GC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ts(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[Ts(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return me(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hy(t){return Tt(t)}class Mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ts);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new co(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new co(5e3,15e3);var Vp="@firebase/auth",Lp="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eS(t){vn(new tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},c=new YC(s,r,i,l);return XC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vn(new tn("auth-internal",e=>{const n=hy(e.getProvider("auth").getImmediate());return(s=>new JC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Vp,Lp,ZC(t)),Mt(Vp,Lp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=5*60;HA("authIdTokenMaxAge");eS("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,fy={activated:!1,tokenObservers:[]},nS={initialized:!1,enabled:!1};function qe(t){return mu.get(t)||Object.assign({},fy)}function sS(t,e){return mu.set(t,e),mu.get(t)}function vl(){return nS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="https://content-firebaseappcheck.googleapis.com/v1",rS="exchangeRecaptchaV3Token",iS="exchangeDebugToken",Fp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},oS=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ns,await lS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ns,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function lS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ct=new jr("appCheck","AppCheck",cS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function $h(t){if(!qe(t).activated)throw Ct.create("use-before-activation",{appName:t.name})}function py(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),r=Math.floor((e-n*3600*24-s*3600)/60),i=e-n*3600*24-s*3600-r*60;let o="";return n&&(o+=jo(n)+"d:"),s&&(o+=jo(s)+"h:"),o+=jo(r)+"m:"+jo(i)+"s",o}function jo(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh({url:t,body:e},n){const s={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&(s["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(t,i)}catch(h){throw Ct.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw Ct.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw Ct.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw Ct.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function uS(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${dy}/projects/${n}/apps/${s}:${rS}?key=${r}`,body:{recaptcha_v3_token:e}}}function gy(t,e){const{projectId:n,appId:s,apiKey:r}=t.options;return{url:`${dy}/projects/${n}/apps/${s}:${iS}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="firebase-app-check-database",fS=1,Hi="firebase-app-check-store",my="debug-token";let Ho=null;function _y(){return Ho||(Ho=new Promise((t,e)=>{try{const n=indexedDB.open(hS,fS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Ct.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Hi,{keyPath:"compositeKey"})}}}catch(n){e(Ct.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ho)}function dS(t){return vy(Ey(t))}function pS(t,e){return yy(Ey(t),e)}function gS(t){return yy(my,t)}function mS(){return vy(my)}async function yy(t,e){const s=(await _y()).transaction(Hi,"readwrite"),i=s.objectStore(Hi).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ct.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function vy(t){const n=(await _y()).transaction(Hi,"readonly"),r=n.objectStore(Hi).get(t);return new Promise((i,o)=>{r.onsuccess=a=>{const l=a.target.result;i(l?l.value:void 0)},n.onerror=a=>{var l;o(Ct.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Ey(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new lo("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t){if(xh()){let e;try{e=await dS(t)}catch(n){qi.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function yc(t,e){return xh()?pS(t,e).catch(n=>{qi.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function yS(){let t;try{t=await mS()}catch{}if(t)return t;{const e=rR();return gS(e).catch(n=>qi.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){return vl().enabled}async function qh(){const t=vl();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function vS(){const t=H_(),e=vl();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ns;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(yS())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={error:"UNKNOWN_ERROR"};function TS(t){return _l.encodeString(JSON.stringify(t),!1)}async function _u(t,e=!1){const n=t.app;$h(n);const s=qe(n);let r=s.token,i;if(r&&!ir(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(ir(l)?r=l:await yc(n,void 0))}if(!e&&r&&ir(r))return{token:r.token};let o=!1;if(Hh()){s.exchangeTokenPromise||(s.exchangeTokenPromise=jh(gy(n,await qh()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),o=!0);const l=await s.exchangeTokenPromise;return await yc(n,l),s.token=l,{token:l.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await qe(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?qi.warn(l.message):qi.error(l),i=l}let a;return r?i?ir(r)?a={token:r.token,internalError:i}:a=$p(i):(a={token:r.token},s.token=r,await yc(n,r)):a=$p(i),o&&Ty(n,a),a}async function IS(t){const e=t.app;$h(e);const{provider:n}=qe(e);if(Hh()){const s=await qh(),{token:r}=await jh(gy(e,s),t.heartbeatServiceProvider);return{token:r}}else{const{token:s}=await n.getToken();return{token:s}}}function Wh(t,e,n,s){const{app:r}=t,i=qe(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ir(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Bp(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Bp(t))}function Kh(t,e){const n=qe(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Bp(t){const{app:e}=t,n=qe(e);let s=n.tokenRefresher;s||(s=wS(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function wS(t){const{app:e}=t;return new aS(async()=>{const n=qe(e);let s;if(n.token?s=await _u(t,!0):s=await _u(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=qe(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Fp.RETRIAL_MIN_WAIT,Fp.RETRIAL_MAX_WAIT)}function Ty(t,e){const n=qe(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ir(t){return t.expireTimeMillis-Date.now()>0}function $p(t){return{token:TS(ES),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=qe(this.app);for(const n of e)Kh(this.app,n.next);return Promise.resolve()}}function RS(t,e){return new AS(t,e)}function CS(t){return{getToken:e=>_u(t,e),getLimitedUseToken:()=>IS(t),addTokenListener:e=>Wh(t,"INTERNAL",e),removeTokenListener:e=>Kh(t.app,e)}}const SS="@firebase/app-check",bS="0.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="https://www.google.com/recaptcha/api.js";function kS(t,e){const n=new Ns,s=qe(t);s.reCAPTCHAState={initialized:n};const r=NS(t),i=Up(!1);return i?jp(t,e,i,r,n):OS(()=>{const o=Up(!1);if(!o)throw new Error("no recaptcha");jp(t,e,o,r,n)}),n.promise}function jp(t,e,n,s,r){n.ready(()=>{xS(t,e,n,s),r.resolve(n)})}function NS(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function DS(t){$h(t);const n=await qe(t).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const i=qe(t).reCAPTCHAState;n.ready(()=>{s(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function xS(t,e,n,s){const r=n.render(s,{sitekey:e,size:"invisible",callback:()=>{qe(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{qe(t).reCAPTCHAState.succeeded=!1}}),i=qe(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:r})}function OS(t){const e=document.createElement("script");e.src=PS,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,s;VS(this._throttleData);const r=await DS(this._app).catch(o=>{throw Ct.create("recaptcha-error")});if(!(!((e=qe(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Ct.create("recaptcha-error");let i;try{i=await jh(uS(this._app,r),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=MS(Number((s=o.customData)===null||s===void 0?void 0:s.httpStatus),this._throttleData),Ct.create("throttled",{time:py(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=Vh(e,"heartbeat"),kS(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof zh?this._siteKey===e._siteKey:!1}}function MS(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+oS,httpStatus:t};{const n=e?e.backoffCount:0,s=cR(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function VS(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Ct.create("throttled",{time:py(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t=Lh(),e){t=Tt(t);const n=Vh(t,"app-check");if(vl().initialized||vS(),Hh()&&qh().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return r;throw Ct.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return FS(t,e.provider,e.isTokenAutoRefreshEnabled),qe(t).isTokenAutoRefreshEnabled&&Wh(s,"INTERNAL",()=>{}),s}function FS(t,e,n){const s=sS(t,Object.assign({},fy));s.activated=!0,s.provider=e,s.cachedTokenPromise=_S(t).then(r=>(r&&ir(r)&&(s.token=r,Ty(t,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,s.provider.initialize(t)}function US(t,e,n,s){let r=()=>{},i=()=>{};return e.next!=null?r=e.next.bind(e):r=e,e.error!=null?i=e.error.bind(e):n&&(i=n),Wh(t,"EXTERNAL",r,i),()=>Kh(t.app,r)}const BS="app-check",Hp="app-check-internal";function $S(){vn(new tn(BS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return RS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Hp).initialize()})),vn(new tn(Hp,t=>{const e=t.getProvider("app-check").getImmediate();return CS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Mt(SS,bS)}$S();var jS="firebase",HS="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(jS,HS,"app");const Iy=Symbol("firebaseApp");function wy(t){return bh()&&Bt(Iy,null)||Lh(t)}const hn=()=>{},qS=typeof window<"u";function Gh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function WS(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function $s(t){return!!t&&typeof t=="object"}const KS=Object.prototype;function zS(t){return $s(t)&&Object.getPrototypeOf(t)===KS}function Qh(t){return $s(t)&&t.type==="document"}function Ay(t){return $s(t)&&t.type==="collection"}function GS(t){return Qh(t)||Ay(t)}function QS(t){return $s(t)&&t.type==="query"}function YS(t){return $s(t)&&"ref"in t}function XS(t){return $s(t)&&typeof t.bucket=="string"}function JS(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const ZS=Symbol.for("v-scx");function eb(){return!!Bt(ZS,0)}const qo=new WeakMap;function tb(t,e){if(!qo.has(t)){const n=TI(!0);qo.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),qo.delete(t)}}return qo.get(t)}const nb=Symbol("app-check-token");function sb(t){return(e,n)=>{if(!qS)return;const s=tb(e,n).run(()=>Yt());n.provide(nb,s),t.debug&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=t.debug);const r=LS(e,t);US(r,i=>{s.value=i.token}),rb.set(e,r)}}const rb=new WeakMap,qp="@firebase/database",Wp="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ry="";function ib(t){Ry=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ob(e)}}catch{}return new ab},Is=Cy("localStorage"),yu=Cy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new lo("@firebase/database"),lb=function(){let t=1;return function(){return t++}}(),Sy=function(t){const e=sR(t),n=new JA;n.update(e);const s=n.digest();return _l.encodeByteArray(s)},uo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=uo.apply(null,s):typeof s=="object"?e+=nt(s):e+=s,e+=" "}return e};let Ps=null,Kp=!0;const cb=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mr.logLevel=ce.VERBOSE,Ps=mr.log.bind(mr),e&&yu.set("logging_enabled",!0)):typeof t=="function"?Ps=t:(Ps=null,yu.remove("logging_enabled"))},ct=function(...t){if(Kp===!0&&(Kp=!1,Ps===null&&yu.get("logging_enabled")===!0&&cb(!0)),Ps){const e=uo.apply(null,t);Ps(e)}},ho=function(t){return function(...e){ct(t,...e)}},vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+uo(...t);mr.error(e)},xs=function(...t){const e=`FIREBASE FATAL ERROR: ${uo(...t)}`;throw mr.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+uo(...t);mr.warn(e)},ub=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},by=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},br="[MIN_NAME]",Os="[MAX_NAME]",qr=function(t,e){if(t===e)return 0;if(t===br||e===Os)return-1;if(e===br||t===Os)return 1;{const n=zp(t),s=zp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fb=function(t,e){return t===e?0:t<e?-1:1},ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},Yh=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=nt(e[s]),n+=":",n+=Yh(t[e[s]]);return n+="}",n},Py=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ky=function(t){O(!by(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},db=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},gb=new RegExp("^-?(0*)\\d{1,10}$"),mb=-2147483648,_b=2147483647,zp=function(t){if(gb.test(t)){const e=Number(t);if(e>=mb&&e<=_b)return e}return null},fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},yb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class Eu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="5",Ny="v",Dy="s",xy="r",Oy="f",My=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vy="ls",Ly="p",Tu="ac",Fy="websocket",Uy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ib(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function By(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Fy)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uy)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ib(t)&&(n.ns=t.namespace);const r=[];return jt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.counters_={}}incrementCounter(e,n=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return VA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},Ec={};function Jh(t){const e=t.toString();return vc[e]||(vc[e]=new wb),vc[e]}function Ab(t,e){const n=t.toString();return Ec[n]||(Ec[n]=e()),Ec[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&fo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="start",Cb="close",Sb="pLPCommand",bb="pRTLPCB",$y="id",jy="pw",Hy="ser",Pb="cb",kb="seg",Nb="ts",Db="d",xb="dframe",qy=1870,Wy=30,Ob=qy-Wy,Mb=25e3,Vb=3e4;class or{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=Jh(n),this.urlFn=l=>(this.appCheckToken&&(l[Tu]=this.appCheckToken),By(n,Uy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Rb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Vb)),hb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zh((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gp)this.id=a,this.password=l;else if(o===Cb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Gp]="t",s[Hy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ny]=Xh,this.transportSessionId&&(s[Dy]=this.transportSessionId),this.lastSessionId&&(s[Vy]=this.lastSessionId),this.applicationId&&(s[Ly]=this.applicationId),this.appCheckToken&&(s[Tu]=this.appCheckToken),typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(s[xy]=Oy);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){or.forceAllow_=!0}static forceDisallow(){or.forceDisallow_=!0}static isAvailable(){return or.forceAllow_?!0:!or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!db()&&!pb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$_(n),r=Py(s,Ob);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xb]="t",s[$y]=e,s[jy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zh{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lb(),window[Sb+this.uniqueCallbackIdentifier]=e,window[bb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ct("frame writing exception"),a.stack&&ct(a.stack),ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$y]=this.myID,e[jy]=this.myPW,e[Hy]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wy+s.length<=qy;){const o=this.pendingSegs.shift();s=s+"&"+kb+r+"="+o.seg+"&"+Nb+r+"="+o.ts+"&"+Db+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Mb)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=16384,Fb=45e3;let ba=null;typeof MozWebSocket<"u"?ba=MozWebSocket:typeof WebSocket<"u"&&(ba=WebSocket);class Wt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=Jh(n),this.connURL=Wt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Ny]=Xh,typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(o[xy]=Oy),n&&(o[Dy]=n),s&&(o[Vy]=s),r&&(o[Tu]=r),i&&(o[Ly]=i),By(e,Fy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Is.set("previous_websocket_failure",!0);try{let s;K_(),this.mySock=new ba(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ba!==null&&!Wt.forceDisallow_}static previouslyFailed(){return Is.isInMemoryStorage||Is.get("previous_websocket_failure")===!0}markConnectionHealthy(){Is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Py(n,Lb);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[or,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Wt&&Wt.isAvailable();let s=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Wt];else{const r=this.transports_=[];for(const i of Wi.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Wi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=6e4,Bb=5e3,$b=10*1024,jb=100*1024,Tc="t",Qp="d",Hb="s",Yp="r",qb="e",Xp="o",Jp="a",Zp="n",eg="p",Wb="h";class Kb{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new Wi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$b?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tc in e){const n=e[Tc];n===Jp?this.upgradeIfSecondaryHealthy_():n===Yp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ni("t",e),s=ni("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ni("t",e),s=ni("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ni(Tc,e);if(Qp in e){const s=e[Qp];if(n===Wb){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Zp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Hb?this.onConnectionShutdown_(s):n===Yp?this.onReset_(s):n===qb?vu("Server Error: "+s):n===Xp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xh!==s&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ub))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends zy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pa}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=32,ng=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Pe("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ns(t){return t.pieces_.length-t.pieceNum_}function Re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Gy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function Qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new Pe(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Ut(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return Ut(Re(t),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xy(t,e){if(ns(t)!==ns(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function zt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ns(t)>ns(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Gb{constructor(e,n){this.errorPrefix_=n,this.parts_=Qy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yl(this.parts_[s]);Jy(this)}}function Qb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yl(e),Jy(t)}function Yb(t){const e=t.parts_.pop();t.byteLength_-=yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jy(t){if(t.byteLength_>ng)throw new Error(t.errorPrefix_+"has a key path longer than "+ng+" bytes ("+t.byteLength_+").");if(t.parts_.length>tg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tg+") or object contains a cycle "+_s(t))}function _s(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends zy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ef}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=1e3,Xb=60*5*1e3,sg=30*1e3,Jb=1.3,Zb=3e4,eP="server_kill",rg=3;class kn extends Ky{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kn.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=si,this.maxReconnectDelay_=Xb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!K_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ef.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(nt(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Ns,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;kn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Un(e,"w")){const s=Sr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vu("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zb&&(this.reconnectDelay_=si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+kn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Kb(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{Vt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(eP)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Vt(h),l())}}}interrupt(e){ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ep(this.interruptReasons_)&&(this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Yh(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rg&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ry.replace(/\./g,"-")]=1,Dh()?e["framework.cordova"]=1:W_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pa.getInstance().currentlyOnline();return Ep(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(br,e),r=new oe(br,n);return this.compare(s,r)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class Zy extends El{static get __EMPTY_NODE(){return Wo}static set __EMPTY_NODE(e){Wo=e}compare(e,n){return qr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Os,Wo)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Wo)}toString(){return".key"}}const _r=new Zy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=class{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Dt=class ui{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ui.RED,this.left=r??fn.EMPTY_NODE,this.right=i??fn.EMPTY_NODE}copy(e,n,s,r,i){return new ui(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return fn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ui.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ui.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Dt.RED=!0;Dt.BLACK=!1;class tP{copy(e,n,s,r,i){return this}insert(e,n,s){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let fn=class ca{constructor(e,n=ca.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ca(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new ca(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ko(this.root_,null,this.comparator_,!0,e)}};fn.EMPTY_NODE=new tP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t,e){return qr(t.name,e.name)}function tf(t,e){return qr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;function sP(t){Iu=t}const ev=function(t){return typeof t=="number"?"number:"+ky(t):"string:"+t},tv=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else O(t===Iu||t.isEmpty(),"priority of unexpected type.");O(t===Iu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tv(this.priorityNode_)}static set __childrenNodeConstructor(e){ig=e}static get __childrenNodeConstructor(){return ig}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ev(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ky(this.value_):e+=this.value_,this.lazyHash_=Sy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ke.VALUE_TYPE_ORDER.indexOf(n),i=Ke.VALUE_TYPE_ORDER.indexOf(s);return O(r>=0,"Unknown leaf type: "+n),O(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nv,sv;function rP(t){nv=t}function iP(t){sv=t}class oP extends El{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?qr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Os,new Ke("[PRIORITY-POST]",sv))}makePost(e,n){const s=nv(e);return new oe(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const pt=new oP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=Math.log(2);class lP{constructor(e){const n=i=>parseInt(Math.log(i)/aP,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ka=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=r(l,d),y=r(d+1,c);return h=t[d],f=n?n(h):h,new Dt(f,h.node,Dt.BLACK,m,y)}},i=function(l){let c=null,u=null,h=t.length;const f=function(m,y){const v=h-m,T=h;h-=m;const b=r(v+1,T),k=t[v],A=n?n(k):k;d(new Dt(A,k.node,y,null,b))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?f(v,Dt.BLACK):(f(v,Dt.BLACK),f(v,Dt.RED))}return u},o=new lP(t.length),a=i(o);return new fn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const Zs={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(Zs&&pt,"ChildrenNode.ts has not been loaded"),Ic=Ic||new bn({".priority":Zs},{".priority":pt}),Ic}get(e){const n=Sr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof fn?n:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,n){O(e!==_r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(oe.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=ka(s,e.getCompare()):a=Zs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bn(u,c)}addToIndexes(e,n){const s=wa(this.indexes_,(r,i)=>{const o=Sr(this.indexSet_,i);if(O(o,"Missing index implementation for "+i),r===Zs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ka(a,o.getCompare())}else return Zs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new bn(s,this.indexSet_)}removeFromIndexes(e,n){const s=wa(this.indexes_,r=>{if(r===Zs)return r;{const i=n.get(e.name);return i?r.remove(new oe(e.name,i)):r}});return new bn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class pe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&tv(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ri||(ri=new pe(new fn(tf),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ri}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ri:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?ri:this.priorityNode_;return new pe(r,o,i)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{O(ie(e)!==".priority"||ns(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Re(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(pt,(o,a)=>{n[o]=a.val(e),s++,i&&pe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ev(this.getPriority().val())+":"),this.forEachChild(pt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Sy(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new oe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,oe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===_r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pt),r=n.getIterator(pt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_r?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cP extends pe{constructor(){super(new fn(tf),pe.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const po=new cP;Object.defineProperties(oe,{MIN:{value:new oe(br,pe.EMPTY_NODE)},MAX:{value:new oe(Os,po)}});Zy.__EMPTY_NODE=pe.EMPTY_NODE;Ke.__childrenNodeConstructor=pe;sP(po);iP(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=!0;function ut(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,ut(e))}if(!(t instanceof Array)&&uP){const n=[];let s=!1;if(jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ut(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return pe.EMPTY_NODE;const i=ka(n,nP,o=>o.name,tf);if(s){const o=ka(n,pt.getCompare());return new pe(i,ut(e),new bn({".priority":o},{".priority":pt}))}else return new pe(i,ut(e),bn.Default)}else{let n=pe.EMPTY_NODE;return jt(t,(s,r)=>{if(Un(t,s)&&s.substring(0,1)!=="."){const i=ut(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(ut(e))}}rP(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP extends El{constructor(e){super(),this.indexPath_=e,O(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?qr(e.name,n.name):i}makePost(e,n){const s=ut(e),r=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,r)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,po);return new oe(Os,e)}toString(){return Qy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends El{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=ut(e);return new oe(n,s)}toString(){return".value"}}const dP=new fP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){return{type:"value",snapshotNode:t}}function gP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function og(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _P(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:br}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Os}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new nf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ag(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pt?n="$priority":t.index_===dP?n="$value":t.index_===_r?n="$key":(O(t.index_ instanceof hP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=nt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+nt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=nt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Ky{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Na.getListenId_(e,s),a={};this.listens_[o]=a;const l=ag(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Sr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=Na.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ag(e._queryParams),s=e._path.toString(),r=new Ns;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oh(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bi(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return{value:null,children:new Map}}function rv(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Da());const r=t.children.get(s);e=Re(e),rv(r,e,n)}}function wu(t,e,n){t.value!==null?n(e,t.value):vP(t,(s,r)=>{const i=new Pe(e.toString()+"/"+s);wu(r,i,n)})}function vP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&jt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=10*1e3,TP=30*1e3,IP=5*60*1e3;class wP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EP(e);const s=cg+(TP-cg)*Math.random();Ri(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;jt(e,(r,i)=>{i>0&&Un(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*IP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dn||(dn={}));function iv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ov(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function av(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=dn.ACK_USER_WRITE,this.source=iv()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new xa(ve(),n,this.revert)}}else return O(ie(this.path)===e,"operationForChild called for unrelated child."),new xa(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=dn.OVERWRITE}operationForChild(e){return se(this.path)?new Ms(this.source,ve(),this.snap.getImmediateChild(e)):new Ms(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=dn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new Ms(this.source,ve(),n.value):new Ki(this.source,ve(),n)}else return O(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function AP(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(_P(o.childName,o.snapshotNode))}),ii(t,r,"child_removed",e,s,n),ii(t,r,"child_added",e,s,n),ii(t,r,"child_moved",i,s,n),ii(t,r,"child_changed",e,s,n),ii(t,r,"value",e,s,n),r}function ii(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>CP(t,a,l)),o.forEach(a=>{const l=RP(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function RP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function CP(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),r=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,s){return lv(new sf(e,n,s),t.serverCache)}function cv(t,e,n,s){return lv(t.eventCache,new sf(e,n,s))}function Au(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;const SP=()=>(wc||(wc=new fn(fb)),wc);class we{constructor(e,n=SP()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return jt(e,(s,r)=>{n=n.set(new Pe(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(se(e))return null;{const s=ie(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Re(e),n);return i!=null?{path:Qe(new Pe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Re(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=ie(e),i=(this.children.get(s)||new we(null)).set(Re(e),n),o=this.children.insert(s,i);return new we(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const r=s.remove(Re(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new we(null):new we(this.value,i)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Re(e)):null}}setTree(e,n){if(se(e))return n;{const s=ie(e),i=(this.children.get(s)||new we(null)).setTree(Re(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new we(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Qe(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(se(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(Re(e),Qe(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const r=ie(e),i=this.children.get(r);return i?i.foreachOnPath_(Re(e),Qe(n,r),s):new we(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new we(null))}}function Si(t,e,n){if(se(e))return new Jt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Ut(r,e);return i=i.updateChild(o,n),new Jt(t.writeTree_.set(r,i))}else{const r=new we(n),i=t.writeTree_.setTree(e,r);return new Jt(i)}}}function ug(t,e,n){let s=t;return jt(n,(r,i)=>{s=Si(s,Qe(e,r),i)}),s}function hg(t,e){if(se(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Jt(n)}}function Ru(t,e){return js(t,e)!=null}function js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ut(n.path,e)):null}function fg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pt,(s,r)=>{e.push(new oe(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new oe(s,r.value))}),e}function Jn(t,e){if(se(e))return t;{const n=js(t,e);return n!=null?new Jt(new we(n)):new Jt(t.writeTree_.subtree(e))}}function Cu(t){return t.writeTree_.isEmpty()}function Pr(t,e){return uv(ve(),t.writeTree_,e)}function uv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=uv(Qe(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){return mv(e,t)}function bP(t,e,n,s,r){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=s}function PP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NP(a,s.path)?r=!1:zt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return DP(t),!0;if(s.snap)t.visibleWrites=hg(t.visibleWrites,s.path);else{const a=s.children;jt(a,l=>{t.visibleWrites=hg(t.visibleWrites,Qe(s.path,l))})}return!0}else return!1}function NP(t,e){if(t.snap)return zt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&zt(Qe(t.path,n),e))return!0;return!1}function DP(t){t.visibleWrites=fv(t.allWrites,xP,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xP(t){return t.visible}function fv(t,e,n){let s=Jt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)zt(n,o)?(a=Ut(n,o),s=Si(s,a,i.snap)):zt(o,n)&&(a=Ut(o,n),s=Si(s,ve(),i.snap.getChild(a)));else if(i.children){if(zt(n,o))a=Ut(n,o),s=ug(s,a,i.children);else if(zt(o,n))if(a=Ut(o,n),se(a))s=ug(s,ve(),i.children);else{const l=Sr(i.children,ie(a));if(l){const c=l.getChild(Re(a));s=Si(s,ve(),c)}}}else throw $r("WriteRecord should have .snap or .children")}}return s}function dv(t,e,n,s,r){if(!s&&!r){const i=js(t.visibleWrites,e);if(i!=null)return i;{const o=Jn(t.visibleWrites,e);if(Cu(o))return n;if(n==null&&!Ru(o,ve()))return null;{const a=n||pe.EMPTY_NODE;return Pr(o,a)}}}else{const i=Jn(t.visibleWrites,e);if(!r&&Cu(i))return n;if(!r&&n==null&&!Ru(i,ve()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(zt(c.path,e)||zt(e,c.path))},a=fv(t.allWrites,o,e),l=n||pe.EMPTY_NODE;return Pr(a,l)}}}function OP(t,e,n){let s=pe.EMPTY_NODE;const r=js(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(pt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Jn(t.visibleWrites,e);return n.forEachChild(pt,(o,a)=>{const l=Pr(Jn(i,new Pe(o)),a);s=s.updateImmediateChild(o,l)}),fg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Jn(t.visibleWrites,e);return fg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MP(t,e,n,s,r){O(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Qe(e,n);if(Ru(t.visibleWrites,i))return null;{const o=Jn(t.visibleWrites,i);return Cu(o)?r.getChild(n):Pr(o,r.getChild(n))}}function VP(t,e,n,s){const r=Qe(e,n),i=js(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Jn(t.visibleWrites,r);return Pr(o,s.getNode().getImmediateChild(n))}else return null}function LP(t,e){return js(t.visibleWrites,e)}function FP(t,e,n,s,r,i,o){let a;const l=Jn(t.visibleWrites,e),c=js(l,ve());if(c!=null)a=c;else if(n!=null)a=Pr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<r;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function UP(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Su(t,e,n,s){return dv(t.writeTree,t.treePath,e,n,s)}function pv(t,e){return OP(t.writeTree,t.treePath,e)}function dg(t,e,n,s){return MP(t.writeTree,t.treePath,e,n,s)}function Oa(t,e){return LP(t.writeTree,Qe(t.treePath,e))}function BP(t,e,n,s,r,i){return FP(t.writeTree,t.treePath,e,n,s,r,i)}function rf(t,e,n){return VP(t.writeTree,t.treePath,e,n)}function gv(t,e){return mv(Qe(t.treePath,e),t.writeTree)}function mv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,og(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,mP(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,gP(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,og(s,e.snapshotNode,r.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const _v=new jP;class of{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new sf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vs(this.viewCache_),i=BP(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function HP(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qP(t,e,n,s,r){const i=new $P;let o,a;if(n.type===dn.OVERWRITE){const c=n;c.source.fromUser?o=bu(t,e,c.path,c.snap,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Ma(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===dn.MERGE){const c=n;c.source.fromUser?o=KP(t,e,c.path,c.children,s,r,i):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pu(t,e,c.path,c.children,s,r,a,i))}else if(n.type===dn.ACK_USER_WRITE){const c=n;c.revert?o=QP(t,e,c.path,s,r,i):o=zP(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===dn.LISTEN_COMPLETE)o=GP(t,e,n.path,s,i);else throw $r("Unknown operation type: "+n.type);const l=i.getChanges();return WP(e,o,l),{viewCache:o,changes:l}}function WP(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Au(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(pP(Au(e)))}}function yv(t,e,n,s,r,i){const o=e.eventCache;if(Oa(s,n)!=null)return e;{let a,l;if(se(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vs(e),u=c instanceof pe?c:pe.EMPTY_NODE,h=pv(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Su(s,Vs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ie(n);if(c===".priority"){O(ns(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=dg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Re(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=dg(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=rf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return Ci(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Ma(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ie(n);if(!l.isCompleteForPath(n)&&ns(n)>1)return e;const m=Re(n),v=l.getNode().getImmediateChild(d).updateChild(m,s);d===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),d,v,m,_v,null)}const h=cv(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),f=new of(r,h,i);return yv(t,h,n,r,f,a)}function bu(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new of(r,e,i);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ci(e,c,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Re(n),d=a.getNode().getImmediateChild(h);let m;if(se(f))m=s;else{const y=u.getCompleteChild(h);y!=null?Gy(f)===".priority"&&y.getChild(Yy(f)).isEmpty()?m=y:m=y.updateChild(f,s):m=pe.EMPTY_NODE}if(d.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Ci(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pg(t,e){return t.eventCache.isCompleteForChild(e)}function KP(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Qe(n,l);pg(e,ie(u))&&(a=bu(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Qe(n,l);pg(e,ie(u))||(a=bu(t,a,u,c,r,i,o))}),a}function gg(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Pu(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=gg(t,d,f);l=Ma(t,l,new Pe(h),m,r,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=gg(t,m,f);l=Ma(t,l,new Pe(h),y,r,i,o,a)}}),l}function zP(t,e,n,s,r,i,o){if(Oa(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ma(t,e,n,l.getNode().getChild(n),r,i,a,o);if(se(n)){let c=new we(null);return l.getNode().forEachChild(_r,(u,h)=>{c=c.set(new Pe(u),h)}),Pu(t,e,n,c,r,i,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const f=Qe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Pu(t,e,n,c,r,i,a,o)}}function GP(t,e,n,s,r){const i=e.serverCache,o=cv(e,i.getNode(),i.isFullyInitialized()||se(n),i.isFiltered());return yv(t,o,n,s,_v,r)}function QP(t,e,n,s,r,i){let o;if(Oa(s,n)!=null)return e;{const a=new of(s,e,r),l=e.eventCache.getNode();let c;if(se(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Su(s,Vs(e));else{const h=e.serverCache.getNode();O(h instanceof pe,"serverChildren would be complete if leaf node"),u=pv(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ie(n);let h=rf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Re(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,pe.EMPTY_NODE,Re(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Su(s,Vs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Oa(s,ve())!=null,Ci(e,c,o,t.filter.filtersNodes())}}function YP(t,e){const n=Vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function mg(t,e,n,s){e.type===dn.MERGE&&e.source.queryId!==null&&(O(Vs(t.viewCache_),"We should always have a full cache before handling merges"),O(Au(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=qP(t.processor_,r,e,n,s);return HP(t.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,XP(t,i.changes,i.viewCache.eventCache.getNode(),null)}function XP(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return AP(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _g;function JP(t){O(!_g,"__referenceConstructor has already been defined"),_g=t}function af(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return O(i!=null,"SyncTree gave us an op for an invalid query."),mg(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(mg(o,e,n,s));return i}}function lf(t,e){let n=null;for(const s of t.views.values())n=n||YP(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yg;function ZP(t){O(!yg,"__referenceConstructor has already been defined"),yg=t}class vg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=UP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ek(t,e,n,s,r){return bP(t.pendingWriteTree_,e,n,s,r),r?Il(t,new Ms(iv(),e,n)):[]}function ar(t,e,n=!1){const s=PP(t.pendingWriteTree_,e);if(kP(t.pendingWriteTree_,e)){let i=new we(null);return s.snap!=null?i=i.set(ve(),!0):jt(s.children,o=>{i=i.set(new Pe(o),!0)}),Il(t,new xa(s.path,i,n))}else return[]}function Tl(t,e,n){return Il(t,new Ms(ov(),e,n))}function tk(t,e,n){const s=we.fromObject(n);return Il(t,new Ki(ov(),e,s))}function nk(t,e,n,s){const r=Iv(t,s);if(r!=null){const i=wv(r),o=i.path,a=i.queryId,l=Ut(o,e),c=new Ms(av(a),l,n);return Av(t,o,c)}else return[]}function sk(t,e,n,s){const r=Iv(t,s);if(r){const i=wv(r),o=i.path,a=i.queryId,l=Ut(o,e),c=we.fromObject(n),u=new Ki(av(a),l,c);return Av(t,o,u)}else return[]}function vv(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ut(o,e),c=lf(a,l);if(c)return c});return dv(r,e,i,n,!0)}function Il(t,e){return Ev(e,t.syncPointTree_,null,hv(t.pendingWriteTree_,ve()))}function Ev(t,e,n,s){if(se(t.path))return Tv(t,e,n,s);{const r=e.get(ve());n==null&&r!=null&&(n=lf(r,ve()));let i=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gv(s,o);i=i.concat(Ev(a,l,c,u))}return r&&(i=i.concat(af(r,t,s,n))),i}}function Tv(t,e,n,s){const r=e.get(ve());n==null&&r!=null&&(n=lf(r,ve()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gv(s,o),u=t.operationForChild(o);u&&(i=i.concat(Tv(u,a,l,c)))}),r&&(i=i.concat(af(r,t,s,n))),i}function Iv(t,e){return t.tagToQueryMap.get(e)}function wv(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function Av(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const r=hv(t.pendingWriteTree_,e);return af(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cf(n)}node(){return this.node_}}class uf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new uf(this.syncTree_,n)}node(){return vv(this.syncTree_,this.path_)}}const rk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Eg=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ik(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ok(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ik=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},ok=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const r=e.node();if(O(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},ak=function(t,e,n,s){return hf(e,new uf(n,t),s)},lk=function(t,e,n){return hf(t,new cf(e),n)};function hf(t,e,n){const s=t.getPriority().val(),r=Eg(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Eg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ke(a,ut(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ke(r))),o.forEachChild(pt,(a,l)=>{const c=hf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function df(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,r=ie(n);for(;r!==null;){const i=Sr(s.node.children,r)||{children:{},childCount:0};s=new ff(r,s,i),n=Re(n),r=ie(n)}return s}function Wr(t){return t.node.value}function Rv(t,e){t.node.value=e,ku(t)}function Cv(t){return t.node.childCount>0}function ck(t){return Wr(t)===void 0&&!Cv(t)}function wl(t,e){jt(t.node.children,(n,s)=>{e(new ff(n,t,s))})}function Sv(t,e,n,s){n&&!s&&e(t),wl(t,r=>{Sv(r,e,!0,s)}),n&&s&&e(t)}function uk(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function go(t){return new Pe(t.parent===null?t.name:go(t.parent)+"/"+t.name)}function ku(t){t.parent!==null&&hk(t.parent,t.name,t)}function hk(t,e,n){const s=ck(n),r=Un(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,ku(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/[\[\].#$\/\u0000-\u001F\u007F]/,dk=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,bv=function(t){return typeof t=="string"&&t.length!==0&&!fk.test(t)},pk=function(t){return typeof t=="string"&&t.length!==0&&!dk.test(t)},gk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pk(t)},Pv=function(t,e,n){const s=n instanceof Pe?new Gb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_s(s));if(typeof e=="function")throw new Error(t+"contains a function "+_s(s)+" with contents = "+e.toString());if(by(e))throw new Error(t+"contains "+e.toString()+" "+_s(s));if(typeof e=="string"&&e.length>Ac/3&&yl(e)>Ac)throw new Error(t+"contains a string greater than "+Ac+" utf8 bytes "+_s(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(jt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!bv(o)))throw new Error(t+" contains an invalid key ("+o+") "+_s(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qb(s,o),Pv(t,a,s),Yb(s)}),r&&i)throw new Error(t+' contains ".value" child '+_s(s)+" in addition to actual children.")}},mk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gk(n))throw new Error(nR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yk(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Xy(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Hs(t,e,n){yk(t,n),vk(t,s=>zt(s,e)||zt(e,s))}function vk(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(Ek(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ek(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ps&&ct("event: "+n.toString()),fo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="repo_interrupt",Ik=25;class wk{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _k,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Da(),this.transactionQueueTree_=new ff,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ak(t,e,n){if(t.stats_=Jh(t.repoInfo_),t.forceRestClient_||yb())t.server_=new Na(t.repoInfo_,(s,r,i,o)=>{Tg(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ig(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new kn(t.repoInfo_,e,(s,r,i,o)=>{Tg(t,s,r,i,o)},s=>{Ig(t,s)},s=>{Ck(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ab(t.repoInfo_,()=>new wP(t.stats_,t.server_)),t.infoData_=new yP,t.infoSyncTree_=new vg({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Tl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pf(t,"connected",!1),t.serverSyncTree_=new vg({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Hs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function Rk(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kv(t){return rk({timestamp:Rk(t)})}function Tg(t,e,n,s,r){t.dataUpdateCount++;const i=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=wa(n,c=>ut(c));o=sk(t.serverSyncTree_,i,l,r)}else{const l=ut(n);o=nk(t.serverSyncTree_,i,l,r)}else if(s){const l=wa(n,c=>ut(c));o=tk(t.serverSyncTree_,i,l)}else{const l=ut(n);o=Tl(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=mf(t,i)),Hs(t.eventQueue_,a,o)}function Ig(t,e){pf(t,"connected",e),e===!1&&bk(t)}function Ck(t,e){jt(e,(n,s)=>{pf(t,n,s)})}function pf(t,e,n){const s=new Pe("/.info/"+e),r=ut(n);t.infoData_.updateSnapshot(s,r);const i=Tl(t.infoSyncTree_,s,r);Hs(t.eventQueue_,s,i)}function Sk(t){return t.nextWriteId_++}function bk(t){Nv(t,"onDisconnectEvents");const e=kv(t),n=Da();wu(t.onDisconnect_,ve(),(r,i)=>{const o=ak(r,i,t.serverSyncTree_,e);rv(n,r,o)});let s=[];wu(n,ve(),(r,i)=>{s=s.concat(Tl(t.serverSyncTree_,r,i));const o=Dk(t,r);mf(t,o)}),t.onDisconnect_=Da(),Hs(t.eventQueue_,ve(),s)}function Pk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Tk)}function Nv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ct(n,...e)}function Dv(t,e,n){return vv(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function gf(t,e=t.transactionQueueTree_){if(e||Al(t,e),Wr(e)){const n=Ov(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&kk(t,go(e),n)}else Cv(e)&&wl(e,n=>{gf(t,n)})}function kk(t,e,n){const s=n.map(c=>c.currentWriteId),r=Dv(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ut(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Nv(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Al(t,df(t.transactionQueueTree_,e)),gf(t,t.transactionQueueTree_),Hs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)fo(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Vt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}mf(t,e)}},o)}function mf(t,e){const n=xv(t,e),s=go(n),r=Ov(t,n);return Nk(t,r,s),s}function Nk(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ut(n,l.path);let u=!1,h;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ik)u=!0,h="maxretry",r=r.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Dv(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Pv("transaction failed: Data returned ",d,l.path);let m=ut(d);typeof d=="object"&&d!=null&&Un(d,".priority")||(m=m.updatePriority(f.getPriority()));const v=l.currentWriteId,T=kv(t),b=lk(m,f,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=Sk(t),o.splice(o.indexOf(v),1),r=r.concat(ek(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),r=r.concat(ar(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",r=r.concat(ar(t.serverSyncTree_,l.currentWriteId,!0))}Hs(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Al(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)fo(s[a]);gf(t,t.transactionQueueTree_)}function xv(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Wr(s)===void 0;)s=df(s,n),e=Re(e),n=ie(e);return s}function Ov(t,e){const n=[];return Mv(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Mv(t,e,n){const s=Wr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);wl(e,r=>{Mv(t,r,n)})}function Al(t,e){const n=Wr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Rv(e,n.length>0?n:void 0)}wl(e,s=>{Al(t,s)})}function Dk(t,e){const n=go(xv(t,e)),s=df(t.transactionQueueTree_,e);return uk(s,r=>{Rc(t,r)}),Rc(t,s),Sv(s,r=>{Rc(t,r)}),n}function Rc(t,e){const n=Wr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Rv(e,void 0):n.length=i+1,Hs(t.eventQueue_,go(e),r);for(let o=0;o<s.length;o++)fo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Ok(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const wg=function(t,e){const n=Mk(t),s=n.namespace;n.domain==="firebase.com"&&xs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ub();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Tb(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},Mk=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=xk(t.substring(u,h)));const f=Ok(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return se(this._path)?null:Gy(this._path)}get ref(){return new Kr(this._repo,this._path)}get _queryIdentifier(){const e=lg(this._queryParams),n=Yh(e);return n==="{}"?"default":n}get _queryObject(){return lg(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof _f))return!1;const n=this._repo===e._repo,s=Xy(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+zb(this._path)}}class Kr extends _f{constructor(e,n){super(e,n,new nf,!1)}get parent(){const e=Yy(this._path);return e===null?null:new Kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JP(Kr);ZP(Kr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="FIREBASE_DATABASE_EMULATOR_HOST",Nu={};let Lk=!1;function Fk(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||xs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wg(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Vk]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=wg(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Eu(Eu.OWNER):new Eb(t.name,t.options,e);mk("Invalid Firebase Database URL",o),se(o.path)||xs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Bk(a,t,u,new vb(t.name,n));return new $k(h,t)}function Uk(t,e){const n=Nu[e];(!n||n[t.key]!==t)&&xs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Pk(t),delete n[t.key]}function Bk(t,e,n,s){let r=Nu[e.name];r||(r={},Nu[e.name]=r);let i=r[t.toURLString()];return i&&xs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new wk(t,Lk,n,s),r[t.toURLString()]=i,i}class $k{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ak(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){ib(Hr),vn(new tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Fk(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Mt(qp,Wp,t),Mt(qp,Wp,"esm2017")}kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jk();var Hk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,yf=yf||{},Q=Hk||self;function Rl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qk(t){return Object.prototype.hasOwnProperty.call(t,Cc)&&t[Cc]||(t[Cc]=++Wk)}var Cc="closure_uid_"+(1e9*Math.random()>>>0),Wk=0;function Kk(t,e,n){return t.call.apply(t.bind,arguments)}function zk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=Kk:gt=zk,gt.apply(null,arguments)}function zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function as(){this.s=this.s,this.o=this.o}var Gk=0;as.prototype.s=!1;as.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Gk!=0)&&qk(this)};as.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ag(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Rl(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Qk=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function zi(t){return/^[\s\xa0]*$/.test(t)}function Cl(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return Cl().indexOf(t)!=-1}function Ef(t){return Ef[" "](t),t}Ef[" "]=function(){};function Yk(t,e){var n=j1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Xk=un("Opera"),kr=un("Trident")||un("MSIE"),Lv=un("Edge"),Du=Lv||kr,Fv=un("Gecko")&&!(Cl().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),Jk=Cl().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function Uv(){var t=Q.document;return t?t.documentMode:void 0}var xu;e:{var Sc="",bc=function(){var t=Cl();if(Fv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lv)return/Edge\/([\d\.]+)/.exec(t);if(kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jk)return/WebKit\/(\S+)/.exec(t);if(Xk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bc&&(Sc=bc?bc[1]:""),kr){var Pc=Uv();if(Pc!=null&&Pc>parseFloat(Sc)){xu=String(Pc);break e}}xu=Sc}var Ou;if(Q.document&&kr){var Rg=Uv();Ou=Rg||parseInt(xu,10)||void 0}else Ou=void 0;var Zk=Ou;function Gi(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fv){e:{try{Ef(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:e1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gi.$.h.call(this)}}Ze(Gi,mt);var e1={2:"touch",3:"pen",4:"mouse"};Gi.prototype.h=function(){Gi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),t1=0;function n1(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++t1,this.fa=this.ia=!1}function Sl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function s1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Bv(t){const e={};for(const n in t)e[n]=t[n];return e}const Cg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $v(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Cg.length;i++)n=Cg[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function bl(t){this.src=t,this.g={},this.h=0}bl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vu(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new n1(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Mu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Vv(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Sl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vu(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var If="closure_lm_"+(1e6*Math.random()|0),kc={};function jv(t,e,n,s,r){if(s&&s.once)return qv(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)jv(t,e[i],n,s,r);return null}return n=Rf(n),t&&t[_o]?t.O(e,n,mo(s)?!!s.capture:!!s,r):Hv(t,e,n,!1,s,r)}function Hv(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=mo(r)?!!r.capture:!!r,a=Af(t);if(a||(t[If]=a=new bl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=r1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Qk||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Kv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function r1(){function t(n){return e.call(t.src,t.listener,n)}const e=i1;return t}function qv(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qv(t,e[i],n,s,r);return null}return n=Rf(n),t&&t[_o]?t.P(e,n,mo(s)?!!s.capture:!!s,r):Hv(t,e,n,!0,s,r)}function Wv(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wv(t,e[i],n,s,r);else s=mo(s)?!!s.capture:!!s,n=Rf(n),t&&t[_o]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vu(i,n,s,r),-1<n&&(Sl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Af(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vu(e,n,s,r)),(n=-1<t?e[t]:null)&&wf(n))}function wf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_o])Mu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Kv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Af(e))?(Mu(n,t),n.h==0&&(n.src=null,e[If]=null)):Sl(t)}}}function Kv(t){return t in kc?kc[t]:kc[t]="on"+t}function i1(t,e){if(t.fa)t=!0;else{e=new Gi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&wf(t),t=n.call(s,e)}return t}function Af(t){return t=t[If],t instanceof bl?t:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rf(t){return typeof t=="function"?t:(t[Nc]||(t[Nc]=function(e){return t.handleEvent(e)}),t[Nc])}function Je(){as.call(this),this.i=new bl(this),this.S=this,this.J=null}Ze(Je,as);Je.prototype[_o]=!0;Je.prototype.removeEventListener=function(t,e,n,s){Wv(this,t,e,n,s)};function it(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var r=e;e=new mt(s,t),$v(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Go(o,s,!0,e)&&r}if(o=e.g=t,r=Go(o,s,!0,e)&&r,r=Go(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Go(o,s,!1,e)&&r}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Sl(n[s]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Je.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Go(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Mu(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Cf=Q.JSON.stringify;class o1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function a1(){var t=Sf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class l1{constructor(){this.h=this.g=null}add(e,n){const s=zv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var zv=new o1(()=>new c1,t=>t.reset());class c1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function u1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function h1(t){Q.setTimeout(()=>{throw t},0)}let Qi,Yi=!1,Sf=new l1,Gv=()=>{const t=Q.Promise.resolve(void 0);Qi=()=>{t.then(f1)}};var f1=()=>{for(var t;t=a1();){try{t.h.call(t.g)}catch(n){h1(n)}var e=zv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yi=!1};function Pl(t,e){Je.call(this),this.h=t||1,this.g=e||Q,this.j=gt(this.qb,this),this.l=Date.now()}Ze(Pl,Je);M=Pl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(bf(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Pl.$.N.call(this),bf(this),delete this.g};function Pf(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Qv(t){t.g=Pf(()=>{t.g=null,t.i&&(t.i=!1,Qv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class d1 extends as{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qv(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(t){as.call(this),this.h=t,this.g={}}Ze(Xi,as);var Sg=[];function Yv(t,e,n,s){Array.isArray(n)||(n&&(Sg[0]=n.toString()),n=Sg);for(var r=0;r<n.length;r++){var i=jv(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Xv(t){Tf(t.g,function(e,n){this.g.hasOwnProperty(n)&&wf(e)},t),t.g={}}Xi.prototype.N=function(){Xi.$.N.call(this),Xv(this)};Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kl(){this.g=!0}kl.prototype.Ea=function(){this.g=!1};function p1(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function g1(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function lr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_1(t,n)+(s?" "+s:"")})}function m1(t,e){t.info(function(){return"TIMEOUT: "+e})}kl.prototype.info=function(){};function _1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Cf(n)}catch{return e}}var qs={},bg=null;function Nl(){return bg=bg||new Je}qs.Ta="serverreachability";function Jv(t){mt.call(this,qs.Ta,t)}Ze(Jv,mt);function Ji(t){const e=Nl();it(e,new Jv(e))}qs.STAT_EVENT="statevent";function Zv(t,e){mt.call(this,qs.STAT_EVENT,t),this.stat=e}Ze(Zv,mt);function Et(t){const e=Nl();it(e,new Zv(e,t))}qs.Ua="timingevent";function eE(t,e){mt.call(this,qs.Ua,t),this.size=e}Ze(eE,mt);function yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Dl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kf(){}kf.prototype.h=null;function Pg(t){return t.h||(t.h=t.i())}function nE(){}var vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nf(){mt.call(this,"d")}Ze(Nf,mt);function Df(){mt.call(this,"c")}Ze(Df,mt);var Lu;function xl(){}Ze(xl,kf);xl.prototype.g=function(){return new XMLHttpRequest};xl.prototype.i=function(){return{}};Lu=new xl;function Eo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Xi(this),this.P=y1,t=Du?125:void 0,this.V=new Pl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sE}function sE(){this.i=null,this.g="",this.h=!1}var y1=45e3,Fu={},Va={};M=Eo.prototype;M.setTimeout=function(t){this.P=t};function Uu(t,e,n){t.L=1,t.v=Ml(xn(e)),t.s=n,t.S=!0,rE(t,null)}function rE(t,e){t.G=Date.now(),To(t),t.A=xn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),fE(n.i,"t",s),t.C=0,n=t.l.J,t.h=new sE,t.g=xE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new d1(gt(t.Pa,t,t.g),t.O)),Yv(t.U,t.g,"readystatechange",t.nb),e=t.I?Bv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ji(),p1(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&pn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Du||this.g&&(this.h.h||this.g.ja()||xg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ji(3):Ji(2)),Ol(this);var n=this.g.da();this.ca=n;t:if(iE(this)){var s=xg(this.g);t="";var r=s.length,i=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),bi(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,g1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var c=a;break t}}c=null}if(n=c)lr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,n);else{this.i=!1,this.o=3,Et(12),ws(this),bi(this);break e}}this.S?(oE(this,u,o),Du&&this.i&&u==3&&(Yv(this.U,this.V,"tick",this.mb),this.V.start())):(lr(this.j,this.m,o,null),Bu(this,o)),u==4&&ws(this),this.i&&!this.J&&(u==4?PE(this.l,this):(this.i=!1,To(this)))}else U1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Et(12)):(this.o=0,Et(13)),ws(this),bi(this)}}}catch{}finally{}};function iE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function oE(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=v1(t,n),r==Va){e==4&&(t.o=4,Et(14),s=!1),lr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fu){t.o=4,Et(15),lr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else lr(t.j,t.m,r,null),Bu(t,r);iE(t)&&r!=Va&&r!=Fu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ff(e),e.M=!0,Et(11))):(lr(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),bi(t))}M.mb=function(){if(this.g){var t=pn(this.g),e=this.g.ja();this.C<e.length&&(Ol(this),oE(this,t,e),this.i&&t!=4&&To(this))}};function v1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Va:(n=Number(e.substring(n,s)),isNaN(n)?Fu:(s+=1,s+n>e.length?Va:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,ws(this)};function To(t){t.Y=Date.now()+t.P,aE(t,t.P)}function aE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=yo(gt(t.lb,t),e)}function Ol(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(m1(this.j,this.A),this.L!=2&&(Ji(),Et(17)),ws(this),this.o=2,bi(this)):aE(this,this.Y-t)};function bi(t){t.l.H==0||t.J||PE(t.l,t)}function ws(t){Ol(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bf(t.V),Xv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$u(n.i,t))){if(!t.K&&$u(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ua(n),Fl(n);else break e;Lf(n),Et(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=yo(gt(n.ib,n),6e3));if(1>=gE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else As(n,11)}else if((t.K||n.g==t)&&Ua(n),!zi(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xf(i,i.h),i.h=null))}if(s.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Se(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=DE(s,s.J?s.pa:null,s.Y),o.K){mE(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Ol(a),To(a)),s.g=o}else SE(s);0<n.j.length&&Ul(n)}else c[0]!="stop"&&c[0]!="close"||As(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?As(n,7):Vf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ji(4)}catch{}}function E1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Rl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function T1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Rl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function lE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Rl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=T1(t),s=E1(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var cE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ks(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ks){this.h=t.h,La(this,t.j),this.s=t.s,this.g=t.g,Fa(this,t.m),this.l=t.l;var e=t.i,n=new Zi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kg(this,n),this.o=t.o}else t&&(e=String(t).match(cE))?(this.h=!1,La(this,e[1]||"",!0),this.s=hi(e[2]||""),this.g=hi(e[3]||"",!0),Fa(this,e[4]),this.l=hi(e[5]||"",!0),kg(this,e[6]||"",!0),this.o=hi(e[7]||"")):(this.h=!1,this.i=new Zi(null,this.h))}ks.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fi(e,Ng,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fi(e,Ng,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fi(n,n.charAt(0)=="/"?R1:A1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fi(n,S1)),t.join("")};function xn(t){return new ks(t)}function La(t,e,n){t.j=n?hi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kg(t,e,n){e instanceof Zi?(t.i=e,b1(t.i,t.h)):(n||(e=fi(e,C1)),t.i=new Zi(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Ml(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,w1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function w1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ng=/[#\/\?@]/g,A1=/[#\?:]/g,R1=/[#\?]/g,C1=/[#\?@]/g,S1=/#/g;function Zi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ls(t){t.g||(t.g=new Map,t.h=0,t.i&&I1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Zi.prototype;M.add=function(t,e){ls(this),this.i=null,t=zr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function uE(t,e){ls(t),e=zr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hE(t,e){return ls(t),e=zr(t,e),t.g.has(e)}M.forEach=function(t,e){ls(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.ta=function(){ls(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){ls(this);let e=[];if(typeof t=="string")hE(this,t)&&(e=e.concat(this.g.get(zr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return ls(this),this.i=null,t=zr(this,t),hE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fE(t,e,n){uE(t,e),0<n.length&&(t.i=null,t.g.set(zr(t,e),vf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function zr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function b1(t,e){e&&!t.j&&(ls(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(uE(this,s),fE(this,r,n))},t)),t.j=e}var P1=class{constructor(t,e){this.g=t,this.map=e}};function dE(t){this.l=t||k1,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var k1=10;function pE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gE(t){return t.h?1:t.g?t.g.size:0}function $u(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xf(t,e){t.g?t.g.add(e):t.h=e}function mE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}dE.prototype.cancel=function(){if(this.i=_E(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _E(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vf(t.i)}var N1=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function D1(){this.g=new N1}function x1(t,e,n){const s=n||"";try{lE(t,function(r,i){let o=r;mo(r)&&(o=Cf(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function O1(t,e){const n=new kl;if(Q.Image){const s=new Image;s.onload=zo(Qo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zo(Qo,n,s,"TestLoadImage: error",!1,e),s.onabort=zo(Qo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zo(Qo,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Io(t){this.l=t.fc||null,this.j=t.ob||!1}Ze(Io,kf);Io.prototype.g=function(){return new Vl(this.l,this.j)};Io.prototype.i=function(t){return function(){return t}}({});function Vl(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Vl,Je);var Of=0;M=Vl.prototype;M.open=function(t,e){if(this.readyState!=Of)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,eo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wo(this)),this.readyState=Of};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function yE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wo(this):eo(this),this.readyState==3&&yE(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,wo(this))};M.Ya=function(t){this.g&&(this.response=t,wo(this))};M.ka=function(){this.g&&wo(this)};function wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,eo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var M1=Q.JSON.parse;function xe(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vE,this.L=this.M=!1}Ze(xe,Je);var vE="",V1=/^https?$/i,L1=["POST","PUT"];M=xe.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lu.g(),this.C=this.u?Pg(this.u):Pg(Lu),this.g.onreadystatechange=gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Dg(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=Vv(L1,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{IE(this),0<this.B&&((this.L=F1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.ua,this)):this.A=Pf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dg(this,i)}};function F1(t){return kr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof yf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Dg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EE(t),Ll(t)}function EE(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Ll(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ll(this,!0)),xe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?TE(this):this.kb())};M.kb=function(){TE(this)};function TE(t){if(t.h&&typeof yf<"u"&&(!t.C[1]||pn(t)!=4||t.da()!=2)){if(t.v&&pn(t)==4)Pf(t.La,0,t);else if(it(t,"readystatechange"),pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(cE)[1]||null;!r&&Q.self&&Q.self.location&&(r=Q.self.location.protocol.slice(0,-1)),s=!V1.test(r?r.toLowerCase():"")}n=s}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var i=2<pn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",EE(t)}}finally{Ll(t)}}}}function Ll(t,e){if(t.g){IE(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=s}catch{}}}function IE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function pn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),M1(e)}};function xg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function U1(t){const e={};t=(t.g&&2<=pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(zi(t[s]))continue;var n=u1(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}s1(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wE(t){let e="";return Tf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Mf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=wE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function AE(t){this.Ga=0,this.j=[],this.l=new kl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,t),this.hb=oi("retryDelaySeedMs",1e4,t),this.eb=oi("forwardChannelMaxRetries",2,t),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new dE(t&&t.concurrentRequestLimit),this.Ja=new D1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=AE.prototype;M.ra=8;M.H=1;function Vf(t){if(RE(t),t.H==3){var e=t.W++,n=xn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Ao(t,n),e=new Eo(t,t.l,e),e.L=2,e.v=Ml(xn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=xE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),To(e)}NE(t)}function Fl(t){t.g&&(Ff(t),t.g.cancel(),t.g=null)}function RE(t){Fl(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Ua(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Ul(t){if(!pE(t.i)&&!t.m){t.m=!0;var e=t.Na;Qi||Gv(),Yi||(Qi(),Yi=!0),Sf.add(e,t),t.C=0}}function B1(t,e){return gE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=yo(gt(t.Na,t,e),kE(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Eo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Bv(i),$v(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CE(this,r,e),n=xn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Ao(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(wE(i)))+"&"+e:this.o&&Mf(n,this.o,i)),xf(this.i,r),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),r.aa=!0,Uu(r,n,null)):Uu(r,n,e),this.H=2}}else this.H==3&&(t?Og(this,t):this.j.length==0||pE(this.i)||Og(this))};function Og(t,e){var n;e?n=e.m:n=t.W++;const s=xn(t.I);Se(s,"SID",t.K),Se(s,"RID",n),Se(s,"AID",t.V),Ao(t,s),t.o&&t.s&&Mf(s,t.o,t.s),n=new Eo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=CE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xf(t.i,n),Uu(n,s,e)}function Ao(t,e){t.na&&Tf(t.na,function(n,s){Se(e,s,n)}),t.h&&lE({},function(n,s){Se(e,s,n)})}function CE(t,e,n){n=Math.min(t.j.length,n);var s=t.h?gt(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{x1(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function SE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qi||Gv(),Yi||(Qi(),Yi=!0),Sf.add(e,t),t.A=0}}function Lf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=yo(gt(t.Ma,t),kE(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,bE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=yo(gt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Et(10),Fl(this),bE(this))};function Ff(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function bE(t){t.g=new Eo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Ao(t,e),t.o&&t.s&&Mf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ml(xn(e)),n.s=null,n.S=!0,rE(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Fl(this),Lf(this),Et(19))};function Ua(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function PE(t,e){var n=null;if(t.g==e){Ua(t),Ff(t),t.g=null;var s=2}else if($u(t.i,e))n=e.F,mE(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Nl(),it(s,new eE(s,n)),Ul(t)}else SE(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&B1(t,e)||s==2&&Lf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:As(t,5);break;case 4:As(t,10);break;case 3:As(t,6);break;default:As(t,2)}}}function kE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function As(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=gt(t.pb,t);n||(n=new ks("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||La(n,"https"),Ml(n)),O1(n.toString(),s)}else Et(2);t.H=0,t.h&&t.h.za(e),NE(t),RE(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Et(2)):(this.l.info("Failed to ping google.com"),Et(1))};function NE(t){if(t.H=0,t.ma=[],t.h){const e=_E(t.i);(e.length!=0||t.j.length!=0)&&(Ag(t.ma,e),Ag(t.ma,t.j),t.i.i.length=0,vf(t.j),t.j.length=0),t.h.ya()}}function DE(t,e,n){var s=n instanceof ks?xn(n):new ks(n);if(s.g!="")e&&(s.g=e+"."+s.g),Fa(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ks(null);s&&La(i,s),e&&(i.g=e),r&&Fa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Se(s,n,e),Se(s,"VER",t.ra),Ao(t,s),s}function xE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Io({ob:!0})):new xe(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function OE(){}M=OE.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Ba(){if(kr&&!(10<=Number(Zk)))throw Error("Environmental error: no available transport.")}Ba.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){Je.call(this),this.g=new AE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gr(this)}Ze(Lt,Je);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=DE(t,null,t.Y),Ul(t)};Lt.prototype.close=function(){Vf(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Cf(t),t=n);e.j.push(new P1(e.fb++,t)),e.H==3&&Ul(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,Vf(this.g),delete this.g,Lt.$.N.call(this)};function ME(t){Nf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(ME,Nf);function VE(){Df.call(this),this.status=1}Ze(VE,Df);function Gr(t){this.g=t}Ze(Gr,OE);Gr.prototype.Ba=function(){it(this.g,"a")};Gr.prototype.Aa=function(t){it(this.g,new ME(t))};Gr.prototype.za=function(t){it(this.g,new VE)};Gr.prototype.ya=function(){it(this.g,"b")};function $1(){this.blockSize=-1}function nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(nn,$1);nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Dc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Dc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Dc(this,s),r=0;break}}this.h=r,this.i+=e};nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function _e(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var j1={};function Uf(t){return-128<=t&&128>t?Yk(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return yr;if(0>t)return tt(gn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ju;return new _e(e,0)}function LE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(LE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),s=yr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=gn(Math.pow(e,i)),s=s.R(i).add(gn(o))):(s=s.R(n),s=s.add(gn(o)))}return s}var ju=4294967296,yr=Uf(0),Hu=Uf(1),Mg=Uf(16777216);M=_e.prototype;M.ea=function(){if(Ft(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ju+s)*e,e*=ju}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Pn(this))return"0";if(Ft(this))return"-"+tt(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,s="";;){var r=ja(n,e).g;n=$a(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Pn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}M.X=function(t){return t=$a(this,t),Ft(t)?-1:Pn(t)?0:1};function tt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new _e(n,~t.h).add(Hu)}M.abs=function(){return Ft(this)?tt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function $a(t,e){return t.add(tt(e))}M.R=function(t){if(Pn(this)||Pn(t))return yr;if(Ft(this))return Ft(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Ft(t))return tt(this.R(tt(t)));if(0>this.X(Mg)&&0>t.X(Mg))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Yo(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Yo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Yo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Yo(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new _e(n,0)};function Yo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ai(t,e){this.g=t,this.h=e}function ja(t,e){if(Pn(e))throw Error("division by zero");if(Pn(t))return new ai(yr,yr);if(Ft(t))return e=ja(tt(t),e),new ai(tt(e.g),tt(e.h));if(Ft(e))return e=ja(t,tt(e)),new ai(tt(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Hu,s=e;0>=s.X(t);)n=Vg(n),s=Vg(s);var r=er(n,1),i=er(s,1);for(s=er(s,2),n=er(n,2);!Pn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=er(s,1),n=er(n,1)}return e=$a(t,r.R(e)),new ai(r,e)}for(r=yr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=gn(n),o=i.R(e);Ft(o)||0<o.X(t);)n-=s,i=gn(n),o=i.R(e);Pn(i)&&(i=Hu),r=r.add(i),t=$a(t,o)}return new ai(r,t)}M.gb=function(t){return ja(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new _e(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new _e(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new _e(n,this.h^t.h)};function Vg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new _e(n,t.h)}function er(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new _e(r,t.h)}Ba.prototype.createWebChannel=Ba.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;Dl.NO_ERROR=0;Dl.TIMEOUT=8;Dl.HTTP_ERROR=6;tE.COMPLETE="complete";nE.EventType=vo;vo.OPEN="a";vo.CLOSE="b";vo.ERROR="c";vo.MESSAGE="d";Je.prototype.listen=Je.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;nn.prototype.digest=nn.prototype.l;nn.prototype.reset=nn.prototype.reset;nn.prototype.update=nn.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=gn;_e.fromString=LE;var H1=function(){return new Ba},q1=function(){return Nl()},xc=Dl,W1=tE,K1=qs,Lg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},z1=Io,Xo=nE,G1=xe,Q1=nn,vr=_e;const Fg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new lo("@firebase/firestore");function Ug(){return Ls.logLevel}function U(t,...e){if(Ls.logLevel<=ce.DEBUG){const n=e.map(Bf);Ls.debug(`Firestore (${Qr}): ${t}`,...n)}}function On(t,...e){if(Ls.logLevel<=ce.ERROR){const n=e.map(Bf);Ls.error(`Firestore (${Qr}): ${t}`,...n)}}function Nr(t,...e){if(Ls.logLevel<=ce.WARN){const n=e.map(Bf);Ls.warn(`Firestore (${Qr}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function be(t,e){t||z()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class X1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J1{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new FE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new lt(e)}}class Z1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eN{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Z1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new tN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=sN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Dr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new je(0,0))}static max(){return new X(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends to{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const rN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends to{construct(e,n,s){return new dt(e,n,s)}static isValidIdentifier(e){return rN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ke.fromString(e))}static fromName(e){return new W(ke.fromString(e).popFirst(5))}static empty(){return new W(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ke(e.slice()))}}function iN(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new ss(r,W.empty(),e)}function oN(t){return new ss(t.readTime,t.key,-1)}class ss{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ss(X.min(),W.empty(),-1)}static max(){return new ss(X.max(),W.empty(),-1)}}function aN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==lN)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}$f.ae=-1;function Bl(t){return t==null}function Ha(t){return t===0&&1/t==-1/0}function uN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??et.RED,this.left=r??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new et(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,s,r,i){return this}insert(e,n,s){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $g(this.data.getIterator())}getIteratorFrom(e){return new $g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class $g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new _t(dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $E("Invalid base64 string: "+i):i}}(e);return new yt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const hN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(be(!!t),typeof t=="string"){let e=0;const n=hN.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hf(t){const e=t.mapValue.fields.__previous_value__;return jf(e)?Hf(e):e}function no(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jf(t)?4:dN(t)?9007199254740991:10:z()}function En(t,e){if(t===e)return!0;const n=Us(t);if(n!==Us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=rs(r.timestampValue),a=rs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Fs(r.bytesValue).isEqual(Fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ue(r.doubleValue),a=Ue(i.doubleValue);return o===a?Ha(o)===Ha(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Dr(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Bg(o)!==Bg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return z()}}function ro(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function xr(t,e){if(t===e)return 0;const n=Us(t),s=Us(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return jg(t.timestampValue,e.timestampValue);case 4:return jg(no(t),no(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Fs(i),l=Fs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ue(a[c],l[c]);if(u!==0)return u}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(Ue(i.latitude),Ue(o.latitude));return a!==0?a:ue(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=xr(a[c],l[c]);if(u)return u}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Zo.mapValue&&o===Zo.mapValue)return 0;if(i===Zo.mapValue)return 1;if(o===Zo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=ue(l[h],u[h]);if(f!==0)return f;const d=xr(a[l[h]],c[u[h]]);if(d!==0)return d}return ue(l.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function jg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=rs(t),s=rs(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Or(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=rs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=qu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${qu(n.fields[o])}`;return r+"}"}(t.mapValue):z()}function Wu(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ua(t){return!!t&&"mapValue"in t}function Pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(n)}setAll(e){let n=dt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Pi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ua(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ws(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(Pi(this.value))}}function jE(t){const e=[];return Ws(t.fields,(n,s)=>{const r=new dt([n]);if(ua(s)){const i=jE(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,X.min(),X.min(),X.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new ht(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new ht(e,2,n,X.min(),X.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,X.min(),X.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.position=e,this.inclusive=n}}function Wg(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=xr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function pN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{}class He extends HE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new mN(e,n,s):n==="array-contains"?new vN(e,s):n==="in"?new EN(e,s):n==="not-in"?new TN(e,s):n==="array-contains-any"?new IN(e,s):new He(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new _N(e,s):new yN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xr(n,this.value)):n!==null&&Us(this.value)===Us(n)&&this.matchesComparison(xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tn extends HE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Tn(e,n)}matches(e){return qE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qE(t){return t.op==="and"}function WE(t){return gN(t)&&qE(t)}function gN(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Ku(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Or(t.value);if(WE(t))return t.filters.map(e=>Ku(e)).join(",");{const e=t.filters.map(n=>Ku(n)).join(",");return`${t.op}(${e})`}}function KE(t,e){return t instanceof He?function(s,r){return r instanceof He&&s.op===r.op&&s.field.isEqual(r.field)&&En(s.value,r.value)}(t,e):t instanceof Tn?function(s,r){return r instanceof Tn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&KE(o,r.filters[a]),!0):!1}(t,e):void z()}function zE(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Or(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(zE).join(" ,")+"}"}(t):"Filter"}class mN extends He{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class _N extends He{constructor(e,n){super(e,"in",n),this.keys=GE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yN extends He{constructor(e,n){super(e,"not-in",n),this.keys=GE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class vN extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&ro(n.arrayValue,this.value)}}class EN extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class TN extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class IN extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ro(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function zg(t,e=null,n=[],s=[],r=null,i=null,o=null){return new wN(t,e,n,s,r,i,o)}function Wf(t){const e=J(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ku(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Or(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Or(s)).join(",")),e.he=n}return e.he}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kg(t.startAt,e.startAt)&&Kg(t.endAt,e.endAt)}function zu(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function AN(t,e,n,s,r,i,o,a){return new $l(t,e,n,s,r,i,o,a)}function jl(t){return new $l(t)}function Gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function CN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SN(t){return t.collectionGroup!==null}function Er(t){const e=J(t);if(e.Pe===null){e.Pe=[];const n=CN(e),s=RN(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new ki(n)),e.Pe.push(new ki(dt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ki(dt.keyField(),i))}}}return e.Pe}function Mn(t){const e=J(t);if(!e.Ie)if(e.limitType==="F")e.Ie=zg(e.path,e.collectionGroup,Er(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Er(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ki(i.field,o))}const s=e.endAt?new qa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qa(e.startAt.position,e.startAt.inclusive):null;e.Ie=zg(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.Ie}function Gu(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hl(t,e){return Kf(Mn(t),Mn(e))&&t.limitType===e.limitType}function QE(t){return`${Wf(Mn(t))}|lt:${t.limitType}`}function Qu(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>zE(r)).join(", ")}]`),Bl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Or(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Or(r)).join(",")),`Target(${s})`}(Mn(t))}; limitType=${t.limitType})`}function ql(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):W.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Er(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=Wg(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Er(s),r)||s.endAt&&!function(o,a,l){const c=Wg(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Er(s),r))}(t,e)}function bN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,n)=>{let s=!1;for(const r of Er(t)){const i=PN(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function PN(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?xr(l,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return BE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=new De(W.comparator);function Vn(){return kN}const XE=new De(W.comparator);function di(...t){let e=XE;for(const n of t)e=e.insert(n.key,n);return e}function JE(t){let e=XE;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rs(){return Ni()}function ZE(){return Ni()}function Ni(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const NN=new De(W.comparator),DN=new _t(W.comparator);function ne(...t){let e=DN;for(const n of t)e=e.add(n);return e}const xN=new _t(ue);function ON(){return xN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function tT(t){return{integerValue:""+t}}function MN(t,e){return uN(e)?tT(e):eT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function VN(t,e,n){return t instanceof Wa?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&jf(i)&&(i=Hf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof io?sT(t,e):t instanceof oo?rT(t,e):function(r,i){const o=nT(r,i),a=Qg(o)+Qg(r.Te);return Wu(o)&&Wu(r.Te)?tT(a):eT(r.serializer,a)}(t,e)}function LN(t,e,n){return t instanceof io?sT(t,e):t instanceof oo?rT(t,e):n}function nT(t,e){return t instanceof Ka?function(s){return Wu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Wa extends Wl{}class io extends Wl{constructor(e){super(),this.elements=e}}function sT(t,e){const n=iT(e);for(const s of t.elements)n.some(r=>En(r,s))||n.push(s);return{arrayValue:{values:n}}}class oo extends Wl{constructor(e){super(),this.elements=e}}function rT(t,e){let n=iT(e);for(const s of t.elements)n=n.filter(r=>!En(r,s));return{arrayValue:{values:n}}}class Ka extends Wl{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Qg(t){return Ue(t.integerValue||t.doubleValue)}function iT(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FN(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof io&&r instanceof io||s instanceof oo&&r instanceof oo?Dr(s.elements,r.elements,En):s instanceof Ka&&r instanceof Ka?En(s.Te,r.Te):s instanceof Wa&&r instanceof Wa}(t.transform,e.transform)}class UN{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kl{}function oT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zf(t.key,Zt.none()):new So(t.key,t.data,Zt.none());{const n=t.data,s=Rt.empty();let r=new _t(dt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new cs(t.key,s,new Ot(r.toArray()),Zt.none())}}function BN(t,e,n){t instanceof So?function(r,i,o){const a=r.value.clone(),l=Xg(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(r,i,o){if(!ha(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Xg(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(aT(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Di(t,e,n,s){return t instanceof So?function(i,o,a,l){if(!ha(i.precondition,o))return a;const c=i.value.clone(),u=Jg(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof cs?function(i,o,a,l){if(!ha(i.precondition,o))return a;const c=Jg(i.fieldTransforms,l,o),u=o.data;return u.setAll(aT(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $N(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=nT(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function Yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Dr(s,r,(i,o)=>FN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Kl{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cs extends Kl{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Xg(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,LN(o,a,n[r]))}return s}function Jg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,VN(i,o,e))}return s}class zf extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jN extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&BN(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Di(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Di(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ZE();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=oT(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(n,s)=>Yg(n,s))&&Dr(this.baseMutations,e.baseMutations,(n,s)=>Yg(n,s))}}class Gf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=function(){return NN}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Gf(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,re;function KN(t){switch(t){default:return z();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function lT(t){if(t===void 0)return On("GRPC error has no .code"),R.UNKNOWN;switch(t){case Fe.OK:return R.OK;case Fe.CANCELLED:return R.CANCELLED;case Fe.UNKNOWN:return R.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return R.INTERNAL;case Fe.UNAVAILABLE:return R.UNAVAILABLE;case Fe.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Fe.NOT_FOUND:return R.NOT_FOUND;case Fe.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Fe.ABORTED:return R.ABORTED;case Fe.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Fe.DATA_LOSS:return R.DATA_LOSS;default:return z()}}(re=Fe||(Fe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ea}static getOrCreateInstance(){return ea===null&&(ea=new Qf),ea}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ea=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new vr([4294967295,4294967295],0);function Zg(t){const e=zN().encode(t),n=new Q1;return n.update(e),new Uint8Array(n.digest())}function em(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,s],0),new vr([r,i],0)]}class Yf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new pi(`Invalid padding: ${n}`);if(s<0)throw new pi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new pi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new pi(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=vr.fromNumber(this.de)}Re(e,n,s){let r=e.add(n.multiply(vr.fromNumber(s)));return r.compare(GN)===1&&(r=new vr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Zg(e),[s,r]=em(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(s,r,i);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yf(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Zg(e),[s,r]=em(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(s,r,i);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new zl(X.min(),r,new De(ue),Vn(),ne())}}class bo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new bo(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,s,r){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=r}}class cT{constructor(e,n){this.targetId=e,this.pe=n}}class uT{constructor(e,n,s=yt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tm{constructor(){this.ye=0,this.we=sm(),this.Se=yt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ne(),n=ne(),s=ne();return this.we.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new bo(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=sm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class QN{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Vn(),this.$e=nm(),this.Ue=new De(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,r)=>{this.Je(r)&&n(r)})}Ze(e){var n,s;const r=e.targetId,i=e.pe.count,o=this.Xe(r);if(o){const a=o.target;if(zu(a))if(i===0){const l=new W(a.path);this.ze(r,l,ht.newNoDocument(l,X.min()))}else be(i===1);else{const l=this.et(r);if(l!==i){const c=this.tt(e,l);if(c.status!==0){this.Ye(r);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,u)}(n=Qf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,d,m){var y,v,T,b,k,A;const K={localCacheCount:d,existenceFilterCount:m.count},j=m.unchangedNames;return j&&(K.bloomFilter={applied:h===0,hashCount:(y=j==null?void 0:j.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(T=(v=j==null?void 0:j.bits)===null||v===void 0?void 0:v.bitmap)===null||T===void 0?void 0:T.length)!==null&&b!==void 0?b:0,padding:(A=(k=j==null?void 0:j.bits)===null||k===void 0?void 0:k.padding)!==null&&A!==void 0?A:0},f&&(K.bloomFilter.mightContain=f)),K}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:r}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=Fs(i).toUint8Array()}catch(h){if(h instanceof $E)return Nr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Yf(l,o,a)}catch(h){return Nr(h instanceof pi?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return c.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return c.de===0?{status:1}:{status:r===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),r++)}),r}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&zu(a.target)){const l=new W(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,ht.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let s=ne();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const r=new zl(e,n,this.Ue,this.Ke,s);return this.Ke=Vn(),this.$e=nm(),this.Ue=new De(ue),r}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const r=this.He(e);this.ot(e,n)?r.Oe(n,1):r.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new tm,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new _t(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new tm),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function nm(){return new De(W.comparator)}function sm(){return new De(W.comparator)}const YN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JN=(()=>({and:"AND",or:"OR"}))();class ZN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yu(t,e){return t.useProto3Json||Bl(e)?e:{value:e}}function za(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eD(t,e){return za(t,e.toTimestamp())}function mn(t){return be(!!t),X.fromTimestamp(function(n){const s=rs(n);return new je(s.seconds,s.nanos)}(t))}function Xf(t,e){return function(s){return new ke(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function fT(t){const e=ke.fromString(t);return be(mT(e)),e}function Xu(t,e){return Xf(t.databaseId,e.path)}function Oc(t,e){const n=fT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(dT(n))}function Ju(t,e){return Xf(t.databaseId,e)}function tD(t){const e=fT(t);return e.length===4?ke.emptyPath():dT(e)}function Zu(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dT(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rm(t,e,n){return{name:Xu(t,e),fields:n.value.mapValue.fields}}function nD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(be(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:lT(c.code);return new B(u,c.message||"")}(o);n=new uT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Oc(t,s.document.name),i=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):X.min(),a=new Rt({mapValue:{fields:s.document.fields}}),l=ht.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new fa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Oc(t,s.document),i=s.readTime?mn(s.readTime):X.min(),o=ht.newNoDocument(r,i),a=s.removedTargetIds||[];n=new fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Oc(t,s.document),i=s.removedTargetIds||[];n=new fa([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new WN(r,i),a=s.targetId;n=new cT(a,o)}}return n}function sD(t,e){let n;if(e instanceof So)n={update:rm(t,e.key,e.value)};else if(e instanceof zf)n={delete:Xu(t,e.key)};else if(e instanceof cs)n={update:rm(t,e.key,e.data),updateMask:fD(e.fieldMask)};else{if(!(e instanceof jN))return z();n={verify:Xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:eD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function rD(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?mn(r.updateTime):mn(i);return o.isEqual(X.min())&&(o=mn(i)),new UN(o,r.transformResults||[])}(n,e))):[]}function iD(t,e){return{documents:[Ju(t,e.path)]}}function oD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ju(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ju(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return gT(Tn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:sr(h.field),direction:cD(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Yu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function aD(t){let e=tD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=pT(h);return f instanceof Tn&&WE(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new ki(rr(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Bl(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new qa(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new qa(d,f)}(n.endAt)),AN(e,r,o,i,a,"F",l,c)}function lD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=rr(n.unaryFilter.field);return He.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=rr(n.unaryFilter.field);return He.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return He.create(rr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(s=>pT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function cD(t){return YN[t]}function uD(t){return XN[t]}function hD(t){return JN[t]}function sr(t){return{fieldPath:t.canonicalString()}}function rr(t){return dt.fromServerFormat(t.fieldPath)}function gT(t){return t instanceof He?function(n){if(n.op==="=="){if(qg(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qg(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:uD(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const s=n.getFilters().map(r=>gT(r));return s.length===1?s[0]:{compositeFilter:{op:hD(n.op),filters:s}}}(t):z()}function fD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,s,r,i=X.min(),o=X.min(),a=yt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.ct=e}}function pD(t){const e=aD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.sn=new mD}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(ss.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class mD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _t(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _t(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Mr(0)}static On(){return new Mr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Di(s.mutation,r,Ot.empty(),je.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=Rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=di();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Vn();const o=Ni(),a=function(){return Ni()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof cs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Di(u.mutation,c,u.mutation.getFieldMask(),je.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new yD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ni();let r=new De((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ot.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||ne()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ZE();u.forEach(f=>{if(!i.has(f)){const d=oT(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(Rs());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ne())).next(u=>({batchId:a,changes:JE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let r=di();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=di();return this.indexManager.getCollectionParents(e,r).next(o=>P.forEach(o,a=>{const l=function(u,h){return new $l(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ht.newInvalidDocument(c)))});let o=di();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Di(c.mutation,l,Ot.empty(),je.now()),ql(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(r){return{id:r.id,version:r.version,createTime:mn(r.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(r){return{name:r.name,query:pD(r.bundledQuery),readTime:mn(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.overlays=new De(W.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rs();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.cr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=Rs(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Rs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return P.resolve(a)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.cr.get(r.largestBatchId).delete(s.key);this.cr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new qN(n,s));let i=this.cr.get(n);i===void 0&&(i=ne(),this.cr.set(n,i)),this.cr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.lr=new _t(ze.hr),this.Pr=new _t(ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new ze(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new ze(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new W(new ke([])),s=new ze(n,e),r=new ze(n,e+1),i=[];return this.Pr.forEachInRange([s,r],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new W(new ke([])),s=new ze(n,e),r=new ze(n,e+1);let i=ne();return this.Pr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return W.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new _t(ze.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HN(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.pr=this.pr.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.wr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ze(n,0),r=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([s,r],o=>{const a=this.yr(o.mr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _t(ue);return n.forEach(r=>{const i=new ze(r,0),o=new ze(r,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{s=s.add(a.mr)})}),P.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new ze(new W(i),0);let a=new _t(ue);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const r=this.yr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return P.forEach(n.mutations,r=>{const i=new ze(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new ze(n,0),r=this.pr.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.Dr=e,this.docs=function(){return new De(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let s=Vn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Vn();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||aN(oN(u),s)<=0||(r.has(u.key)||ql(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new AD(this)}getSize(e){return P.resolve(this.size)}}class AD extends _D{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.sr.addEntry(e,r)):this.sr.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.persistence=e,this.Cr=new Yr(n=>Wf(n),Kf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Jf,this.targetCount=0,this.Or=Mr.xn()}forEachTarget(e,n){return this.Cr.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Mr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new $f(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new RD(this),this.indexManager=new gD,this.remoteDocumentCache=function(r){return new wD(r)}(s=>this.referenceDelegate.qr(s)),this.serializer=new dD(n),this.Qr=new ED(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new ID(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new SD(this.Br.next());return this.referenceDelegate.Kr(),s(r).next(i=>this.referenceDelegate.$r(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ur(e,n){return P.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class SD extends cN{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Wr=new Jf,this.Gr=null}static zr(e){return new Zf(e)}get jr(){if(this.Gr)return this.Gr;throw z()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(r=>this.jr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.jr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,s=>{const r=W.fromPath(s);return this.Hr(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=r}static qi(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ed(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.$i(e,n).next(i=>i||this.Ui(e,n,r,s)).next(i=>i||this.Wi(e,n))}$i(e,n){if(Gg(n))return P.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Gu(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Gu(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,r){return Gg(n)||r.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,s,r)?this.Wi(e,n):(Ug()<=ce.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Qu(n)),this.ji(e,o,n,iN(r,-1)))})}Gi(e,n){let s=new _t(YE(e));return n.forEach((r,i)=>{ql(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,n){return Ug()<=ce.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Qu(n)),this.Ki.getDocumentsMatchingQuery(e,n,ss.min())}ji(e,n,s,r){return this.Ki.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new De(ue),this.Yi=new Yr(i=>Wf(i),Kf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function kD(t,e,n,s){return new PD(t,e,n,s)}async function _T(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=ne();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function ND(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=P.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(y=>{const v=c.docVersions.get(m);be(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function yT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function DD(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(yt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,d,u)&&a.push(n.kr.updateTargetData(i,d))});let l=Vn(),c=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(xD(i,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(X.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=r,i))}function xD(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Vn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:r}})}function OD(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function MD(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.kr.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.kr.allocateTargetId(s).next(o=>(r=new zn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function eh(t,e,n){const s=J(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Co(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function im(t,e,n){const s=J(t);let r=X.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=J(l),f=h.Yi.get(u);return f!==void 0?P.resolve(h.Ji.get(f)):h.kr.getTargetData(c,u)}(s,o,Mn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:ne())).next(a=>(VD(s,bN(e),a),{documents:a,ss:i})))}function VD(t,e,n){let s=t.Zi.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Zi.set(e,s)}class om{constructor(){this.activeTargetIds=ON()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LD{constructor(){this.Hs=new om,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new om,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=null;function Mc(){return ta===null?ta=function(){return 268435456+Math.round(2147483648*Math.random())}():ta++,"0x"+ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class $D extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${r}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Ro(){return!1}Vo(n,s,r,i,o){const a=Mc(),l=this.mo(n,s);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,i,o),this.po(n,l,c,r).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Nr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}yo(n,s,r,i,o,a){return this.Vo(n,s,r,i,o)}fo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}mo(n,s){const r=UD[n];return`${this.To}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,r){const i=Mc();return new Promise((o,a)=>{const l=new G1;l.setWithCredentials(!0),l.listenOnce(W1.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xc.NO_ERROR:const u=l.getResponseJson();U(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case xc.TIMEOUT:U(at,`RPC '${e}' ${i} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const h=l.getStatus();if(U(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(T)>=0?T:R.UNKNOWN}(d.status);a(new B(m,d.message))}else a(new B(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(at,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);U(at,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}wo(e,n,s){const r=Mc(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H1(),a=q1(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new z1({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");U(at,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new BD({so:v=>{d?U(at,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(U(at,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),U(at,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,T,b)=>{v.listen(T,k=>{try{b(k)}catch(A){setTimeout(()=>{throw A},0)}})};return y(h,Xo.EventType.OPEN,()=>{d||U(at,`RPC '${e}' stream ${r} transport opened.`)}),y(h,Xo.EventType.CLOSE,()=>{d||(d=!0,U(at,`RPC '${e}' stream ${r} transport closed`),m.Po())}),y(h,Xo.EventType.ERROR,v=>{d||(d=!0,Nr(at,`RPC '${e}' stream ${r} transport errored:`,v),m.Po(new B(R.UNAVAILABLE,"The operation could not be completed")))}),y(h,Xo.EventType.MESSAGE,v=>{var T;if(!d){const b=v.data[0];be(!!b);const k=b,A=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(A){U(at,`RPC '${e}' stream ${r} received error:`,A);const K=A.status;let j=function(Ve){const Oe=Fe[Ve];if(Oe!==void 0)return lT(Oe)}(K),ee=A.message;j===void 0&&(j=R.INTERNAL,ee="Unknown error status: "+K+" with message "+A.message),d=!0,m.Po(new B(j,ee)),h.close()}else U(at,`RPC '${e}' stream ${r} received:`,b),m.Io(b)}}),y(a,K1.STAT_EVENT,v=>{v.stat===Lg.PROXY?U(at,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Lg.NOPROXY&&U(at,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new ZN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,s,r,i,o,a,l){this.ii=e,this.Bo=s,this.Lo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new vT(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.ko===n&&this.e_(s,r)},s=>{e(()=>{const r=new B(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(r)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(r=>{s(()=>this.t_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jD extends ET{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=nD(this.serializer,e),s=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?mn(o.readTime):X.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=Zu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=zu(l)?{documents:iD(i,l)}:{query:oD(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hT(i,o.resumeToken);const c=Yu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=za(i,o.snapshotVersion.toTimestamp());const c=Yu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=lD(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=Zu(this.serializer),n.removeTarget=e,this.Ho(n)}}class HD extends ET{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=rD(e.writeResults,e.commitTime),s=mn(e.commitTime);return this.listener.u_(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Zu(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>sD(this.serializer,s))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Vo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(R.UNKNOWN,r.toString())})}yo(e,n,s,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(R.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class WD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(On(n),this.d_=!1):U("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{Ks(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=J(l);c.y_.add(4),await Po(c),c.b_.set("Unknown"),c.y_.delete(4),await Ql(c)}(this))})}),this.b_=new WD(s,r)}}async function Ql(t){if(Ks(t))for(const e of t.w_)await e(!0)}async function Po(t){for(const e of t.w_)await e(!1)}function TT(t,e){const n=J(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),sd(n)?nd(n):Xr(n).Uo()&&td(n,e))}function IT(t,e){const n=J(t),s=Xr(n);n.p_.delete(e),s.Uo()&&wT(n,e),n.p_.size===0&&(s.Uo()?s.zo():Ks(n)&&n.b_.set("Unknown"))}function td(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xr(t).i_(e)}function wT(t,e){t.D_.Be(e),Xr(t).s_(e)}function nd(t){t.D_=new QN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Xr(t).start(),t.b_.A_()}function sd(t){return Ks(t)&&!Xr(t).$o()&&t.p_.size>0}function Ks(t){return J(t).y_.size===0}function AT(t){t.D_=void 0}async function zD(t){t.p_.forEach((e,n)=>{td(t,e)})}async function GD(t,e){AT(t),sd(t)?(t.b_.m_(e),nd(t)):t.b_.set("Unknown")}async function QD(t,e,n){if(t.b_.set("Online"),e instanceof uT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.p_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.p_.delete(a),r.D_.removeTarget(a))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ga(t,s)}else if(e instanceof fa?t.D_.We(e):e instanceof cT?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const s=await yT(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.p_.get(c);u&&i.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.p_.get(l);if(!u)return;i.p_.set(l,u.withResumeToken(yt.EMPTY_BYTE_STRING,u.snapshotVersion)),wT(i,l);const h=new zn(u.target,l,c,u.sequenceNumber);td(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Ga(t,s)}}async function Ga(t,e,n){if(!Co(e))throw e;t.y_.add(1),await Po(t),t.b_.set("Offline"),n||(n=()=>yT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Ql(t)})}function RT(t,e){return e().catch(n=>Ga(t,n,e))}async function Yl(t){const e=J(t),n=is(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;YD(e);)try{const r=await OD(e.localStore,s);if(r===null){e.g_.length===0&&n.zo();break}s=r.batchId,XD(e,r)}catch(r){await Ga(e,r)}CT(e)&&ST(e)}function YD(t){return Ks(t)&&t.g_.length<10}function XD(t,e){t.g_.push(e);const n=is(t);n.Uo()&&n.__&&n.a_(e.mutations)}function CT(t){return Ks(t)&&!is(t).$o()&&t.g_.length>0}function ST(t){is(t).start()}async function JD(t){is(t).l_()}async function ZD(t){const e=is(t);for(const n of t.g_)e.a_(n.mutations)}async function ex(t,e,n){const s=t.g_.shift(),r=Gf.from(s,e,n);await RT(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Yl(t)}async function tx(t,e){e&&is(t).__&&await async function(s,r){if(function(o){return KN(o)&&o!==R.ABORTED}(r.code)){const i=s.g_.shift();is(s).Go(),await RT(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Yl(s)}}(t,e),CT(t)&&ST(t)}async function lm(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Ks(n);n.y_.add(3),await Po(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Ql(n)}async function nx(t,e){const n=J(t);e?(n.y_.delete(2),await Ql(n)):e||(n.y_.add(2),await Po(n),n.b_.set("Unknown"))}function Xr(t){return t.v_||(t.v_=function(n,s,r){const i=J(n);return i.P_(),new jD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{_o:zD.bind(null,t),uo:GD.bind(null,t),r_:QD.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),sd(t)?nd(t):t.b_.set("Unknown")):(await t.v_.stop(),AT(t))})),t.v_}function is(t){return t.C_||(t.C_=function(n,s,r){const i=J(n);return i.P_(),new HD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{_o:JD.bind(null,t),uo:tx.bind(null,t),c_:ZD.bind(null,t),u_:ex.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Yl(t)):(await t.C_.stop(),t.g_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new rd(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function id(t,e){if(On("AsyncQueue",`${e}: ${t}`),Co(t))return new B(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=di(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Tr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.F_=new De(W.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):z():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vr{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vr(e,n,Tr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.x_=void 0,this.listeners=[]}}class rx{constructor(){this.queries=new Yr(e=>QE(e),Hl),this.onlineState="Unknown",this.O_=new Set}}async function od(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sx),r)try{i.x_=await n.onListen(s)}catch(o){const a=id(o,`Initialization of query '${Qu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&ld(n)}async function ad(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ix(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(r)&&(s=!0);o.x_=r}}s&&ld(n)}function ox(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ld(t){t.O_.forEach(e=>{e.next()})}class cd{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Vr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.key=e}}class PT{constructor(e){this.key=e}}class ax{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ne(),this.mutatedKeys=ne(),this.na=YE(e),this.ra=new Tr(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new cm,r=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=ql(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(s.track({type:3,doc:d}),v=!0):this._a(f,d)||(s.track({type:2,doc:d}),v=!0,(l&&this.na(d,l)>0||c&&this.na(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(l||c)&&(a=!0)),v&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((c,u)=>function(f,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return m(f)-m(d)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,i.length!==0||l?{snapshot:new Vr(this.query,e.ra,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new cm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ne(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new PT(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new bT(s))}),n}ha(e){this.X_=e.ss,this.ta=ne();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Vr.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class lx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class cx{constructor(e){this.key=e,this.Ia=!1}}class ux{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Yr(a=>QE(a),Hl),this.da=new Map,this.Aa=new Set,this.Ra=new De(W.comparator),this.Va=new Map,this.ma=new Jf,this.fa={},this.ga=new Map,this.pa=Mr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function hx(t,e){const n=Tx(t);let s,r;const i=n.Ea.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Pa();else{const o=await MD(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await fx(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&TT(n.remoteStore,o)}return r}async function fx(t,e,n,s,r){t.wa=(h,f,d)=>async function(y,v,T,b){let k=v.view.sa(T);k.zi&&(k=await im(y.localStore,v.query,!1).then(({documents:j})=>v.view.sa(j,k)));const A=b&&b.targetChanges.get(v.targetId),K=v.view.applyChanges(k,y.isPrimaryClient,A);return hm(y,v.targetId,K.ca),K.snapshot}(t,h,f,d);const i=await im(t.localStore,e,!0),o=new ax(e,i.ss),a=o.sa(i.documents),l=bo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);hm(t,n,c.ca);const u=new lx(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function dx(t,e){const n=J(t),s=n.Ea.get(e),r=n.da.get(s.targetId);if(r.length>1)return n.da.set(s.targetId,r.filter(i=>!Hl(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await eh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),IT(n.remoteStore,s.targetId),th(n,s.targetId)}).catch(Ro)):(th(n,s.targetId),await eh(n.localStore,s.targetId,!0))}async function px(t,e,n){const s=Ix(t);try{const r=await function(o,a){const l=J(o),c=je.now(),u=a.reduce((d,m)=>d.add(m.key),ne());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Vn(),y=ne();return l.Xi.getEntries(d,u).next(v=>{m=v,m.forEach((T,b)=>{b.isValidDocument()||(y=y.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const T=[];for(const b of a){const k=$N(b,h.get(b.key).overlayedDocument);k!=null&&T.push(new cs(b.key,k,jE(k.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,T,a)}).next(v=>{f=v;const T=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(d,v.batchId,T)})}).then(()=>({batchId:f.batchId,changes:JE(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new De(ue)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,r.batchId,n),await ko(s,r.changes),await Yl(s.remoteStore)}catch(r){const i=id(r,"Failed to persist write");n.reject(i)}}async function kT(t,e){const n=J(t);try{const s=await DD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Va.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ia=!0:r.modifiedDocuments.size>0?be(o.Ia):r.removedDocuments.size>0&&(be(o.Ia),o.Ia=!1))}),await ko(n,s,e)}catch(s){await Ro(s)}}function um(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(c=!0)}),c&&ld(l)}(s.eventManager,e),r.length&&s.Ta.r_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gx(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Va.get(e),i=r&&r.key;if(i){let o=new De(W.comparator);o=o.insert(i,ht.newNoDocument(i,X.min()));const a=ne().add(i),l=new zl(X.min(),new Map,new De(ue),o,a);await kT(s,l),s.Ra=s.Ra.remove(i),s.Va.delete(e),ud(s)}else await eh(s.localStore,e,!1).then(()=>th(s,e,n)).catch(Ro)}async function mx(t,e){const n=J(t),s=e.batch.batchId;try{const r=await ND(n.localStore,e);DT(n,s,null),NT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ko(n,r)}catch(r){await Ro(r)}}async function _x(t,e,n){const s=J(t);try{const r=await function(o,a){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(be(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);DT(s,e,n),NT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ko(s,r)}catch(r){await Ro(r)}}function NT(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function DT(t,e,n){const s=J(t);let r=s.fa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fa[s.currentUser.toKey()]=r}}function th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||xT(t,s)})}function xT(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(IT(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),ud(t))}function hm(t,e,n){for(const s of n)s instanceof bT?(t.ma.addReference(s.key,e),yx(t,s)):s instanceof PT?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||xT(t,s.key)):z()}function yx(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||(U("SyncEngine","New document in limbo: "+n),t.Aa.add(s),ud(t))}function ud(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new W(ke.fromString(e)),s=t.pa.next();t.Va.set(s,new cx(n)),t.Ra=t.Ra.insert(n,s),TT(t.remoteStore,new zn(Mn(jl(n.path)),s,"TargetPurposeLimboResolution",$f.ae))}}async function ko(t,e,n){const s=J(t),r=[],i=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=ed.qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Ta.r_(r),await async function(l,c){const u=J(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,f=>P.forEach(f.Li,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>P.forEach(f.ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Co(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Ji.get(f),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(f,y)}}}(s.localStore,i))}async function vx(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await _T(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(l=>{l.reject(new B(R.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ko(n,s.ts)}}function Ex(t,e){const n=J(t),s=n.Va.get(e);if(s&&s.Ia)return ne().add(s.key);{let r=ne();const i=n.da.get(e);if(!i)return r;for(const o of i){const a=n.Ea.get(o);r=r.unionWith(a.view.ia)}return r}}function Tx(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ex.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gx.bind(null,e),e.Ta.r_=ix.bind(null,e.eventManager),e.Ta.Sa=ox.bind(null,e.eventManager),e}function Ix(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_x.bind(null,e),e}class fm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kD(this.persistence,new bD,e.initialUser,this.serializer)}createPersistence(e){return new CD(Zf.zr,this.serializer)}createSharedClientState(e){return new LD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>um(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vx.bind(null,this.syncEngine),await nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rx}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),s=function(i){return new $D(i)}(e.databaseInfo);return function(i,o,a,l){return new qD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new KD(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>um(this.syncEngine,n,0),function(){return am.v()?new am:new FD}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new ux(r,i,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=J(n);U("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await Po(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=UE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=id(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await _T(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cx(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>lm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lm(e.remoteStore,i)),t._onlineComponents=e}function Rx(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Cx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Rx(n))throw n;Nr("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new fm)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new fm);return t._offlineComponents}async function OT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await dm(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await dm(t,new wx))),t._onlineComponents}function Sx(t){return OT(t).then(e=>e.syncEngine)}async function Qa(t){const e=await OT(t),n=e.eventManager;return n.onListen=hx.bind(null,e.syncEngine),n.onUnlisten=dx.bind(null,e.syncEngine),n}function bx(t,e,n={}){const s=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new hd({next:f=>{o.enqueueAndForget(()=>ad(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new B(R.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new B(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new cd(jl(a.path),u,{includeMetadataChanges:!0,W_:!0});return od(i,h)}(await Qa(t),t.asyncQueue,e,n,s)),s.promise}function Px(t,e,n={}){const s=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new hd({next:f=>{o.enqueueAndForget(()=>ad(i,h)),f.fromCache&&l.source==="server"?c.reject(new B(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new cd(a,u,{includeMetadataChanges:!0,W_:!0});return od(i,h)}(await Qa(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kx(t,e,n,s){if(e===!0&&s===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gm(t){if(!W.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mm(t){if(W.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _m({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _m(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Y1;switch(s.type){case"firstParty":return new eN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=pm.get(n);s&&(U("ComponentProvider","Removing Datastore"),pm.delete(n),s.terminate())}(this),Promise.resolve()}}function Nx(t,e,n,s={}){var r;const i=(t=$t(t,Xl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=lt.MOCK_USER;else{a=qA(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new X1(new FE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new No(this.firestore,e,this._query)}}class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Zn extends No{constructor(e,n,s){super(e,n,jl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new W(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function Dx(t,e,...n){if(t=Tt(t),VT("collection","path",e),t instanceof Xl){const s=ke.fromString(e,...n);return mm(s),new Zn(t,null,s)}{if(!(t instanceof St||t instanceof Zn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return mm(s),new Zn(t.firestore,null,s)}}function LT(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=UE.V()),VT("doc","path",e),t instanceof Xl){const s=ke.fromString(e,...n);return gm(s),new St(t,null,new W(s))}{if(!(t instanceof St||t instanceof Zn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return gm(s),new St(t.firestore,t instanceof Zn?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new vT(this,"async_queue_retry"),this.Xa=()=>{const n=Vc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Vc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Nn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Co(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw On("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const r=rd.createAndSchedule(this,e,n,s,i=>this.ru(i));return this.ja.push(r),r}eu(){this.Ha&&z()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function ym(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class os extends Xl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new xx}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FT(this),this._firestoreClient.terminate()}}function Ox(t,e){const n=typeof t=="object"?t:Lh(),s=typeof t=="string"?t:e||"(default)",r=Vh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jA("firestore");i&&Nx(r,...i)}return r}function Jl(t){return t._firestoreClient||FT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FT(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new fN(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,MT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Ax(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(yt.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=/^__.*__$/;class Vx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class UT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class pd{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.cu({path:s,hu:!1});return r.Pu(e),r}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.cu({path:s,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Ya(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(BT(this.uu)&&Mx.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class Lx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Gl(e)}Ru(e,n,s,r=!1){return new pd({uu:e,methodName:n,Au:s,path:dt.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $T(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new Lx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fx(t,e,n,s,r,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,r);gd("Data must be an object, but it was:",o,s);const a=jT(s,o);let l,c;if(i.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=nh(e,h,n);if(!o.contains(f))throw new B(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);qT(u,f)||u.push(f)}l=new Ot(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Vx(new Rt(a),l,c)}class tc extends dd{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function Ux(t,e,n,s){const r=t.Ru(1,e,n);gd("Data must be an object, but it was:",r,s);const i=[],o=Rt.empty();Ws(s,(l,c)=>{const u=md(e,l,n);c=Tt(c);const h=r.Iu(u);if(c instanceof tc)i.push(u);else{const f=nc(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ot(i);return new UT(o,a,r.fieldTransforms)}function Bx(t,e,n,s,r,i){const o=t.Ru(1,e,n),a=[nh(e,s,n)],l=[r];if(i.length%2!=0)throw new B(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(nh(e,i[f])),l.push(i[f+1]);const c=[],u=Rt.empty();for(let f=a.length-1;f>=0;--f)if(!qT(c,a[f])){const d=a[f];let m=l[f];m=Tt(m);const y=o.Iu(d);if(m instanceof tc)c.push(d);else{const v=nc(m,y);v!=null&&(c.push(d),u.set(d,v))}}const h=new Ot(c);return new UT(u,h,o.fieldTransforms)}function nc(t,e){if(HT(t=Tt(t)))return gd("Unsupported field value:",e,t),jT(t,e);if(t instanceof dd)return function(s,r){if(!BT(r.uu))throw r.Eu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Eu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=nc(a,r.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return MN(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=je.fromDate(s);return{timestampValue:za(r.serializer,i)}}if(s instanceof je){const i=new je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:za(r.serializer,i)}}if(s instanceof ec)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Lr)return{bytesValue:hT(r.serializer,s._byteString)};if(s instanceof St){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xf(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.Eu(`Unsupported field value: ${fd(s)}`)}(t,e)}function jT(t,e){const n={};return BE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(s,r)=>{const i=nc(r,e.lu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function HT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof ec||t instanceof Lr||t instanceof St||t instanceof dd)}function gd(t,e,n){if(!HT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=fd(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function nh(t,e,n){if((e=Tt(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return md(t,e);throw Ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const $x=new RegExp("[~\\*/\\[\\]]");function md(t,e,n){if(e.search($x)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ya(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new B(R.INVALID_ARGUMENT,a+t+l)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(KT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jx extends WT{data(){return super.data()}}function KT(t,e){return typeof e=="string"?md(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hx{convertValue(e,n="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ws(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ec(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=rs(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);be(mT(s));const r=new so(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GT extends WT{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(KT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class da extends GT{data(e={}){return super.data(e)}}class QT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new gi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new da(this._firestore,this._userDataWriter,s.key,s,new gi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new da(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new da(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Wx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Wx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){t=$t(t,St);const e=$t(t.firestore,os);return bx(Jl(e),t._key).then(n=>XT(e,t,n))}class _d extends Hx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Kx(t){t=$t(t,No);const e=$t(t.firestore,os),n=Jl(e),s=new _d(e);return zT(t._query),Px(n,t._query).then(r=>new QT(e,s,t,r))}function zx(t,e,n,...s){t=$t(t,St);const r=$t(t.firestore,os),i=$T(r);let o;return o=typeof(e=Tt(e))=="string"||e instanceof Zl?Bx(i,"updateDoc",t._key,e,n,s):Ux(i,"updateDoc",t._key,e),vd(r,[o.toMutation(t._key,Zt.exists(!0))])}function Gx(t){return vd($t(t.firestore,os),[new zf(t._key,Zt.none())])}function Qx(t,e){const n=$t(t.firestore,os),s=LT(t),r=qx(t.converter,e);return vd(n,[Fx($T(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function yd(t,...e){var n,s,r;t=Tt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ym(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ym(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof St)c=$t(t.firestore,os),u=jl(t._key.path),l={next:h=>{e[o]&&e[o](XT(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=$t(t,No);c=$t(h.firestore,os),u=h._query;const f=new _d(c);l={next:d=>{e[o]&&e[o](new QT(c,f,h,d))},error:e[o+1],complete:e[o+2]},zT(t._query)}return function(f,d,m,y){const v=new hd(y),T=new cd(d,v,m);return f.asyncQueue.enqueueAndForget(async()=>od(await Qa(f),T)),()=>{v.Ca(),f.asyncQueue.enqueueAndForget(async()=>ad(await Qa(f),T))}}(Jl(c),u,a,l)}function vd(t,e){return function(s,r){const i=new Nn;return s.asyncQueue.enqueueAndForget(async()=>px(await Sx(s),r,i)),i.promise}(Jl(t),e)}function XT(t,e,n){const s=n.docs.get(e._key),r=new _d(t);return new GT(t,r,e._key,s,new gi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){Qr=r})(Hr),vn(new tn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new os(new J1(s.getProvider("auth-internal")),new nN(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mt(Fg,"4.1.0",e),Mt(Fg,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebasestorage.googleapis.com",Yx="storageBucket",Xx=2*60*1e3,Jx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Fn{constructor(e,n,s=0){super(Fc(e),`Firebase Storage: ${n} (${Fc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,An.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function Fc(t){return"storage/"+t}function Zx(){const t="An unknown error occurred, please check the error payload for server response.";return new An(In.UNKNOWN,t)}function eO(){return new An(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tO(){return new An(In.CANCELED,"User canceled the upload/download.")}function nO(t){return new An(In.INVALID_URL,"Invalid URL '"+t+"'.")}function sO(t){return new An(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vm(t){return new An(In.INVALID_ARGUMENT,t)}function ZT(){return new An(In.APP_DELETED,"The Firebase app was deleted.")}function rO(t){return new An(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(s.path==="")return s;throw sO(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=n===JT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${y}/${r}/${v}`,"i"),k=[{regex:a,indices:l,postModify:i},{regex:d,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<k.length;A++){const K=k[A],j=K.regex.exec(e);if(j){const ee=j[K.indices.bucket];let ae=j[K.indices.path];ae||(ae=""),s=new Gt(ee,ae),K.postModify(s);break}}if(s==null)throw nO(e);return s}}class iO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(d,l())},v)}function f(){i&&clearTimeout(i)}function d(v,...T){if(c){f();return}if(v){f(),u.call(null,v,...T);return}if(l()||o){f(),u.call(null,v,...T);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function y(v){m||(m=!0,f(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function aO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){return t!==void 0}function Em(t,e,n,s){if(s<e)throw vm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vm(`Invalid value for '${t}'. Expected ${n} or less.`)}function cO(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xa||(Xa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,s,r,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new na(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Xa.NO_ERROR,l=i.getStatus();if(!a||uO(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Xa.ABORT;s(!1,new na(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new na(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lO(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Zx();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?ZT():tO();o(l)}else{const l=eO();o(l)}};this.canceled_?n(!1,new na(!1,null,!0)):this.backoffId_=oO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class na{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function fO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mO(t,e,n,s,r,i,o=!0){const a=cO(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pO(c,e),fO(c,n),dO(c,i),gO(c,s),new hO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ja(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yO(this._location.path)}get storage(){return this._service}get parent(){const e=_O(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new Ja(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rO(e)}}function Tm(t,e){const n=e==null?void 0:e[Yx];return n==null?null:Gt.makeFromBucketSpec(n,t)}class vO{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=JT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xx,this._maxUploadRetryTime=Jx,this._requests=new Set,r!=null?this._bucket=Gt.makeFromBucketSpec(r,this._host):this._bucket=Tm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=Tm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Em("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Em("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ja(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new iO(ZT());{const o=mO(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Im="@firebase/storage",wm="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="storage";function TO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new vO(n,s,r,e,Hr)}function IO(){vn(new tn(EO,TO,"PUBLIC").setMultipleInstances(!0)),Mt(Im,wm,""),Mt(Im,wm,"esm2017")}IO();const Uc=new WeakMap;function eI(t,e){return Uc.has(e)||Uc.set(e,t||{f:{},r:{},s:{},u:{}}),Uc.get(e)}function wO(t,e,n,s){if(!t)return n;const[r,i]=tI(t);if(!r)return n;const o=eI(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function AO(t,e,n,s){if(!t)return;const[r,i]=tI(t);if(!r)return;const o=eI(void 0,s)[r],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(hn),a}function tI(t){return GS(t)||QS(t)?["f",t.path]:YS(t)?["r",t.toString()]:XS(t)?["s",t.toString()]:[]}const Bc=new WeakMap;function RO(t,e,n){const s=wy();Bc.has(s)||Bc.set(s,new Map);const r=Bc.get(s),i=AO(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):hn}const sh={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function rh(t,e,n,s){if(!zS(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof je||m instanceof ec)h[d]=m;else if(Qh(m)){const y=c+d;h[d]=y in n?l[d]:m.path,f[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in i&&(h[d][y]=i[v.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else $s(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const Ed={reset:!1,wait:!0,maxRefDepth:2,converter:sh,snapshotOptions:{serverTimestamps:"estimate"}};function Za(t){for(const e in t)t[e].unsub()}function ih(t,e,n,s,r,i,o,a,l){const[c,u]=rh(s.data(t.snapshotOptions),Gh(e,n),r,t);i.set(e,n,c),oh(t,e,n,r,u,i,o,a,l)}function CO({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const l=Object.create(null);let c=hn;return a.once?YT(t).then(u=>{u.exists()?ih(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())}).catch(i):c=yd(t,u=>{u.exists()?ih(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())},i),()=>{c(),Za(l)}}function oh(t,e,n,s,r,i,o,a,l){const c=Object.keys(r);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(y){y in d&&++h>=f&&a(n)}c.forEach(y=>{const v=s[y],T=r[y],b=`${n}.${y}`;if(d[b]=!0,v)if(v.path!==T.path)v.unsub();else return;s[y]={data:()=>Gh(e,b),unsub:CO({ref:T,target:e,path:b,depth:o,ops:i,resolve:m.bind(null,b),reject:l},t),path:T.path}})}function SO(t,e,n,s,r,i){const o=Object.assign({},Ed,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Yt(c?[]:t.value);c||n.set(t,h,[]);const d=s;let m,y=hn;const v=[],T={added:({newIndex:k,doc:A})=>{v.splice(k,0,Object.create(null));const K=v[k],[j,ee]=rh(A.data(l),void 0,K,o);n.add(Be(f),k,j),oh(o,f,`${h}.${k}`,K,ee,n,0,s.bind(null,A),r)},modified:({oldIndex:k,newIndex:A,doc:K})=>{const j=Be(f),ee=v[k],ae=j[k],[Ve,Oe]=rh(K.data(l),ae,ee,o);v.splice(A,0,ee),n.remove(j,k),n.add(j,A,Ve),oh(o,f,`${h}.${A}`,ee,Oe,n,0,s,r)},removed:({oldIndex:k})=>{const A=Be(f);n.remove(A,k),Za(v.splice(k,1)[0])}};function b(k){const A=k.docChanges(a);if(!m&&A.length){m=!0;let K=0;const j=A.length,ee=Object.create(null);for(let ae=0;ae<j;ae++)ee[A[ae].doc.id]=!0;s=ae=>{ae&&ae.id in ee&&++K>=j&&(c&&(n.set(t,h,Be(f)),f=t),d(Be(f)),s=hn)}}A.forEach(K=>{T[K.type](K)}),A.length||(c&&(n.set(t,h,Be(f)),f=t),s(Be(f)))}return u?Kx(e).then(b).catch(r):y=yd(e,b,r),k=>{if(y(),k){const A=typeof k=="function"?k():[];n.set(t,h,A)}v.forEach(Za)}}function bO(t,e,n,s,r,i){const o=Object.assign({},Ed,i),a="value",l=Object.create(null);s=JS(s,()=>Gh(t,a));let c=hn;function u(h){h.exists()?ih(o,t,a,h,l,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?YT(e).then(u).catch(r):c=yd(e,u,r),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}Za(l)}}function nI(t,e){let n=hn;const s=Object.assign({},Ed,e),r=Be(t),i=s.target||Yt();eb()&&(s.once=!0);const o=wO(r,s.ssrKey,i.value,wy());i.value=o;let l=!(Ay(r)?(o||[]).length>0:o!==void 0);const c=Yt(!1),u=Yt(),h=Ym(),f=xm();let d=hn;function m(){let T=Be(t);const b=new Promise((k,A)=>{if(n(s.reset),!T)return n=hn,k(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Qh(T)?bO:SO)(i,T,PO,k,A,s)}).catch(k=>(h.value===b&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===b&&(c.value=!1)});h.value=b}let y=hn;st(t)&&(y=mi(t,m)),m(),r&&(d=RO(h.value,r,s.ssrKey)),bh()&&l_(()=>h.value),f&&wI(v);function v(T=s.reset){y(),d(),n(T)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const PO={set:(t,e,n)=>WS(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function kO(t,e){return nI(t,{target:Yt([]),...e})}function NO(t,e){return nI(t,e)}function DO(t,{firebaseApp:e,modules:n=[]}){t.provide(Iy,e);for(const s of n)s(e,t)}const xO=JSON.parse('["To Do", "In Progress", "Done"]'),OO=JSON.parse('["low", "medium", "high"]');class MO{constructor({id:e="",title:n="",priority:s=OO[0],status:r=xO[0],progress:i=0}){Xs(this,"id");Xs(this,"title");Xs(this,"priority");Xs(this,"status");Xs(this,"progress");this.id=e,this.title=n,this.priority=s,this.status=r,this.progress=i}}const VO={apiKey:"AIzaSyDH-zRNSWlF0LmZxKT448JfgVa7bVHUlk0",authDomain:"vue-task-a4125.firebaseapp.com",projectId:"vue-task-a4125",storageBucket:"vue-task-a4125.appspot.com",messagingSenderId:"923241385029",appId:"1:923241385029:web:635185b731110c80c2272c"},sI={toFirestore:sh.toFirestore,fromFirestore:(t,e)=>{const n=sh.fromFirestore(t,e);return new MO(n)}},rI=Y_(VO),iI=Ox(rI),Am=Dx(iI,"tasks").withConverter(sI),$c=t=>LT(iI,"tasks",t).withConverter(sI),LO=sb({provider:new zh("6LfguE4nAAAAABgn6qfzc3xBp7GkxendRTt9Y7Z8"),debug:!1,isTokenAutoRefreshEnabled:!0}),FO="modulepreload",UO=function(t){return"/vue-task/"+t},Rm={},BO=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=UO(i),i in Rm)return;Rm[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":FO,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},jc=JSON.parse('["To Do", "In Progress", "Done"]'),ds=Yt([]),ps=Yt(""),gs=Yt(!1);function $O(){const t=async()=>{gs.value=!0;try{return ps.value="",kO(Am,{target:ds}),await ds.promise.value}catch{ps.value=ds.error.value}finally{gs.value=!1}},e=async i=>{if(i.length===0)return;const o=ds.value.find(a=>a.id===i);if(o)return{...o};gs.value=!0;try{return ps.value="",await NO($c(i)).promise.value}catch{ps.value=ds.error.value}finally{gs.value=!1}},n=async(i,o)=>{const a=typeof o>"u"||Object.keys(o).length===0;gs.value=!0;try{if(ps.value="",i&&!a){const{id:l,...c}=o;return await zx($c(l),c)}else if(!i&&!a){const{id:l,...c}=o;return await Qx(Am,c)}else{if(i&&a)return await Gx($c(i));if(!i&&a)throw new Error("No ID or task data provided while updating task list")}}catch(l){ps.value=l}finally{gs.value=!1}};return{tasks:ds,isLoading:gs,error:ps,fetchTasks:t,fetchTask:e,updateTask:n,nextStatus:async i=>{const o=ds.value.find(a=>a.id===i);if(o){const l=(jc.indexOf(o.status)+1)%jc.length,c=jc[l];let u=50;return c==="To Do"?u=0:c==="Done"&&(u=100),o&&(o.progress=u,o.status=c),n(i,o)}},deleteTask:async i=>await n(i)}}const jO=wn({__name:"LoadingBar",props:{isProgress:{type:Boolean}},setup(t){return(e,n)=>(Ye(),xt("div",{class:Bs(["loading-bar w-full h-1 bg-gradient-to-l from-primary translate-x-full",{"animate-loading":e.isProgress}])},null,2))}}),Do=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},HO={},qO={class:"plus-icon",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},WO=Ie("path",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.99327 0.883379C7.93551 0.38604 7.51284 0 7 0C6.44772 0 6 0.447715 6 1V6H1L0.883379 6.00673C0.38604 6.06449 0 6.48716 0 7C0 7.55228 0.447715 8 1 8H6V13L6.00673 13.1166C6.06449 13.614 6.48716 14 7 14C7.55228 14 8 13.5523 8 13V8H13L13.1166 7.99327C13.614 7.93551 14 7.51284 14 7C14 6.44772 13.5523 6 13 6H8V1L7.99327 0.883379Z"},null,-1),KO=[WO];function zO(t,e){return Ye(),xt("svg",qO,KO)}const GO=Do(HO,[["render",zO]]),QO={class:"item-list flex flex-col"},YO={key:1,class:"text-center"},XO=wn({__name:"ItemList",props:{items:{},itemKey:{}},setup(t){const e=t,n=s=>s[e.itemKey];return(s,r)=>(Ye(),xt("ul",QO,[s.items.length?(Ye(!0),xt(At,{key:0},Sw(s.items,i=>(Ye(),xt("li",{key:n(i)},[dr(s.$slots,"default",yI(T_(i)))]))),128)):(Ye(),xt("li",YO,[dr(s.$slots,"empty",{},()=>[dl("No list items")])]))]))}}),JO={key:0,class:"mr-2 text-sm text-grey"},ZO={class:"leading-6"},eM=wn({__name:"TaskProp",props:{name:{default:""},priority:{default:""}},setup(t){const e=t,n=$e(()=>{let s="task-prop";return e.priority.length===0?s:`${s} ${s}--${e.priority}`});return(s,r)=>(Ye(),xt("div",{class:Bs(n.value)},[s.name.length?(Ye(),xt("dt",JO,Cs(s.name),1)):I_("",!0),Ie("dd",ZO,[dr(s.$slots,"default",{},void 0,!0)])],2))}});const Hc=Do(eM,[["__scopeId","data-v-bb3600f7"]]),tM={},nM={class:"edit-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},sM=Ie("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.879.879 6.293 9.464a1 1 0 0 0-.293.708v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l8.586-8.586a3 3 0 0 0 0-4.243L19.12.88a3 3 0 0 0-4.242 0Zm4 2.585.083.095a1 1 0 0 1-.083 1.32l-8.295 8.293H8v-2.586l8.293-8.293a1 1 0 0 1 1.414 0l1.172 1.171ZM10.03 2.172a1 1 0 0 0-1-1H5l-.217.004A5 5 0 0 0 0 6.172v10l.005.216A5 5 0 0 0 5 21.172h10l.217-.005A5 5 0 0 0 20 16.172v-4.919l-.007-.116a1 1 0 0 0-1.993.116v4.919l-.005.176A3 3 0 0 1 15 19.172H5l-.176-.006A3 3 0 0 1 2 16.172v-10l.005-.177A3 3 0 0 1 5 3.172h4.03l.117-.007a1 1 0 0 0 .884-.993Z",clipRule:"evenodd"},null,-1),rM=[sM];function iM(t,e){return Ye(),xt("svg",nM,rM)}const oM=Do(tM,[["render",iM]]),aM={},lM={class:"delete-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 22"},cM=Ie("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 0a3 3 0 0 1 2.995 2.824L15 3v1h4a1 1 0 0 1 .117 1.993L19 6h-1v13a3 3 0 0 1-2.824 2.995L15 22H5a3 3 0 0 1-2.995-2.824L2 19V6H1a1 1 0 0 1-.117-1.993L1 4h4V3A3 3 0 0 1 7.824.005L8 0h4ZM4 6v13a1 1 0 0 0 .883.993L5 20h10a1 1 0 0 0 .993-.883L16 19V6H4Zm9-2H7V3l.007-.117A1 1 0 0 1 8 2h4l.117.007A1 1 0 0 1 13 3v1ZM8 9a1 1 0 0 1 .993.883L9 10v6a1 1 0 0 1-1.993.117L7 16v-6a1 1 0 0 1 1-1Zm4.993.883A1 1 0 0 0 11 10v6l.007.117A1 1 0 0 0 13 16v-6l-.007-.117Z",clipRule:"evenodd"},null,-1),uM=[cM];function hM(t,e){return Ye(),xt("svg",lM,uM)}const fM=Do(aM,[["render",hM]]),dM=["width","height","viewBox"],pM=["cx","cy","r"],gM=["cx","cy","r","transform"],mM=wn({__name:"CircularProgress",props:{strokeWidth:{default:2},sqSize:{default:24},percentage:{default:0}},setup(t){const e=t;A0(c=>({d618c036:n.value,"66eb17ad":a.value,e4a52c82:l.value}));const n=$e(()=>`${e.strokeWidth}px`),s=$e(()=>`rotate(-90 ${e.sqSize/2} ${e.sqSize/2})`),r=$e(()=>(e.sqSize-e.strokeWidth)/2),i=$e(()=>e.sqSize/2),o=$e(()=>`0 0 ${e.sqSize} ${e.sqSize}`),a=$e(()=>r.value*Math.PI*2),l=$e(()=>a.value-a.value*(e.percentage||0)/100);return(c,u)=>(Ye(),xt("svg",{class:"circular-progressbar block",width:c.sqSize,height:c.sqSize,viewBox:o.value},[Ie("circle",{class:"circular-progressbar__circle stroke-lighter-grey",cx:i.value,cy:i.value,r:r.value},null,8,pM),Ie("circle",{class:"circular-progressbar__circle circular-progressbar__circle--progress",cx:i.value,cy:i.value,r:r.value,transform:s.value},null,8,gM)],8,dM))}});const _M=Do(mM,[["__scopeId","data-v-c66036c7"]]),yM={class:"task-item flex flex-col xs:flex-row xs:justify-between items-center mt-4 xs:mx-auto pt-6 px-7 font-normal bg-white rounded-3xl shadow-diffused shadow-grey/10"},vM={class:"text-sm font-bold first-letter:uppercase"},EM={class:"flex items-center mb-6 text-2xl"},TM=wn({__name:"TaskItem",props:{id:{},title:{},priority:{},status:{},progress:{}},emits:["status-next","delete","edit"],setup(t){const e=t;return(n,s)=>(Ye(),xt("dl",yM,[Ce(Hc,{name:"Name",class:"flex items-center mb-6 xs:w-[170px] xs:flex-col xs:items-start"},{default:Kn(()=>[dl(Cs(n.title),1)]),_:1}),Ce(Hc,{name:"Priority",priority:n.priority,class:"flex items-center mb-6 xs:flex-col xs:items-start"},{default:Kn(()=>[Ie("p",vM,Cs(n.priority),1)]),_:1},8,["priority"]),Ce(Hc,{class:"flex items-center w-[100px] mb-6 justify-center text-center"},{default:Kn(()=>[Ie("button",{type:"button",class:"py-2 px-3.5 font-arial text-xs font-bold text-secondary-states border border-lighter-grey rounded-xl bg-secondary-states",onClick:s[0]||(s[0]=r=>n.$emit("status-next",n.id))},Cs(n.status),1)]),_:1}),Ce(_M,{class:"flex items-center mb-6 text-2xl",percentage:n.progress},null,8,["percentage"]),Ie("div",EM,[Ie("button",{type:"button",class:"mr-3.5 text-primary",onClick:s[1]||(s[1]=r=>n.$emit("edit",e))},[Ce(oM)]),Ie("button",{type:"button",class:"text-danger",onClick:s[2]||(s[2]=r=>n.$emit("delete",n.id))},[Ce(fM)])])]))}}),IM={class:"fixed top-0 bottom-0 left-0 right-0 flex bg-black/40"},wM={class:"relative w-[90%] max-w-[600px] m-auto p-8 bg-white rounded-3xl"},AM={class:"mt-3 mb-6 first-letter:uppercase"},RM={class:"my-8 leading-6"},CM={class:"flex justify-center 2xs:justify-end"},SM=["disabled"],bM=wn({__name:"ActionModal",props:{actionName:{default:"Ok"},actionType:{default:"standard"},isDisabledAction:{type:Boolean,default:!1}},emits:["cancel","ok"],setup(t){return(e,n)=>(Ye(),ao(zw,{to:"body"},[Ie("div",IM,[Ie("div",wM,[Ie("button",{class:"app-btn absolute top-2 right-2 min-mobile-dims text-secondary-states text-4.5xl font-normal",type:"button",onClick:n[0]||(n[0]=s=>e.$emit("cancel"))}," × "),Ie("h2",AM,[dr(e.$slots,"title")]),Ie("div",RM,[dr(e.$slots,"default")]),dr(e.$slots,"actions",{},()=>[Ie("div",CM,[Ie("button",{class:"app-button py-2 px-4 text-secondary-states font-normal leading-6 border border-lighter-grey rounded-xl bg-secondary-states",type:"button",onClick:n[1]||(n[1]=s=>e.$emit("cancel"))}," Cancel "),Ie("button",{class:Bs(["app-btn ml-4 py-2 px-4 text-white font-bold first-letter:uppercase leading-6 rounded-xl bg-primary-states",{"bg-danger-states":e.actionType==="destructive"}]),type:"button",disabled:e.isDisabledAction,onClick:n[2]||(n[2]=s=>e.$emit("ok"))},Cs(e.actionName),11,SM)])])])])]))}}),PM={class:"task-list"},kM=Ie("span",{class:"hidden 3xs:inline ml-2 font-semibold"},"Add task",-1),NM=Ie("p",null," The task with the name above will be permanently removed from the current list of tasks. Are you sure you want to delete it? ",-1),DM=wn({__name:"TaskList",setup(t){const{tasks:e,isLoading:n,fetchTasks:s,nextStatus:r,deleteTask:i}=$O(),o=DA(),a=Yt(""),l=$e(()=>{const m=e.value.find(y=>y.id===a.value);return m==null?void 0:m.title});Ih(s);const c=()=>{o.push({name:"edit",params:{id:""}})},u=m=>{a.value=m},h=m=>{o.push({name:"edit",params:{id:m.id}})},f=()=>{a.value=""},d=()=>{i(a.value),f()};return(m,y)=>{const v=Aw("router-view");return Ye(),xt(At,null,[Ie("main",PM,[Ce(jO,{class:"z-10 fixed top-0 left-0","is-progress":Be(n)},null,8,["is-progress"]),Ie("button",{class:"app-btn float-right flex items-center min-mobile-dims mt-[calc(-44px-1.5rem)] py-2 px-4 text-white rounded-2xl bg-primary-states",onClick:c},[Ce(GO),kM]),Ce(XO,{class:"my-6",items:Be(e),"item-key":"id"},{default:Kn(T=>[Ce(TM,w_(T,{onStatusNext:Be(r),onDelete:u,onEdit:h}),null,16,["onStatusNext"])]),empty:Kn(()=>[Ie("strong",null,Cs(Be(n)?"Loading tasks...":"No tasks found"),1)]),_:1},8,["items"]),Ce(v)]),a.value?(Ye(),ao(bM,{key:0,actionName:"delete",actionType:"destructive",onOk:d,onCancel:f},{title:Kn(()=>[dl(' Delete "'+Cs(l.value)+'" ',1)]),default:Kn(()=>[NM]),_:1})):I_("",!0)],64)}}}),xM=kA({history:z0("/vue-task/"),routes:[{path:"/",name:"home",component:DM,children:[{path:"task/:id?",name:"edit",props:!0,component:()=>BO(()=>import("./TaskEdit-b7aee4af.js"),["assets/TaskEdit-b7aee4af.js","assets/TaskEdit-eaea7ff3.css"])}]}]});const Td=b0(xA);Td.use(xM);Td.use(DO,{firebaseApp:rI,modules:[LO]});Td.mount("#app");export{At as F,MO as T,Do as _,Ie as a,dl as b,xt as c,wn as d,Yt as e,$e as f,Ih as g,ao as h,Be as i,bM as j,$O as k,I_ as l,LM as m,Bs as n,Ye as o,Ce as p,MM as q,Sw as r,VM as s,Cs as t,DA as u,FM as v,Kn as w};
