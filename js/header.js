import Component from './component.js';
import Menu from './menu.js';
export default class Header extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: 'index.html', label: 'Dashboard' },
      { path: 'heroes.html', label: 'Heroes' },
    ];
    this.menu = new Menu(this.menuItems).createTemplate();
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }
  #createRender() {
    const template = `
      <h1>Tour Of Heroes</h1>
          ${this.menu}
      `;
    return template;
  }
}
