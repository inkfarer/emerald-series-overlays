import { Caster } from '../schemas';

export interface SaveCasterRequest extends Caster {
    id: string | undefined
}
