export interface StratusTeamsResponse {
    teams: Array<StratusTeam>
}

export interface StratusTeam {
    registerDiscordID: string
    slug: string
    teamName: string
    // Leader of the team. Is sometimes included in 'players' list.
    leader: StratusPlayer
    players: Array<StratusPlayer>
}

export interface StratusPlayer {
    uuid: string
    username: string
    discordTag: string
}
