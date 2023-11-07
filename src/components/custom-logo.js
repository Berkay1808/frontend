import {LitElement, css, html} from 'lit';

export class CustomLogo extends LitElement {

  static get properties() {
    return {
      logo_width: {type: Number},
      redirect_url: {type: String},
    };
  }

  constructor() {
    super();
    this.logo_width = 150;
    this.redirect_url = '/user';
  }

  render() {
    return html`
        <a href="${this.redirect_url}">
            <img src="/src/assets/logo-kpn.svg" alt="Logo KPN" width="${this.logo_width}">
        </a>
    `;
  }

  static get styles() {
    return css`
    `;
  }
}

window.customElements.define('custom-logo', CustomLogo);
