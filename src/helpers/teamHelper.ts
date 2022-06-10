import { TeamRef } from '../types/enums/TeamRef';
import { useActiveMatchStore } from '../browser-common/store/ActiveMatchStore';

export function getFirstPlayerNames(teamRef: TeamRef): string {
    const activeMatchStore = useActiveMatchStore();
    const team = teamRef === TeamRef.ALPHA ? activeMatchStore.activeMatch.teamA : activeMatchStore.activeMatch.teamB;

    return team.players.slice(0, 2).map(player => player.name).join(' & ');
}
