import { GameWinner } from '../enums/GameWinner';

export interface SetWinnerRequest {
    winner: GameWinner;
    gameIndex?: number;
}

export interface UpdateActiveMatchRequest {
    teamAId: string
    teamBId: string
    matchName: string
}

export interface BeginNewMatchRequest {
    teamAId: string
    teamBId: string
    matchName: string
}
