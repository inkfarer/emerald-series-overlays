import type { NodeCG, NodeCGStatic } from 'nodecg/server';
import { TeamController } from './controller/TeamController';
import { ActiveMatchController } from './controller/ActiveMatchController';
import { ActiveMatchService } from './service/ActiveMatchService';
import { TeamStoreService } from './service/TeamStoreService';
import { NextMatchService } from './service/NextMatchService';
import { NextMatchController } from './controller/NextMatchController';
import { CasterService } from './service/CasterService';
import { CasterController } from './controller/CasterController';
import { TeamMapper } from './mapper/TeamMapper';

export = (nodecg: NodeCG & NodeCGStatic): void => {
    const teamMapper = new TeamMapper();

    const teamStoreService = new TeamStoreService(nodecg);
    const activeMatchService = new ActiveMatchService(nodecg, teamStoreService);
    teamStoreService.init(activeMatchService, teamMapper);
    const nextMatchService = new NextMatchService(nodecg, teamStoreService, activeMatchService);
    const casterService = new CasterService(nodecg);

    new TeamController(nodecg, activeMatchService, teamStoreService);
    new ActiveMatchController(nodecg, activeMatchService);
    new NextMatchController(nodecg, nextMatchService);
    new CasterController(nodecg, casterService);
};
