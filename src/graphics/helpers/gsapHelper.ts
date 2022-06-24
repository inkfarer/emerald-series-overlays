import gsap from 'gsap';
import { GSDevTools } from 'gsap/all';

export function mountGsapDevTool(): void {
    if (!document.getElementById('gsdevtools')) {
        const div = document.createElement('div');
        div.id = 'gsdevtools';
        document.body.appendChild(div);
        gsap.registerPlugin(GSDevTools);
        GSDevTools.create({
            container: div,
            animation: 'obsGlobalTimeline'
        });
    }
}
