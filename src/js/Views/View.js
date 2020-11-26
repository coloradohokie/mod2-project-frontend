import profileImage from '../../assets/user.png'
import icons from '../../assets/icons.svg'

export default class View {
    render(data) {
        this._data = data
        this._clear(this._parentElement)
        const markup = this._generateMarkup()
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    _clear(element = this._parentElement) {
        element.innerHTML= ''
    }

    _displayAvatar(avatarUrl) {
        return avatarUrl ? avatarUrl : profileImage
    }

    renderSpinner() {
        const markup = `
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    renderError(message = this._errorMessage) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    
      renderMessage(message = this._message) {
        const markup = `
          <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
    }