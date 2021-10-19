import Component from './component.js';

export default class HeroSearch extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }
  #createRender() {
    const template = `
        <label for="search-box">Hero Search</label>
        <input id="search-box" />
      `;
    return template;
  }
}
