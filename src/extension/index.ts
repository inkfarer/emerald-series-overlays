import type { NodeCG, NodeCGStatic } from 'nodecg/server';
import { TeamController } from './controller/TeamController';
import { ActiveMatchController } from './controller/ActiveMatchController';
import { ActiveMatchService } from './service/ActiveMatchService';
import { TeamStoreService } from './service/TeamStoreService';

export = (nodecg: NodeCG & NodeCGStatic): void => {
    const teamStoreService = new TeamStoreService(nodecg);
    const activeMatchService = new ActiveMatchService(nodecg, teamStoreService);

    new TeamController(nodecg, activeMatchService);
    new ActiveMatchController(nodecg, activeMatchService);
};
