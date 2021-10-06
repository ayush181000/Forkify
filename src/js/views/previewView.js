import View from './View';
import icons from 'url:../..//img/icons.svg';

class previewView extends View {
  _parentElement = '';
  _errorMessage = `No recipes found for your query. Please try again`;
  _message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
          <li class="preview">
            <a class="preview__link ${
              this._data.id === id ? 'preview__link--active' : ''
            }" href="#${this._data.id}">
              <figure class="preview__fig" >
                <img src="${this._data.image} " alt="Test" crossorigin />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
              </div>
            </a>
          </li> `;
  }
}

export default new previewView();