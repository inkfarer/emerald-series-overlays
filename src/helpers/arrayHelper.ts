export function getNextIndex(arr: Array<unknown>, currentIndex: number): number {
    return currentIndex === arr.length - 1 ? 0 : currentIndex + 1;
}

export function getPreviousIndex(arr: Array<unknown>, currentIndex: number): number {
    return currentIndex === 0 ? arr.length - 1 : currentIndex - 1;
}
