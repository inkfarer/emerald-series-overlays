import gsap from 'gsap';
import { ObsEvent } from 'types/obs';
import { onUnmounted } from 'vue';

export function bindEntranceToTimeline(timeline: gsap.core.Timeline): void {
    if (window.obsstudio !== undefined) {
        const activeChangedHandler = (e: ObsEvent) => {
            if (e.detail.active) {
                timeline.restart(true);
            } else {
                timeline.pause(0);
            }
        };
        const visibleChangedHandler = (e: ObsEvent) => {
            if (e.detail.visible) {
                timeline.restart(false);
            }
        };

        window.addEventListener('obsSourceActiveChanged', activeChangedHandler);
        window.addEventListener('obsSourceVisibleChanged', visibleChangedHandler);

        onUnmounted(() => {
            window.removeEventListener('obsSourceActiveChanged', activeChangedHandler);
            window.removeEventListener('obsSourceVisibleChanged', visibleChangedHandler);
        });
    }
    // Not in OBS Source
    else {
        timeline.progress(1);
        const doubleClickHandler = () => {
            timeline.delay(1).restart(true);
        };

        document.body.addEventListener('dblclick', doubleClickHandler);

        onUnmounted(() => {
            document.body.removeEventListener('dblclick', doubleClickHandler);
        });
    }
}

export function bindEntranceToTimelineGenerator(generator: () => gsap.core.Timeline): void {
    if (window.obsstudio !== undefined) {
        window.addEventListener('obsSourceActiveChanged', (e: ObsEvent) => {
            const timeline = generator();
            if (e.detail.active) {
                timeline.restart(true);
            } else {
                timeline.pause(0);
                timeline.kill();
            }
        });

        window.addEventListener('obsSourceVisibleChanged', (e: ObsEvent) => {
            if (e.detail.visible) {
                generator().restart(false);
            }
        });
    }
    // Not in OBS Source
    else {
        generator().progress(1);
        document.body.addEventListener('dblclick', () => {
            generator().delay(1).restart(true);
        });
    }
}
