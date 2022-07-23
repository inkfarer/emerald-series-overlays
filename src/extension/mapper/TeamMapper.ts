import { StratusPlayer, StratusTeamsResponse } from '../../types/stratus/stratusapi';
import { Player, Team } from '../../types/Team';
import { generateSeededId } from '../../helpers/generateId';

export class TeamMapper {
    fromStratusTeamsResponse(response: StratusTeamsResponse): Array<Team> {
        return response.teams.map(stratusTeam => {
            const team = {
                id: stratusTeam.slug,
                name: stratusTeam.teamName,
                players: stratusTeam.players.map(stratusPlayer => TeamMapper.fromStratusPlayer(stratusPlayer))
            };

            if (!team.players.some(player => player.name === stratusTeam.leader.username)) {
                team.players.push(TeamMapper.fromStratusPlayer(stratusTeam.leader));
            }

            return team;
        });
    }

    private static fromStratusPlayer(player: StratusPlayer): Player {
        return {
            id: player.uuid ?? generateSeededId(player.username),
            name: player.username,
            minecraftName: player.uuid ?? player.username
        };
    }
}
