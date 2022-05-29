import type { NodeCG, NodeCGStatic } from 'nodecg/server';
import { TeamController } from './TeamController';

/* eslint-disable @typescript-eslint/no-var-requires */
export = (nodecg: NodeCG & NodeCGStatic): void => {
    new TeamController(nodecg);
};
