import seedrandom from 'seedrandom';

export function generateId(): string {
    return String(Math.random().toString(36).substring(2, 9));
}

export function generateSeededId(seed: string): string {
    return String(seedrandom(seed).quick().toString(36).substring(2));
}
