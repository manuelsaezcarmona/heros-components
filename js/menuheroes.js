import Component from './component.js';

export default class MenuHeroes extends Component {
  constructor(selector) {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: '#', label: 'Narco' },
      { path: '#', label: 'Bombasto' },
      { path: '#', label: 'Celeritas' },
      { path: '#', label: 'Magneta' },
    ];
    this.template = this.createTemplate();
    this.render(this.selector, this.template);
  }

  createTemplate() {
    let menu = `
    <h2>Top Heroes</h2>
    <nav class="filter-menu__nav"><ul class="filter-menu__list">`;
    this.menuItems.forEach((item) => {
      menu += `<li><a class= "filter-menu__item"
    href="${item.path}">${item.label}</a></li>`;
    });
    menu += '</ul></nav>';
    return menu;
  }
}
