import {LitElement, css, html} from 'lit';
import {router} from '../js/router.js';
import StringFormatter from '../utils/StringFormatter.js';


export class DayPage extends LitElement {

  static get properties() {
    return {
      day: {type: String},
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.day = router.location.getUrl().split('/').pop();
  }

  render() {
    return html`
        <div class="grid-card">
            <div class="div-title">
              <h4>${StringFormatter.capitalizeFirstLetter(this.day)}</h4>
            </div>
              
            <div class="div-buttons">
                <a href="/overview">back</a>
            </div>
        </div>
    `;
  }

  static get styles() {
    return css`
          .grid-card {
            display: grid;
            background-color: #fff;
            margin-top: 20px;
            padding: 0 20px 35px 20px;
            border-radius: 10px;
          }
        `;
  }
}

window.customElements.define('day-page', DayPage);
