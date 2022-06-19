(()=>{var e,t={9644:(e,t,n)=>{n(5644)},5644:(e,t,n)=>{"use strict";var r=n(3044),a=n(3644),o=n(2215),i=n(2937),s=function e(t){var n=new o(t),s=a(o.prototype.request,n);return r.extend(s,o.prototype,n),r.extend(s,n),s.create=function(n){return e(i(t,n))},s}(n(663));s.Axios=o,s.CanceledError=n(8047),s.CancelToken=n(4089),s.isCancel=n(8041),s.VERSION=n(9241).version,s.toFormData=n(9027),s.AxiosError=n(1218),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=n(783),s.isAxiosError=n(5587),e.exports=s,e.exports.default=s},1307:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9601),a=n.n(r),o=n(2609),i=n.n(o)()(a());i.push([e.id,".single-roster{width:1920px}.single-roster .header{width:100%}.single-roster .header>.team-name{width:500px;height:90px;background-color:#fff;border-bottom:10px solid var(--accent-color);color:#19181b;text-align:center;font-size:50px;font-weight:bold}.single-roster>.players{width:100%;height:575px;margin-top:50px;position:relative}.single-roster>.players>.skins{width:100%;height:500px;position:absolute;bottom:102px;align-items:flex-end}.single-roster>.players>.skins .player-skin-wrapper{width:200px;height:600px;margin-bottom:10px;overflow:hidden;position:relative}.single-roster>.players>.skins .player-skin{position:absolute;width:220px;height:650px;margin-bottom:-50px}.single-roster>.players>.skins .player-skin .image-loader{background-size:contain;background-position:center bottom}.single-roster>.players>.skins>.background{position:absolute;bottom:0;left:0;width:100%;height:300px;background-color:#19181b;border-bottom:10px solid var(--accent-color);z-index:-1}.single-roster>.players>.names{width:calc(100% - 320px);height:200px;margin:0 160px;position:absolute;bottom:0;z-index:10}.single-roster>.players>.names .player-name-wrapper{width:200px;position:relative}.single-roster>.players>.names .player-name-wrapper:nth-child(even) .player-name{bottom:130px}.single-roster>.players>.names .player-name-wrapper:nth-child(odd) .player-name{bottom:0}.single-roster>.players>.names .player-name{position:absolute;background-color:#fff;border-bottom:10px solid var(--accent-color);color:#19181b;padding:10px 10px;font-size:45px;font-weight:bold}",""]);const s=i},2896:(e,t,n)=>{"use strict";n.d(t,{q:()=>o,y:()=>i});var r=n(882),a=n(5033);const o=[nodecg.Replicant("activeMatch")],i=(0,r.Q_)("activeMatch",{state:()=>({activeMatch:null}),getters:{nextGameIndex:e=>e.activeMatch.games.findIndex((e=>e.winner===a.k.NONE)),nextGame(e){return this.nextGameIndex>=0?e.activeMatch.games[this.nextGameIndex]:null}}})},8348:(e,t,n)=>{"use strict";n.d(t,{Q:()=>i,R:()=>l});var r=n(8879),a=n(882),o=n(5332);const i=[nodecg.Replicant("casters")],s={name:"New Caster",twitter:"",pronouns:"?/?"},l=(0,a.Q_)("casters",{state:()=>({casters:[],uncommittedCasters:[]}),actions:{removeUncommittedCaster(e){this.uncommittedCasters=this.uncommittedCasters.filter((t=>t.id!==e))},addUncommittedCaster({id:e,caster:t}){this.uncommittedCasters.push(Object.assign({id:e},null!=t?t:s))},addDefaultCaster(){const e=(0,r.O)();return this.addUncommittedCaster({id:e}),e},removeCaster(e){return t=this,n=void 0,a=function*(){return(0,o.b)("casters:delete",e)},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}l((a=a.apply(t,n||[])).next())}));var t,n,r,a}}})},1294:(e,t,n)=>{"use strict";n(6100);var r=n(4825),a=n(882),o=n(8791),i=n(2896),s=n(8348),l=n(8363),c=n(7875),d=n(349);const p={class:"single-roster"},u={class:"header flex center-x"},m={class:"team-name flex center-xy"},h={class:"players flex center-xy"},f={class:"skins flex horizontal center-x"},v=(0,c._)("div",{class:"background"},null,-1),x={class:"names flex horizontal center-x"},y={class:"player-name flex center-xy"};var g=n(641),b=n(1068),w=n(5453),k=n(1691),_=n(6469),C=n(7727);const O=(0,c.aZ)({name:"RostersGraphic",components:{FittedContent:_.Z,IntermissionLayout:w.Z,GraphicBackground:b.Z,SkinLoader:C.Z},props:{team:{type:String,required:!0}},setup(e){const t=(0,i.y)(),n=(0,g.Fl)((()=>"A"===e.team?t.activeMatch.teamA:t.activeMatch.teamB));return{selectedTeam:n,addDots:k.f,players:(0,g.Fl)((()=>n.value.players.slice(0,8)))}}});var Z=n(6062),M=n.n(Z),P=n(4036),S=n.n(P),j=n(6793),z=n.n(j),D=n(7892),T=n.n(D),E=n(1173),I=n.n(E),A=n(2464),G=n.n(A),R=n(1307),W={};W.styleTagTransform=G(),W.setAttributes=T(),W.insert=z().bind(null,"head"),W.domAPI=S(),W.insertStyleElement=I(),M()(R.Z,W),R.Z&&R.Z.locals&&R.Z.locals;const B=(0,n(4407).Z)(O,[["render",function(e,t,n,r,a,o){const i=(0,c.up)("fitted-content"),s=(0,c.up)("skin-loader"),l=(0,c.up)("intermission-layout"),g=(0,c.up)("graphic-background");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(l,{"show-casters":"","hide-header":""},{default:(0,c.w5)((()=>[(0,c._)("div",p,[(0,c._)("div",u,[(0,c._)("div",m,[(0,c.Wm)(i,{"max-width":450,align:"center"},{default:(0,c.w5)((()=>[(0,c._)("span",null,(0,d.zw)(e.addDots(e.selectedTeam.name)),1)])),_:1})])]),(0,c._)("div",h,[(0,c._)("div",f,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.players,(e=>((0,c.wg)(),(0,c.iD)("div",{key:`player-skin_${e.id}`,class:"player-skin-wrapper flex center-x"},[(0,c.Wm)(s,{username:e.minecraftName,class:"player-skin"},null,8,["username"])])))),128)),v]),(0,c._)("div",x,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.players,(e=>((0,c.wg)(),(0,c.iD)("div",{key:e.id,class:"player-name-wrapper flex center-x"},[(0,c._)("div",y,[(0,c.Wm)(i,{"max-width":350,align:"center"},{default:(0,c.w5)((()=>[(0,c.Uk)((0,d.zw)(e.name),1)])),_:2},1024)])])))),128))])])])])),_:1}),(0,c.Wm)(g)],64)}]]);var F,N;N=function*(){const e=(0,r.ri)(B,{team:"B"});e.use((0,a.WB)()),yield(0,o.r)(i.q,(0,i.y)()),yield(0,o.r)(s.Q,(0,s.R)()),yield(0,o.r)(l.bL,(0,l.Lo)()),(0,l.ZS)(),e.mount("#app")},new((F=void 0)||(F=Promise))((function(e,t){function n(e){try{a(N.next(e))}catch(e){t(e)}}function r(e){try{a(N.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof F?a:new F((function(e){e(a)}))).then(n,r)}a((N=N.apply(void 0,[])).next())}))},8466:(e,t,n)=>{"use strict";n.d(t,{p:()=>o});var r=n(8127),a=(n(9644),function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))});function o(e){return a(this,void 0,void 0,(function*(){return new Promise((t=>{if((0,r.isBlank)(e))return t(!1);const n=new Image;n.src=e,n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)}}))}))}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e](o,o.exports,r),o.loaded=!0,o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,a,o]=e[d],s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={595:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var d=l(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var a=r.O(void 0,[828,848],(()=>r(1294)));a=r.O(a)})();