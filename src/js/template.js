import menuCardTpl from '../templates/menu-card.hbs';

import menu from '../menu.json';

// console.log(menuCardTpl);
// console.log(menu);
// console.log(menuList);

const menuList = document.querySelector('.js-menu');

const cardsMarkup = createMenuCardsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
    return menuCardTpl(menu);
};

//console.log(createMenuCardsMarkup);


