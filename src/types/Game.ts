import { GameWinnerValues } from './enums/GameWinner';

export interface Game {
    winner: GameWinnerValues
    map: string
}

export interface NextMatchGame {
    map: string
}
