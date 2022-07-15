import { StratusTeamsResponse } from '../../types/stratus/stratusapi';
import { Team } from '../../types/Team';
import { generateSeededId } from '../../helpers/generateId';

export class TeamMapper {
    fromStratusTeamsResponse(response: StratusTeamsResponse): Array<Team> {
        return response.teams.map(stratusTeam => ({
            id: stratusTeam.slug,
            name: stratusTeam.teamName,
            players: stratusTeam.players.map(stratusPlayer => ({
                id: stratusPlayer.uuid ?? generateSeededId(stratusPlayer.username),
                name: stratusPlayer.username,
                minecraftName: stratusPlayer.uuid ?? stratusPlayer.username
            }))
        }));
    }
}
