import Component from './component.js';
import HeroModel from '../models/hero.model.js';
import HEROES from '../models/hero.data.js';
export default class Hero extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.heroList = HEROES;
    this.template = this.#createTemplate(this.heroList);
    this.render(this.selector, this.template);
    this.#filterHeroes();
  }
  #createTemplate() {
    let template = `
     <h2 class="heroes-container__title">Heroes</h2>
        <button class="heroes-container__clear" type="submit" id="clear-heroes">
          Clear messages
        </button>
      `;
    this.heroList.forEach((hero) => {
      template += `
        <div class="hero-card">ID: ${hero.id} | Nombre: ${hero.name}</div>
      `;
    });
    return template;
  }

  #filterHeroes() {
    const filterHeroesSelector = document.querySelector('.filter-menu__nav');
    let heroesListFiltered = [];
    filterHeroesSelector.addEventListener('click', (event) => {
      console.log(event.target.textContent);
      console.log(HEROES);
      heroesListFiltered = HEROES.filter(
        (hero) => hero.name === event.target.textContent
      );
      console.log(heroesListFiltered);
    });
    //this.heroList = heroesListFiltered;
    this.template = this.#createTemplate();
    this.render(this.selector, this.template);
    //this.#filterHeroes();
  }
}
