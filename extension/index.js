(()=>{"use strict";var e={625:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ActiveMatchController=void 0;const i=a(14);class s extends i.BaseController{constructor(e,t){super(e),this.activeMatchService=t,this.listen("activeMatch:setWinner",(e=>{null==e.gameIndex?this.activeMatchService.setLastWinner(e.winner):this.activeMatchService.setWinner(e.gameIndex,e.winner)})),this.listen("activeMatch:removeLastWinner",(()=>{this.activeMatchService.removeLastWinner()})),this.listen("activeMatch:update",(e=>{this.activeMatchService.setTeams(e.teamAId,e.teamBId,e.matchName)})),this.listen("activeMatch:setMaps",(e=>{this.activeMatchService.setMaps(e)})),this.listen("activeMatch:setFirstPicker",(e=>{this.activeMatchService.setFirstPicker(e)})),this.listen("activeMatch:setGoalCount",(e=>{this.activeMatchService.setGoalCount(e.team,e.goalCount)})),this.listen("activeMatch:setLastWinnerAutomatically",(()=>{this.activeMatchService.setLastWinnerAutomatically()}))}}t.ActiveMatchController=s},14:function(e,t){var a=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))((function(s,n){function r(e){try{c(i.next(e))}catch(e){n(e)}}function o(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseController=void 0,t.BaseController=class{constructor(e){this.nodecg=e}listen(e,t){this.nodecg.listenFor(`${e}`,((e,i)=>a(this,void 0,void 0,(function*(){try{const a=yield t(e);i.handled||i(null,a)}catch(e){i.handled||i(e)}}))))}}},953:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CasterController=void 0;const i=a(14);class s extends i.BaseController{constructor(e,t){super(e),this.listen("casters:delete",(e=>{t.delete(e)})),this.listen("casters:save",(e=>t.save(e)))}}t.CasterController=s},304:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NextMatchController=void 0;const i=a(14);class s extends i.BaseController{constructor(e,t){super(e),this.listen("nextMatch:setTeamsAndMatchData",(e=>{t.setTeamsAndMatchData(e.teamAId,e.teamBId,e.numberOfGames,e.matchName)})),this.listen("nextMatch:setMaps",(e=>{t.setMaps(e)})),this.listen("nextMatch:begin",(()=>{t.beginMatch()}))}}t.NextMatchController=s},954:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TeamController=void 0;const i=a(14);class s extends i.BaseController{constructor(e,t,a){super(e);const i=e.Replicant("teamStore");this.listen("teams:save",(e=>a.saveTeam(e))),this.listen("teams:reset",(()=>{i.value=[{id:"aaa111",name:"Example team 1",players:[{id:"aaa1111",name:"Player One",minecraftName:"Player One"},{id:"aaa1112",name:"Player Two",minecraftName:"Player Two"}]},{id:"bbb222",name:"Example team 2",players:[{id:"bbb2221",name:"Player Three",minecraftName:"Player Three"},{id:"bbb2222",name:"Player Four",minecraftName:"Player Four"}]}],t.setTeams("aaa111","bbb222")})),this.listen("teams:delete",(e=>{const t=i.value.length;if(t<=1)throw new Error("Cannot delete the last team.");if(i.value=i.value.filter((t=>t.id!==e)),i.value.length===t)throw new Error(`Could not find team with ID '${e}'.`)})),this.listen("teams:import",(e=>a.importTeams(e.url)))}}t.TeamController=s},513:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MapHelper=void 0;const i=a(509),s=a(247);t.MapHelper=class{static getMaps(e){return e===i.GraphicMode.STRATUS?s.stratusMaps:s.buckyMaps}static getMode(e,t){var a;return null===(a=this.getMaps(t).find((t=>t.name===e)))||void 0===a?void 0:a.mode}}},480:(e,t,a)=>{const i=a(954),s=a(625),n=a(906),r=a(218),o=a(22),c=a(304),l=a(614),h=a(953),m=a(291);e.exports=e=>{const t=new m.TeamMapper,a=new r.TeamStoreService(e),u=new n.ActiveMatchService(e,a);a.init(u,t);const d=new o.NextMatchService(e,a,u),v=new l.CasterService(e);new i.TeamController(e,u,a),new s.ActiveMatchController(e,u),new c.NextMatchController(e,d),new h.CasterController(e,v)}},291:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TeamMapper=void 0;const i=a(615);t.TeamMapper=class{fromStratusTeamsResponse(e){return e.teams.map((e=>({id:e.slug,name:e.teamName,players:e.players.map((e=>{var t,a;return{id:null!==(t=e.uuid)&&void 0!==t?t:(0,i.generateSeededId)(e.username),name:e.username,minecraftName:null!==(a=e.uuid)&&void 0!==a?a:e.username}}))})))}}},906:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ActiveMatchService=void 0;const s=a(263),n=i(a(591)),r=i(a(359)),o=a(157),c=a(559),l=a(513);t.ActiveMatchService=class{constructor(e,t){this.activeMatch=e.Replicant("activeMatch"),this.runtimeConfig=e.Replicant("runtimeConfig"),this.teamStoreService=t}setLastWinner(e){const t=this.activeMatch.value.teamA.score+this.activeMatch.value.teamB.score;this.setWinner(t,e)}removeLastWinner(){const e=(0,r.default)(this.activeMatch.value.games,(e=>e.winner!==s.TeamRef.NONE));e>=0&&this.setWinner(e,s.TeamRef.NONE)}setWinner(e,t){if(e>=this.activeMatch.value.games.length||e<0)throw new Error(`Cannot set winner for game ${e+1} as it does not exist.`);const a=(0,n.default)(this.activeMatch.value),i=(0,n.default)(this.activeMatch.value.games[e]);t===s.TeamRef.NONE?(i.winner===s.TeamRef.ALPHA?a.teamA.score--:i.winner===s.TeamRef.BRAVO&&a.teamB.score--,a.games[e].winner=s.TeamRef.NONE):t===s.TeamRef.ALPHA?(a.teamA.score++,a.games[e].winner=t,i.winner===s.TeamRef.BRAVO&&a.teamB.score--):t===s.TeamRef.BRAVO&&(a.teamB.score++,a.games[e].winner=t,i.winner===s.TeamRef.ALPHA&&a.teamA.score--);const r=a.games.length/2;a.match.isCompleted=a.teamA.score>r||a.teamB.score>r,this.activeMatch.value=a}setTeams(e,t,a){const i=this.teamStoreService.getTeam(e),s=this.teamStoreService.getTeam(t);this.setTeam("A",i),this.setTeam("B",s),(0,o.isBlank)(a)||this.setActiveMatchName(a)}updateTeam(e){e.id===this.activeMatch.value.teamA.id&&this.setTeam("A",e),e.id===this.activeMatch.value.teamB.id&&this.setTeam("B",e)}setTeam(e,t){if("A"===e)this.activeMatch.value.teamA=Object.assign({score:this.activeMatch.value.teamA.score},(0,n.default)(t));else{if("B"!==e)throw new Error(`Unknown team '${e}'`);this.activeMatch.value.teamB=Object.assign({score:this.activeMatch.value.teamB.score},(0,n.default)(t))}}setMaps(e){if(e.length!==this.activeMatch.value.games.length)throw new Error(`Expected ${this.activeMatch.value.games.length} maps when updating, got ${e.length} instead.`);this.activeMatch.value.games=this.activeMatch.value.games.map(((t,a)=>Object.assign(Object.assign({},t),{map:e[a],mode:l.MapHelper.getMode(e[a],this.runtimeConfig.value.mode)})))}replaceMaps(e){this.activeMatch.value.games=e.map((e=>({map:e,winner:s.TeamRef.NONE,pickedBy:s.TeamRef.NONE,teamAGoalCount:0,teamBGoalCount:0}))),this.activeMatch.value.teamA.score=0,this.activeMatch.value.teamB.score=0,this.activeMatch.value.match.isCompleted=!1}setActiveMatchName(e){this.activeMatch.value.match.name=e}setFirstPicker(e){e===s.TeamRef.ALPHA?(this.activeMatch.value.games[0].pickedBy=s.TeamRef.ALPHA,this.activeMatch.value.games[1].pickedBy=s.TeamRef.BRAVO):e===s.TeamRef.BRAVO&&(this.activeMatch.value.games[0].pickedBy=s.TeamRef.BRAVO,this.activeMatch.value.games[1].pickedBy=s.TeamRef.ALPHA)}setGoalCount(e,t){const a=this.getNextGameIndex();if(a>=0){const i=this.activeMatch.value.games[a],n=Math.max(Math.min(t,c.MAX_GOAL_COUNT),0);e===s.TeamRef.ALPHA?i.teamAGoalCount=n:e===s.TeamRef.BRAVO&&(i.teamBGoalCount=n)}}setLastWinnerAutomatically(){const e=this.getNextGameIndex();if(e>=0){const t=this.activeMatch.value.games[e];if(t.teamAGoalCount>t.teamBGoalCount)this.setLastWinner(s.TeamRef.ALPHA);else{if(!(t.teamBGoalCount>t.teamAGoalCount))throw new Error(`Cannot automatically set winner based on goal count ${t.teamAGoalCount}:${t.teamBGoalCount}`);this.setLastWinner(s.TeamRef.BRAVO)}}}getNextGameIndex(){return this.activeMatch.value.games.findIndex((e=>e.winner===s.TeamRef.NONE))}}},614:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CasterService=void 0;const i=a(615);t.CasterService=class{constructor(e){this.casters=e.Replicant("casters")}delete(e){const t=this.casters.value.length;if(this.casters.value=this.casters.value.filter((t=>t.id!==e)),this.casters.value.length===t)throw new Error(`Could not find caster with ID '${e}'`)}save(e){if(e.id){const t=this.casters.value.findIndex((t=>t.id===e.id));if(t<0)throw new Error(`Could not find caster with ID '${e.id}'`);return this.casters.value[t]=e,e}return e.id=(0,i.generateId)(),this.casters.value.push(e),e}}},22:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NextMatchService=void 0;const s=a(157),n=i(a(591)),r=a(513);t.NextMatchService=class{constructor(e,t,a){this.nextMatch=e.Replicant("nextMatch"),this.runtimeConfig=e.Replicant("runtimeConfig"),this.teamStoreService=t,this.activeMatchService=a}setTeamsAndMatchData(e,t,a,i){const n=this.teamStoreService.getTeam(e),r=this.teamStoreService.getTeam(t);this.setTeam("A",n),this.setTeam("B",r),(0,s.isBlank)(i)||(this.nextMatch.value.match.name=i);const o=this.nextMatch.value.games.length;a!==o&&(this.nextMatch.value.games=a>o?[...this.nextMatch.value.games,...Array(a-o).fill({map:"Unknown"})]:this.nextMatch.value.games.slice(0,a))}setTeam(e,t){if("A"===e)this.nextMatch.value.teamA=(0,n.default)(t);else{if("B"!==e)throw new Error(`Unknown team '${e}'`);this.nextMatch.value.teamB=(0,n.default)(t)}}setMaps(e){if(e.length!==this.nextMatch.value.games.length)throw new Error(`Expected ${this.nextMatch.value.games.length} maps when updating, got ${e.length} instead.`);this.nextMatch.value.games=this.nextMatch.value.games.map(((t,a)=>Object.assign(Object.assign({},t),{map:e[a],mode:r.MapHelper.getMode(e[a],this.runtimeConfig.value.mode)})))}beginMatch(){this.activeMatchService.setTeams(this.nextMatch.value.teamA.id,this.nextMatch.value.teamB.id,this.nextMatch.value.match.name),this.activeMatchService.replaceMaps(this.nextMatch.value.games.map((e=>e.map))),this.activeMatchService.setActiveMatchName(this.nextMatch.value.match.name)}}},218:function(e,t,a){var i=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))((function(s,n){function r(e){try{c(i.next(e))}catch(e){n(e)}}function o(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,o)}c((i=i.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TeamStoreService=void 0;const n=s(a(167)),r=a(615),o=a(157),c=s(a(830)),l=s(a(286));t.TeamStoreService=class{constructor(e){this.teamStore=e.Replicant("teamStore"),this.nodecg=e}init(e,t){this.activeMatchService=e,this.teamMapper=t}getTeam(e){const t=this.teamStore.value.find((t=>t.id===e));if(!t)throw new Error(`Could not find team with ID '${e}'`);return t}saveTeam(e){var t;if(e.players=null===(t=e.players)||void 0===t?void 0:t.map((e=>{var t;return Object.assign(Object.assign({},e),{id:null!==(t=e.id)&&void 0!==t?t:(0,r.generateId)()})})),(0,o.isBlank)(e.name)&&(e.name=e.players.slice(0,2).map((e=>(0,o.addDots)(e.name))).join(" & ")),e.id){const t=this.teamStore.value.findIndex((t=>t.id===e.id));if(t<0)throw new Error(`Could not find team with ID "${e.id}"`);this.teamStore.value[t]=e,this.activeMatchService.updateTeam(e)}else e.id=(0,r.generateId)(),this.teamStore.value.push(e);return e.id}importTeams(e){return i(this,void 0,void 0,(function*(){return n.default.get(e,{httpsAgent:new l.default.Agent({family:4})}).then((e=>{const t=this.teamMapper.fromStratusTeamsResponse(e.data);this.teamStore.value=(0,c.default)(t,this.teamStore.value,"id")})).catch((e=>{throw e.toJSON?this.nodecg.log.error("Received error while importing teams: ",e.toJSON()):this.nodecg.log.error(`Received error while importing teams: ${String(e)}`),new Error(`Importing teams failed with message '${e.message}'`)}))}))}}},559:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_GOAL_COUNT=void 0,t.MAX_GOAL_COUNT=5},615:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.generateSeededId=t.generateId=void 0;const s=i(a(621));t.generateId=function(){return String(Math.random().toString(36).substring(2,9))},t.generateSeededId=function(e){return String((0,s.default)(e).quick().toString(36).substring(2))}},247:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modeNames=t.stratusMaps=t.buckyMaps=void 0;const i=a(734);t.buckyMaps=[{name:"Urban"},{name:"Boo"},{name:"Treehouse"},{name:"Aquatica"},{name:"Chronon"},{name:"Condo"},{name:"Galaxy"},{name:"Dojo"},{name:"Sorcery"},{name:"Fortress"},{name:"Unknown"}],t.stratusMaps=[{mode:i.GameMode.KOTH,name:"Smoke KotH"},{mode:i.GameMode.KOTH,name:"Topaz"},{mode:i.GameMode.CTF,name:"Rusteze"},{mode:i.GameMode.FIVE_CP,name:"Marzipan"},{mode:i.GameMode.KOTF,name:"Revolution"},{mode:i.GameMode.KOTF,name:"Shinobi"},{mode:i.GameMode.CTP,name:"Moonshine"},{name:"Unknown"}],t.modeNames={[i.GameMode.KOTH]:"King of the Hill",[i.GameMode.CTF]:"Capture the Flag",[i.GameMode.FIVE_CP]:"Five Control Points",[i.GameMode.KOTF]:"King of the Flag",[i.GameMode.CTP]:"Control the Point"}},157:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isBlank=t.addDots=void 0,t.addDots=function(e,t=48){return e&&e.length>t?e.substring(0,t-"...".length)+"...":e},t.isBlank=function(e){return null==e||""===e.trim()}},734:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.GameMode=void 0,(a=t.GameMode||(t.GameMode={})).KOTH="KotH",a.CTF="CTF",a.FIVE_CP="5CP",a.KOTF="KotF",a.CTP="CTP"},509:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.GraphicMode=void 0,(a=t.GraphicMode||(t.GraphicMode={})).BUCKY="BUCKY",a.STRATUS="STRATUS"},263:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.TeamRef=void 0,(a=t.TeamRef||(t.TeamRef={})).NONE="none",a.ALPHA="alpha",a.BRAVO="bravo"},167:e=>{e.exports=require("axios")},591:e=>{e.exports=require("lodash/cloneDeep")},359:e=>{e.exports=require("lodash/findLastIndex")},830:e=>{e.exports=require("lodash/unionBy")},621:e=>{e.exports=require("seedrandom")},286:e=>{e.exports=require("node:https")}},t={},a=function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}(480);module.exports=a})();