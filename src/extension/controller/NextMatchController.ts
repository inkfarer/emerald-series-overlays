import type { NodeCG } from 'nodecg/server';
import type { UnhandledListenForCb } from 'nodecg/lib/nodecg-instance';
import { UpdateNextTeamsAndMatchRequest } from '../../types/messages/NextMatch';
import { NextMatchService } from '../service/NextMatchService';

export class NextMatchController {
    constructor(nodecg: NodeCG, nextMatchService: NextMatchService) {
        nodecg.listenFor('nextMatch:setTeamsAndMatchData', (data: UpdateNextTeamsAndMatchRequest, ack: UnhandledListenForCb) => {
            try {
                nextMatchService.setTeamsAndMatchData(data.teamAId, data.teamBId, data.numberOfGames, data.matchName);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('nextMatch:setMaps', (data: string[], ack: UnhandledListenForCb) => {
            try {
                nextMatchService.setMaps(data);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('nextMatch:begin', (data: never, ack: UnhandledListenForCb) => {
            try {
                nextMatchService.beginMatch();
            } catch (e) {
                return ack(e);
            }
        });
    }
}
