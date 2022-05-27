import type { NodeCG, NodeCGStatic } from 'nodecg/server';

/* eslint-disable @typescript-eslint/no-var-requires */
export = (nodecg: NodeCG & NodeCGStatic): void => {
    nodecg.log.info('sup');
};
