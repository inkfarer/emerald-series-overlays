import { TeamRefValues } from './enums/TeamRef';

export interface Game {
    winner: TeamRefValues
    map: string
    mode?: string
    teamAGoalCount: number
    teamBGoalCount: number
}

export interface NextMatchGame {
    map: string
}
