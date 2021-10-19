import Header from './header.js';
import NewHero from './new-hero.js';
function app() {
  console.log('Pagina Heroes');
  new Header('.header');
  new NewHero('.app-heroes');
}

window.addEventListener('DOMContentLoaded', app);
