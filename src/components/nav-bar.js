import {LitElement, css, html} from 'lit';

export class NavBar extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
        <div class="nav-bar">
            <custom-logo></custom-logo>
            <hamburger-menu></hamburger-menu>
        </div>
    `;
  }

  static get styles() {
    return css`
      .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `;
  }
}

window.customElements.define('nav-bar', NavBar);
