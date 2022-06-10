import { TeamRefValues } from './enums/TeamRef';

export interface Game {
    winner: TeamRefValues
    map: string
}

export interface NextMatchGame {
    map: string
}
