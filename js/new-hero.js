import HEROES from '../models/hero.data.js';
import Component from './component.js';

export default class NewHero extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.heroesList = HEROES;
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }
  #createRender() {
    let template = `
        <h2 class="app-heroes__title">My Heroes</h2>
        <div class="new-hero-container">
          <label for="new-hero-container__label">Hero name: </label
          ><input id="new-hero-container__input" /><button type = "submit" class="add-button">
            Add hero
          </button>
        </div>
        <div class="list-of-heroes">
      `;
    let list = `<h2 class="app-heroes__title">My Heroes</h2>
        <ul>`;
    this.heroesList.forEach((item) => {
      list += ` <li class="list-of-heroes__item">
            <a class ="list-of-heroes__link" href="/detail/11"><span class="badge">${item.id}</span> ${item.name} </a
            ><button title="delete hero" class="delete">x</button>
          </li>`;
    });
    list += `</ul></div>`;
    template += list;
    return template;
  }
}
