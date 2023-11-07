import {LitElement, css, html} from 'lit';

export class AdminTemplate extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
        <custom-logo></custom-logo>
        <h1 class="white"> Logged in as Admin</h1>
        <a href="/" class="logout"> Logout </a>
    `;
  }

  static get styles() {
    return css`
      .white {
        color: white;
      }

      .logout {
        color: #fff;
        text-decoration: none;
        border: 2px solid #fff;
        border-radius: 20px;
        padding: 5px 40px;
      }
    `;
  }
}

window.customElements.define('admin-template', AdminTemplate);