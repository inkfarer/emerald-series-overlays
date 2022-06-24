import gsap from 'gsap';
import { onUnmounted } from 'vue';
import { bindEntrance } from './obsSourceHelper';

export const globalTimeline = gsap.timeline({
    id: 'obsGlobalTimeline'
});
bindEntrance(globalTimeline);

export function useGlobalTimeline(timeline: gsap.core.Timeline, position: gsap.Position): void {
    globalTimeline.add(timeline, position);

    onUnmounted(() => {
        globalTimeline.remove(timeline);
    });
}
