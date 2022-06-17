import { Caster, Casters } from 'schemas';
import { generateId } from '@helpers/generateId';
import { defineStore } from 'pinia';
import { sendMessage } from '@browser-common/typedNodecg';

export const castersReps = [
    nodecg.Replicant<Casters>('casters')
];

export interface CasterStore {
    casters: Casters;
    uncommittedCasters: Caster[];
}

const defaultCaster = {
    name: 'New Caster',
    twitter: '',
    pronouns: '?/?'
};

export const useCasterStore = defineStore('casters', {
    state: () => ({
        casters: [],
        uncommittedCasters: []
    } as CasterStore),
    actions: {
        removeUncommittedCaster(id: string): void {
            this.uncommittedCasters = (this.uncommittedCasters as Caster[]).filter(caster => caster.id !== id);
        },
        addUncommittedCaster({ id, caster }: { id: string, caster?: Caster }): void {
            this.uncommittedCasters.push({ id, ...(caster ?? defaultCaster) });
        },
        addDefaultCaster(): string {
            const id = generateId();
            this.addUncommittedCaster({ id });
            return id;
        },
        async removeCaster(id: string) {
            return sendMessage('casters:delete', id);
        }
    }
});
