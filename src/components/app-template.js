import { LitElement, css, html } from 'lit';

export class AppTemplate extends LitElement {
  static get properties() {
    return {
      lang: { type: String }
    };
  }

  constructor() {
    super();
    this.lang = 'nl';
  }

  render() {
    const langText = {
      nl: { 'Welcome': 'Welkom', 'Hello': 'Hallo' },
      en: { 'Welcome': 'Welcome', 'Hello': 'Hello' }
    };

    const welcomeText = langText[this.lang]['Welcome'];

    return html`
        <nav-bar></nav-bar>
        <h1>${welcomeText}</h1>
        <week-card lang=${this.lang}></week-card>
    `;
  }

  static get styles() {
    return css`
    `;
  }
}

window.customElements.define('app-template', AppTemplate);