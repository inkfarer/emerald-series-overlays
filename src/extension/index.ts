import type { NodeCG, NodeCGStatic } from 'nodecg/server';
import { TeamController } from './controller/TeamController';
import { ActiveMatchController } from './controller/ActiveMatchController';
import { ActiveMatchService } from './service/ActiveMatchService';
import { TeamStoreService } from './service/TeamStoreService';
import { NextMatchService } from './service/NextMatchService';
import { NextMatchController } from './controller/NextMatchController';

export = (nodecg: NodeCG & NodeCGStatic): void => {
    const teamStoreService = new TeamStoreService(nodecg);
    const activeMatchService = new ActiveMatchService(nodecg, teamStoreService);
    const nextMatchService = new NextMatchService(nodecg, teamStoreService, activeMatchService);

    new TeamController(nodecg, activeMatchService);
    new ActiveMatchController(nodecg, activeMatchService);
    new NextMatchController(nodecg, nextMatchService);
};
