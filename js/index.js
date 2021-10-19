import Header from './header.js';
import MenuHeroes from './menuheroes.js';
import Hero from './hero.js';

function app() {
  console.log('Estoy Vivo');
  new Header('.header');
  new MenuHeroes('.filter-menu');
  new Hero('.heroes-container');
}

window.addEventListener('DOMContentLoaded', app);
