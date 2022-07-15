export interface StratusTeamsResponse {
    teams: Array<StratusTeam>
}

export interface StratusTeam {
    registerDiscordID: string
    slug: string
    teamName: string
    // Leader of the team. Is included in 'players' list.
    leader: StratusTeam
    players: Array<StratusPlayer>
}

export interface StratusPlayer {
    uuid: string
    username: string
    discordTag: string
}
