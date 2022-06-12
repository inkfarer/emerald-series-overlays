import type { NodeCG } from 'nodecg/server';
import type { ListenForCb, UnhandledListenForCb } from 'nodecg/lib/nodecg-instance';
import { MessageMap } from '../../types/nodecg';

export class BaseController {
    private readonly nodecg: NodeCG;

    constructor(nodecg: NodeCG) {
        this.nodecg = nodecg;
    }

    listen<K extends keyof MessageMap, D = MessageMap[K]>(messageName: K, callback: (data: D) => unknown) {
        this.nodecg.listenFor(`${messageName}`, async (data: D, cb: ListenForCb) => {
            try {
                const result = await callback(data);
                if (!cb.handled) {
                    (cb as UnhandledListenForCb)(null, result);
                }
            } catch (e) {
                if (!cb.handled) {
                    (cb as UnhandledListenForCb)(e);
                }
            }
        });
    }
}
