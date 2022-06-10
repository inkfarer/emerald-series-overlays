import { Caster, Casters } from 'schemas';
import { generateId } from '@helpers/generateId';
import { defineStore } from 'pinia';
import omit from 'lodash/omit';

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
        updateCaster(caster: Caster): void {
            nodecg.sendMessage('casters:save', caster);
        },
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
        async saveUncommittedCaster(id: string): Promise<string> {
            const newCaster = await nodecg.sendMessage('casters:save', omit((this.uncommittedCasters as Caster[]).find(caster => caster.id === id), ['id']));
            this.removeUncommittedCaster(id);
            return newCaster.id;
        },
        async removeCaster(id: string): Promise<void> {
            return nodecg.sendMessage('casters:delete', id);
        }
    }
});
