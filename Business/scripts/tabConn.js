import Tab from './modules/tab.js';
new Tab({
    btnsSelector: '.tab__btn',
    contentBlocksSelector: '.tab__item',
    fadeEffect: true,
    buttonsActiveClass: 'active',
    contentActiveClass: 'active',
    autoHeight: true,
    animationDuration: 600,
});
new Tab({
    btnsSelector: '.product-details__tabs-btn',
    contentBlocksSelector: '.product-details__tab-data',
    fadeEffect: false,
    buttonsActiveClass: 'active',
    contentActiveClass: 'active',
    autoHeight: true,
    animationDuration: 300,
});