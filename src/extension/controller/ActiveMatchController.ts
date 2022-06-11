import type { NodeCG } from 'nodecg/server';
import type { UnhandledListenForCb } from 'nodecg/lib/nodecg-instance';
import { UpdateActiveMatchRequest, SetWinnerRequest } from '../../types/messages/ActiveMatch';
import { ActiveMatchService } from '../service/ActiveMatchService';
import { TeamRef } from '../../types/enums/TeamRef';

export class ActiveMatchController {
    private activeMatchService: ActiveMatchService;

    constructor(nodecg: NodeCG, activeMatchService: ActiveMatchService) {
        this.activeMatchService = activeMatchService;

        nodecg.listenFor('activeMatch:setWinner', (data: SetWinnerRequest, ack: UnhandledListenForCb) => {
            try {
                if (data.gameIndex == null) {
                    this.activeMatchService.setLastWinner(data.winner);
                } else {
                    this.activeMatchService.setWinner(data.gameIndex, data.winner);
                }
            } catch (e) {
                ack(e);
            }
        });

        nodecg.listenFor('activeMatch:removeLastWinner', (data: never, ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.removeLastWinner();
            } catch (e) {
                ack(e);
            }
        });

        nodecg.listenFor('activeMatch:update', (data: UpdateActiveMatchRequest, ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.setTeams(data.teamAId, data.teamBId, data.matchName);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('activeMatch:setMaps', (data: string[], ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.setMaps(data);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('activeMatch:setFirstPicker', (data: TeamRef, ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.setFirstPicker(data);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('activeMatch:addToGoalCount', (data: TeamRef, ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.addToGoalCount(data);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('activeMatch:removeFromGoalCount', (data: TeamRef, ack: UnhandledListenForCb) => {
            try {
                this.activeMatchService.removeFromGoalCount(data);
            } catch (e) {
                return ack(e);
            }
        });
    }
}
