(()=>{var e,t={9644:(e,t,r)=>{e.exports=r(5644)},5644:(e,t,r)=>{"use strict";var n=r(3044),a=r(3644),o=r(2215),s=r(2937),i=function e(t){var r=new o(t),i=a(o.prototype.request,r);return n.extend(i,o.prototype,r),n.extend(i,r),i.create=function(r){return e(s(t,r))},i}(r(663));i.Axios=o,i.CanceledError=r(8047),i.CancelToken=r(4089),i.isCancel=r(8041),i.VERSION=r(9241).version,i.toFormData=r(9027),i.AxiosError=r(1218),i.Cancel=i.CanceledError,i.all=function(e){return Promise.all(e)},i.spread=r(783),i.isAxiosError=r(5587),e.exports=i,e.exports.default=i},4214:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(9601),a=r.n(n),o=r(2609),s=r.n(o)()(a());s.push([e.id,".casters-layout{width:1720px;padding:0 100px}.casters-layout>.background{height:425px;width:100%;background:var(--accent-color);position:absolute;z-index:1}",""]);const i=s},3680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(9601),a=r.n(n),o=r(2609),s=r.n(o)()(a());s.push([e.id,".caster{z-index:2;height:500px;width:350px;flex-basis:0;background-color:#fff;border-bottom:10px solid var(--accent-color);color:#19181b;text-transform:uppercase;padding:10px}.caster.has-video{flex-basis:728.8888888889px}.caster:not(:last-child){margin-right:100px}.caster>.caster-photo-wrapper{height:410px;width:728.8888888889px;max-width:100%;background-color:#19181b;position:relative;overflow:hidden}.caster>.caster-photo-wrapper>.caster-photo{width:180px;height:180px;border-radius:9999px;overflow:hidden}.caster>.caster-photo-wrapper>.caster-video{position:absolute;width:728.8888888889px;height:410px}.caster>.caster-name{font-size:50px;font-weight:bold;line-height:50px;margin-top:8px}.caster>.caster-details{font-size:40px;line-height:40px;font-style:oblique}.caster>.caster-details .pronouns{font-size:25px;line-height:30px;background-color:#19181b;color:#fff;padding:0 5px;display:inline-block;transform:translateY(-4px)}",""]);const i=s},2974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(9601),a=r.n(n),o=r(2609),s=r.n(o)()(a());s.push([e.id,".video-loader-wrapper{position:relative}.video-loader-wrapper>iframe{border-width:0;width:100%;height:100%}",""]);const i=s},2896:(e,t,r)=>{"use strict";r.d(t,{q:()=>o,y:()=>s});var n=r(882),a=r(5033);const o=[nodecg.Replicant("activeMatch")],s=(0,n.Q_)("activeMatch",{state:()=>({activeMatch:null}),getters:{nextGameIndex:e=>e.activeMatch.games.findIndex((e=>e.winner===a.k.NONE)),nextGame(e){return this.nextGameIndex>=0?e.activeMatch.games[this.nextGameIndex]:null}}})},8348:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s,R:()=>c});var n=r(8879),a=r(882),o=r(5332);const s=[nodecg.Replicant("casters")],i={name:"New Caster",twitter:"",pronouns:"?/?"},c=(0,a.Q_)("casters",{state:()=>({casters:[],uncommittedCasters:[]}),actions:{removeUncommittedCaster(e){this.uncommittedCasters=this.uncommittedCasters.filter((t=>t.id!==e))},addUncommittedCaster({id:e,caster:t}){this.uncommittedCasters.push(Object.assign({id:e},null!=t?t:i))},addDefaultCaster(){const e=(0,n.O)();return this.addUncommittedCaster({id:e}),e},removeCaster(e){return t=this,r=void 0,a=function*(){return(0,o.b)("casters:delete",e)},new((n=void 0)||(n=Promise))((function(e,o){function s(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,i)}c((a=a.apply(t,r||[])).next())}));var t,r,n,a}}})},6264:(e,t,r)=>{"use strict";r(6100);var n=r(4825),a=r(882),o=r(8791),s=r(2896),i=r(8348),c=r(7875);const l={class:"casters-layout flex center-xy"},d=(0,c._)("div",{class:"background"},null,-1);var u=r(641),p=r(1068),h=r(9818),f=r(280),v=r(6469);const m={class:"video-loader-wrapper"},x=["src"],g=(0,c.aZ)({name:"VideoLoader",props:{src:{type:[String,null],default:null}}});var w=r(6062),y=r.n(w),b=r(4036),Z=r.n(b),k=r(6793),C=r.n(k),O=r(7892),_=r.n(O),P=r(1173),j=r.n(P),I=r(2464),S=r.n(I),T=r(2974),E={};E.styleTagTransform=S(),E.setAttributes=_(),E.insert=C().bind(null,"head"),E.domAPI=Z(),E.insertStyleElement=j(),y()(T.Z,E),T.Z&&T.Z.locals&&T.Z.locals;var A=r(4407);const z=(0,A.Z)(g,[["render",function(e,t,r,n,a,o){return(0,c.wg)(),(0,c.iD)("div",m,[(0,c._)("iframe",{allow:"autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;",src:e.src,width:"1280",height:"720"},null,8,x)])}]]);var D=r(349);const L={class:"caster-photo-wrapper flex center-xy"},M={class:"pronouns"};var U=r(8466);const V=(0,c.aZ)({name:"CasterDisplay",components:{ImageLoader:f.Z,VideoLoader:z,FittedContent:v.Z},props:{caster:{type:Object,required:!0}},setup(e){const t=(0,u.iH)(!1);return(0,c.YP)((()=>e.caster.videoUrl),(e=>{return r=this,n=void 0,o=function*(){t.value=yield(0,U.m)(e)},new((a=void 0)||(a=Promise))((function(e,t){function s(e){try{c(o.next(e))}catch(e){t(e)}}function i(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(s,i)}c((o=o.apply(r,n||[])).next())}));var r,n,a,o}),{immediate:!0}),{hasVideo:t}}});var G=r(3680),R={};R.styleTagTransform=S(),R.setAttributes=_(),R.insert=C().bind(null,"head"),R.domAPI=Z(),R.insertStyleElement=j(),y()(G.Z,R),G.Z&&G.Z.locals&&G.Z.locals;const q=(0,A.Z)(V,[["render",function(e,t,r,n,a,o){const s=(0,c.up)("image-loader"),i=(0,c.up)("video-loader"),l=(0,c.up)("fitted-content");return(0,c.wg)(),(0,c.iD)("div",{class:(0,D.C_)(["caster flex vertical center-x",{"has-video":e.hasVideo}])},[(0,c._)("div",L,[e.hasVideo?((0,c.wg)(),(0,c.j4)(i,{key:1,src:e.caster.videoUrl,class:"caster-video"},null,8,["src"])):((0,c.wg)(),(0,c.j4)(s,{key:0,src:e.caster.profileImageUrl,"default-src":"/bundles/emerald-series-overlays/assets/default-caster-photo.png",class:"caster-photo"},null,8,["src"]))]),(0,c.Wm)(l,{"max-width":330,align:"center",class:"caster-name"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,D.zw)(e.caster.name),1)])),_:1}),(0,c.Wm)(l,{"max-width":330,align:"center",class:"caster-details font-condensed"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,D.zw)(e.caster.twitter)+" ",1),(0,c._)("span",M,(0,D.zw)(e.caster.pronouns),1)])),_:1})],2)}]]),F=(0,c.aZ)({name:"CommentaryGraphic",components:{CasterDisplay:q,FittedContent:v.Z,ImageLoader:f.Z,IntermissionLayout:h.Z,GraphicBackground:p.Z,VideoLoader:z},setup(){const e=(0,i.R)();return{casters:(0,u.Fl)((()=>e.casters))}}});var W=r(4214),B={};B.styleTagTransform=S(),B.setAttributes=_(),B.insert=C().bind(null,"head"),B.domAPI=Z(),B.insertStyleElement=j(),y()(W.Z,B),W.Z&&W.Z.locals&&W.Z.locals;const N=(0,A.Z)(F,[["render",function(e,t,r,n,a,o){const s=(0,c.up)("caster-display"),i=(0,c.up)("intermission-layout"),u=(0,c.up)("graphic-background");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(i,{"show-teams":""},{default:(0,c.w5)((()=>[(0,c._)("div",l,[d,((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.casters,(e=>((0,c.wg)(),(0,c.j4)(s,{key:e.id,caster:e},null,8,["caster"])))),128))])])),_:1}),(0,c.Wm)(u)],64)}]]);var Q,Y,H=r(8363);Y=function*(){const e=(0,n.ri)(N);e.use((0,a.WB)()),yield(0,o.r)(s.q,(0,s.y)()),yield(0,o.r)(i.Q,(0,i.R)()),yield(0,o.r)(H.bL,(0,H.Lo)()),(0,H.ZS)(),e.mount("#app")},new((Q=void 0)||(Q=Promise))((function(e,t){function r(e){try{a(Y.next(e))}catch(e){t(e)}}function n(e){try{a(Y.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof Q?a:new Q((function(e){e(a)}))).then(r,n)}a((Y=Y.apply(void 0,[])).next())}))},8466:(e,t,r)=>{"use strict";r.d(t,{m:()=>c,p:()=>i});var n=r(8127),a=r(9644),o=r.n(a),s=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}c((n=n.apply(e,t||[])).next())}))};function i(e){return s(this,void 0,void 0,(function*(){return new Promise((t=>{if((0,n.isBlank)(e))return t(!1);const r=new Image;r.src=e,r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)}}))}))}function c(e){return s(this,void 0,void 0,(function*(){if((0,n.isBlank)(e))return!1;try{return 404!==(yield o().get(e)).status}catch(e){return!1}}))}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e](o,o.exports,n),o.loaded=!0,o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],i=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={208:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[s,i,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var d=c(n)}for(t&&t(r);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var a=n.O(void 0,[828,240],(()=>n(6264)));a=n.O(a)})();