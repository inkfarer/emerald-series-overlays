import { TeamRef } from '../enums/TeamRef';

export interface SetWinnerRequest {
    winner: TeamRef;
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
