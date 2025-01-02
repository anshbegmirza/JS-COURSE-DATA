import View from './view.js';
// console.log(View);
import icons from 'url:../../img/icons.svg'; // parcel 2

class PreviewViewCl extends View {
  _parentElement = "";

  _generateMarkup(result) {
    const id = window.location.hash.slice(1);


    return ` 
          <li class="preview">
            <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p> 
              </div>

               <div class="preview__user-generated ${this._data.key ? "" : 'hidden'}">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>

            </a>
          </li>
    `;
    // return ` 
    //       <li class="preview">
    //         <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
    //           <figure class="preview__fig">
    //             <img src="${result.image}" alt="${result.title}" />
    //           </figure>
    //           <div class="preview__data">
    //             <h4 class="preview__title">${result.title}</h4>
    //             <p class="preview__publisher">${result.publisher}</p> 
    //           </div>
    //         </a>
    //       </li>
    // `

  }

}

export default new PreviewViewCl();