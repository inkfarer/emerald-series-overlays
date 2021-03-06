import { GameMode } from '../types/enums/GameMode';

export interface BridgeMap {
    name: string
    mode?: GameMode
}

export const buckyMaps: BridgeMap[] = [
    { name: 'Urban' },
    { name: 'Boo' },
    { name: 'Treehouse' },
    { name: 'Aquatica' },
    { name: 'Chronon' },
    { name: 'Condo' },
    { name: 'Galaxy' },
    { name: 'Dojo' },
    { name: 'Sorcery' },
    { name: 'Fortress' },
    { name: 'Unknown' }
];

export const stratusMaps: BridgeMap[] = [
    { mode: GameMode.KOTH, name: 'Smoke KotH' },
    { mode: GameMode.KOTH, name: 'Topaz' },
    { mode: GameMode.CTF, name: 'Rusteze' },
    { mode: GameMode.FIVE_CP, name: 'Marzipan' },
    { mode: GameMode.KOTF, name: 'Revolution' },
    { mode: GameMode.KOTF, name: 'Shinobi' },
    { mode: GameMode.CTP, name: 'Moonshine' },
    { name: 'Unknown' }
];

export const modeNames: { [key in GameMode]: string } = {
    [GameMode.KOTH]: 'King of the Hill',
    [GameMode.CTF]: 'Capture the Flag',
    [GameMode.FIVE_CP]: 'Five Control Points',
    [GameMode.KOTF]: 'King of the Flag',
    [GameMode.CTP]: 'Control the Point'
};
