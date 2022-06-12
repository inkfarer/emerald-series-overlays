(()=>{"use strict";var e={625:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ActiveMatchController=void 0;const s=a(14);class i extends s.BaseController{constructor(e,t){super(e),this.activeMatchService=t,this.listen("activeMatch:setWinner",(e=>{null==e.gameIndex?this.activeMatchService.setLastWinner(e.winner):this.activeMatchService.setWinner(e.gameIndex,e.winner)})),this.listen("activeMatch:removeLastWinner",(()=>{this.activeMatchService.removeLastWinner()})),this.listen("activeMatch:update",(e=>{this.activeMatchService.setTeams(e.teamAId,e.teamBId,e.matchName)})),this.listen("activeMatch:setMaps",(e=>{this.activeMatchService.setMaps(e)})),this.listen("activeMatch:setFirstPicker",(e=>{this.activeMatchService.setFirstPicker(e)})),this.listen("activeMatch:addToGoalCount",(e=>{this.activeMatchService.addToGoalCount(e)})),this.listen("activeMatch:removeFromGoalCount",(e=>{this.activeMatchService.removeFromGoalCount(e)})),this.listen("activeMatch:setLastWinnerAutomatically",(()=>{this.activeMatchService.setLastWinnerAutomatically()}))}}t.ActiveMatchController=i},14:function(e,t){var a=this&&this.__awaiter||function(e,t,a,s){return new(a||(a=Promise))((function(i,n){function c(e){try{o(s.next(e))}catch(e){n(e)}}function r(e){try{o(s.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}o((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseController=void 0,t.BaseController=class{constructor(e){this.nodecg=e}listen(e,t){this.nodecg.listenFor(`${e}`,((e,s)=>a(this,void 0,void 0,(function*(){try{const a=yield t(e);s.handled||s(null,a)}catch(e){s.handled||s(e)}}))))}}},953:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CasterController=void 0;const s=a(14);class i extends s.BaseController{constructor(e,t){super(e),this.listen("casters:delete",(e=>{t.delete(e)})),this.listen("casters:save",(e=>t.save(e)))}}t.CasterController=i},304:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NextMatchController=void 0;const s=a(14);class i extends s.BaseController{constructor(e,t){super(e),this.listen("nextMatch:setTeamsAndMatchData",(e=>{t.setTeamsAndMatchData(e.teamAId,e.teamBId,e.numberOfGames,e.matchName)})),this.listen("nextMatch:setMaps",(e=>{t.setMaps(e)})),this.listen("nextMatch:begin",(()=>{t.beginMatch()}))}}t.NextMatchController=i},954:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TeamController=void 0;const s=a(615),i=a(14),n=a(157);class c extends i.BaseController{constructor(e,t){super(e);const a=e.Replicant("teamStore");this.listen("teams:save",(e=>{var i;if(e.players=null===(i=e.players)||void 0===i?void 0:i.map((e=>{var t;return Object.assign(Object.assign({},e),{id:null!==(t=e.id)&&void 0!==t?t:(0,s.generateId)()})})),(0,n.isBlank)(e.name)&&(e.name=e.players.slice(0,2).map((e=>(0,n.addDots)(e.name))).join(" & ")),e.id){const s=a.value.findIndex((t=>t.id===e.id));if(s<0)throw new Error(`Could not find team with ID "${e.id}"`);a.value[s]=e,t.updateTeam(e)}else e.id=(0,s.generateId)(),a.value.push(e);return e.id})),this.listen("teams:reset",(()=>{a.value=[{id:"aaa111",name:"Example team 1",players:[{id:"aaa1111",name:"Player One",minecraftName:"Player One"},{id:"aaa1112",name:"Player Two",minecraftName:"Player Two"}]},{id:"bbb222",name:"Example team 2",players:[{id:"bbb2221",name:"Player Three",minecraftName:"Player Three"},{id:"bbb2222",name:"Player Four",minecraftName:"Player Four"}]}],t.setTeams("aaa111","bbb222")})),this.listen("teams:delete",(e=>{const t=a.value.length;if(t<=1)throw new Error("Cannot delete the last team.");if(a.value=a.value.filter((t=>t.id!==e)),a.value.length===t)throw new Error(`Could not find team with ID '${e}'.`)}))}}t.TeamController=c},480:(e,t,a)=>{const s=a(954),i=a(625),n=a(906),c=a(218),r=a(22),o=a(304),l=a(614),h=a(953);e.exports=e=>{const t=new c.TeamStoreService(e),a=new n.ActiveMatchService(e,t),m=new r.NextMatchService(e,t,a),v=new l.CasterService(e);new s.TeamController(e,a),new i.ActiveMatchController(e,a),new o.NextMatchController(e,m),new h.CasterController(e,v)}},906:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ActiveMatchService=void 0;const i=a(263),n=s(a(591)),c=s(a(359)),r=a(157),o=a(559);t.ActiveMatchService=class{constructor(e,t){this.activeMatch=e.Replicant("activeMatch"),this.teamStoreService=t}setLastWinner(e){const t=this.activeMatch.value.teamA.score+this.activeMatch.value.teamB.score;this.setWinner(t,e)}removeLastWinner(){const e=(0,c.default)(this.activeMatch.value.games,(e=>e.winner!==i.TeamRef.NONE));e>=0&&this.setWinner(e,i.TeamRef.NONE)}setWinner(e,t){if(e>=this.activeMatch.value.games.length||e<0)throw new Error(`Cannot set winner for game ${e+1} as it does not exist.`);const a=(0,n.default)(this.activeMatch.value),s=(0,n.default)(this.activeMatch.value.games[e]);t===i.TeamRef.NONE?(s.winner===i.TeamRef.ALPHA?a.teamA.score--:s.winner===i.TeamRef.BRAVO&&a.teamB.score--,a.games[e].winner=i.TeamRef.NONE):t===i.TeamRef.ALPHA?(a.teamA.score++,a.games[e].winner=t,s.winner===i.TeamRef.BRAVO&&a.teamB.score--):t===i.TeamRef.BRAVO&&(a.teamB.score++,a.games[e].winner=t,s.winner===i.TeamRef.ALPHA&&a.teamA.score--);const c=a.games.length/2;a.match.isCompleted=a.teamA.score>c||a.teamB.score>c,this.activeMatch.value=a}setTeams(e,t,a){const s=this.teamStoreService.getTeam(e),i=this.teamStoreService.getTeam(t);this.setTeam("A",s),this.setTeam("B",i),(0,r.isBlank)(a)||this.setActiveMatchName(a)}updateTeam(e){e.id===this.activeMatch.value.teamA.id&&this.setTeam("A",e),e.id===this.activeMatch.value.teamB.id&&this.setTeam("B",e)}setTeam(e,t){if("A"===e)this.activeMatch.value.teamA=Object.assign({score:this.activeMatch.value.teamA.score},(0,n.default)(t));else{if("B"!==e)throw new Error(`Unknown team '${e}'`);this.activeMatch.value.teamB=Object.assign({score:this.activeMatch.value.teamB.score},(0,n.default)(t))}}setMaps(e){if(e.length!==this.activeMatch.value.games.length)throw new Error(`Expected ${this.activeMatch.value.games.length} maps when updating, got ${e.length} instead.`);this.activeMatch.value.games=this.activeMatch.value.games.map(((t,a)=>Object.assign(Object.assign({},t),{map:e[a]})))}replaceMaps(e){this.activeMatch.value.games=e.map((e=>({map:e,winner:i.TeamRef.NONE,pickedBy:i.TeamRef.NONE,teamAGoalCount:0,teamBGoalCount:0}))),this.activeMatch.value.teamA.score=0,this.activeMatch.value.teamB.score=0,this.activeMatch.value.match.isCompleted=!1}setActiveMatchName(e){this.activeMatch.value.match.name=e}setFirstPicker(e){e===i.TeamRef.ALPHA?(this.activeMatch.value.games[0].pickedBy=i.TeamRef.ALPHA,this.activeMatch.value.games[1].pickedBy=i.TeamRef.BRAVO):e===i.TeamRef.BRAVO&&(this.activeMatch.value.games[0].pickedBy=i.TeamRef.BRAVO,this.activeMatch.value.games[1].pickedBy=i.TeamRef.ALPHA)}addToGoalCount(e){const t=this.getNextGameIndex();if(t>=0){const a=this.activeMatch.value.games[t];e===i.TeamRef.ALPHA?a.teamAGoalCount=Math.min(a.teamAGoalCount+1,o.MAX_GOAL_COUNT):e===i.TeamRef.BRAVO&&(a.teamBGoalCount=Math.min(a.teamBGoalCount+1,o.MAX_GOAL_COUNT))}}removeFromGoalCount(e){const t=this.getNextGameIndex();if(t>=0){const a=this.activeMatch.value.games[t];e===i.TeamRef.ALPHA?a.teamAGoalCount=Math.max(a.teamAGoalCount-1,0):e===i.TeamRef.BRAVO&&(a.teamBGoalCount=Math.max(a.teamBGoalCount-1,0))}}setLastWinnerAutomatically(){const e=this.getNextGameIndex();if(e>=0){const t=this.activeMatch.value.games[e];if(t.teamAGoalCount>t.teamBGoalCount)this.setLastWinner(i.TeamRef.ALPHA);else{if(!(t.teamBGoalCount>t.teamAGoalCount))throw new Error(`Cannot automatically set winner based on goal count ${t.teamAGoalCount}:${t.teamBGoalCount}`);this.setLastWinner(i.TeamRef.BRAVO)}}}getNextGameIndex(){return this.activeMatch.value.games.findIndex((e=>e.winner===i.TeamRef.NONE))}}},614:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CasterService=void 0;const s=a(615);t.CasterService=class{constructor(e){this.casters=e.Replicant("casters")}delete(e){const t=this.casters.value.length;if(this.casters.value=this.casters.value.filter((t=>t.id!==e)),this.casters.value.length===t)throw new Error(`Could not find caster with ID '${e}'`)}save(e){if(e.id){const t=this.casters.value.findIndex((t=>t.id===e.id));if(t<0)throw new Error(`Could not find caster with ID '${e.id}'`);return this.casters.value[t]=e,e}return e.id=(0,s.generateId)(),this.casters.value.push(e),e}}},22:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NextMatchService=void 0;const i=a(157),n=s(a(591));t.NextMatchService=class{constructor(e,t,a){this.nextMatch=e.Replicant("nextMatch"),this.teamStoreService=t,this.activeMatchService=a}setTeamsAndMatchData(e,t,a,s){const n=this.teamStoreService.getTeam(e),c=this.teamStoreService.getTeam(t);this.setTeam("A",n),this.setTeam("B",c),(0,i.isBlank)(s)||(this.nextMatch.value.match.name=s);const r=this.nextMatch.value.games.length;a!==r&&(this.nextMatch.value.games=a>r?[...this.nextMatch.value.games,...Array(a-r).fill({map:"Unknown"})]:this.nextMatch.value.games.slice(0,a))}setTeam(e,t){if("A"===e)this.nextMatch.value.teamA=(0,n.default)(t);else{if("B"!==e)throw new Error(`Unknown team '${e}'`);this.nextMatch.value.teamB=(0,n.default)(t)}}setMaps(e){if(e.length!==this.nextMatch.value.games.length)throw new Error(`Expected ${this.nextMatch.value.games.length} maps when updating, got ${e.length} instead.`);this.nextMatch.value.games=this.nextMatch.value.games.map(((t,a)=>Object.assign(Object.assign({},t),{map:e[a]})))}beginMatch(){this.activeMatchService.setTeams(this.nextMatch.value.teamA.id,this.nextMatch.value.teamB.id,this.nextMatch.value.match.name),this.activeMatchService.replaceMaps(this.nextMatch.value.games.map((e=>e.map))),this.activeMatchService.setActiveMatchName(this.nextMatch.value.match.name)}}},218:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TeamStoreService=void 0,t.TeamStoreService=class{constructor(e){this.teamStore=e.Replicant("teamStore")}getTeam(e){const t=this.teamStore.value.find((t=>t.id===e));if(!t)throw new Error(`Could not find team with ID '${e}'`);return t}}},559:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_GOAL_COUNT=void 0,t.MAX_GOAL_COUNT=5},615:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=void 0,t.generateId=function(){return String(Math.random().toString(36).substr(2,9))}},157:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isBlank=t.addDots=void 0,t.addDots=function(e,t=48){return e&&e.length>t?e.substring(0,t-"...".length)+"...":e},t.isBlank=function(e){return null==e||""===e.trim()}},263:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.TeamRef=void 0,(a=t.TeamRef||(t.TeamRef={})).NONE="none",a.ALPHA="alpha",a.BRAVO="bravo"},591:e=>{e.exports=require("lodash/cloneDeep")},359:e=>{e.exports=require("lodash/findLastIndex")}},t={},a=function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}(480);module.exports=a})();