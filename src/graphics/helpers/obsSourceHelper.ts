import { mountGsapDevTool } from './gsapHelper';
import gsap from 'gsap';
import { ObsEvent } from 'types/obs';

export function bindEntrance(timeline: gsap.core.Timeline): void {
    if (window.obsstudio !== undefined) {
        window.addEventListener('obsSourceActiveChanged', (e: ObsEvent) => {
            if (e.detail.active) {
                timeline.delay(1).restart(true);
            } else {
                timeline.pause(0);
            }
        });

        window.addEventListener('obsSourceVisibleChanged', (e: ObsEvent) => {
            if (e.detail.visible) {
                timeline.delay(1).restart(false);
            }
        });
    }
    // Not in OBS Source
    else {
        mountGsapDevTool();
        timeline.delay(1).restart(true);
        document.body.ondblclick = () => {
            timeline.delay(1).restart(true);
        };
    }
}
