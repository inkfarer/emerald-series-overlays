export interface BridgeMap {
    name: string
    mode?: string
}

export const buckyMaps = [
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

export const stratusMaps = [
    { mode: 'KotH', name: 'Smoke KotH' },
    { mode: 'KotH', name: 'Coven' },
    { mode: 'KotH', name: 'Topaz' },
    { mode: 'KotH', name: 'Ultraviolet' },
    { mode: 'KotH', name: 'Willow' },
    { mode: 'KotH', name: 'Concorde' },
    { mode: 'KotH', name: 'Industrial' },
    { mode: 'CTF', name: 'Rusteze' },
    { mode: 'CTF', name: 'Hammerhead' },
    { mode: 'CTF', name: 'Ruins' },
    { mode: 'CTF', name: 'Mechanized' },
    { mode: '5CP', name: 'LeBronze' },
    { mode: '5CP', name: 'Marzipan' },
    { mode: '5CP', name: 'Cherokee' },
    { mode: 'KotF', name: 'Revolution' },
    { mode: 'KotF', name: 'Desert Sanctuary' },
    { mode: 'KotF', name: 'Splinter' },
    { mode: 'KotF', name: 'Shinobi' },
    { mode: 'KotF', name: 'West Rider' },
    { mode: 'CTP', name: 'Moonshine' },
    { name: 'Unknown' }
];

export const modeNames = {
    KotH: 'King of the Hill',
    CTF: 'Capture the Flag',
    '5CP': 'Five Control Points',
    KotF: 'King of the Flag',
    CTP: 'Capture the Point'
};
