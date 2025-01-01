import View from './view.js';
// console.log(View);
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // parcel 2

class BookmarksViewCl extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  _message = ``;
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it. ;)`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler)
  };

  _generateMarkup() {
    // console.log(this._data);

    return this._data.map(bookmark => previewView.render(bookmark, false)).join(``);
  }

  // _generateMarkupPreview(result) {
  //   const id = window.location.hash.slice(1);


  //   return ` 
  //         <li class="preview">
  //           <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
  //             <figure class="preview__fig">
  //               <img src="${result.image}" alt="${result.title}" />
  //             </figure>
  //             <div class="preview__data">
  //               <h4 class="preview__title">${result.title}</h4>
  //               <p class="preview__publisher">${result.publisher}</p> 
  //             </div>
  //           </a>
  //         </li>
  //   `

  // }

}

export default new BookmarksViewCl();