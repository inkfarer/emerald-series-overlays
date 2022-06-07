import type { NodeCG } from 'nodecg/server';
import type { UnhandledListenForCb } from 'nodecg/lib/nodecg-instance';
import { CasterService } from '../service/CasterService';
import { Caster } from '../../types/schemas';

export class CasterController {
    constructor(nodecg: NodeCG, casterService: CasterService) {
        nodecg.listenFor('casters:delete', (data: string, ack: UnhandledListenForCb) => {
            try {
                casterService.delete(data);
            } catch (e) {
                return ack(e);
            }
        });

        nodecg.listenFor('casters:save', (data: Caster, ack: UnhandledListenForCb) => {
            try {
                const newCaster = casterService.save(data);
                return ack(null, newCaster);
            } catch (e) {
                return ack(e);
            }
        });
    }
}
