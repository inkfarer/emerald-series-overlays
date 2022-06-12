import { NodeCGBrowser } from 'nodecg/browser';
import { MessageMap, MessageResultMap } from 'types/nodecg';

export async function sendMessage<K extends keyof MessageMap>(
    message: K,
    data?: MessageMap[K]
): Promise<MessageResultMap[K]> {
    return nodecg.sendMessage(message, data);
}
