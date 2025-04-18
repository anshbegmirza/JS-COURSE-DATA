class SearchViewCl {
  _parentElement = document.querySelector(`.search`);


  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    })
  }

  _clearInput() {
    return this._parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchViewCl();