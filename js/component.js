export default class Component {
  constructor() {
    this.selector;
    this.template;
  }
  render(selector, template) {
    const node = document.querySelector(selector);
    node.innerHTML = template;
  }

  renderOuter(selector, template) {
    const node = document.querySelector(selector);
    node.outerHTML = template;
  }
}
