import type { NodeCG } from 'nodecg/server';
import { ActiveMatchService } from '../service/ActiveMatchService';
import { BaseController } from './BaseController';

export class ActiveMatchController extends BaseController {
    private activeMatchService: ActiveMatchService;

    constructor(nodecg: NodeCG, activeMatchService: ActiveMatchService) {
        super(nodecg);

        this.activeMatchService = activeMatchService;

        this.listen('activeMatch:setWinner', data => {
            if (data.gameIndex == null) {
                this.activeMatchService.setLastWinner(data.winner);
            } else {
                this.activeMatchService.setWinner(data.gameIndex, data.winner);
            }
        });

        this.listen('activeMatch:removeLastWinner', () => {
            this.activeMatchService.removeLastWinner();
        });

        this.listen('activeMatch:update', data => {
            this.activeMatchService.setTeams(data.teamAId, data.teamBId, data.matchName);
        });

        this.listen('activeMatch:setMaps', data => {
            this.activeMatchService.setMaps(data);
        });

        this.listen('activeMatch:setFirstPicker', data => {
            this.activeMatchService.setFirstPicker(data);
        });

        this.listen('activeMatch:setGoalCount', data => {
            this.activeMatchService.setGoalCount(data.team, data.goalCount);
        });

        this.listen('activeMatch:setLastWinnerAutomatically', () => {
            this.activeMatchService.setLastWinnerAutomatically();
        });
    }
}
