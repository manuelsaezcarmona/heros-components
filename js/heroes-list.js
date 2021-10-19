import Component from './component.js';

export default class HeroesList extends Component {
  constructor() {
    super();
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }
  #createRender() {
    const template = `
        <ul class="heroes">
          <li>
            <a href="/detail/11"><span class="badge">11</span> Dr Nice </a
            ><button title="delete hero" class="delete">x</button>
          </li>
          <li>
            <a href="/detail/12"><span class="badge">12</span> Narco </a
            ><button title="delete hero" class="delete">x</button>
          </li>
          <li>
            <a href="/detail/13"><span class="badge">13</span> Bombasto </a
            ><button title="delete hero" class="delete">x</button>
          </li>
          <li>
            <a href="/detail/14"><span class="badge">14</span> Celeritas </a
            ><button title="delete hero" class="delete">x</button>
          </li>
      `;
    return template;
  }
}
