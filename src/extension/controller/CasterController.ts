import type { NodeCG } from 'nodecg/server';
import { CasterService } from '../service/CasterService';
import { BaseController } from './BaseController';

export class CasterController extends BaseController {
    constructor(nodecg: NodeCG, casterService: CasterService) {
        super(nodecg);

        this.listen('casters:delete', data => {
            casterService.delete(data);
        });

        this.listen('casters:save', data => casterService.save(data));
    }
}
