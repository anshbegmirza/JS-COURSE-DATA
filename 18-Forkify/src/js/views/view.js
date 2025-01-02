import icons from 'url:../../img/icons.svg'; // parcel 2


export default class ViewCl {
  _data;

  /**
   * Render the received object to the dom
   * @param {Object | Object[]} data The data to be rendered f(e.g recipe)
   * @param {boolean} [render=true] if false create markup string, instead of rendering to the DOM.
   * @returns {undefined | string} A markup string is returned if render = false
   * @this {Object} View instance
   * @author Anash Beg Mirza
   * @todo Finish the implementation.
   */


  render(data, render = true) {

    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clears the parent element
   */

  _clear() {
    // console.log(this._parentElement);

    this._parentElement.innerHTML = "";
  }

  /**
   * Render a spinner, loading effect.
   */

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

  /**
   * 
   * @param {object,object[]} data
   * checks for the part which is not common, basically finds the difference
   * then re-renders that part. 
   */

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

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
      // console.log(curEl, newEl.isEqualNode(curEl));

      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      //updates changed Attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
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