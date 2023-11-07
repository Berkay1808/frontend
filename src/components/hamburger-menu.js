import {LitElement, css, html} from 'lit';

export class HamburgerMenu extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
            <span class="span-hamburger"></span>
        </a>
        `;
  }

  static get styles() {
    return css`
      .span-hamburger {
        position: relative;
        display: inline-block;
        width: 1.25em;
        height: 0.8em;
        margin-right: 0.3em;
        border-top: 0.2em solid #fff;
        border-bottom: 0.2em solid #fff;
      }

      .span-hamburger:before {
        content: "";
        position: absolute;
        top: 0.3em;
        left: 0;
        width: 100%;
        border-top: 0.2em solid #fff;
      }
    `;
  }
}

window.customElements.define('hamburger-menu', HamburgerMenu);
