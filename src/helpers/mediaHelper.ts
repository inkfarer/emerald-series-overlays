import { isBlank } from '@iplsplatoon/vue-components';
import axios from 'axios';

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

export async function checkIfPageExists(src: string): Promise<boolean> {
    if (isBlank(src)) {
        return false;
    }

    try {
        const response = await axios.get(src);
        return response.status !== 404;
    } catch (e) {
        return false;
    }
}
