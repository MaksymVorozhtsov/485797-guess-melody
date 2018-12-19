const render = (html) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html.trim();
  return wrapper;
}

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  render() {
    return render(this.template);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind();
    return this._element;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  bind() {}
}
