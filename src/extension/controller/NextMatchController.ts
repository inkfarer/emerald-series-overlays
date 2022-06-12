import type { NodeCG } from 'nodecg/server';
import { NextMatchService } from '../service/NextMatchService';
import { BaseController } from './BaseController';

export class NextMatchController extends BaseController {
    constructor(nodecg: NodeCG, nextMatchService: NextMatchService) {
        super(nodecg);

        this.listen('nextMatch:setTeamsAndMatchData', data => {
            nextMatchService.setTeamsAndMatchData(data.teamAId, data.teamBId, data.numberOfGames, data.matchName);
        });

        this.listen('nextMatch:setMaps', data => {
            nextMatchService.setMaps(data);
        });

        this.listen('nextMatch:begin', () => {
            nextMatchService.beginMatch();
        });
    }
}
