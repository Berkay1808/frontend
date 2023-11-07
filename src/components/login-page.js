import { LitElement, html, css } from 'lit';
import langClick$ from '../js/language-selector.js';
import { Router } from '@vaadin/router';
import { authenticateUserByEmail } from '../js/main.js';

export class LoginPage extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      selectedRole: { type: String },
      email: { type: String },
      password: { type: String }
    };
  }

  constructor() {
    super();
    this.lang = 'nl';
    this.selectedRole = 'gebruiker';
  }

  handleLogin() {
    const email = this.email;
    const password = this.password;

    const user = authenticateUserByEmail(email, password);

    if (user) {
      Router.go(user.role === 'admin' ? '/admin' : '/overview');
    } else {
      console.error('Gebruiker niet gevonden of ongeldige inloggegevens');
    }
  }

  render() {
    return html`
      <div class="grid-container">
        <nav class="navigation">
            <custom-logo redirect_url="/" logo_width="200"></custom-logo>
        </nav>
        <button class="lang-button" data-lang="nl">Nederlands</button>
        <button class="lang-button" data-lang="en">English</button>
        <select .value='${this.selectedRole}' @change=${(e) => this.selectedRole = e.target.value}>
          <option value="gebruiker">Gebruiker</option>
          <option value="admin">Admin</option>
        </select>
        <input type="text" @input=${(e) => this.email = e.target.value} placeholder="Gebruikersnaam">
        <input type="password" @input=${(e) => this.password = e.target.value} placeholder="Wachtwoord">
        <button @click=${this.handleLogin}>Inloggen</button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .grid-container {
        display: grid;
        height: 75vh;
        place-content: center;
        gap: 20px;
        text-align: center;
      }
      
      a {
        color: #fff;
        text-decoration: none;
        border: 2px solid #fff;
        border-radius: 20px;
        padding: 5px 40px;
      }
    `;
  }
}

window.customElements.define('login-page', LoginPage);