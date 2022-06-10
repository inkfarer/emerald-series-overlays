import { isBlank } from '@iplsplatoon/vue-components';

export async function loadAndCheckIfImageExists(src: string): Promise<boolean> {
    return new Promise(resolve => {
        if (isBlank(src)) {
            return resolve(false);
        }

        const img = new Image();
        img.src = src;

        img.onload = () => {
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
    });
}
