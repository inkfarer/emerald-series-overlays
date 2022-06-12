export interface Team {
    id: string;
    name: string;
    players: Player[];
    [k: string]: unknown;
}

export interface Player {
    id: string;
    name: string;
    minecraftName: string;
}
