import AnimateByScroll, { AnimationElement, AnimationMediaQuery } from "./modules/animateByScroll.js";
new AnimateByScroll({ repeatingAnimations: false }, new AnimationElement({
    selector: '._anim-main-title',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 300,
}), new AnimationElement({
    selector: '._anim-main-text',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 300,
}), new AnimationElement({
    selector: '._anim-main-footer',
    animateStartCoeff: 0.9,
    timeoutBeforeStart: 500,
}), new AnimationElement({
    selector: '._about-subtext',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 300,
}), new AnimationElement({
    selector: '._about-title',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 1000,
}, new AnimationMediaQuery(500, 0.8, 200)), new AnimationElement({
    selector: '._about-text',
    animateStartCoeff: 0.7,
    timeoutBeforeStart: 1500,
}, new AnimationMediaQuery(768, 0.8, 600)), new AnimationElement({
    selector: '._about-footer',
    animateStartCoeff: 0.9,
    timeoutBeforeStart: 1600,
}, new AnimationMediaQuery(768, 0.8, 600)), new AnimationElement({
    selector: '._about-advantage-1',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 1200,
}, new AnimationMediaQuery(768, 0.8, 600)), new AnimationElement({
    selector: '._about-advantage-2',
    animateStartCoeff: 0.8,
    timeoutBeforeStart: 1400,
}, new AnimationMediaQuery(768, 0.8, 600)), new AnimationElement({
    selector: '._about-advantage-3',
    animateStartCoeff: 0.8,
    timeoutBeforeStart: 1600,
}, new AnimationMediaQuery(768, 0.8, 600)), new AnimationElement({
    selector: '._what-do-subtitle',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 300,
}), new AnimationElement({
    selector: '._what-do-title',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 1000,
}, new AnimationMediaQuery(650, 0.8, 300)), new AnimationElement({
    selector: '._what-do-refs',
    animateStartCoeff: 0.5,
    timeoutBeforeStart: 1500,
}, new AnimationMediaQuery(650, 0.5, 200)));
AnimateByScroll.activeAnimationClass = 'active';