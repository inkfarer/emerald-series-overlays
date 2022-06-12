import { SetWinnerRequest, UpdateActiveMatchRequest } from './messages/ActiveMatch';
import { TeamRef } from './enums/TeamRef';
import { Caster } from './schemas';
import { UpdateNextTeamsAndMatchRequest } from './messages/NextMatch';
import { Team } from './Team';
import { SaveCasterRequest } from './messages/Casters';

export interface MessageMap {
    'activeMatch:setWinner': SetWinnerRequest
    'activeMatch:setLastWinnerAutomatically': never
    'activeMatch:removeLastWinner': never
    'activeMatch:update': UpdateActiveMatchRequest
    'activeMatch:setMaps': string[]
    'activeMatch:setFirstPicker': TeamRef
    'activeMatch:addToGoalCount': TeamRef
    'activeMatch:removeFromGoalCount': TeamRef

    'casters:delete': string
    'casters:save': SaveCasterRequest

    'nextMatch:setTeamsAndMatchData': UpdateNextTeamsAndMatchRequest
    'nextMatch:setMaps': string[]
    'nextMatch:begin': never

    'teams:save': Team
    'teams:reset': never
    'teams:delete': string
}

export interface MessageResultMap {
    'casters:save': Caster

    'teams:save': string
    [name: string]: unknown
}