/*! For license information please see casters.js.LICENSE.txt */
(()=>{var e,t={4581:(e,t)=>{"use strict";t.DF={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z"]},t.g$=t.DF},9432:e=>{e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},343:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2034:(e,t,n)=>{var r=n(5067),o=n(5882);e.exports=function e(t,n,a,s,i){var c=-1,u=t.length;for(a||(a=o),i||(i=[]);++c<u;){var l=t[c];n>0&&a(l)?n>1?e(l,n-1,a,s,i):r(i,l):s||(i[i.length]=l)}return i}},9250:(e,t,n)=>{var r=n(7297),o=n(3812);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},6532:(e,t,n)=>{var r=n(6874),o=n(3043),a=n(3059),s=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=s},9872:e=>{e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},1054:(e,t,n)=>{var r=n(857),o=n(343),a=n(6152),s=n(4795),i=r?r.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(s(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},9078:(e,t,n)=>{var r=n(7297),o=n(6974),a=n(2721),s=n(3812);e.exports=function(e,t){return t=r(t,e),null==(e=a(e,t))||delete e[s(o(t))]}},7297:(e,t,n)=>{var r=n(6152),o=n(1401),a=n(4452),s=n(6188);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(s(e))}},8642:(e,t,n)=>{var r=n(7030);e.exports=function(e){return r(e)?void 0:e}},9097:(e,t,n)=>{var r=n(5676),o=n(3114),a=n(5251);e.exports=function(e){return a(o(e,void 0,r),e+"")}},5882:(e,t,n)=>{var r=n(857),o=n(9631),a=n(6152),s=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(s&&e&&e[s])}},1401:(e,t,n)=>{var r=n(6152),o=n(4795),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||s.test(e)||!a.test(e)||null!=t&&e in Object(t)}},7777:(e,t,n)=>{var r=n(733);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},3114:(e,t,n)=>{var r=n(9432),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,s=-1,i=o(a.length-t,0),c=Array(i);++s<i;)c[s]=a[t+s];s=-1;for(var u=Array(t+1);++s<t;)u[s]=a[s];return u[t]=n(c),r(e,this,u)}}},2721:(e,t,n)=>{var r=n(9250),o=n(9872);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},5251:(e,t,n)=>{var r=n(6532),o=n(7787)(r);e.exports=o},7787:e=>{var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var o=t(),a=16-(o-r);if(r=o,a>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},4452:(e,t,n)=>{var r=n(7777),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,s=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=s},3812:(e,t,n)=>{var r=n(4795);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},6874:e=>{e.exports=function(e){return function(){return e}}},5676:(e,t,n)=>{var r=n(2034);e.exports=function(e){return null!=e&&e.length?r(e,1):[]}},3059:e=>{e.exports=function(e){return e}},7030:(e,t,n)=>{var r=n(3366),o=n(7353),a=n(5125),s=Function.prototype,i=Object.prototype,c=s.toString,u=i.hasOwnProperty,l=c.call(Object);e.exports=function(e){if(!a(e)||"[object Object]"!=r(e))return!1;var t=o(e);if(null===t)return!0;var n=u.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==l}},4795:(e,t,n)=>{var r=n(3366),o=n(5125);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},6974:e=>{e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},733:(e,t,n)=>{var r=n(6738);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var s=e.apply(this,r);return n.cache=a.set(o,s)||a,s};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},7620:(e,t,n)=>{var r=n(343),o=n(8874),a=n(9078),s=n(7297),i=n(752),c=n(8642),u=n(9097),l=n(6939),d=u((function(e,t){var n={};if(null==e)return n;var u=!1;t=r(t,(function(t){return t=s(t,e),u||(u=t.length>1),t})),i(e,l(e),n),u&&(n=o(n,7,c));for(var d=t.length;d--;)a(n,t[d]);return n}));e.exports=d},6188:(e,t,n)=>{var r=n(1054);e.exports=function(e){return null==e?"":r(e)}},9745:(e,t,n)=>{"use strict";n.d(t,{Jk:()=>U,Q_:()=>k,WB:()=>y});var r=n(641),o=n(1186),a=n(7875);let s;const i=e=>s=e,c=Symbol();function u(e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}var l;!function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"}(l||(l={}));const d="undefined"!=typeof window,p=(()=>"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:"object"==typeof globalThis?globalThis:{HTMLElement:null})();function f(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){b(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function m(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return t.status>=200&&t.status<=299}function v(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const h="object"==typeof navigator?navigator:{userAgent:""},g=(()=>/Macintosh/.test(h.userAgent)&&/AppleWebKit/.test(h.userAgent)&&!/Safari/.test(h.userAgent))(),b=d?"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!g?function(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"==typeof e?(r.href=e,r.origin!==location.origin?m(r.href)?f(e,t,n):(r.target="_blank",v(r)):v(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){v(r)}),0))}:"msSaveOrOpenBlob"in h?function(e,t="download",n){if("string"==typeof e)if(m(e))f(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){v(t)}))}else navigator.msSaveOrOpenBlob(function(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}(e,n),t)}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return f(e,t,n);const o="application/octet-stream"===e.type,a=/constructor/i.test(String(p.HTMLElement))||"safari"in p,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&a||g)&&"undefined"!=typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!=typeof e)throw r=null,new Error("Wrong reader.result type");e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}:()=>{};function y(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let n=[],a=[];const s=(0,r.Xl)({install(e){i(s),o.$Q||(s._a=e,e.provide(c,s),e.config.globalProperties.$pinia=s,a.forEach((e=>n.push(e))),a=[])},use(e){return this._a||o.$Q?n.push(e):a.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const C=()=>{};function w(e,t,n,r=C){e.push(t);const o=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&(0,a.FN)()&&(0,a.Ah)(o),o}function x(e,...t){e.slice().forEach((e=>{e(...t)}))}function O(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const o=t[n],a=e[n];u(a)&&u(o)&&e.hasOwnProperty(n)&&!(0,r.dq)(o)&&!(0,r.PG)(o)?e[n]=O(a,o):e[n]=o}return e}const j=Symbol(),S=new WeakMap,{assign:F}=Object;function E(e,t,n={},s,c,d){let p;const f=F({actions:{}},n),m={deep:!0};let v,h,g,b=(0,r.Xl)([]),y=(0,r.Xl)([]);const E=s.state.value[e];let k;function U(t){let n;v=h=!1,"function"==typeof t?(t(s.state.value[e]),n={type:l.patchFunction,storeId:e,events:g}):(O(s.state.value[e],t),n={type:l.patchObject,payload:t,storeId:e,events:g});const r=k=Symbol();(0,a.Y3)().then((()=>{k===r&&(v=!0)})),h=!0,x(b,n,s.state.value[e])}d||E||(o.$Q?(0,o.t8)(s.state.value,e,{}):s.state.value[e]={}),(0,r.iH)({});const V=C;function _(t,n){return function(){i(s);const r=Array.from(arguments),o=[],a=[];function c(e){o.push(e)}function u(e){a.push(e)}let l;x(y,{args:r,name:t,store:H,after:c,onError:u});try{l=n.apply(this&&this.$id===e?this:H,r)}catch(e){throw x(a,e),e}return l instanceof Promise?l.then((e=>(x(o,e),e))).catch((e=>(x(a,e),Promise.reject(e)))):(x(o,l),l)}}const $={_p:s,$id:e,$onAction:w.bind(null,y),$patch:U,$reset:V,$subscribe(t,n={}){const r=w(b,t,n.detached,(()=>o())),o=p.run((()=>(0,a.YP)((()=>s.state.value[e]),(r=>{("sync"===n.flush?h:v)&&t({storeId:e,type:l.direct,events:g},r)}),F({},m,n))));return r},$dispose:function(){p.stop(),b=[],y=[],s._s.delete(e)}};o.$Q&&($._r=!1);const H=(0,r.qj)(F({},$));s._s.set(e,H);const I=s._e.run((()=>(p=(0,r.B)(),p.run((()=>t())))));for(const t in I){const n=I[t];if((0,r.dq)(n)&&(A=n,!(0,r.dq)(A)||!A.effect)||(0,r.PG)(n))d||(!E||(P=n,o.$Q?S.has(P):u(P)&&P.hasOwnProperty(j))||((0,r.dq)(n)?n.value=E[t]:O(n,E[t])),o.$Q?(0,o.t8)(s.state.value[e],t,n):s.state.value[e][t]=n);else if("function"==typeof n){const e=_(t,n);o.$Q?(0,o.t8)(I,t,e):I[t]=e,f.actions[t]=n}}var P,A;return o.$Q?Object.keys(I).forEach((e=>{(0,o.t8)(H,e,I[e])})):(F(H,I),F((0,r.IU)(H),I)),Object.defineProperty(H,"$state",{get:()=>s.state.value[e],set:e=>{U((t=>{F(t,e)}))}}),o.$Q&&(H._r=!0),s._p.forEach((e=>{F(H,p.run((()=>e({store:H,app:s._a,pinia:s,options:f}))))})),E&&d&&n.hydrate&&n.hydrate(H.$state,E),v=!0,h=!0,H}function k(e,t,n){let u,l;const d="function"==typeof t;function p(e,n){const p=(0,a.FN)();return(e=e||p&&(0,a.f3)(c))&&i(e),(e=s)._s.has(u)||(d?E(u,t,l,e):function(e,t,n,a){const{state:s,actions:c,getters:u}=t,l=n.state.value[e];let d;d=E(e,(function(){l||(o.$Q?(0,o.t8)(n.state.value,e,s?s():{}):n.state.value[e]=s?s():{});const t=(0,r.BK)(n.state.value[e]);return F(t,c,Object.keys(u||{}).reduce(((t,a)=>(t[a]=(0,r.Xl)((0,r.Fl)((()=>{i(n);const t=n._s.get(e);if(!o.$Q||t._r)return u[a].call(t,t)}))),t)),{}))}),t,n,0,!0),d.$reset=function(){const e=s?s():{};this.$patch((t=>{F(t,e)}))}}(u,l,e)),e._s.get(u)}return"string"==typeof e?(u=e,l=d?n:t):(l=e,u=e.id),p.$id=u,p}function U(e){if(o.$Q)return(0,r.BK)(e);{e=(0,r.IU)(e);const t={};for(const n in e){const o=e[n];((0,r.dq)(o)||(0,r.PG)(o))&&(t[n]=(0,r.Vh)(e,n))}return t}}},1147:(e,t,n)=>{"use strict";n(4467);var r=n(8447),o=n(9745),a=n(9462);const s=[nodecg.Replicant("casters")],i={name:"New Caster",twitter:"",pronouns:"?/?"},c=(0,o.Q_)("casters",{state:()=>({casters:[],uncommittedCasters:[]}),actions:{removeUncommittedCaster(e){this.uncommittedCasters=this.uncommittedCasters.filter((t=>t.id!==e))},addUncommittedCaster({id:e,caster:t}){this.uncommittedCasters.push(Object.assign({id:e},null!=t?t:i))},addDefaultCaster(){const e=(0,r.O)();return this.addUncommittedCaster({id:e}),e},removeCaster(e){return t=this,n=void 0,o=function*(){return(0,a.b)("casters:delete",e)},new((r=void 0)||(r=Promise))((function(e,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,i)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o}}});var u=n(7875),l=n(641),d=n(8127),p=n(9689),f=n(349);const m={class:"badge badge-blue pronoun-badge"},v={key:0,class:"badge badge-red uncommitted-badge"},h={class:"layout horizontal m-t-8"};var g=n(8149),b=n.n(g),y=n(9850),C=n.n(y),w=n(8751),x=n(4847),O=n(4581),j=n(1901),S=n(7620),F=n.n(S);w.vI.add(x.NB,O.g$);const E=(0,u.aZ)({name:"CasterEditor",components:{IplExpandingSpace:d.IplExpandingSpace,IplButton:d.IplButton,IplInput:d.IplInput,FontAwesomeIcon:j.GN},props:{caster:{type:Object,required:!0},casterId:{type:String,required:!0},uncommitted:{type:Boolean,default:!1}},emits:["save"],setup(e,{emit:t}){const n=c(),r=(0,l.iH)({id:null,name:null,twitter:null,pronouns:null}),o=(0,l.iH)(!1),s=(0,l.Fl)((()=>!b()(e.caster,r.value))),i=(0,u.FN)().vnode.key;return(0,u.YP)((()=>e.caster),((e,t)=>{o.value||b()(e,t)||(r.value=C()(e))}),{immediate:!0}),{internalCaster:r,key:i,updateCaster(){return o=this,s=void 0,c=function*(){if(e.uncommitted){const e=yield(0,a.b)("casters:save",F()(r.value,["id","uncommitted"]));n.removeUncommittedCaster(r.value.id),t("save",e.id)}else yield(0,a.b)("casters:save",F()(r.value,["uncommitted"]))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{a(c.next(e))}catch(e){t(e)}}function r(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,r)}a((c=c.apply(o,s||[])).next())}));var o,s,i,c},removeCaster(){e.uncommitted?n.removeUncommittedCaster(e.casterId):n.removeCaster(e.casterId)},setFocused(e){o.value=e},disableSave:(0,l.Fl)((()=>e.uncommitted&&Object.keys(n.casters).length>=3)),isEdited:s,buttonColor:(0,l.Fl)((()=>e.uncommitted?"green":s.value?"red":"blue")),updateButtonLabel:(0,l.Fl)((()=>e.uncommitted?"Save":"Update")),pronounFormatter:e=>e.toLowerCase(),twitterFormatter:e=>e.startsWith("@")?e:"@"+e}}});var k=n(4407);const U=(0,k.Z)(E,[["render",function(e,t,n,r,o,a){const s=(0,u.up)("ipl-input"),i=(0,u.up)("ipl-button"),c=(0,u.up)("ipl-expanding-space");return(0,u.wg)(),(0,u.j4)(c,{key:e.key,class:"m-t-8"},{title:(0,u.w5)((()=>[(0,u.Uk)((0,f.zw)(e.internalCaster.name)+" ",1),(0,u._)("span",m,(0,f.zw)(e.internalCaster.pronouns),1),e.uncommitted?((0,u.wg)(),(0,u.iD)("span",v," Unsaved ")):(0,u.kq)("",!0)])),default:(0,u.w5)((()=>[(0,u.Wm)(s,{modelValue:e.internalCaster.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.internalCaster.name=t),name:"name",label:"Name",onFocuschange:e.setFocused},null,8,["modelValue","onFocuschange"]),(0,u.Wm)(s,{modelValue:e.internalCaster.twitter,"onUpdate:modelValue":t[1]||(t[1]=t=>e.internalCaster.twitter=t),name:"twitter",label:"Twitter",formatter:e.twitterFormatter,onFocuschange:e.setFocused},null,8,["modelValue","formatter","onFocuschange"]),(0,u.Wm)(s,{modelValue:e.internalCaster.pronouns,"onUpdate:modelValue":t[2]||(t[2]=t=>e.internalCaster.pronouns=t),name:"pronouns",label:"Pronouns",formatter:e.pronounFormatter,onFocuschange:e.setFocused},null,8,["modelValue","formatter","onFocuschange"]),(0,u.Wm)(s,{modelValue:e.internalCaster.profileImageUrl,"onUpdate:modelValue":t[3]||(t[3]=t=>e.internalCaster.profileImageUrl=t),name:"profileImageUrl",label:"Profile image URL",onFocuschange:e.setFocused},null,8,["modelValue","onFocuschange"]),(0,u.Wm)(s,{modelValue:e.internalCaster.videoUrl,"onUpdate:modelValue":t[4]||(t[4]=t=>e.internalCaster.videoUrl=t),name:"videoUrl",label:"Video URL",onFocuschange:e.setFocused},null,8,["modelValue","onFocuschange"]),(0,u._)("div",h,[(0,u.Wm)(i,{label:e.updateButtonLabel,color:e.buttonColor,disabled:e.disableSave,"data-test":"update-button",onClick:e.updateCaster},null,8,["label","color","disabled","onClick"]),(0,u.Wm)(i,{icon:"times",class:"m-l-6",color:"red","data-test":"remove-button",onClick:e.removeCaster},null,8,["onClick"])])])),_:1})}]]),V=(0,u.aZ)({name:"CastersPanel",components:{ErrorLog:p.Z,IplExpandingSpaceGroup:d.IplExpandingSpaceGroup,CasterEditor:U,IplButton:d.IplButton,IplSpace:d.IplSpace},setup(){const e=c(),t=(0,o.Jk)(e),n=(0,l.iH)(null),r=(0,l.Fl)((()=>Object.assign(Object.assign({},t.casters.value),t.uncommittedCasters.value))),a=(0,l.iH)([]);return(0,u.m0)((()=>{const e=[];Object.entries(t.casters.value).forEach((([t,n])=>{e.push(Object.assign(Object.assign({id:String(t)},n),{uncommitted:!1}))})),Object.entries(t.uncommittedCasters.value).forEach((([t,n])=>{e.push(Object.assign(Object.assign({id:String(t)},n),{uncommitted:!0}))})),a.value=e})),{casters:a,uncommittedCasters:t.uncommittedCasters,activeCaster:n,disableAddCaster:(0,l.Fl)((()=>Object.keys(r.value).length>=3)),addCaster(){n.value=e.addDefaultCaster()},handleCasterSave(e){n.value=e}}}}),_=(0,k.Z)(V,[["render",function(e,t,n,r,o,a){const s=(0,u.up)("error-log"),i=(0,u.up)("ipl-button"),c=(0,u.up)("ipl-space"),l=(0,u.up)("caster-editor"),d=(0,u.up)("ipl-expanding-space-group");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(s),(0,u.Wm)(c,null,{default:(0,u.w5)((()=>[(0,u.Wm)(i,{label:"Add caster",color:"green",disabled:e.disableAddCaster,"data-test":"add-caster-button",onClick:e.addCaster},null,8,["disabled","onClick"])])),_:1}),(0,u.Wm)(d,{modelValue:e.activeCaster,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeCaster=t),"data-test":"caster-editor-group"},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.casters,(t=>((0,u.wg)(),(0,u.j4)(l,{key:t.id,"caster-id":t.id,uncommitted:t.uncommitted,"data-test":"caster-editor",caster:t,onSave:e.handleCasterSave},null,8,["caster-id","uncommitted","caster","onSave"])))),128))])),_:1},8,["modelValue"])],64)}]]);var $,H,I=n(4825),P=n(1762),A=n(2076);H=function*(){const e=(0,I.ri)(_);e.use((0,o.WB)()),yield(0,P.r)(s,c()),(0,A.E)(e),e.mount("#app")},new(($=void 0)||($=Promise))((function(e,t){function n(e){try{o(H.next(e))}catch(e){t(e)}}function r(e){try{o(H.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof $?o:new $((function(e){e(o)}))).then(n,r)}o((H=H.apply(void 0,[])).next())}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(t,n,o,a)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={895:0,745:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[s,i,c]=n,u=0;if(s.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[519,15],(()=>r(1147)));o=r.O(o)})();