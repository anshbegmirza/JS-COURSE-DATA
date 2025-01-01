import icons from 'url:../../img/icons.svg'; // parcel 2


export default class ViewCl {
  _data;

  render(data) {

    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    // console.log(this._parentElement);

    this._parentElement.innerHTML = "";
  }


  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    // this will convert the new mark up into a living dom element
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    // console.log(newElements);
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    // console.log(curElements);
    // console.log(newElements);

    //compared two dom elements with each other.
    //updates changed text
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      console.log(curEl, newEl.isEqualNode(curEl));

      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      //updates changed Attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => curEl.setAttributes(attr.name, attr.value))
      }
    })

  }


  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

}