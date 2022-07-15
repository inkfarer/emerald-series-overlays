(()=>{var e,t={9644:(e,t,r)=>{e.exports=r(5644)},5644:(e,t,r)=>{"use strict";var n=r(3044),a=r(3644),o=r(2215),i=r(2937),s=function e(t){var r=new o(t),s=a(o.prototype.request,r);return n.extend(s,o.prototype,r),n.extend(s,r),s.create=function(r){return e(i(t,r))},s}(r(663));s.Axios=o,s.CanceledError=r(8047),s.CancelToken=r(4089),s.isCancel=r(8041),s.VERSION=r(9241).version,s.toFormData=r(9027),s.AxiosError=r(1218),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=r(783),s.isAxiosError=r(5587),e.exports=s,e.exports.default=s},3524:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(9601),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([e.id,".casters-layout{width:1720px;padding:0 100px}.casters-layout>.background{height:425px;width:100%;background:var(--accent-color);position:absolute;left:0;z-index:1}",""]);const s=i},1301:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(9601),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([e.id,".caster-display-wrapper{z-index:2;width:350px}.caster-display-wrapper:not(:last-child){margin-right:100px}.caster-display-wrapper.has-video{flex-basis:728.8888888889px}.caster{height:500px;text-transform:uppercase;padding:10px}.caster>.caster-photo-wrapper{height:410px;width:728.8888888889px;max-width:100%;background-color:#19181b;position:relative;overflow:hidden}.caster>.caster-photo-wrapper>.caster-photo{width:180px;height:180px;border-radius:9999px;overflow:hidden}.caster>.caster-photo-wrapper>.caster-video{position:absolute;width:728.8888888889px;height:410px}.caster>.caster-name{font-size:50px;font-weight:bold;line-height:50px;margin-top:8px}.caster>.caster-details{font-size:40px;line-height:40px;font-style:oblique;padding-bottom:10px}.caster>.caster-details .pronouns{font-size:25px;line-height:30px;background-color:#19181b;color:#fff;padding:0 5px;display:inline-block;transform:translateY(-4px)}",""]);const s=i},2974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(9601),a=r.n(n),o=r(2609),i=r.n(o)()(a());i.push([e.id,".video-loader-wrapper{position:relative}.video-loader-wrapper>iframe{border-width:0;width:100%;height:100%}",""]);const s=i},2896:(e,t,r)=>{"use strict";r.d(t,{q:()=>o,y:()=>i});var n=r(882),a=r(5033);const o=[nodecg.Replicant("activeMatch")],i=(0,n.Q_)("activeMatch",{state:()=>({activeMatch:null}),getters:{nextGameIndex:e=>e.activeMatch.games.findIndex((e=>e.winner===a.k.NONE)),nextGame(e){return this.nextGameIndex>=0?e.activeMatch.games[this.nextGameIndex]:null}}})},8348:(e,t,r)=>{"use strict";r.d(t,{Q:()=>i,R:()=>c});var n=r(8879),a=r(882),o=r(5332);const i=[nodecg.Replicant("casters")],s={name:"New Caster",twitter:"",pronouns:"?/?"},c=(0,a.Q_)("casters",{state:()=>({casters:[],uncommittedCasters:[]}),actions:{removeUncommittedCaster(e){this.uncommittedCasters=this.uncommittedCasters.filter((t=>t.id!==e))},addUncommittedCaster({id:e,caster:t}){this.uncommittedCasters.push(Object.assign({id:e},null!=t?t:s))},addDefaultCaster(){const e=(0,n.O)();return this.addUncommittedCaster({id:e}),e},removeCaster(e){return t=this,r=void 0,a=function*(){return(0,o.b)("casters:delete",e)},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,s)}c((a=a.apply(t,r||[])).next())}));var t,r,n,a}}})},7207:(e,t,r)=>{"use strict";r(6100);var n=r(4825),a=r(882),o=r(8791),i=r(2896),s=r(8348),c=r(7875);const d={class:"casters-layout flex center-xy"},l=(0,c._)("div",{class:"background"},null,-1);var u=r(641),p=r(1068),h=r(1908),v=r(280),f=r(511);const m={class:"video-loader-wrapper"},w=["src"],y=(0,c.aZ)({name:"VideoLoader",props:{src:{type:[String,null],default:null}}});var g=r(6062),x=r.n(g),b=r(4036),C=r.n(b),Z=r(6793),k=r.n(Z),S=r(7892),E=r.n(S),O=r(1173),L=r.n(O),_=r(2464),P=r.n(_),j=r(2974),A={};A.styleTagTransform=P(),A.setAttributes=E(),A.insert=k().bind(null,"head"),A.domAPI=C(),A.insertStyleElement=L(),x()(j.Z,A),j.Z&&j.Z.locals&&j.Z.locals;var I=r(4407);const D=(0,I.Z)(y,[["render",function(e,t,r,n,a,o){return(0,c.wg)(),(0,c.iD)("div",m,[(0,c._)("iframe",{allow:"autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;",src:e.src,width:"1280",height:"720"},null,8,w)])}]]);var T=r(349);const q={class:"caster flex vertical center-x"},V={class:"caster-photo-wrapper flex center-xy"},z={class:"pronouns"};var M=r(8466),U=r(1279);const G=(0,c.aZ)({name:"CasterDisplay",components:{SlidingContainer:U.Z,ImageLoader:v.Z,VideoLoader:D,FittedContent:f.Z},props:{caster:{type:Object,required:!0},index:{type:Number,required:!0}},setup(e){const t=(0,u.iH)(!1);return(0,c.YP)((()=>e.caster.videoUrl),(e=>{return r=this,n=void 0,o=function*(){t.value=yield(0,M.m)(e)},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{c(o.next(e))}catch(e){t(e)}}function s(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(i,s)}c((o=o.apply(r,n||[])).next())}));var r,n,a,o}),{immediate:!0}),{hasVideo:t}}});var N=r(1301),R={};R.styleTagTransform=P(),R.setAttributes=E(),R.insert=k().bind(null,"head"),R.domAPI=C(),R.insertStyleElement=L(),x()(N.Z,R),N.Z&&N.Z.locals&&N.Z.locals;const F=(0,I.Z)(G,[["render",function(e,t,r,n,a,o){const i=(0,c.up)("image-loader"),s=(0,c.up)("video-loader"),d=(0,c.up)("fitted-content"),l=(0,c.up)("sliding-container");return(0,c.wg)(),(0,c.j4)(l,{"background-color":"light",class:(0,T.C_)(["caster-display-wrapper",{"has-video":e.hasVideo}]),delay:.1*e.index+.5},{default:(0,c.w5)((()=>[(0,c._)("div",q,[(0,c._)("div",V,[e.hasVideo?((0,c.wg)(),(0,c.j4)(s,{key:1,src:e.caster.videoUrl,class:"caster-video"},null,8,["src"])):((0,c.wg)(),(0,c.j4)(i,{key:0,src:e.caster.profileImageUrl,"default-src":"/bundles/emerald-series-overlays/assets/default-caster-photo.png",class:"caster-photo"},null,8,["src"]))]),(0,c.Wm)(d,{"max-width":330,align:"center",class:"caster-name"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,T.zw)(e.caster.name),1)])),_:1}),(0,c.Wm)(d,{"max-width":330,align:"center",class:"caster-details font-condensed"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,T.zw)(e.caster.twitter)+" ",1),(0,c._)("span",z,(0,T.zw)(e.caster.pronouns),1)])),_:1})])])),_:1},8,["class","delay"])}]]);var W=r(4902),B=r(2085);const Q=(0,c.aZ)({name:"CommentaryGraphic",components:{CasterDisplay:F,FittedContent:f.Z,ImageLoader:v.Z,IntermissionLayout:h.Z,GraphicBackground:p.Z,VideoLoader:D},setup(){const e=(0,s.R)();return(0,c.bv)((()=>{const e=W.ZP.timeline();e.fromTo(".casters-layout > .background",{width:"0%"},{width:"100%",duration:.75,ease:"power2.out"}),(0,B.f)(e)})),{casters:(0,u.Fl)((()=>e.casters))}}});var Y=r(3524),H={};H.styleTagTransform=P(),H.setAttributes=E(),H.insert=k().bind(null,"head"),H.domAPI=C(),H.insertStyleElement=L(),x()(Y.Z,H),Y.Z&&Y.Z.locals&&Y.Z.locals;const K=(0,I.Z)(Q,[["render",function(e,t,r,n,a,o){const i=(0,c.up)("caster-display"),s=(0,c.up)("intermission-layout"),u=(0,c.up)("graphic-background");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(s,{"show-teams":""},{default:(0,c.w5)((()=>[(0,c._)("div",d,[l,((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.casters,((e,t)=>((0,c.wg)(),(0,c.j4)(i,{key:e.id,caster:e,index:t},null,8,["caster","index"])))),128))])])),_:1}),(0,c.Wm)(u)],64)}]]);var J,X,$=r(8363);X=function*(){const e=(0,n.ri)(K);e.use((0,a.WB)()),yield(0,o.r)(i.q,(0,i.y)()),yield(0,o.r)(s.Q,(0,s.R)()),yield(0,o.r)($.bL,(0,$.Lo)()),(0,$.ZS)(),e.mount("#app")},new((J=void 0)||(J=Promise))((function(e,t){function r(e){try{a(X.next(e))}catch(e){t(e)}}function n(e){try{a(X.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof J?a:new J((function(e){e(a)}))).then(r,n)}a((X=X.apply(void 0,[])).next())}))},2085:(e,t,r)=>{"use strict";r.d(t,{N:()=>i,f:()=>o});var n=r(7875),a=r(3527);function o(e){if(void 0!==window.obsstudio){const t=t=>{t.detail.active?e.delay((0,a.q)().sceneChangeStartDelay).restart(!0):e.pause(0)},r=t=>{t.detail.visible&&e.delay((0,a.q)().sceneChangeStartDelay).restart(!1)};window.addEventListener("obsSourceActiveChanged",t),window.addEventListener("obsSourceVisibleChanged",r),(0,n.Ah)((()=>{window.removeEventListener("obsSourceActiveChanged",t),window.removeEventListener("obsSourceVisibleChanged",r)}))}else{e.progress(1);const t=()=>{e.delay(1).restart(!0)};document.body.addEventListener("dblclick",t),(0,n.Ah)((()=>{document.body.removeEventListener("dblclick",t)}))}}function i(e){void 0!==window.obsstudio?(window.addEventListener("obsSourceActiveChanged",(t=>{const r=e();t.detail.active?r.delay((0,a.q)().sceneChangeStartDelay).restart(!0):(r.pause(0),r.kill())})),window.addEventListener("obsSourceVisibleChanged",(t=>{t.detail.visible&&e().delay((0,a.q)().sceneChangeStartDelay).restart(!1)}))):(e().progress(1),document.body.addEventListener("dblclick",(()=>{e().delay(1).restart(!0)})))}},8466:(e,t,r)=>{"use strict";r.d(t,{m:()=>c,p:()=>s});var n=r(8127),a=r(9644),o=r.n(a),i=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}c((n=n.apply(e,t||[])).next())}))};function s(e){return i(this,void 0,void 0,(function*(){return new Promise((t=>{if((0,n.isBlank)(e))return t(!1);const r=new Image;r.src=e,r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)}}))}))}function c(e){return i(this,void 0,void 0,(function*(){if((0,n.isBlank)(e))return!1;try{return 404!==(yield o().get(e)).status}catch(e){return!1}}))}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,a,o]=e[l],s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={208:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,c]=r,d=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var a=n.O(void 0,[218,158],(()=>n(7207)));a=n.O(a)})();