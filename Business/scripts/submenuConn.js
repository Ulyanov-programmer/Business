import Submenu, { SubmenuElementGroup, SubmenuOpenIvents } from './modules/submenu.js';
new Submenu({ menuActiveClass: 'show', buttonActiveClass: 'active', disableOnEsc: true }, new SubmenuElementGroup({
    openIvent: SubmenuOpenIvents.Click,
    buttonsSelector: '.lang-menu',
    menusSelector: '.lang-menu__submenu',
}), new SubmenuElementGroup({
    openIvent: SubmenuOpenIvents.Click,
    buttonsSelector: '.menu__click_button',
    menusSelector: '.menu__click',
}));