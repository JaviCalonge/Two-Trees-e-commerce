(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ai(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},ln=[],it=()=>{},xu=()=>!1,ts=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Oi=t=>t.startsWith("onUpdate:"),_e=Object.assign,Ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nu=Object.prototype.hasOwnProperty,ee=(t,e)=>Nu.call(t,e),W=Array.isArray,un=t=>lr(t)==="[object Map]",ns=t=>lr(t)==="[object Set]",go=t=>lr(t)==="[object Date]",z=t=>typeof t=="function",me=t=>typeof t=="string",ct=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Ya=t=>(ue(t)||z(t))&&z(t.then)&&z(t.catch),Xa=Object.prototype.toString,lr=t=>Xa.call(t),Du=t=>lr(t).slice(8,-1),Qa=t=>lr(t)==="[object Object]",Pi=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=Ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mu=/-(\w)/g,We=rs(t=>t.replace(Mu,(e,n)=>n?n.toUpperCase():"")),Lu=/\B([A-Z])/g,en=rs(t=>t.replace(Lu,"-$1").toLowerCase()),ss=rs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Os=rs(t=>t?`on${ss(t)}`:""),xt=(t,e)=>!Object.is(t,e),Rr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Za=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _o;const is=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ki(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?Bu(r):ki(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(me(t)||ue(t))return t}const Uu=/;(?![^(]*\))/g,Fu=/:([^]+)/,$u=/\/\*[^]*?\*\//g;function Bu(t){const e={};return t.replace($u,"").split(Uu).forEach(n=>{if(n){const r=n.split(Fu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xi(t){let e="";if(me(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=xi(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ju=Ai(Hu);function ec(t){return!!t||t===""}function Vu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=os(t[r],e[r]);return n}function os(t,e){if(t===e)return!0;let n=go(t),r=go(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ct(t),r=ct(e),n||r)return t===e;if(n=W(t),r=W(e),n||r)return n&&r?Vu(t,e):!1;if(n=ue(t),r=ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!os(t[o],e[o]))return!1}}return String(t)===String(e)}function Wu(t,e){return t.findIndex(n=>os(n,e))}const tc=t=>!!(t&&t.__v_isRef===!0),Ie=t=>me(t)?t:t==null?"":W(t)||ue(t)&&(t.toString===Xa||!z(t.toString))?tc(t)?Ie(t.value):JSON.stringify(t,nc,2):String(t),nc=(t,e)=>tc(e)?nc(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Cs(r,i)+" =>"]=s,n),{})}:ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cs(n))}:ct(e)?Cs(e):ue(e)&&!W(e)&&!Qa(e)?String(e):e,Cs=(t,e="")=>{var n;return ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fe;class qu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zu(){return Fe}let ce;const Ps=new WeakSet;class rc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ps.has(this)&&(Ps.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ic(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yo(this),oc(this);const e=ce,n=Ke;ce=this,Ke=!0;try{return this.fn()}finally{ac(this),ce=e,Ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mi(e);this.deps=this.depsTail=void 0,yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ps.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zs(this)&&this.run()}get dirty(){return Zs(this)}}let sc=0,Hn,jn;function ic(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Hn,Hn=t}function Ni(){sc++}function Di(){if(--sc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hn;){let e=Hn;for(Hn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function oc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ac(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mi(r),Ku(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Zs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function cc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Jn))return;t.globalVersion=Jn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zs(t)){t.flags&=-3;return}const n=ce,r=Ke;ce=t,Ke=!0;try{oc(t);const s=t.fn(t._value);(e.version===0||xt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=n,Ke=r,ac(t),t.flags&=-3}}function Mi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ku(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ke=!0;const lc=[];function Lt(){lc.push(Ke),Ke=!1}function Ut(){const t=lc.pop();Ke=t===void 0?!0:t}function yo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let Jn=0;class Gu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Li{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!Ke||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Gu(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,uc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(e){this.version++,Jn++,this.notify(e)}notify(e){Ni();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Di()}}}function uc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)uc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ei=new WeakMap,zt=Symbol(""),ti=Symbol(""),Yn=Symbol("");function be(t,e,n){if(Ke&&ce){let r=ei.get(t);r||ei.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Li),s.map=r,s.key=n),s.track()}}function mt(t,e,n,r,s,i){const o=ei.get(t);if(!o){Jn++;return}const a=c=>{c&&c.trigger()};if(Ni(),e==="clear")o.forEach(a);else{const c=W(t),l=c&&Pi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Yn||!ct(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Yn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(zt)),un(t)&&a(o.get(ti)));break;case"delete":c||(a(o.get(zt)),un(t)&&a(o.get(ti)));break;case"set":un(t)&&a(o.get(zt));break}}Di()}function sn(t){const e=Z(t);return e===t?e:(be(e,"iterate",Yn),Ve(t)?e:e.map(we))}function as(t){return be(t=Z(t),"iterate",Yn),t}const Ju={__proto__:null,[Symbol.iterator](){return ks(this,Symbol.iterator,we)},concat(...t){return sn(this).concat(...t.map(e=>W(e)?sn(e):e))},entries(){return ks(this,"entries",t=>(t[1]=we(t[1]),t))},every(t,e){return dt(this,"every",t,e,void 0,arguments)},filter(t,e){return dt(this,"filter",t,e,n=>n.map(we),arguments)},find(t,e){return dt(this,"find",t,e,we,arguments)},findIndex(t,e){return dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dt(this,"findLast",t,e,we,arguments)},findLastIndex(t,e){return dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return xs(this,"includes",t)},indexOf(...t){return xs(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return xs(this,"lastIndexOf",t)},map(t,e){return dt(this,"map",t,e,void 0,arguments)},pop(){return Nn(this,"pop")},push(...t){return Nn(this,"push",t)},reduce(t,...e){return vo(this,"reduce",t,e)},reduceRight(t,...e){return vo(this,"reduceRight",t,e)},shift(){return Nn(this,"shift")},some(t,e){return dt(this,"some",t,e,void 0,arguments)},splice(...t){return Nn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Nn(this,"unshift",t)},values(){return ks(this,"values",we)}};function ks(t,e,n){const r=as(t),s=r[e]();return r!==t&&!Ve(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Yu=Array.prototype;function dt(t,e,n,r,s,i){const o=as(t),a=o!==t&&!Ve(t),c=o[e];if(c!==Yu[e]){const f=c.apply(t,i);return a?we(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,we(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function vo(t,e,n,r){const s=as(t);let i=n;return s!==t&&(Ve(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,we(a),c,t)}),s[e](i,...r)}function xs(t,e,n){const r=Z(t);be(r,"iterate",Yn);const s=r[e](...n);return(s===-1||s===!1)&&$i(n[0])?(n[0]=Z(n[0]),r[e](...n)):s}function Nn(t,e,n=[]){Lt(),Ni();const r=Z(t)[e].apply(t,n);return Di(),Ut(),r}const Xu=Ai("__proto__,__v_isRef,__isVue"),fc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ct));function Qu(t){ct(t)||(t=String(t));const e=Z(this);return be(e,"has",t),e.hasOwnProperty(t)}class dc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lf:gc:i?mc:pc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){let c;if(o&&(c=Ju[n]))return c;if(n==="hasOwnProperty")return Qu}const a=Reflect.get(e,n,Se(e)?e:r);return(ct(n)?fc.has(n):Xu(n))||(s||be(e,"get",n),i)?a:Se(a)?o&&Pi(n)?a:a.value:ue(a)?s?yc(a):cs(a):a}}class hc extends dc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jt(i);if(!Ve(r)&&!Jt(r)&&(i=Z(i),r=Z(r)),!W(e)&&Se(i)&&!Se(r))return c?!1:(i.value=r,!0)}const o=W(e)&&Pi(n)?Number(n)<e.length:ee(e,n),a=Reflect.set(e,n,r,Se(e)?e:s);return e===Z(s)&&(o?xt(r,i)&&mt(e,"set",n,r):mt(e,"add",n,r)),a}deleteProperty(e,n){const r=ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ct(n)||!fc.has(n))&&be(e,"has",n),r}ownKeys(e){return be(e,"iterate",W(e)?"length":zt),Reflect.ownKeys(e)}}class Zu extends dc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ef=new hc,tf=new Zu,nf=new hc(!0);const ni=t=>t,Er=t=>Reflect.getPrototypeOf(t);function rf(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ni:e?ri:we;return!e&&be(i,"iterate",c?ti:zt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sf(t,e){const n={get(s){const i=this.__v_raw,o=Z(i),a=Z(s);t||(xt(s,a)&&be(o,"get",s),be(o,"get",a));const{has:c}=Er(o),l=e?ni:t?ri:we;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&be(Z(s),"iterate",zt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Z(i),a=Z(s);return t||(xt(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Z(a),l=e?ni:t?ri:we;return!t&&be(c,"iterate",zt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return _e(n,t?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!e&&!Ve(s)&&!Jt(s)&&(s=Z(s));const i=Z(this);return Er(i).has.call(i,s)||(i.add(s),mt(i,"add",s,s)),this},set(s,i){!e&&!Ve(i)&&!Jt(i)&&(i=Z(i));const o=Z(this),{has:a,get:c}=Er(o);let l=a.call(o,s);l||(s=Z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?xt(i,u)&&mt(o,"set",s,i):mt(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:a}=Er(i);let c=o.call(i,s);c||(s=Z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&mt(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&mt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rf(s,t,e)}),n}function Ui(t,e){const n=sf(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const of={get:Ui(!1,!1)},af={get:Ui(!1,!0)},cf={get:Ui(!0,!1)};const pc=new WeakMap,mc=new WeakMap,gc=new WeakMap,lf=new WeakMap;function uf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ff(t){return t.__v_skip||!Object.isExtensible(t)?0:uf(Du(t))}function cs(t){return Jt(t)?t:Fi(t,!1,ef,of,pc)}function _c(t){return Fi(t,!1,nf,af,mc)}function yc(t){return Fi(t,!0,tf,cf,gc)}function Fi(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ff(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return Jt(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function Ve(t){return!!(t&&t.__v_isShallow)}function $i(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function df(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&Za(t,"__v_skip",!0),t}const we=t=>ue(t)?cs(t):t,ri=t=>ue(t)?yc(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function he(t){return vc(t,!1)}function hf(t){return vc(t,!0)}function vc(t,e){return Se(t)?t:new pf(t,e)}class pf{constructor(e,n){this.dep=new Li,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:we(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ve(e)||Jt(e);e=r?e:Z(e),xt(e,n)&&(this._rawValue=e,this._value=r?e:we(e),this.dep.trigger())}}function Ge(t){return Se(t)?t.value:t}const mf={get:(t,e,n)=>e==="__v_raw"?t:Ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bc(t){return fn(t)?t:new Proxy(t,mf)}class gf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Li(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return ic(this,!0),!0}get value(){const e=this.dep.track();return cc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _f(t,e,n=!1){let r,s;return z(t)?r=t:(r=t.get,s=t.set),new gf(r,s,n)}const Sr={},Ur=new WeakMap;let jt;function yf(t,e=!1,n=jt){if(n){let r=Ur.get(n);r||Ur.set(n,r=[]),r.push(t)}}function vf(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:Ve(x)||s===!1||s===0?gt(x,1):gt(x);let u,f,p,m,g=!1,y=!1;if(Se(t)?(f=()=>t.value,g=Ve(t)):fn(t)?(f=()=>l(t),g=!0):W(t)?(y=!0,g=t.some(x=>fn(x)||Ve(x)),f=()=>t.map(x=>{if(Se(x))return x.value;if(fn(x))return l(x);if(z(x))return c?c(x,2):x()})):z(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Lt();try{p()}finally{Ut()}}const x=jt;jt=u;try{return c?c(t,3,[m]):t(m)}finally{jt=x}}:f=it,e&&s){const x=f,U=s===!0?1/0:s;f=()=>gt(x(),U)}const w=zu(),O=()=>{u.stop(),w&&Ci(w.effects,u)};if(i&&e){const x=e;e=(...U)=>{x(...U),O()}}let C=y?new Array(t.length).fill(Sr):Sr;const k=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const U=u.run();if(s||g||(y?U.some((V,F)=>xt(V,C[F])):xt(U,C))){p&&p();const V=jt;jt=u;try{const F=[U,C===Sr?void 0:y&&C[0]===Sr?[]:C,m];c?c(e,3,F):e(...F),C=U}finally{jt=V}}}else u.run()};return a&&a(k),u=new rc(f),u.scheduler=o?()=>o(k,!1):k,m=x=>yf(x,!1,u),p=u.onStop=()=>{const x=Ur.get(u);if(x){if(c)c(x,4);else for(const U of x)U();Ur.delete(u)}},e?r?k(!0):C=u.run():o?o(k.bind(null,!0),!0):u.run(),O.pause=u.pause.bind(u),O.resume=u.resume.bind(u),O.stop=O,O}function gt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Se(t))gt(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)gt(t[r],e,n);else if(ns(t)||un(t))t.forEach(r=>{gt(r,e,n)});else if(Qa(t)){for(const r in t)gt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(t,e,n,r){try{return r?t(...r):t()}catch(s){ls(s,e,n)}}function lt(t,e,n,r){if(z(t)){const s=ur(t,e,n,r);return s&&Ya(s)&&s.catch(i=>{ls(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(lt(t[i],e,n,r));return s}}function ls(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Lt(),ur(i,null,10,[t,c,l]),Ut();return}}bf(t,n,s,r,o)}function bf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ae=[];let rt=-1;const dn=[];let Tt=null,on=0;const wc=Promise.resolve();let Fr=null;function Bi(t){const e=Fr||wc;return t?e.then(this?t.bind(this):t):e}function wf(t){let e=rt+1,n=Ae.length;for(;e<n;){const r=e+n>>>1,s=Ae[r],i=Xn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hi(t){if(!(t.flags&1)){const e=Xn(t),n=Ae[Ae.length-1];!n||!(t.flags&2)&&e>=Xn(n)?Ae.push(t):Ae.splice(wf(e),0,t),t.flags|=1,Ec()}}function Ec(){Fr||(Fr=wc.then(Sc))}function Ef(t){W(t)?dn.push(...t):Tt&&t.id===-1?Tt.splice(on+1,0,t):t.flags&1||(dn.push(t),t.flags|=1),Ec()}function bo(t,e,n=rt+1){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ic(t){if(dn.length){const e=[...new Set(dn)].sort((n,r)=>Xn(n)-Xn(r));if(dn.length=0,Tt){Tt.push(...e);return}for(Tt=e,on=0;on<Tt.length;on++){const n=Tt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,on=0}}const Xn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sc(t){try{for(rt=0;rt<Ae.length;rt++){const e=Ae[rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ur(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rt<Ae.length;rt++){const e=Ae[rt];e&&(e.flags&=-2)}rt=-1,Ae.length=0,Ic(),Fr=null,(Ae.length||dn.length)&&Sc()}}let $e=null,Tc=null;function $r(t){const e=$e;return $e=t,Tc=t&&t.type.__scopeId||null,e}function Mt(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Co(-1);const i=$r(e);let o;try{o=t(...s)}finally{$r(i),r._d&&Co(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ji(t,e){if($e===null)return t;const n=hs($e),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&gt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),lt(c,n,8,[t.el,a,t,e]),Ut())}}const If=Symbol("_vte"),Sf=t=>t.__isTeleport;function Vi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rc(t,e){return z(t)?_e({name:t.name},e,{setup:t}):t}function Ac(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function si(t,e,n,r,s=!1){if(W(t)){t.forEach((g,y)=>si(g,e&&(W(e)?e[y]:e),n,r,s));return}if(Vn(r)&&!s)return;const i=r.shapeFlag&4?hs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,p=Z(f),m=f===ie?()=>!1:g=>ee(p,g);if(l!=null&&l!==c&&(me(l)?(u[l]=null,m(l)&&(f[l]=null)):Se(l)&&(l.value=null)),z(c))ur(c,a,12,[o,u]);else{const g=me(c),y=Se(c);if(g||y){const w=()=>{if(t.f){const O=g?m(c)?f[c]:u[c]:c.value;s?W(O)&&Ci(O,i):W(O)?O.includes(i)||O.push(i):g?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,m(c)&&(f[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Ue(w,n)):w()}}}is().requestIdleCallback;is().cancelIdleCallback;const Vn=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function Tf(t,e){Cc(t,"a",e)}function Rf(t,e){Cc(t,"da",e)}function Cc(t,e,n=Ee){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&Af(r,e,n,s),s=s.parent}}function Af(t,e,n,r){const s=us(e,t,r,!0);Pc(()=>{Ci(r[e],s)},n)}function us(t,e,n=Ee,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const a=fr(n),c=lt(e,n,t,o);return a(),Ut(),c});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=Ee)=>{(!Zn||t==="sp")&&us(t,(...r)=>e(...r),n)},Of=bt("bm"),Tn=bt("m"),Cf=bt("bu"),Pf=bt("u"),kf=bt("bum"),Pc=bt("um"),xf=bt("sp"),Nf=bt("rtg"),Df=bt("rtc");function Mf(t,e=Ee){us("ec",t,e)}const Lf="components";function Wi(t,e){return Ff(Lf,t,!0,e)||t}const Uf=Symbol.for("v-ndc");function Ff(t,e,n=!0,r=!1){const s=$e||Ee;if(s){const i=s.type;{const a=Sd(i,!1);if(a&&(a===e||a===We(e)||a===ss(We(e))))return i}const o=wo(s[t]||i[t],e)||wo(s.appContext[t],e);return!o&&r?i:o}}function wo(t,e){return t&&(t[e]||t[We(e)]||t[ss(We(e))])}function Br(t,e,n,r){let s;const i=n,o=W(t);if(o||me(t)){const a=o&&fn(t);let c=!1;a&&(c=!Ve(t),t=as(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?we(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const ii=t=>t?Qc(t)?hs(t):ii(t.parent):null,Wn=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ii(t.parent),$root:t=>ii(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qi(t),$forceUpdate:t=>t.f||(t.f=()=>{Hi(t.update)}),$nextTick:t=>t.n||(t.n=Bi.bind(t.proxy)),$watch:t=>id.bind(t)}),Ns=(t,e)=>t!==ie&&!t.__isScriptSetup&&ee(t,e),$f={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ns(r,e))return o[e]=1,r[e];if(s!==ie&&ee(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==ie&&ee(n,e))return o[e]=4,n[e];oi&&(o[e]=0)}}const u=Wn[e];let f,p;if(u)return e==="$attrs"&&be(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&ee(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ns(s,e)?(s[e]=n,!0):r!==ie&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&ee(t,o)||Ns(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(Wn,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eo(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oi=!0;function Bf(t){const e=qi(t),n=t.proxy,r=t.ctx;oi=!1,e.beforeCreate&&Io(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:w,beforeDestroy:O,beforeUnmount:C,destroyed:k,unmounted:x,render:U,renderTracked:V,renderTriggered:F,errorCaptured:de,serverPrefetch:ye,expose:Oe,inheritAttrs:qe,components:$t,directives:Ze,filters:kn}=e;if(l&&Hf(l,r,null),o)for(const se in o){const Q=o[se];z(Q)&&(r[se]=Q.bind(n))}if(s){const se=s.call(n,n);ue(se)&&(t.data=cs(se))}if(oi=!0,i)for(const se in i){const Q=i[se],ft=z(Q)?Q.bind(n,n):z(Q.get)?Q.get.bind(n,n):it,wt=!z(Q)&&z(Q.set)?Q.set.bind(n):it,et=ke({get:ft,set:wt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ce=>et.value=Ce})}if(a)for(const se in a)kc(a[se],r,n,se);if(c){const se=z(c)?c.call(n):c;Reflect.ownKeys(se).forEach(Q=>{Ar(Q,se[Q])})}u&&Io(u,t,"c");function ge(se,Q){W(Q)?Q.forEach(ft=>se(ft.bind(n))):Q&&se(Q.bind(n))}if(ge(Of,f),ge(Tn,p),ge(Cf,m),ge(Pf,g),ge(Tf,y),ge(Rf,w),ge(Mf,de),ge(Df,V),ge(Nf,F),ge(kf,C),ge(Pc,x),ge(xf,ye),W(Oe))if(Oe.length){const se=t.exposed||(t.exposed={});Oe.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:ft=>n[Q]=ft})})}else t.exposed||(t.exposed={});U&&t.render===it&&(t.render=U),qe!=null&&(t.inheritAttrs=qe),$t&&(t.components=$t),Ze&&(t.directives=Ze),ye&&Ac(t)}function Hf(t,e,n=it){W(t)&&(t=ai(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=Je(s.from||r,s.default,!0):i=Je(s.from||r):i=Je(s),Se(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Io(t,e,n){lt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kc(t,e,n,r){let s=r.includes(".")?qc(n,r):()=>n[r];if(me(t)){const i=e[t];z(i)&&pn(s,i)}else if(z(t))pn(s,t.bind(n));else if(ue(t))if(W(t))t.forEach(i=>kc(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&pn(s,i,t)}}function qi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Hr(c,l,o,!0)),Hr(c,e,o)),ue(e)&&i.set(e,c),c}function Hr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Hr(t,i,n,!0),s&&s.forEach(o=>Hr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jf={data:So,props:To,emits:To,methods:Un,computed:Un,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Un,directives:Un,watch:Wf,provide:So,inject:Vf};function So(t,e){return e?t?function(){return _e(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Vf(t,e){return Un(ai(t),ai(e))}function ai(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?_e(Object.create(null),t,e):e}function To(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:_e(Object.create(null),Eo(t),Eo(e??{})):e}function Wf(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function xc(){return{app:null,config:{isNativeTag:xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function zf(t,e){return function(r,s=null){z(r)||(r=_e({},r)),s!=null&&!ue(s)&&(s=null);const i=xc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:qf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Rd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...f)):z(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||X(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,u):t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,hs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(lt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=hn;hn=l;try{return u()}finally{hn=f}}};return l}}let hn=null;function Ar(t,e){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=Ee||$e;if(r||hn){const s=hn?hn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}const Nc={},Dc=()=>Object.create(Nc),Mc=t=>Object.getPrototypeOf(t)===Nc;function Kf(t,e,n,r=!1){const s={},i=Dc();t.propsDefaults=Object.create(null),Lc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:_c(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(fs(t.emitsOptions,p))continue;const m=e[p];if(c)if(ee(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const g=We(p);s[g]=ci(c,a,g,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Lc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=en(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ci(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&mt(t.attrs,"set","")}function Lc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bn(c))continue;const l=e[c];let u;s&&ee(s,u=We(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ci(s,c,f,l[f],t,!ee(l,f))}}return o}function ci(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=fr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const Jf=new WeakMap;function Uc(t,e,n=!1){const r=n?Jf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const u=f=>{c=!0;const[p,m]=Uc(f,e,!0);_e(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,ln),ln;if(W(i))for(let u=0;u<i.length;u++){const f=We(i[u]);Ro(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=We(u);if(Ro(f)){const p=i[u],m=o[f]=W(p)||z(p)?{type:p}:_e({},p),g=m.type;let y=!1,w=!0;if(W(g))for(let O=0;O<g.length;++O){const C=g[O],k=z(C)&&C.name;if(k==="Boolean"){y=!0;break}else k==="String"&&(w=!1)}else y=z(g)&&g.name==="Boolean";m[0]=y,m[1]=w,(y||ee(m,"default"))&&a.push(f)}}const l=[o,a];return ue(t)&&r.set(t,l),l}function Ro(t){return t[0]!=="$"&&!Bn(t)}const Fc=t=>t[0]==="_"||t==="$stable",zi=t=>W(t)?t.map(st):[st(t)],Yf=(t,e,n)=>{if(e._n)return e;const r=Mt((...s)=>zi(e(...s)),n);return r._c=!1,r},$c=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fc(s))continue;const i=t[s];if(z(i))e[s]=Yf(s,i,r);else if(i!=null){const o=zi(i);e[s]=()=>o}}},Bc=(t,e)=>{const n=zi(e);t.slots.default=()=>n},Hc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Xf=(t,e,n)=>{const r=t.slots=Dc();if(t.vnode.shapeFlag&32){const s=e._;s?(Hc(r,e,n),n&&Za(r,"_",s,!0)):$c(e,r)}else e&&Bc(t,e)},Qf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Hc(s,e,n):(i=!e.$stable,$c(e,s)),o=e}else e&&(Bc(t,e),o={default:1});if(i)for(const a in s)!Fc(a)&&o[a]==null&&delete s[a]},Ue=dd;function Zf(t){return ed(t)}function ed(t,e){const n=is();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=it,insertStaticContent:g}=t,y=(d,h,_,I=null,b=null,S=null,N=void 0,P=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!Dn(d,h)&&(I=E(d),Ce(d,b,S,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:j,shapeFlag:M}=h;switch(T){case ds:w(d,h,_,I);break;case Yt:O(d,h,_,I);break;case Ls:d==null&&C(h,_,I,N);break;case pe:$t(d,h,_,I,b,S,N,P,A);break;default:M&1?U(d,h,_,I,b,S,N,P,A):M&6?Ze(d,h,_,I,b,S,N,P,A):(M&64||M&128)&&T.process(d,h,_,I,b,S,N,P,A,$)}j!=null&&b&&si(j,d&&d.ref,S,h||d,!h)},w=(d,h,_,I)=>{if(d==null)r(h.el=a(h.children),_,I);else{const b=h.el=d.el;h.children!==d.children&&l(b,h.children)}},O=(d,h,_,I)=>{d==null?r(h.el=c(h.children||""),_,I):h.el=d.el},C=(d,h,_,I)=>{[d.el,d.anchor]=g(d.children,h,_,I,d.el,d.anchor)},k=({el:d,anchor:h},_,I)=>{let b;for(;d&&d!==h;)b=p(d),r(d,_,I),d=b;r(h,_,I)},x=({el:d,anchor:h})=>{let _;for(;d&&d!==h;)_=p(d),s(d),d=_;s(h)},U=(d,h,_,I,b,S,N,P,A)=>{h.type==="svg"?N="svg":h.type==="math"&&(N="mathml"),d==null?V(h,_,I,b,S,N,P,A):ye(d,h,b,S,N,P,A)},V=(d,h,_,I,b,S,N,P)=>{let A,T;const{props:j,shapeFlag:M,transition:B,dirs:q}=d;if(A=d.el=o(d.type,S,j&&j.is,j),M&8?u(A,d.children):M&16&&de(d.children,A,null,I,b,Ds(d,S),N,P),q&&Bt(d,null,I,"created"),F(A,d,d.scopeId,N,I),j){for(const ae in j)ae!=="value"&&!Bn(ae)&&i(A,ae,null,j[ae],S,I);"value"in j&&i(A,"value",null,j.value,S),(T=j.onVnodeBeforeMount)&&nt(T,I,d)}q&&Bt(d,null,I,"beforeMount");const Y=td(b,B);Y&&B.beforeEnter(A),r(A,h,_),((T=j&&j.onVnodeMounted)||Y||q)&&Ue(()=>{T&&nt(T,I,d),Y&&B.enter(A),q&&Bt(d,null,I,"mounted")},b)},F=(d,h,_,I,b)=>{if(_&&m(d,_),I)for(let S=0;S<I.length;S++)m(d,I[S]);if(b){let S=b.subTree;if(h===S||Kc(S.type)&&(S.ssContent===h||S.ssFallback===h)){const N=b.vnode;F(d,N,N.scopeId,N.slotScopeIds,b.parent)}}},de=(d,h,_,I,b,S,N,P,A=0)=>{for(let T=A;T<d.length;T++){const j=d[T]=P?Rt(d[T]):st(d[T]);y(null,j,h,_,I,b,S,N,P)}},ye=(d,h,_,I,b,S,N)=>{const P=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:j}=h;A|=d.patchFlag&16;const M=d.props||ie,B=h.props||ie;let q;if(_&&Ht(_,!1),(q=B.onVnodeBeforeUpdate)&&nt(q,_,h,d),j&&Bt(h,d,_,"beforeUpdate"),_&&Ht(_,!0),(M.innerHTML&&B.innerHTML==null||M.textContent&&B.textContent==null)&&u(P,""),T?Oe(d.dynamicChildren,T,P,_,I,Ds(h,b),S):N||Q(d,h,P,null,_,I,Ds(h,b),S,!1),A>0){if(A&16)qe(P,M,B,_,b);else if(A&2&&M.class!==B.class&&i(P,"class",null,B.class,b),A&4&&i(P,"style",M.style,B.style,b),A&8){const Y=h.dynamicProps;for(let ae=0;ae<Y.length;ae++){const ne=Y[ae],De=M[ne],ve=B[ne];(ve!==De||ne==="value")&&i(P,ne,De,ve,b,_)}}A&1&&d.children!==h.children&&u(P,h.children)}else!N&&T==null&&qe(P,M,B,_,b);((q=B.onVnodeUpdated)||j)&&Ue(()=>{q&&nt(q,_,h,d),j&&Bt(h,d,_,"updated")},I)},Oe=(d,h,_,I,b,S,N)=>{for(let P=0;P<h.length;P++){const A=d[P],T=h[P],j=A.el&&(A.type===pe||!Dn(A,T)||A.shapeFlag&70)?f(A.el):_;y(A,T,j,null,I,b,S,N,!0)}},qe=(d,h,_,I,b)=>{if(h!==_){if(h!==ie)for(const S in h)!Bn(S)&&!(S in _)&&i(d,S,h[S],null,b,I);for(const S in _){if(Bn(S))continue;const N=_[S],P=h[S];N!==P&&S!=="value"&&i(d,S,P,N,b,I)}"value"in _&&i(d,"value",h.value,_.value,b)}},$t=(d,h,_,I,b,S,N,P,A)=>{const T=h.el=d?d.el:a(""),j=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:q}=h;q&&(P=P?P.concat(q):q),d==null?(r(T,_,I),r(j,_,I),de(h.children||[],_,j,b,S,N,P,A)):M>0&&M&64&&B&&d.dynamicChildren?(Oe(d.dynamicChildren,B,_,b,S,N,P),(h.key!=null||b&&h===b.subTree)&&jc(d,h,!0)):Q(d,h,_,j,b,S,N,P,A)},Ze=(d,h,_,I,b,S,N,P,A)=>{h.slotScopeIds=P,d==null?h.shapeFlag&512?b.ctx.activate(h,_,I,N,A):kn(h,_,I,b,S,N,A):tn(d,h,A)},kn=(d,h,_,I,b,S,N)=>{const P=d.component=vd(d,I,b);if(Oc(d)&&(P.ctx.renderer=$),bd(P,!1,N),P.asyncDep){if(b&&b.registerDep(P,ge,N),!d.el){const A=P.subTree=X(Yt);O(null,A,h,_)}}else ge(P,d,h,_,b,S,N)},tn=(d,h,_)=>{const I=h.component=d.component;if(ud(d,h,_))if(I.asyncDep&&!I.asyncResolved){se(I,h,_);return}else I.next=h,I.update();else h.el=d.el,I.vnode=h},ge=(d,h,_,I,b,S,N)=>{const P=()=>{if(d.isMounted){let{next:M,bu:B,u:q,parent:Y,vnode:ae}=d;{const Me=Vc(d);if(Me){M&&(M.el=ae.el,se(d,M,N)),Me.asyncDep.then(()=>{d.isUnmounted||P()});return}}let ne=M,De;Ht(d,!1),M?(M.el=ae.el,se(d,M,N)):M=ae,B&&Rr(B),(De=M.props&&M.props.onVnodeBeforeUpdate)&&nt(De,Y,M,ae),Ht(d,!0);const ve=Ms(d),ze=d.subTree;d.subTree=ve,y(ze,ve,f(ze.el),E(ze),d,b,S),M.el=ve.el,ne===null&&fd(d,ve.el),q&&Ue(q,b),(De=M.props&&M.props.onVnodeUpdated)&&Ue(()=>nt(De,Y,M,ae),b)}else{let M;const{el:B,props:q}=h,{bm:Y,m:ae,parent:ne,root:De,type:ve}=d,ze=Vn(h);if(Ht(d,!1),Y&&Rr(Y),!ze&&(M=q&&q.onVnodeBeforeMount)&&nt(M,ne,h),Ht(d,!0),B&&fe){const Me=()=>{d.subTree=Ms(d),fe(B,d.subTree,d,b,null)};ze&&ve.__asyncHydrate?ve.__asyncHydrate(B,d,Me):Me()}else{De.ce&&De.ce._injectChildStyle(ve);const Me=d.subTree=Ms(d);y(null,Me,_,I,d,b,S),h.el=Me.el}if(ae&&Ue(ae,b),!ze&&(M=q&&q.onVnodeMounted)){const Me=h;Ue(()=>nt(M,ne,Me),b)}(h.shapeFlag&256||ne&&Vn(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ue(d.a,b),d.isMounted=!0,h=_=I=null}};d.scope.on();const A=d.effect=new rc(P);d.scope.off();const T=d.update=A.run.bind(A),j=d.job=A.runIfDirty.bind(A);j.i=d,j.id=d.uid,A.scheduler=()=>Hi(j),Ht(d,!0),T()},se=(d,h,_)=>{h.component=d;const I=d.vnode.props;d.vnode=h,d.next=null,Gf(d,h.props,I,_),Qf(d,h.children,_),Lt(),bo(d),Ut()},Q=(d,h,_,I,b,S,N,P,A=!1)=>{const T=d&&d.children,j=d?d.shapeFlag:0,M=h.children,{patchFlag:B,shapeFlag:q}=h;if(B>0){if(B&128){wt(T,M,_,I,b,S,N,P,A);return}else if(B&256){ft(T,M,_,I,b,S,N,P,A);return}}q&8?(j&16&&je(T,b,S),M!==T&&u(_,M)):j&16?q&16?wt(T,M,_,I,b,S,N,P,A):je(T,b,S,!0):(j&8&&u(_,""),q&16&&de(M,_,I,b,S,N,P,A))},ft=(d,h,_,I,b,S,N,P,A)=>{d=d||ln,h=h||ln;const T=d.length,j=h.length,M=Math.min(T,j);let B;for(B=0;B<M;B++){const q=h[B]=A?Rt(h[B]):st(h[B]);y(d[B],q,_,null,b,S,N,P,A)}T>j?je(d,b,S,!0,!1,M):de(h,_,I,b,S,N,P,A,M)},wt=(d,h,_,I,b,S,N,P,A)=>{let T=0;const j=h.length;let M=d.length-1,B=j-1;for(;T<=M&&T<=B;){const q=d[T],Y=h[T]=A?Rt(h[T]):st(h[T]);if(Dn(q,Y))y(q,Y,_,null,b,S,N,P,A);else break;T++}for(;T<=M&&T<=B;){const q=d[M],Y=h[B]=A?Rt(h[B]):st(h[B]);if(Dn(q,Y))y(q,Y,_,null,b,S,N,P,A);else break;M--,B--}if(T>M){if(T<=B){const q=B+1,Y=q<j?h[q].el:I;for(;T<=B;)y(null,h[T]=A?Rt(h[T]):st(h[T]),_,Y,b,S,N,P,A),T++}}else if(T>B)for(;T<=M;)Ce(d[T],b,S,!0),T++;else{const q=T,Y=T,ae=new Map;for(T=Y;T<=B;T++){const Le=h[T]=A?Rt(h[T]):st(h[T]);Le.key!=null&&ae.set(Le.key,T)}let ne,De=0;const ve=B-Y+1;let ze=!1,Me=0;const xn=new Array(ve);for(T=0;T<ve;T++)xn[T]=0;for(T=q;T<=M;T++){const Le=d[T];if(De>=ve){Ce(Le,b,S,!0);continue}let tt;if(Le.key!=null)tt=ae.get(Le.key);else for(ne=Y;ne<=B;ne++)if(xn[ne-Y]===0&&Dn(Le,h[ne])){tt=ne;break}tt===void 0?Ce(Le,b,S,!0):(xn[tt-Y]=T+1,tt>=Me?Me=tt:ze=!0,y(Le,h[tt],_,null,b,S,N,P,A),De++)}const po=ze?nd(xn):ln;for(ne=po.length-1,T=ve-1;T>=0;T--){const Le=Y+T,tt=h[Le],mo=Le+1<j?h[Le+1].el:I;xn[T]===0?y(null,tt,_,mo,b,S,N,P,A):ze&&(ne<0||T!==po[ne]?et(tt,_,mo,2):ne--)}}},et=(d,h,_,I,b=null)=>{const{el:S,type:N,transition:P,children:A,shapeFlag:T}=d;if(T&6){et(d.component.subTree,h,_,I);return}if(T&128){d.suspense.move(h,_,I);return}if(T&64){N.move(d,h,_,$);return}if(N===pe){r(S,h,_);for(let M=0;M<A.length;M++)et(A[M],h,_,I);r(d.anchor,h,_);return}if(N===Ls){k(d,h,_);return}if(I!==2&&T&1&&P)if(I===0)P.beforeEnter(S),r(S,h,_),Ue(()=>P.enter(S),b);else{const{leave:M,delayLeave:B,afterLeave:q}=P,Y=()=>r(S,h,_),ae=()=>{M(S,()=>{Y(),q&&q()})};B?B(S,Y,ae):ae()}else r(S,h,_)},Ce=(d,h,_,I=!1,b=!1)=>{const{type:S,props:N,ref:P,children:A,dynamicChildren:T,shapeFlag:j,patchFlag:M,dirs:B,cacheIndex:q}=d;if(M===-2&&(b=!1),P!=null&&si(P,null,_,d,!0),q!=null&&(h.renderCache[q]=void 0),j&256){h.ctx.deactivate(d);return}const Y=j&1&&B,ae=!Vn(d);let ne;if(ae&&(ne=N&&N.onVnodeBeforeUnmount)&&nt(ne,h,d),j&6)wr(d.component,_,I);else{if(j&128){d.suspense.unmount(_,I);return}Y&&Bt(d,null,h,"beforeUnmount"),j&64?d.type.remove(d,h,_,$,I):T&&!T.hasOnce&&(S!==pe||M>0&&M&64)?je(T,h,_,!1,!0):(S===pe&&M&384||!b&&j&16)&&je(A,h,_),I&&nn(d)}(ae&&(ne=N&&N.onVnodeUnmounted)||Y)&&Ue(()=>{ne&&nt(ne,h,d),Y&&Bt(d,null,h,"unmounted")},_)},nn=d=>{const{type:h,el:_,anchor:I,transition:b}=d;if(h===pe){rn(_,I);return}if(h===Ls){x(d);return}const S=()=>{s(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:N,delayLeave:P}=b,A=()=>N(_,S);P?P(d.el,S,A):A()}else S()},rn=(d,h)=>{let _;for(;d!==h;)_=p(d),s(d),d=_;s(h)},wr=(d,h,_)=>{const{bum:I,scope:b,job:S,subTree:N,um:P,m:A,a:T}=d;Ao(A),Ao(T),I&&Rr(I),b.stop(),S&&(S.flags|=8,Ce(N,d,h,_)),P&&Ue(P,h),Ue(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},je=(d,h,_,I=!1,b=!1,S=0)=>{for(let N=S;N<d.length;N++)Ce(d[N],h,_,I,b)},E=d=>{if(d.shapeFlag&6)return E(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),_=h&&h[If];return _?p(_):h};let L=!1;const D=(d,h,_)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,_),h._vnode=d,L||(L=!0,bo(),Ic(),L=!1)},$={p:y,um:Ce,m:et,r:nn,mt:kn,mc:de,pc:Q,pbc:Oe,n:E,o:t};let te,fe;return{render:D,hydrate:te,createApp:zf(D,te)}}function Ds({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function td(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jc(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&jc(o,a)),a.type===ds&&(a.el=o.el)}}function nd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vc(e)}function Ao(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const rd=Symbol.for("v-scx"),sd=()=>Je(rd);function pn(t,e,n){return Wc(t,e,n)}function Wc(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=_e({},n),c=e&&r||!e&&i!=="post";let l;if(Zn){if(i==="sync"){const m=sd();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=it,m.resume=it,m.pause=it,m}}const u=Ee;a.call=(m,g,y)=>lt(m,u,g,y);let f=!1;i==="post"?a.scheduler=m=>{Ue(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Hi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=vf(t,e,a);return Zn&&(l?l.push(p):c&&p()),p}function id(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?qc(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=fr(this),a=Wc(s,i.bind(r),n);return o(),a}function qc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const od=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${We(e)}Modifiers`]||t[`${en(e)}Modifiers`];function ad(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&od(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>me(u)?u.trim():u)),o.number&&(s=n.map(Lr)));let a,c=r[a=Os(e)]||r[a=Os(We(e))];!c&&i&&(c=r[a=Os(en(e))]),c&&lt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(l,t,6,s)}}function zc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=zc(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):_e(o,i),ue(t)&&r.set(t,o),o)}function fs(t,e){return!t||!ts(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,en(e))||ee(t,e))}function Ms(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=t,w=$r(t);let O,C;try{if(n.shapeFlag&4){const x=s||r,U=x;O=st(l.call(U,x,u,f,m,p,g)),C=a}else{const x=e;O=st(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),C=e.props?a:cd(a)}}catch(x){qn.length=0,ls(x,t,1),O=X(Yt)}let k=O;if(C&&y!==!1){const x=Object.keys(C),{shapeFlag:U}=k;x.length&&U&7&&(i&&x.some(Oi)&&(C=ld(C,i)),k=bn(k,C,!1,!0))}return n.dirs&&(k=bn(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Vi(k,n.transition),O=k,$r(w),O}const cd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ts(n))&&((e||(e={}))[n]=t[n]);return e},ld=(t,e)=>{const n={};for(const r in t)(!Oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ud(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!fs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oo(r,o,l):!0:!!o;return!1}function Oo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!fs(n,i))return!0}return!1}function fd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kc=t=>t.__isSuspense;function dd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Ef(t)}const pe=Symbol.for("v-fgt"),ds=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),qn=[];let Be=null;function G(t=!1){qn.push(Be=t?null:[])}function hd(){qn.pop(),Be=qn[qn.length-1]||null}let Qn=1;function Co(t){Qn+=t,t<0&&Be&&(Be.hasOnce=!0)}function Gc(t){return t.dynamicChildren=Qn>0?Be||ln:null,hd(),Qn>0&&Be&&Be.push(t),t}function J(t,e,n,r,s,i){return Gc(R(t,e,n,r,s,i,!0))}function Jc(t,e,n,r,s){return Gc(X(t,e,n,r,s,!0))}function jr(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const Yc=({key:t})=>t??null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Se(t)||z(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===pe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Or(e),scopeId:Tc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(Ki(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),Qn>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const X=pd;function pd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Uf)&&(t=Yt),jr(t)){const a=bn(t,e,!0);return n&&Ki(a,n),Qn>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(t)]=a:Be.push(a)),a.patchFlag=-2,a}if(Td(t)&&(t=t.__vccOpts),e){e=md(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=xi(a)),ue(c)&&($i(c)&&!W(c)&&(c=_e({},c)),e.style=ki(c))}const o=me(t)?1:Kc(t)?128:Sf(t)?64:ue(t)?4:z(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function md(t){return t?$i(t)||Mc(t)?_e({},t):t:null}function bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?gd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Yc(l),ref:e&&e.ref?n&&i?W(i)?i.concat(Or(e)):[i,Or(e)]:Or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Vi(u,c.clone(u)),u}function Xc(t=" ",e=0){return X(ds,null,t,e)}function Pe(t="",e=!1){return e?(G(),Jc(Yt,null,t)):X(Yt,null,t)}function st(t){return t==null||typeof t=="boolean"?X(Yt):W(t)?X(pe,null,t.slice()):jr(t)?Rt(t):X(ds,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Ki(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ki(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mc(e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[Xc(e)]):n=8);t.children=e,t.shapeFlag|=n}function gd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xi([e.class,r.class]));else if(s==="style")e.style=ki([e.style,r.style]);else if(ts(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nt(t,e,n,r=null){lt(t,e,7,[n,r])}const _d=xc();let yd=0;function vd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_d,i={uid:yd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uc(r,s),emitsOptions:zc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ad.bind(null,i),t.ce&&t.ce(i),i}let Ee=null,Vr,li;{const t=is(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vr=e("__VUE_INSTANCE_SETTERS__",n=>Ee=n),li=e("__VUE_SSR_SETTERS__",n=>Zn=n)}const fr=t=>{const e=Ee;return Vr(t),t.scope.on(),()=>{t.scope.off(),Vr(e)}},Po=()=>{Ee&&Ee.scope.off(),Vr(null)};function Qc(t){return t.vnode.shapeFlag&4}let Zn=!1;function bd(t,e=!1,n=!1){e&&li(e);const{props:r,children:s}=t.vnode,i=Qc(t);Kf(t,r,i,e),Xf(t,s,n);const o=i?wd(t,e):void 0;return e&&li(!1),o}function wd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$f);const{setup:r}=n;if(r){Lt();const s=t.setupContext=r.length>1?Id(t):null,i=fr(t),o=ur(r,t,0,[t.props,s]),a=Ya(o);if(Ut(),i(),(a||t.sp)&&!Vn(t)&&Ac(t),a){if(o.then(Po,Po),e)return o.then(c=>{ko(t,c,e)}).catch(c=>{ls(c,t,0)});t.asyncDep=o}else ko(t,o,e)}else Zc(t,e)}function ko(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=bc(e)),Zc(t,n)}let xo;function Zc(t,e,n){const r=t.type;if(!t.render){if(!e&&xo&&!r.render){const s=r.template||qi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=xo(s,l)}}t.render=r.render||it}{const s=fr(t);Lt();try{Bf(t)}finally{Ut(),s()}}}const Ed={get(t,e){return be(t,"get",""),t[e]}};function Id(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ed),slots:t.slots,emit:t.emit,expose:e}}function hs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bc(df(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function Sd(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Td(t){return z(t)&&"__vccOpts"in t}const ke=(t,e)=>_f(t,e,Zn);function el(t,e,n){const r=arguments.length;return r===2?ue(e)&&!W(e)?jr(e)?X(t,null,[e]):X(t,e):X(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),X(t,e,n))}const Rd="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ui;const No=typeof window<"u"&&window.trustedTypes;if(No)try{ui=No.createPolicy("vue",{createHTML:t=>t})}catch{}const tl=ui?t=>ui.createHTML(t):t=>t,Ad="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,Do=pt&&pt.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pt.createElementNS(Ad,t):e==="mathml"?pt.createElementNS(Od,t):n?pt.createElement(t,{is:n}):pt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Do.innerHTML=tl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Do.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pd=Symbol("_vtc");function kd(t,e,n){const r=t[Pd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mo=Symbol("_vod"),xd=Symbol("_vsh"),Nd=Symbol(""),Dd=/(^|;)\s*display\s*:/;function Md(t,e,n){const r=t.style,s=me(n);let i=!1;if(n&&!s){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[Nd];o&&(n+=";"+o),r.cssText=n,i=Dd.test(n)}}else e&&t.removeAttribute("style");Mo in t&&(t[Mo]=i?r.display:"",t[xd]&&(r.display="none"))}const Lo=/\s*!important$/;function Cr(t,e,n){if(W(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ld(t,e);Lo.test(n)?t.setProperty(en(r),n.replace(Lo,""),"important"):t[r]=n}}const Uo=["Webkit","Moz","ms"],Us={};function Ld(t,e){const n=Us[e];if(n)return n;let r=We(e);if(r!=="filter"&&r in t)return Us[e]=r;r=ss(r);for(let s=0;s<Uo.length;s++){const i=Uo[s]+r;if(i in t)return Us[e]=i}return e}const Fo="http://www.w3.org/1999/xlink";function $o(t,e,n,r,s,i=ju(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fo,e.slice(6,e.length)):t.setAttributeNS(Fo,e,n):n==null||i&&!ec(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ct(n)?String(n):n)}function Bo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ec(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Wt(t,e,n,r){t.addEventListener(e,n,r)}function Ud(t,e,n,r){t.removeEventListener(e,n,r)}const Ho=Symbol("_vei");function Fd(t,e,n,r,s=null){const i=t[Ho]||(t[Ho]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=$d(e);if(r){const l=i[e]=jd(r,s);Wt(t,a,l,c)}else o&&(Ud(t,a,o,c),i[e]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function $d(t){let e;if(jo.test(t)){e={};let r;for(;r=t.match(jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Fs=0;const Bd=Promise.resolve(),Hd=()=>Fs||(Bd.then(()=>Fs=0),Fs=Date.now());function jd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;lt(Vd(r,n.value),e,5,[r])};return n.value=t,n.attached=Hd(),n}function Vd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?kd(t,r,o):e==="style"?Md(t,n,r):ts(e)?Oi(e)||Fd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qd(t,e,r,o))?(Bo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$o(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!me(r))?Bo(t,We(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$o(t,e,r,o))};function qd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vo(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vo(e)&&me(n)?!1:e in t}const Wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Rr(e,n):e};function zd(t){t.target.composing=!0}function Wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mn=Symbol("_assign"),nl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[mn]=Wr(s);const i=r||s.props&&s.props.type==="number";Wt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lr(a)),t[mn](a)}),n&&Wt(t,"change",()=>{t.value=t.value.trim()}),e||(Wt(t,"compositionstart",zd),Wt(t,"compositionend",Wo),Wt(t,"change",Wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[mn]=Wr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Lr(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Kd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ns(e);Wt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Lr(qr(o)):qr(o));t[mn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bi(()=>{t._assigning=!1})}),t[mn]=Wr(r)},mounted(t,{value:e}){qo(t,e)},beforeUpdate(t,e,n){t[mn]=Wr(n)},updated(t,{value:e}){t._assigning||qo(t,e)}};function qo(t,e){const n=t.multiple,r=W(e);if(!(n&&!r&&!ns(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=qr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=Wu(e,a)>-1}else o.selected=e.has(a);else if(os(qr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qr(t){return"_value"in t?t._value:t.value}const Gd=_e({patchProp:Wd},Cd);let zo;function Jd(){return zo||(zo=Zf(Gd))}const Yd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qd(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Xd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Xd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qd(t){return me(t)?document.querySelector(t):t}var Ko={};/**
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
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eh=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return eh(t).replace(/\./g,"")},ol=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function nh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sh(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ih(){try{return typeof indexedDB=="object"}catch{return!1}}function oh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ch=()=>ah().__FIREBASE_DEFAULTS__,lh=()=>{if(typeof process>"u"||typeof Ko>"u")return;const t=Ko.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ol(t[1]);return e&&JSON.parse(e)},Gi=()=>{try{return ch()||lh()||uh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fh=t=>{var e,n;return(n=(e=Gi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dh=()=>{var t;return(t=Gi())===null||t===void 0?void 0:t.config},al=t=>{var e;return(e=Gi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */const ph="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ph,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,a,r)}}function mh(t,e){return t.replace(gh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gh=/\{\$([^}]+)}/g;function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Go(i)&&Go(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
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
 */function hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yh(t,e){const n=new vh(t,e);return n.subscribe.bind(n)}class vh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $s(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ih(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Eh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eh(t){return t===Vt?void 0:t}function Ih(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Th={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Rh=le.INFO,Ah={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ah[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=Rh,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Ch=(t,e)=>e.some(n=>t instanceof n);let Jo,Yo;function Ph(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return Yo||(Yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ll=new WeakMap,fi=new WeakMap,ul=new WeakMap,Bs=new WeakMap,Ji=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ll.set(n,t)}).catch(()=>{}),Ji.set(e,t),e}function Nh(t){if(fi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ul.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dh(t){di=t(di)}function Mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return ul.set(r,e.sort?e.sort():[e]),Nt(r)}:kh().includes(t)?function(...e){return t.apply(Hs(this),e),Nt(ll.get(this))}:function(...e){return Nt(t.apply(Hs(this),e))}}function Lh(t){return typeof t=="function"?Mh(t):(t instanceof IDBTransaction&&Nh(t),Ch(t,Ph())?new Proxy(t,di):t)}function Nt(t){if(t instanceof IDBRequest)return xh(t);if(Bs.has(t))return Bs.get(t);const e=Lh(t);return e!==t&&(Bs.set(t,e),Ji.set(e,t)),e}const Hs=t=>Ji.get(t);function Uh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Nt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Fh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],js=new Map;function Xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return js.set(e,i),i}Dh(t=>({...t,get:(e,n,r)=>Xo(e,n)||t.get(e,n,r),has:(e,n)=>!!Xo(e,n)||t.has(e,n)}));/**
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
 */class Bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Qo="0.9.0";/**
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
 */const Xt=new cl("@firebase/app"),jh="@firebase/app-compat",Vh="@firebase/analytics-compat",Wh="@firebase/analytics",qh="@firebase/app-check-compat",zh="@firebase/app-check",Kh="@firebase/auth",Gh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/database-compat",Xh="@firebase/functions",Qh="@firebase/functions-compat",Zh="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/firestore-compat",fp="firebase",dp="9.15.0";/**
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
 */const pi="[DEFAULT]",hp={[hi]:"fire-core",[jh]:"fire-core-compat",[Wh]:"fire-analytics",[Vh]:"fire-analytics-compat",[zh]:"fire-app-check",[qh]:"fire-app-check-compat",[Kh]:"fire-auth",[Gh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Qh]:"fire-fn-compat",[Zh]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[fp]:"fire-js-all"};/**
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
 */const Kr=new Map,mi=new Map;function pp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function er(t){const e=t.name;if(mi.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of Kr.values())pp(n,t);return!0}function fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new dr("app","Firebase",mp);/**
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
 */class gp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=dp;function dl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=dh()),!n)throw Dt.create("no-options");const i=Kr.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new Sh(s);for(const c of mi.values())o.addComponent(c);const a=new gp(n,r,o);return Kr.set(s,a),a}function _p(t=pi){const e=Kr.get(t);if(!e&&t===pi)return dl();if(!e)throw Dt.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=hp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}er(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yp="firebase-heartbeat-database",vp=1,tr="firebase-heartbeat-store";let Vs=null;function hl(){return Vs||(Vs=Uh(yp,vp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tr)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function bp(t){try{return(await hl()).transaction(tr).objectStore(tr).get(pl(t))}catch(e){if(e instanceof Ft)Xt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Zo(t,e){try{const r=(await hl()).transaction(tr,"readwrite");return await r.objectStore(tr).put(e,pl(t)),r.done}catch(n){if(n instanceof Ft)Xt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function pl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wp=1024,Ep=30*24*60*60*1e3;class Ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ea();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ea(),{heartbeatsToSend:n,unsentEntries:r}=Sp(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ea(){return new Date().toISOString().substring(0,10)}function Sp(t,e=wp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ta(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ta(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ih()?oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ta(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rp(t){er(new wn("platform-logger",e=>new Bh(e),"PRIVATE")),er(new wn("heartbeat",e=>new Ip(e),"PRIVATE")),gn(hi,Qo,t),gn(hi,Qo,"esm2017"),gn("fire-js","")}Rp("");function Yi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ml(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=ml,gl=new dr("auth","Firebase",ml());/**
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
 */const na=new cl("@firebase/auth");function Pr(t,...e){na.logLevel<=le.ERROR&&na.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function Ye(t,...e){throw Xi(t,...e)}function ot(t,...e){return Xi(t,...e)}function Op(t,e,n){const r=Object.assign(Object.assign({},Ap()),{[e]:n});return new dr("auth","Firebase",r).create(e,{appName:t.name})}function Xi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gl.create(t,...e)}function H(t,e,...n){if(!t)throw Xi(e,...n)}function _t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function vt(t,e){t||_t(e)}/**
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
 */const ra=new Map;function yt(t){vt(t instanceof Function,"Expected a class definition");let e=ra.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ra.set(t,e),e)}/**
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
 */function Cp(t,e){const n=fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;Ye(s,"already-initialized")}return n.initialize({options:e})}function Pp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Gr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kp(){return sa()==="http:"||sa()==="https:"}function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kp()||nh()||"connection"in navigator)?navigator.onLine:!0}function Np(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=th()||rh()}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qi(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _l{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Mp=new pr(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,s={}){return yl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),_l.fetch()(vl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dp),e);try{const s=new Lp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Op(t,u,l);Ye(t,u)}}catch(s){if(s instanceof Ft)throw s;Ye(t,"network-request-failed")}}async function ms(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qi(t.config,s):`${t.config.apiScheme}://${s}`}class Lp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ot(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Up(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $p(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=Zi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zn(Ws(s.auth_time)),issuedAtTime:zn(Ws(s.iat)),expirationTime:zn(Ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ws(t){return Number(t)*1e3}function Zi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ol(n);return s?JSON.parse(s):(Pr("Failed to decode base64 JWT payload"),null)}catch(s){return Pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bp(t){const e=Zi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&Hp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await nr(t,Fp(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qp(i.providerUserInfo):[],a=Wp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Vp(t){const e=ut(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qp(t){return t.map(e=>{var{providerId:n}=e,r=Yi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zp(t,e){const n=await yl(t,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_l.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function Et(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $p(this,e)}reload(){return Vp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,Up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:x,isAnonymous:U,providerData:V,stsTokenManager:F}=n;H(k&&F,e,"internal-error");const de=rr.fromJSON(this.name,F);H(typeof k=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),H(typeof x=="boolean",e,"internal-error"),H(typeof U=="boolean",e,"internal-error"),Et(m,e.name),Et(g,e.name),Et(y,e.name),Et(w,e.name),Et(O,e.name),Et(C,e.name);const ye=new Kt({uid:k,auth:e,email:p,emailVerified:x,displayName:f,isAnonymous:U,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:de,createdAt:O,lastLoginAt:C});return V&&Array.isArray(V)&&(ye.providerData=V.map(Oe=>Object.assign({},Oe))),w&&(ye._redirectEventId=w),ye}static async _fromIdTokenResponse(e,n,r=!1){const s=new rr;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}}/**
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
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const ia=wl;/**
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
 */function kr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=kr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(yt(ia),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(ia);const o=kr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Kt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
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
 */function oa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(El(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rl(e))return"Blackberry";if(Al(e))return"Webos";if(eo(e))return"Safari";if((e.includes("chrome/")||Il(e))&&!e.includes("edge/"))return"Chrome";if(Tl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function El(t=Te()){return/firefox\//i.test(t)}function eo(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Il(t=Te()){return/crios\//i.test(t)}function Sl(t=Te()){return/iemobile/i.test(t)}function Tl(t=Te()){return/android/i.test(t)}function Rl(t=Te()){return/blackberry/i.test(t)}function Al(t=Te()){return/webos/i.test(t)}function gs(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kp(t=Te()){var e;return gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return sh()&&document.documentMode===10}function Ol(t=Te()){return gs(t)||Tl(t)||Al(t)||Rl(t)||/windows phone/i.test(t)||Sl(t)}function Jp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cl(t,e=[]){let n;switch(t){case"Browser":n=oa(Te());break;case"Worker":n=`${oa(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class Yp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Xp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aa(this),this.idTokenSubscription=new aa(this),this.beforeStateQueue=new Yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function _s(t){return ut(t)}class aa{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Qp(t,e,n){const r=_s(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pl(e),{host:o,port:a}=Zp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),em()}function Pl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zp(t){const e=Pl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ca(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ca(o)}}}function ca(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function em(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,n){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}async function tm(t,e){return Rn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nm(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}async function rm(t,e){return Rn(t,"POST","/v1/accounts:sendOobCode",mr(t,e))}async function sm(t,e){return rm(t,e)}/**
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
 */async function im(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function om(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class sr extends to{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new sr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return im(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return om(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yn(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const am="http://localhost";class Qt extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hr(n)}return e}}/**
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
 */function cm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lm(t){const e=Fn($n(t)).link,n=e?Fn($n(e)).deep_link_id:null,r=Fn($n(t)).deep_link_id;return(r?Fn($n(r)).link:null)||r||n||e||t}class ys{constructor(e){var n,r,s,i,o,a;const c=Fn($n(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=cm((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lm(e);try{return new ys(n)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ys.parseLink(n);return H(r,"argument-error"),sr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gr extends kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ot extends gr{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class Pt extends gr{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class kt extends gr{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=la(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=la(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function la(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yr extends Ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yr(e,n,r,s)}}function xl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(t,i,e,r):i})}async function um(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
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
 */async function fm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await nr(t,xl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Zi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),En._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
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
 */async function Nl(t,e,n=!1){const r="signIn",s=await xl(t,r,e),i=await En._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dm(t,e){return Nl(_s(t),e)}/**
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
 */function hm(t,e,n){var r;H(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Dl(t,e,n){const r=ut(t),s={requestType:"EMAIL_SIGNIN",email:e};H(n.handleCodeInApp,r,"argument-error"),n&&hm(r,s,n),await sm(r,s)}function Ml(t,e){const n=ys.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Ll(t,e,n){const r=ut(t),s=An.credentialWithLink(e,n||Gr());return H(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),dm(r,s)}function pm(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function mm(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function gm(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function _m(t){return ut(t).signOut()}const Xr="__sak";/**
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
 */class Ul{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ym(){const t=Te();return eo(t)||gs(t)}const vm=1e3,bm=10;class Fl extends Ul{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ym()&&Jp(),this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fl.type="LOCAL";const wm=Fl;/**
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
 */class $l extends Ul{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$l.type="SESSION";const Bl=$l;/**
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
 */function Em(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Em(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function no(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Im{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=no("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Sm(t){at().location.href=t}/**
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
 */function Hl(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function Tm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Am(){return Hl()?self:null}/**
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
 */const jl="firebaseLocalStorageDb",Om=1,Qr="firebaseLocalStorage",Vl="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(t,e){return t.transaction([Qr],e?"readwrite":"readonly").objectStore(Qr)}function Cm(){const t=indexedDB.deleteDatabase(jl);return new _r(t).toPromise()}function gi(){const t=indexedDB.open(jl,Om);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qr,{keyPath:Vl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qr)?e(r):(r.close(),await Cm(),e(await gi()))})})}async function ua(t,e,n){const r=bs(t,!0).put({[Vl]:e,value:n});return new _r(r).toPromise()}async function Pm(t,e){const n=bs(t,!1).get(e),r=await new _r(n).toPromise();return r===void 0?null:r.value}function fa(t,e){const n=bs(t,!0).delete(e);return new _r(n).toPromise()}const km=800,xm=3;class Wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Am()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tm(),!this.activeServiceWorker)return;this.sender=new Im(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await ua(e,Xr,"1"),await fa(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ua(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new _r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wl.type="LOCAL";const Nm=Wl;/**
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
 */function Dm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dm().appendChild(r)})}function Lm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pr(3e4,6e4);/**
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
 */function Um(t,e){return e?yt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ro extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fm(t){return Nl(t.auth,new ro(t),t.bypassAuthState)}function $m(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),fm(n,new ro(t),t.bypassAuthState)}async function Bm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),um(n,new ro(t),t.bypassAuthState)}/**
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
 */class ql{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fm;case"linkViaPopup":case"linkViaRedirect":return Bm;case"reauthViaPopup":case"reauthViaRedirect":return $m;default:Ye(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hm=new pr(2e3,1e4);class cn extends ql{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=no();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hm.get())};e()}}cn.currentPopupAction=null;/**
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
 */const jm="pendingRedirect",xr=new Map;class Vm extends ql{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const r=await Wm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wm(t,e){const n=Km(e),r=zm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qm(t,e){xr.set(t._key(),e)}function zm(t){return yt(t._redirectPersistence)}function Km(t){return kr(jm,t.config.apiKey,t.name)}async function Gm(t,e,n=!1){const r=_s(t),s=Um(r,e),o=await new Vm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Jm=10*60*1e3;class Ym{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(da(e))}saveEventToCache(e){this.cachedEventUids.add(da(e)),this.lastProcessedEventTime=Date.now()}}function da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zl(t);default:return!1}}/**
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
 */async function Qm(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const Zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qm(t);for(const n of e)try{if(ng(n))return}catch{}Ye(t,"unauthorized-domain")}function ng(t){const e=Gr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eg.test(n))return!1;if(Zm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rg=new pr(3e4,6e4);function ha(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sg(t){return new Promise((e,n)=>{var r,s,i;function o(){ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ha(),n(ot(t,"network-request-failed"))},timeout:rg.get()})}if(!((s=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=Lm("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},Mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function ig(t){return Nr=Nr||sg(t),Nr}/**
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
 */const og=new pr(5e3,15e3),ag="__/auth/iframe",cg="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fg(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,cg):`https://${t.config.authDomain}/${ag}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=ug.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hr(r).slice(1)}`}async function dg(t){const e=await ig(t),n=at().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:fg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=at().setTimeout(()=>{i(o)},og.get());function c(){at().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pg=500,mg=600,gg="_blank",_g="http://localhost";class pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(t,e,n,r=pg,s=mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=Il(l)?gg:n),El(l)&&(e=e||_g,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,g])=>`${p}${m}=${g},`,"");if(Kp(l)&&a!=="_self")return vg(e||"",a),new pa(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new pa(f)}function vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bg="__/auth/handler",wg="emulator/auth/handler";function ma(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries({}))o[c]=l}if(e instanceof gr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Eg(t)}?${hr(a).slice(1)}`}function Eg({config:t}){return t.emulator?Qi(t,wg):`https://${t.authDomain}/${bg}`}/**
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
 */const qs="webStorageSupport";class Ig{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=Gm,this._overrideRedirectResult=qm}async _openPopup(e,n,r,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ma(e,n,r,Gr(),s);return yg(e,o,no())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Sm(ma(e,n,r,Gr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dg(e),r=new Ym(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qs,{type:qs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qs];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ol()||eo()||gs()}}const Sg=Ig;var ga="@firebase/auth",_a="0.21.0";/**
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
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ag(t){er(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cl(t)},u=new Xp(a,c,l);return Pp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new wn("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(ga,_a,Rg(t)),gn(ga,_a,"esm2017")}/**
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
 */const Og=5*60,Cg=al("authIdTokenMaxAge")||Og;let ya=null;const Pg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cg)return;const s=n==null?void 0:n.token;ya!==s&&(ya=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vn(t=_p()){const e=fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cp(t,{popupRedirectResolver:Sg,persistence:[Nm,wm,Bl]}),r=al("authTokenSyncURL");if(r){const i=Pg(r);mm(n,i,()=>i(n.currentUser)),pm(n,o=>i(o))}const s=fh("auth");return s&&Qp(n,`http://${s}`),n}Ag("Browser");const kg={__name:"App",setup(t){const e=he(null);return Tn(()=>{const n=vn();gm(n,r=>{e.value=r})}),(n,r)=>{const s=Wi("router-view");return G(),Jc(s,{user:e.value},null,8,["user"])}}},xg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ng={},Dg={class:"footer"};function Mg(t,e){return G(),J("div",Dg,e[0]||(e[0]=[R("p",null,"Two Trees Olive Oil ®",-1),R("p",null,[Xc("2024 "),R("a",{href:"https://javicalonge.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer"},"Javi Calonge")],-1)]))}const On=xg(Ng,[["render",Mg]]),so="/assets/logo-hexagon-CPXM5FB7.svg";/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function Kl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Kl(t.default)}const re=Object.assign;function zs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const Kn=()=>{},Xe=Array.isArray,Gl=/#/g,Ug=/&/g,Fg=/\//g,$g=/=/g,Bg=/\?/g,Jl=/\+/g,Hg=/%5B/g,jg=/%5D/g,Yl=/%5E/g,Vg=/%60/g,Xl=/%7B/g,Wg=/%7C/g,Ql=/%7D/g,qg=/%20/g;function io(t){return encodeURI(""+t).replace(Wg,"|").replace(Hg,"[").replace(jg,"]")}function zg(t){return io(t).replace(Xl,"{").replace(Ql,"}").replace(Yl,"^")}function _i(t){return io(t).replace(Jl,"%2B").replace(qg,"+").replace(Gl,"%23").replace(Ug,"%26").replace(Vg,"`").replace(Xl,"{").replace(Ql,"}").replace(Yl,"^")}function Kg(t){return _i(t).replace($g,"%3D")}function Gg(t){return io(t).replace(Gl,"%23").replace(Bg,"%3F")}function Jg(t){return t==null?"":Gg(t).replace(Fg,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Yg=/\/$/,Xg=t=>t.replace(Yg,"");function Ks(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=t_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ir(o)}}function Qg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function va(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Zl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e_(t[n],e[n]))return!1;return!0}function e_(t,e){return Xe(t)?ba(t,e):Xe(e)?ba(e,t):t===e}function ba(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function t_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Gn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gn||(Gn={}));function n_(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xg(t)}const r_=/^[^#]+#/;function s_(t,e){return t.replace(r_,"#")+e}function i_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ws=()=>({left:window.scrollX,top:window.scrollY});function o_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=i_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wa(t,e){return(history.state?history.state.position-e:-1)+t}const yi=new Map;function a_(t,e){yi.set(t,e)}function c_(t){const e=yi.get(t);return yi.delete(t),e}let l_=()=>location.protocol+"//"+location.host;function eu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),va(c,"")}return va(n,t)+r+s}function u_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=eu(t,location),g=n.value,y=e.value;let w=0;if(p){if(n.value=m,e.value=p,o&&o===g){o=null;return}w=y?p.position-y.position:0}else r(m);s.forEach(O=>{O(n.value,g,{delta:w,type:or.pop,direction:w?w>0?Gn.forward:Gn.back:Gn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:ws()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ea(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ws():null}}function f_(t){const{history:e,location:n}=window,r={value:eu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:l_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=re({},e.state,Ea(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=re({},s.value,e.state,{forward:c,scroll:ws()});i(u.current,u,!0);const f=re({},Ea(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function d_(t){t=n_(t);const e=f_(t),n=u_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function h_(t){return typeof t=="string"||t&&typeof t=="object"}function tu(t){return typeof t=="string"||typeof t=="symbol"}const nu=Symbol("");var Ia;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ia||(Ia={}));function Sn(t,e){return re(new Error,{type:t,[nu]:!0},e)}function ht(t,e){return t instanceof Error&&nu in t&&(e==null||!!(t.type&e))}const Sa="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},m_=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=re({},p_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(m_,"\\$&"),m+=40;else if(p.type===1){const{value:g,repeatable:y,optional:w,regexp:O}=p;i.push({name:g,repeatable:y,optional:w});const C=O||Sa;if(C!==Sa){m+=10;try{new RegExp(`(${C})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+x.message)}}let k=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(k=w&&l.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),s+=k,m+=20,w&&(m+=-8),y&&(m+=-20),C===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",g=i[p-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:w}=m,O=g in l?l[g]:"";if(Xe(O)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=Xe(O)?O.join("/"):O;if(!C)if(w)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function __(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ru(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=__(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ta(r))return 1;if(Ta(s))return-1}return s.length-r.length}function Ta(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y_={type:0,value:""},v_=/[a-zA-Z0-9_]/;function b_(t){if(!t)return[[]];if(t==="/")return[[y_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:v_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function w_(t,e,n){const r=g_(b_(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function E_(t,e){const n=[],r=new Map;e=Ca({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const g=!m,y=Aa(f);y.aliasOf=m&&m.record;const w=Ca(e,f),O=[y];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of x)O.push(Aa(re({},y,{components:m?m.record.components:y.components,path:U,aliasOf:m?m.record:y})))}let C,k;for(const x of O){const{path:U}=x;if(p&&U[0]!=="/"){const V=p.record.path,F=V[V.length-1]==="/"?"":"/";x.path=p.record.path+(U&&F+U)}if(C=w_(x,p,w),m?m.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),g&&f.name&&!Oa(C)&&o(f.name)),su(C)&&c(C),y.children){const V=y.children;for(let F=0;F<V.length;F++)i(V[F],C,m&&m.children[F])}m=m||C}return k?()=>{o(k)}:Kn}function o(f){if(tu(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=T_(f,n);n.splice(p,0,f),f.record.name&&!Oa(f)&&r.set(f.record.name,f)}function l(f,p){let m,g={},y,w;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Sn(1,{location:f});w=m.record.name,g=re(Ra(p.params,m.keys.filter(k=>!k.optional).concat(m.parent?m.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Ra(f.params,m.keys.map(k=>k.name))),y=m.stringify(g)}else if(f.path!=null)y=f.path,m=n.find(k=>k.re.test(y)),m&&(g=m.parse(y),w=m.record.name);else{if(m=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!m)throw Sn(1,{location:f,currentLocation:p});w=m.record.name,g=re({},p.params,f.params),y=m.stringify(g)}const O=[];let C=m;for(;C;)O.unshift(C.record),C=C.parent;return{name:w,path:y,params:g,matched:O,meta:S_(O)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Ra(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Aa(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:I_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function I_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Oa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S_(t){return t.reduce((e,n)=>re(e,n.meta),{})}function Ca(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function T_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ru(t,e[i])<0?r=i:n=i+1}const s=R_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function R_(t){let e=t;for(;e=e.parent;)if(su(e)&&ru(t,e)===0)return e}function su({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function A_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jl," "),o=i.indexOf("="),a=ir(o<0?i:i.slice(0,o)),c=o<0?null:ir(i.slice(o+1));if(a in e){let l=e[a];Xe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Pa(t){let e="";for(let n in t){const r=t[n];if(n=Kg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function O_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const C_=Symbol(""),ka=Symbol(""),Es=Symbol(""),oo=Symbol(""),vi=Symbol("");function Mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Sn(4,{from:n,to:e})):p instanceof Error?c(p):h_(p)?c(Sn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Gs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(At(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Lg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&At(m,n,r,o,a,s)()}))}}return i}function xa(t){const e=Je(Es),n=Je(oo),r=ke(()=>{const c=Ge(t.to);return e.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(In.bind(null,u));if(p>-1)return p;const m=Na(c[l-2]);return l>1&&Na(u)===m&&f[f.length-1].path!==m?f.findIndex(In.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&x_(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Zl(n.params,r.value.params));function a(c={}){return k_(c)?e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(Kn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const P_=Rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xa,setup(t,{slots:e}){const n=cs(xa(t)),{options:r}=Je(Es),s=ke(()=>({[Da(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Da(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:el("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ar=P_;function k_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function x_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Na(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Da=(t,e,n)=>t??e??n,N_=Rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Je(vi),s=ke(()=>t.route||r.value),i=Je(ka,0),o=ke(()=>{let l=Ge(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);Ar(ka,ke(()=>o.value+1)),Ar(C_,a),Ar(vi,s);const c=he();return pn(()=>[c.value,a.value,t.name],([l,u,f],[p,m,g])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!In(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Ma(n.default,{Component:p,route:l});const m=f.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,w=el(p,re({},g,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ma(n.default,{Component:w,route:l})||w}}});function Ma(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const D_=N_;function M_(t){const e=E_(t.routes,t),n=t.parseQuery||A_,r=t.stringifyQuery||Pa,s=t.history,i=Mn(),o=Mn(),a=Mn(),c=hf(It);let l=It;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zs.bind(null,E=>""+E),f=zs.bind(null,Jg),p=zs.bind(null,ir);function m(E,L){let D,$;return tu(E)?(D=e.getRecordMatcher(E),$=L):$=E,e.addRoute($,D)}function g(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function y(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function O(E,L){if(L=re({},L||c.value),typeof E=="string"){const h=Ks(n,E,L.path),_=e.resolve({path:h.path},L),I=s.createHref(h.fullPath);return re(h,_,{params:p(_.params),hash:ir(h.hash),redirectedFrom:void 0,href:I})}let D;if(E.path!=null)D=re({},E,{path:Ks(n,E.path,L.path).path});else{const h=re({},E.params);for(const _ in h)h[_]==null&&delete h[_];D=re({},E,{params:f(h)}),L.params=f(L.params)}const $=e.resolve(D,L),te=E.hash||"";$.params=u(p($.params));const fe=Qg(r,re({},E,{hash:zg(te),path:$.path})),d=s.createHref(fe);return re({fullPath:fe,hash:te,query:r===Pa?O_(E.query):E.query||{}},$,{redirectedFrom:void 0,href:d})}function C(E){return typeof E=="string"?Ks(n,E,c.value.path):re({},E)}function k(E,L){if(l!==E)return Sn(8,{from:L,to:E})}function x(E){return F(E)}function U(E){return x(re(C(E),{replace:!0}))}function V(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:D}=L;let $=typeof D=="function"?D(E):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=C($):{path:$},$.params={}),re({query:E.query,hash:E.hash,params:$.path!=null?{}:E.params},$)}}function F(E,L){const D=l=O(E),$=c.value,te=E.state,fe=E.force,d=E.replace===!0,h=V(D);if(h)return F(re(C(h),{state:typeof h=="object"?re({},te,h.state):te,force:fe,replace:d}),L||D);const _=D;_.redirectedFrom=L;let I;return!fe&&Zg(r,$,D)&&(I=Sn(16,{to:_,from:$}),et($,$,!0,!1)),(I?Promise.resolve(I):Oe(_,$)).catch(b=>ht(b)?ht(b,2)?b:wt(b):Q(b,_,$)).then(b=>{if(b){if(ht(b,2))return F(re({replace:d},C(b.to),{state:typeof b.to=="object"?re({},te,b.to.state):te,force:fe}),L||_)}else b=$t(_,$,!0,d,te);return qe(_,$,b),b})}function de(E,L){const D=k(E,L);return D?Promise.reject(D):Promise.resolve()}function ye(E){const L=rn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function Oe(E,L){let D;const[$,te,fe]=L_(E,L);D=Gs($.reverse(),"beforeRouteLeave",E,L);for(const h of $)h.leaveGuards.forEach(_=>{D.push(At(_,E,L))});const d=de.bind(null,E,L);return D.push(d),je(D).then(()=>{D=[];for(const h of i.list())D.push(At(h,E,L));return D.push(d),je(D)}).then(()=>{D=Gs(te,"beforeRouteUpdate",E,L);for(const h of te)h.updateGuards.forEach(_=>{D.push(At(_,E,L))});return D.push(d),je(D)}).then(()=>{D=[];for(const h of fe)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const _ of h.beforeEnter)D.push(At(_,E,L));else D.push(At(h.beforeEnter,E,L));return D.push(d),je(D)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),D=Gs(fe,"beforeRouteEnter",E,L,ye),D.push(d),je(D))).then(()=>{D=[];for(const h of o.list())D.push(At(h,E,L));return D.push(d),je(D)}).catch(h=>ht(h,8)?h:Promise.reject(h))}function qe(E,L,D){a.list().forEach($=>ye(()=>$(E,L,D)))}function $t(E,L,D,$,te){const fe=k(E,L);if(fe)return fe;const d=L===It,h=an?history.state:{};D&&($||d?s.replace(E.fullPath,re({scroll:d&&h&&h.scroll},te)):s.push(E.fullPath,te)),c.value=E,et(E,L,D,d),wt()}let Ze;function kn(){Ze||(Ze=s.listen((E,L,D)=>{if(!wr.listening)return;const $=O(E),te=V($);if(te){F(re(te,{replace:!0}),$).catch(Kn);return}l=$;const fe=c.value;an&&a_(wa(fe.fullPath,D.delta),ws()),Oe($,fe).catch(d=>ht(d,12)?d:ht(d,2)?(F(d.to,$).then(h=>{ht(h,20)&&!D.delta&&D.type===or.pop&&s.go(-1,!1)}).catch(Kn),Promise.reject()):(D.delta&&s.go(-D.delta,!1),Q(d,$,fe))).then(d=>{d=d||$t($,fe,!1),d&&(D.delta&&!ht(d,8)?s.go(-D.delta,!1):D.type===or.pop&&ht(d,20)&&s.go(-1,!1)),qe($,fe,d)}).catch(Kn)}))}let tn=Mn(),ge=Mn(),se;function Q(E,L,D){wt(E);const $=ge.list();return $.length?$.forEach(te=>te(E,L,D)):console.error(E),Promise.reject(E)}function ft(){return se&&c.value!==It?Promise.resolve():new Promise((E,L)=>{tn.add([E,L])})}function wt(E){return se||(se=!E,kn(),tn.list().forEach(([L,D])=>E?D(E):L()),tn.reset()),E}function et(E,L,D,$){const{scrollBehavior:te}=t;if(!an||!te)return Promise.resolve();const fe=!D&&c_(wa(E.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return Bi().then(()=>te(E,L,fe)).then(d=>d&&o_(d)).catch(d=>Q(d,E,L))}const Ce=E=>s.go(E);let nn;const rn=new Set,wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:y,resolve:O,options:t,push:x,replace:U,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:ft,install(E){const L=this;E.component("RouterLink",ar),E.component("RouterView",D_),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),an&&!nn&&c.value===It&&(nn=!0,x(s.location).catch(te=>{}));const D={};for(const te in It)Object.defineProperty(D,te,{get:()=>c.value[te],enumerable:!0});E.provide(Es,L),E.provide(oo,_c(D)),E.provide(vi,c);const $=E.unmount;rn.add(E),E.unmount=function(){rn.delete(E),rn.size<1&&(l=It,Ze&&Ze(),Ze=null,c.value=It,nn=!1,se=!1),$()}}};function je(E){return E.reduce((L,D)=>L.then(()=>ye(D)),Promise.resolve())}return wr}function L_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}function ao(){return Je(Es)}function iu(t){return Je(oo)}const U_={class:"nav-bar"},F_={class:"logo-wrap"},$_=["src"],B_={class:"nav-buttons-wrap"},H_={key:0,class:"modal-overlay"},j_={class:"modal-content"},V_={key:0},W_={key:1},q_={key:2},z_={key:1,class:"modal-overlay"},yr={__name:"NavBar",props:{user:{type:Object,default:null}},setup(t){const e=iu(),n=ao(),r=he(!1),s=he(!1),i=he(""),o=he(""),a=t;Tn(async()=>{const m=vn();if(Ml(m,window.location.href)){const g=window.localStorage.getItem("emailForSignIn");await Ll(m,g,window.location.href),r.value=!0,i.value="Successfully signed in!",window.localStorage.removeItem("emailForSignIn"),n.push({name:"products"})}});async function c(){if(!o.value)return;const m=vn(),g={url:`https://two-trees-e-commerce.onrender.com/product/${e.params.id}`,handleCodeInApp:!0};try{await Dl(m,o.value,g),i.value="A login link was sent to your email",r.value=!1,window.localStorage.setItem("emailForSignIn",o.value),r.value=!0}catch(y){console.error("Error sending email link:",y)}}function l(){const m=vn();_m(m).then(()=>{i.value="You have successfully signed out.",s.value=!1,r.value=!0})}function u(){r.value=!0}function f(){s.value=!0}function p(){r.value=!1,s.value=!1,i.value=""}return(m,g)=>{const y=Wi("RouterLink");return G(),J(pe,null,[R("div",U_,[X(y,{to:{name:"products"},class:"products-link"},{default:Mt(()=>[R("div",F_,[R("img",{src:Ge(so),alt:"logo"},null,8,$_)])]),_:1})]),R("div",B_,[a.user?Pe("",!0):(G(),J("button",{key:0,onClick:u,class:"sign-in-out"}," Sign in ")),a.user?(G(),J("button",{key:1,onClick:f,class:"sign-in-out"}," Sign Out ")):Pe("",!0),X(y,{to:{name:"cart"}},{default:Mt(()=>g[1]||(g[1]=[R("button",{class:"btn-cart"},"Shopping Cart",-1)])),_:1})]),r.value?(G(),J("div",H_,[R("div",j_,[i.value?(G(),J("h2",W_,Ie(i.value),1)):(G(),J("h2",V_,"Please enter your email to sign in")),i.value?Pe("",!0):(G(),J("div",q_,[ji(R("input",{"onUpdate:modelValue":g[0]||(g[0]=w=>o.value=w),type:"email",placeholder:"Enter your email",class:"email-input"},null,512),[[nl,o.value]])])),R("div",{class:"modal-buttons"},[R("button",{class:"modal-button",onClick:c},"Log In"),R("button",{class:"modal-button",onClick:p},"Cancel")])])])):Pe("",!0),s.value?(G(),J("div",z_,[R("div",{class:"modal-content"},[g[2]||(g[2]=R("h2",{class:"hope"},"Hope to see you soon",-1)),R("div",{class:"modal-buttons"},[R("button",{class:"modal-button",onClick:l},"Log Out"),R("button",{class:"modal-button",onClick:p},"Cancel")])])])):Pe("",!0)],64)}}},K_={class:"page-wrap"},ou={__name:"PageNotFound",setup(t){return window.scrollTo(0,0),(e,n)=>{const r=Wi("RouterLink");return G(),J(pe,null,[X(yr),R("div",K_,[n[1]||(n[1]=R("h1",null,"Sorry, the page does not exist",-1)),X(r,{to:{name:"products"}},{default:Mt(()=>n[0]||(n[0]=[R("button",{class:"go-back"},"Go back",-1)])),_:1})]),X(On)],64)}}};function au(t,e){return function(){return t.apply(e,arguments)}}const{toString:G_}=Object.prototype,{getPrototypeOf:co}=Object,Is=(t=>e=>{const n=G_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qe=t=>(t=t.toLowerCase(),e=>Is(e)===t),Ss=t=>e=>typeof e===t,{isArray:Cn}=Array,cr=Ss("undefined");function J_(t){return t!==null&&!cr(t)&&t.constructor!==null&&!cr(t.constructor)&&He(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const cu=Qe("ArrayBuffer");function Y_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&cu(t.buffer),e}const X_=Ss("string"),He=Ss("function"),lu=Ss("number"),Ts=t=>t!==null&&typeof t=="object",Q_=t=>t===!0||t===!1,Dr=t=>{if(Is(t)!=="object")return!1;const e=co(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Z_=Qe("Date"),ey=Qe("File"),ty=Qe("Blob"),ny=Qe("FileList"),ry=t=>Ts(t)&&He(t.pipe),sy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||He(t.append)&&((e=Is(t))==="formdata"||e==="object"&&He(t.toString)&&t.toString()==="[object FormData]"))},iy=Qe("URLSearchParams"),[oy,ay,cy,ly]=["ReadableStream","Request","Response","Headers"].map(Qe),uy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Cn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function uu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fu=t=>!cr(t)&&t!==qt;function bi(){const{caseless:t}=fu(this)&&this||{},e={},n=(r,s)=>{const i=t&&uu(e,s)||s;Dr(e[i])&&Dr(r)?e[i]=bi(e[i],r):Dr(r)?e[i]=bi({},r):Cn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&vr(arguments[r],n);return e}const fy=(t,e,n,{allOwnKeys:r}={})=>(vr(e,(s,i)=>{n&&He(s)?t[i]=au(s,n):t[i]=s},{allOwnKeys:r}),t),dy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),hy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},py=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&co(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},my=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},gy=t=>{if(!t)return null;if(Cn(t))return t;let e=t.length;if(!lu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},_y=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&co(Uint8Array)),yy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},vy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},by=Qe("HTMLFormElement"),wy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),La=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ey=Qe("RegExp"),du=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};vr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Iy=t=>{du(t,(e,n)=>{if(He(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(He(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Cn(t)?r(t):r(String(t).split(e)),n},Ty=()=>{},Ry=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Js="abcdefghijklmnopqrstuvwxyz",Ua="0123456789",hu={DIGIT:Ua,ALPHA:Js,ALPHA_DIGIT:Js+Js.toUpperCase()+Ua},Ay=(t=16,e=hu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Oy(t){return!!(t&&He(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Cy=t=>{const e=new Array(10),n=(r,s)=>{if(Ts(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Cn(r)?[]:{};return vr(r,(o,a)=>{const c=n(o,s+1);!cr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Py=Qe("AsyncFunction"),ky=t=>t&&(Ts(t)||He(t))&&He(t.then)&&He(t.catch),pu=((t,e)=>t?setImmediate:e?((n,r)=>(qt.addEventListener("message",({source:s,data:i})=>{s===qt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),qt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",He(qt.postMessage)),xy=typeof queueMicrotask<"u"?queueMicrotask.bind(qt):typeof process<"u"&&process.nextTick||pu,v={isArray:Cn,isArrayBuffer:cu,isBuffer:J_,isFormData:sy,isArrayBufferView:Y_,isString:X_,isNumber:lu,isBoolean:Q_,isObject:Ts,isPlainObject:Dr,isReadableStream:oy,isRequest:ay,isResponse:cy,isHeaders:ly,isUndefined:cr,isDate:Z_,isFile:ey,isBlob:ty,isRegExp:Ey,isFunction:He,isStream:ry,isURLSearchParams:iy,isTypedArray:_y,isFileList:ny,forEach:vr,merge:bi,extend:fy,trim:uy,stripBOM:dy,inherits:hy,toFlatObject:py,kindOf:Is,kindOfTest:Qe,endsWith:my,toArray:gy,forEachEntry:yy,matchAll:vy,isHTMLForm:by,hasOwnProperty:La,hasOwnProp:La,reduceDescriptors:du,freezeMethods:Iy,toObjectSet:Sy,toCamelCase:wy,noop:Ty,toFiniteNumber:Ry,findKey:uu,global:qt,isContextDefined:fu,ALPHABET:hu,generateString:Ay,isSpecCompliantForm:Oy,toJSONObject:Cy,isAsyncFn:Py,isThenable:ky,setImmediate:pu,asap:xy};function K(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}v.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const mu=K.prototype,gu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{gu[t]={value:t}});Object.defineProperties(K,gu);Object.defineProperty(mu,"isAxiosError",{value:!0});K.from=(t,e,n,r,s,i)=>{const o=Object.create(mu);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),K.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Ny=null;function wi(t){return v.isPlainObject(t)||v.isArray(t)}function _u(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Fa(t,e,n){return t?t.concat(e).map(function(s,i){return s=_u(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Dy(t){return v.isArray(t)&&!t.some(wi)}const My=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Rs(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!v.isUndefined(w[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(v.isDate(g))return g.toISOString();if(!c&&v.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(g)||v.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,w){let O=g;if(g&&!w&&typeof g=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(v.isArray(g)&&Dy(g)||(v.isFileList(g)||v.endsWith(y,"[]"))&&(O=v.toArray(g)))return y=_u(y),O.forEach(function(k,x){!(v.isUndefined(k)||k===null)&&e.append(o===!0?Fa([y],x,i):o===null?y:y+"[]",l(k))}),!1}return wi(g)?!0:(e.append(Fa(w,y,i),l(g)),!1)}const f=[],p=Object.assign(My,{defaultVisitor:u,convertValue:l,isVisitable:wi});function m(g,y){if(!v.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),v.forEach(g,function(O,C){(!(v.isUndefined(O)||O===null)&&s.call(e,O,v.isString(C)?C.trim():C,y,p))===!0&&m(O,y?y.concat(C):[C])}),f.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return m(t),e}function $a(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function lo(t,e){this._pairs=[],t&&Rs(t,this,e)}const yu=lo.prototype;yu.append=function(e,n){this._pairs.push([e,n])};yu.toString=function(e){const n=e?function(r){return e.call(this,r,$a)}:$a;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ly(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vu(t,e,n){if(!e)return t;const r=n&&n.encode||Ly,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new lo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Ba{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const bu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Uy=typeof URLSearchParams<"u"?URLSearchParams:lo,Fy=typeof FormData<"u"?FormData:null,$y=typeof Blob<"u"?Blob:null,By={isBrowser:!0,classes:{URLSearchParams:Uy,FormData:Fy,Blob:$y},protocols:["http","https","file","blob","url","data"]},uo=typeof window<"u"&&typeof document<"u",Ei=typeof navigator=="object"&&navigator||void 0,Hy=uo&&(!Ei||["ReactNative","NativeScript","NS"].indexOf(Ei.product)<0),jy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=uo&&window.location.href||"http://localhost",Wy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uo,hasStandardBrowserEnv:Hy,hasStandardBrowserWebWorkerEnv:jy,navigator:Ei,origin:Vy},Symbol.toStringTag,{value:"Module"})),xe={...Wy,...By};function qy(t,e){return Rs(t,new xe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return xe.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function zy(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ky(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function wu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Ky(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(zy(r),s,n,0)}),n}return null}function Gy(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const br={transitional:bu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(wu(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qy(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Gy(e)):e}],transformResponse:[function(e){const n=this.transitional||br.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?K.from(a,K.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xe.classes.FormData,Blob:xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{br.headers[t]={}});const Jy=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Jy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ha=Symbol("internals");function Ln(t){return t&&String(t).trim().toLowerCase()}function Mr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Mr):String(t)}function Xy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Qy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ys(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function Zy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ev(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Ne{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ln(c);if(!u)throw new Error("header name must be a non-empty string");const f=v.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Mr(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!Qy(e))o(Yy(e),n);else if(v.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Ln(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xy(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ln(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ys(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ln(o),o){const a=v.findKey(r,o);a&&(!n||Ys(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ys(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Mr(s),delete n[i];return}const a=e?Zy(i):String(i).trim();a!==i&&delete n[i],n[a]=Mr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ha]=this[Ha]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ln(o);r[a]||(ev(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}Ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Ne.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(Ne);function Xs(t,e){const n=this||br,r=e||n,s=Ne.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Eu(t){return!!(t&&t.__CANCEL__)}function Pn(t,e,n){K.call(this,t??"canceled",K.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Pn,K,{__CANCEL__:!0});function Iu(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function tv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function nv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function rv(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Zr=(t,e,n=3)=>{let r=0;const s=nv(50,250);return rv(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},ja=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Va=t=>(...e)=>v.asap(()=>t(...e)),sv=xe.hasStandardBrowserEnv?function(){const e=xe.navigator&&/(msie|trident)/i.test(xe.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),iv=xe.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ov(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function av(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Su(t,e){return t&&!ov(e)?av(t,e):e}const Wa=t=>t instanceof Ne?{...t}:t;function Zt(t,e){e=e||{};const n={};function r(l,u,f){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:f},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,f){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Wa(l),Wa(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);v.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Tu=t=>{const e=Zt({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Ne.from(o),e.url=vu(Su(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(v.isFormData(n)){if(xe.hasStandardBrowserEnv||xe.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(xe.hasStandardBrowserEnv&&(r&&v.isFunction(r)&&(r=r(e)),r||r!==!1&&sv(e.url))){const l=s&&i&&iv.read(i);l&&o.set(s,l)}return e},cv=typeof XMLHttpRequest<"u",lv=cv&&function(t){return new Promise(function(n,r){const s=Tu(t);let i=s.data;const o=Ne.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,p,m,g;function y(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(s.method.toUpperCase(),s.url,!0),w.timeout=s.timeout;function O(){if(!w)return;const k=Ne.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),U={data:!a||a==="text"||a==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:k,config:t,request:w};Iu(function(F){n(F),y()},function(F){r(F),y()},U),w=null}"onloadend"in w?w.onloadend=O:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(O)},w.onabort=function(){w&&(r(new K("Request aborted",K.ECONNABORTED,t,w)),w=null)},w.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,t,w)),w=null},w.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const U=s.transitional||bu;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new K(x,U.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,t,w)),w=null},i===void 0&&o.setContentType(null),"setRequestHeader"in w&&v.forEach(o.toJSON(),function(x,U){w.setRequestHeader(U,x)}),v.isUndefined(s.withCredentials)||(w.withCredentials=!!s.withCredentials),a&&a!=="json"&&(w.responseType=s.responseType),l&&([p,g]=Zr(l,!0),w.addEventListener("progress",p)),c&&w.upload&&([f,m]=Zr(c),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=k=>{w&&(r(!k||k.type?new Pn(null,t,w):k),w.abort(),w=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const C=tv(s.url);if(C&&xe.protocols.indexOf(C)===-1){r(new K("Unsupported protocol "+C+":",K.ERR_BAD_REQUEST,t));return}w.send(i||null)})},uv=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof K?u:new Pn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new K(`timeout ${e} of ms exceeded`,K.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>v.asap(a),c}},fv=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},dv=async function*(t,e){for await(const n of hv(t))yield*fv(n,e)},hv=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},qa=(t,e,n,r)=>{const s=dv(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},As=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ru=As&&typeof ReadableStream=="function",pv=As&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Au=(t,...e)=>{try{return!!t(...e)}catch{return!1}},mv=Ru&&Au(()=>{let t=!1;const e=new Request(xe.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),za=64*1024,Ii=Ru&&Au(()=>v.isReadableStream(new Response("").body)),es={stream:Ii&&(t=>t.body)};As&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!es[e]&&(es[e]=v.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new K(`Response type '${e}' is not supported`,K.ERR_NOT_SUPPORT,r)})})})(new Response);const gv=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(xe.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await pv(t)).byteLength},_v=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??gv(e)},yv=As&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:p}=Tu(t);l=l?(l+"").toLowerCase():"text";let m=uv([s,i&&i.toAbortSignal()],o),g;const y=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let w;try{if(c&&mv&&n!=="get"&&n!=="head"&&(w=await _v(u,r))!==0){let U=new Request(e,{method:"POST",body:r,duplex:"half"}),V;if(v.isFormData(r)&&(V=U.headers.get("content-type"))&&u.setContentType(V),U.body){const[F,de]=ja(w,Zr(Va(c)));r=qa(U.body,za,F,de)}}v.isString(f)||(f=f?"include":"omit");const O="credentials"in Request.prototype;g=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:O?f:void 0});let C=await fetch(g);const k=Ii&&(l==="stream"||l==="response");if(Ii&&(a||k&&y)){const U={};["status","statusText","headers"].forEach(ye=>{U[ye]=C[ye]});const V=v.toFiniteNumber(C.headers.get("content-length")),[F,de]=a&&ja(V,Zr(Va(a),!0))||[];C=new Response(qa(C.body,za,F,()=>{de&&de(),y&&y()}),U)}l=l||"text";let x=await es[v.findKey(es,l)||"text"](C,t);return!k&&y&&y(),await new Promise((U,V)=>{Iu(U,V,{data:x,headers:Ne.from(C.headers),status:C.status,statusText:C.statusText,config:t,request:g})})}catch(O){throw y&&y(),O&&O.name==="TypeError"&&/fetch/i.test(O.message)?Object.assign(new K("Network Error",K.ERR_NETWORK,t,g),{cause:O.cause||O}):K.from(O,O&&O.code,t,g)}}),Si={http:Ny,xhr:lv,fetch:yv};v.forEach(Si,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ka=t=>`- ${t}`,vv=t=>v.isFunction(t)||t===null||t===!1,Ou={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!vv(n)&&(r=Si[(o=String(n)).toLowerCase()],r===void 0))throw new K(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ka).join(`
`):" "+Ka(i[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Si};function Qs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pn(null,t)}function Ga(t){return Qs(t),t.headers=Ne.from(t.headers),t.data=Xs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ou.getAdapter(t.adapter||br.adapter)(t).then(function(r){return Qs(t),r.data=Xs.call(t,t.transformResponse,r),r.headers=Ne.from(r.headers),r},function(r){return Eu(r)||(Qs(t),r&&r.response&&(r.response.data=Xs.call(t,t.transformResponse,r.response),r.response.headers=Ne.from(r.response.headers))),Promise.reject(r)})}const Cu="1.7.7",fo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ja={};fo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Cu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new K(s(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!Ja[o]&&(Ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function bv(t,e,n){if(typeof t!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new K("option "+i+" must be "+c,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const Ti={assertOptions:bv,validators:fo},St=Ti.validators;class Gt{constructor(e){this.defaults=e,this.interceptors={request:new Ba,response:new Ba}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zt(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ti.assertOptions(r,{silentJSONParsing:St.transitional(St.boolean),forcedJSONParsing:St.transitional(St.boolean),clarifyTimeoutError:St.transitional(St.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:Ti.assertOptions(s,{encode:St.function,serialize:St.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Ne.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,f=0,p;if(!c){const g=[Ga.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=a.length;let m=n;for(f=0;f<p;){const g=a[f++],y=a[f++];try{m=g(m)}catch(w){y.call(this,w);break}}try{u=Ga.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Zt(this.defaults,e);const n=Su(e.baseURL,e.url);return vu(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Gt.prototype[e]=function(n,r){return this.request(Zt(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Zt(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Gt.prototype[e]=n(),Gt.prototype[e+"Form"]=n(!0)});class ho{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Pn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new ho(function(s){e=s}),cancel:e}}}function wv(t){return function(n){return t.apply(null,n)}}function Ev(t){return v.isObject(t)&&t.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([t,e])=>{Ri[e]=t});function Pu(t){const e=new Gt(t),n=au(Gt.prototype.request,e);return v.extend(n,Gt.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Pu(Zt(t,s))},n}const oe=Pu(br);oe.Axios=Gt;oe.CanceledError=Pn;oe.CancelToken=ho;oe.isCancel=Eu;oe.VERSION=Cu;oe.toFormData=Rs;oe.AxiosError=K;oe.Cancel=oe.CanceledError;oe.all=function(e){return Promise.all(e)};oe.spread=wv;oe.isAxiosError=Ev;oe.mergeConfig=Zt;oe.AxiosHeaders=Ne;oe.formToJSON=t=>wu(v.isHTMLForm(t)?new FormData(t):t);oe.getAdapter=Ou.getAdapter;oe.HttpStatusCode=Ri;oe.default=oe;const Iv={class:"page-wrap"},Sv={key:0},Tv={key:1,class:"description-container"},Rv={class:"img-wrap"},Av=["src"],Ov={class:"product-details"},Cv={key:0,class:"grey-button",disabled:""},Pv={class:"price"},kv={class:"description"},xv={key:2},Nv={key:0,class:"modal-overlay"},Dv={key:1,class:"modal-overlay"},Mv={class:"modal-content"},Lv={key:0},Uv={key:1},Fv={key:2},$v={__name:"ProductDetails",props:{user:{type:Object,default:null}},setup(t){const e=he(null),n=iu(),r=he(!1),s=he([]),i=he(!0),o=he(!1),a=he(null),c=he(!1),l=he(""),u=he(""),f=t;async function p(U){if(U)try{const V=await oe.get(`/api/users/${f.user.uid}/cart`);s.value=V.data.map(F=>F.id)}catch(V){console.error("Error al cargar el carrito:",V)}else s.value=[]}Tn(async()=>{window.scrollTo(0,0);const U=vn();if(Ml(U,window.location.href)){const F=window.localStorage.getItem("emailForSignIn");await Ll(U,F,window.location.href),l.value="Successfully signed in!",window.localStorage.removeItem("emailForSignIn")}const V=n.params.id;try{const F=await oe.get(`/api/products/${V}`);e.value=F.data,console.log(e.value),e.value?f.user&&await p(f.user):r.value=!0}catch(F){console.error("Error al obtener el producto o el carrito:",F),r.value=!0}finally{i.value=!1}pn(()=>f.user,async F=>{await p(F)})});async function m(){if(!u.value)return;const U=vn(),V={url:"https://two-trees-e-commerce.onrender.com/products",handleCodeInApp:!0};try{await Dl(U,u.value,V),l.value="A login link was sent to your email",c.value=!1,window.localStorage.setItem("emailForSignIn",u.value),c.value=!0}catch(F){console.error("Error sending email link:",F)}}async function g(){const U=n.params.id;if(s.value.includes(U)){alert("This product is already in the cart");return}try{await oe.post(`/api/users/${f.user.uid}/cart`,{id:U}),s.value.push(U)}catch(V){console.error("Error al agregar al carrito:",V)}}function y(U){a.value=U,w(),o.value=!0,setTimeout(()=>{C()},2e3)}function w(){const U=document.getElementById("product-image"),V=document.querySelector(".btn-cart");if(U&&V){const F=U.cloneNode(!0),de=U.getBoundingClientRect();F.style.position="fixed",F.style.left=`${de.left}px`,F.style.top=`${de.top}px`,F.classList.add("fly-to-cart"),document.body.appendChild(F);const ye=-500,Oe=-1e3,qe=V.getBoundingClientRect();F.style.transform=`translate(${qe.left-de.left+ye}px, ${qe.top-de.top+Oe}px) scale(0.1)`,F.style.opacity="0",F.addEventListener("transitionend",()=>{F.remove()})}setTimeout(()=>g(),800)}function O(){c.value=!0}function C(){o.value=!1}function k(){c.value=!1,l.value=""}const x=ke(()=>e.value&&s.value.includes(e.value.id));return(U,V)=>(G(),J(pe,null,[X(yr,{user:t.user},null,8,["user"]),R("div",Iv,[i.value?(G(),J("div",Sv)):Pe("",!0),!r.value&&e.value?(G(),J("div",Tv,[R("h1",null,Ie(e.value.name),1),R("div",Rv,[R("img",{src:`https://two-trees-e-commerce.onrender.com${e.value.imageUrl}`,alt:"product",id:"product-image"},null,8,Av)]),R("div",Ov,[f.user&&x.value?(G(),J("button",Cv," Item is already in Cart ")):Pe("",!0),f.user&&!x.value?(G(),J("button",{key:1,onClick:y,class:"add-to-cart"}," Add to Cart ")):Pe("",!0),f.user?Pe("",!0):(G(),J("button",{key:2,onClick:O,class:"sig-in-button"}," Sign in to add to Cart ")),R("h3",Pv,Ie(e.value.price),1)]),R("p",kv,Ie(e.value.description),1)])):!i.value&&r.value?(G(),J("div",xv,[X(ou)])):Pe("",!0)]),o.value?(G(),J("div",Nv,V[1]||(V[1]=[R("div",{class:"modal-content"},[R("h2",null,"The product is in the Cart")],-1)]))):Pe("",!0),c.value?(G(),J("div",Dv,[R("div",Mv,[l.value?(G(),J("h2",Uv,Ie(l.value),1)):(G(),J("h2",Lv,"Please enter your email to sign in")),l.value?Pe("",!0):(G(),J("div",Fv,[ji(R("input",{"onUpdate:modelValue":V[0]||(V[0]=F=>u.value=F),type:"email",placeholder:"Enter your email",class:"email-input"},null,512),[[nl,u.value]]),R("div",{class:"modal-buttons"},[R("button",{class:"modal-button",onClick:m},"Log In"),R("button",{class:"modal-button",onClick:k},"Cancel")])]))])])):Pe("",!0),X(On)],64))}},Bv={class:"grid-wrap"},Hv=["src"],jv={class:"product-name"},Vv={class:"product-price"},Wv={__name:"ProductsList",props:{products:{type:Object,required:!0}},setup(t){const e=t;return(n,r)=>(G(),J("div",Bv,[(G(!0),J(pe,null,Br(e.products,s=>(G(),J("div",{class:"product-item",key:s.id},[R("img",{src:`https://two-trees-e-commerce.onrender.com${s.imageUrl}`,alt:"product"},null,8,Hv),R("h3",jv,Ie(s.name),1),R("p",Vv,Ie(s.price),1),X(Ge(ar),{class:"details-button-wrap",to:{name:"product",params:{id:s.id}}},{default:Mt(()=>r[0]||(r[0]=[R("button",{class:"details-button"},"View Details",-1)])),_:2},1032,["to"])]))),128))]))}},qv={class:"page-wrap"},zv={__name:"Products",props:{user:{type:Object,default:null}},setup(t){const e=he([]);return Tn(async()=>{try{const n=await oe.get("/api/products");e.value=n.data}catch(n){console.error("Error al obtener los productos:",n)}}),(n,r)=>(G(),J(pe,null,[X(yr,{user:t.user},null,8,["user"]),R("div",qv,[r[0]||(r[0]=R("h1",null,"Products",-1)),X(Wv,{products:e.value},null,8,["products"])]),X(On)],64))}},Kv=["src"],Gv={class:"details-wrap"},Jv={class:"price"},Yv=["onUpdate:modelValue","onChange"],Xv=["value"],Qv=["onClick"],Zv={__name:"CartList",props:{cart:{type:Array,required:!0}},emits:["remove-from-cart","update-quantity"],setup(t,{emit:e}){const n=t;return(r,s)=>(G(!0),J(pe,null,Br(n.cart,i=>(G(),J("div",{class:"product-container",key:i.id},[R("div",null,[R("h2",null,Ie(i.name),1),R("img",{class:"product-image",src:`https://two-trees-e-commerce.onrender.com/images/${i.id}.webp`,alt:"product"},null,8,Kv)]),R("div",Gv,[R("p",Jv,Ie(i.price)+" €",1),s[0]||(s[0]=R("label",{for:"quantity"},"Quantity:",-1)),ji(R("select",{"onUpdate:modelValue":o=>i.quantity=o,onChange:o=>r.$emit("update-quantity",i)},[(G(),J(pe,null,Br(10,o=>R("option",{key:o,value:o},Ie(o),9,Xv)),64))],40,Yv),[[Kd,i.quantity]]),s[1]||(s[1]=R("br",null,null,-1)),R("button",{onClick:o=>r.$emit("remove-from-cart",i.id),class:"remove-button"},"Delete",8,Qv)])]))),128))}},eb={class:"page-wrap"},tb={key:0},nb={class:"total-price"},rb={key:1},sb={key:0,class:"modal-overlay"},ib={__name:"ShoppingCart",props:{user:{type:Object,default:null}},setup(t){const e=he([]),n=he(!1),r=he(null),s=ao(),i=ke(()=>e.value.reduce((g,y)=>{const w=parseFloat(y.price)||0,O=parseInt(y.quantity)||1;return g+w*O},0).toFixed(2)),o=t;pn(()=>o.user,async g=>{g?await a(g):e.value=[]},{immediate:!0});async function a(g){if(g)try{const y=await oe.get(`/api/users/${g.uid}/cart`);e.value=y.data.map(w=>({...w,quantity:parseInt(w.quantity)||1,price:parseFloat(w.price)||0}))}catch(y){console.error("Error al cargar el carrito:",y),e.value=[]}}async function c(g){if(!o.user){console.error("No hay usuario autenticado");return}const y=e.value.findIndex(w=>w.id===g.id);if(y!==-1){e.value[y].quantity=parseInt(g.quantity)||1;try{await oe.put(`/api/users/${o.user.uid}/cart/${g.id}`,{quantity:e.value[y].quantity})}catch(w){console.error("Error al actualizar la cantidad en el carrito:",w)}}}function l(g){r.value=g,n.value=!0}async function u(){if(r.value){try{const g=await oe.delete(`/api/users/${o.user.uid}/cart/${r.value}`);e.value=g.data.map(y=>({...y,quantity:parseInt(y.quantity)||1,price:parseFloat(y.price)||0}))}catch(g){console.error("Error al eliminar del carrito:",g)}p()}}function f(){p()}function p(){n.value=!1,r.value=null}function m(){localStorage.setItem("cartData",JSON.stringify(e.value)),s.push({name:"pay"})}return(g,y)=>(G(),J(pe,null,[X(yr,{user:t.user},null,8,["user"]),R("div",eb,[y[2]||(y[2]=R("h1",null,"Shopping Cart",-1)),e.value.length>0?(G(),J("div",tb,[X(Zv,{onRemoveFromCart:l,onUpdateQuantity:c,cart:e.value},null,8,["cart"]),R("div",nb,[y[0]||(y[0]=R("p",null,"Total price:",-1)),R("p",null,Ie(i.value)+" €",1)]),R("div",{class:"checkout-wrap"},[R("button",{class:"checkout-button",onClick:m},"Proceed to Checkout")])])):(G(),J("div",rb,y[1]||(y[1]=[R("h2",{class:"empty"},"Your Cart is empty!",-1)])))]),n.value?(G(),J("div",sb,[R("div",{class:"modal-content"},[y[3]||(y[3]=R("h2",null,"You are going to delete this item",-1)),R("div",{class:"modal-buttons"},[R("button",{class:"modal-button",onClick:u},"Ok"),R("button",{class:"modal-button",onClick:f},"Cancel")])])])):Pe("",!0),X(On)],64))}},ob={class:"home"},ab={__name:"Home",setup(t){return(e,n)=>(G(),J("div",ob,[X(Ge(ar),{to:{name:"products"}},{default:Mt(()=>n[0]||(n[0]=[R("img",{src:so,alt:""},null,-1)])),_:1}),X(Ge(ar),{style:{"text-decoration":"none"},to:{name:"products"}},{default:Mt(()=>n[1]||(n[1]=[R("h1",{class:"home-title"},"Welcome!",-1),R("h1",{class:"home-subtitle"},"Your premium olive oil shop",-1)])),_:1})]))}},cb={class:"page-wrap"},lb={class:"orderFromCart"},ub={class:"order-name"},fb={class:"order-name-title"},db=["src"],hb={class:"order-details"},pb={class:"total-price"},mb={__name:"Pay",props:{user:{type:Object,default:null}},setup(t){const e=he([]),n=ao(),r=t;window.scrollTo(0,0),Tn(()=>{const o=localStorage.getItem("cartData");o&&(e.value=JSON.parse(o))});const s=ke(()=>e.value.reduce((o,a)=>o+a.price*a.quantity,0).toFixed(2));async function i(){try{await oe.delete(`/api/users/${r.user.uid}/cart`),localStorage.removeItem("cartData")}catch(o){console.error("Error al vaciar el carrito:",o)}n.push({name:"orderConfirm"})}return(o,a)=>(G(),J(pe,null,[X(yr,{user:t.user},null,8,["user"]),R("div",cb,[a[0]||(a[0]=R("h1",{class:"pay-title"},"This is your order",-1)),R("div",lb,[(G(!0),J(pe,null,Br(e.value,c=>(G(),J("div",{key:c.id,class:"order-item"},[R("div",ub,[R("p",fb,Ie(c.name),1),R("img",{class:"product-image",src:`https://two-trees-e-commerce.onrender.com/images/${c.id}.webp`,alt:"product"},null,8,db)]),R("div",hb,[R("p",null,"Price: "+Ie(c.price)+" €",1),R("p",null,"Quantity: "+Ie(c.quantity),1)])]))),128)),R("div",pb,[R("p",null,"Total Price: "+Ie(s.value)+" €",1)])]),R("div",{class:"pay-btn"},[R("button",{onClick:i}," Click to pay! ")])]),X(On)],64))}},gb={class:"confirm-container"},_b={__name:"orderConfirm",setup(t){return window.scrollTo(0,0),(e,n)=>(G(),J(pe,null,[R("div",gb,[X(Ge(ar),{to:{name:"home"}},{default:Mt(()=>n[0]||(n[0]=[R("img",{class:"confirm-img",src:so,alt:""},null,-1)])),_:1}),n[1]||(n[1]=R("h1",{class:"confirm-title"},"Congratulations, your order is confirmed",-1))]),X(On)],64))}},yb=M_({history:d_("/"),routes:[{path:"/",name:"home",component:ab},{path:"/products",name:"products",component:zv,props:t=>({user:t.params.user})},{path:"/product/:id",name:"product",component:$v},{path:"/products/cart",name:"cart",component:ib,props:t=>({user:t.params.user})},{path:"/pay",name:"pay",component:mb,props:t=>({user:t.params.user})},{path:"/orderConfirm",name:"orderConfirm",component:_b,props:t=>({user:t.params.user})},{path:"/:catchAll(.*)",name:"not-found",component:ou}]});var vb="firebase",bb="9.15.0";/**
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
 */gn(vb,bb,"app");const wb={apiKey:"AIzaSyCYFWnEgsjITHm6OIgXsH2t1b3HndT-UMg",authDomain:"basil-e-commerce.firebaseapp.com",projectId:"basil-e-commerce",storageBucket:"basil-e-commerce.firebasestorage.app",messagingSenderId:"145733370148",appId:"1:145733370148:web:d1ab652382b2daa5fc33b1"};dl(wb);const ku=Yd(kg);ku.use(yb);ku.mount("#app");
