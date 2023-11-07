import {LitElement, css, html} from 'lit';
import StringFormatter from '../utils/StringFormatter.js';

export class DayCard extends LitElement {

  static get properties() {
    return {
      id: {type: Number},
      day: {type: String},
      travel_type: {type: String},
      km_distance: {type: Number}
    };
  }

  constructor() {
    super();
    this.id = 1;
    this.day = 'Dag';
    this.travel_type = 'Vervoer';
    this.km_distance = 100;
  }

  render() {
    return html`
        <div class="grid-card">
            <div class="div-title">
                <h4>${StringFormatter.capitalizeFirstLetter(this.day)}</h4>
            </div>

            <div class="div-buttons">
                <a href="#" class="button_link">${this.travel_type}</a>
                <a href="#" class="button_link">${this.km_distance}</a>
                <a href="/overview/${this.id}">Change</a>
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

      .button_link {
        color: #000;
        text-decoration: none;
        border: 2px solid #000;
        border-radius: 20px;
        padding: 5px 40px;
      }
    `;
  }
}

window.customElements.define('day-card', DayCard);
