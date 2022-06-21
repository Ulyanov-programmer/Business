import SpoilerMenu from './modules/spoiler.js';
new SpoilerMenu({
    btnsSelector: '.spoiler_btn',
    contentBlocksSelector: '.spoiler_content',
    maxWorkWidth: 426,
    animationDuration: 300,
});
SpoilerMenu.btnActiveClass = 'active';
SpoilerMenu.contentActiveClass = 'active';