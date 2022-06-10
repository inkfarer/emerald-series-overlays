import type { NodeCG, ReplicantServer } from 'nodecg/server';
import { Caster } from '../../types/schemas';
import { generateId } from '../../helpers/generateId';

export class CasterService {
    private casters: ReplicantServer<Caster[]>;

    constructor(nodecg: NodeCG) {
        this.casters = nodecg.Replicant<Caster[]>('casters');
    }

    delete(id: string): void {
        const oldLength = this.casters.value.length;

        this.casters.value = this.casters.value.filter(caster => caster.id !== id);

        if (this.casters.value.length === oldLength) {
            throw new Error(`Could not find caster with ID '${id}'`);
        }
    }

    save(data: Caster): Caster {
        if (data.id) {
            const casterIndex = this.casters.value.findIndex(caster => caster.id === data.id);

            if (casterIndex < 0) {
                throw new Error(`Could not find caster with ID '${data.id}'`);
            }

            this.casters.value[casterIndex] = data;

            return data;
        } else {
            data.id = generateId();
            this.casters.value.push(data);
            return data;
        }
    }
}
