import { LitElement, html, css } from 'lit-element';
import { c } from './constants.js';
console.log(c);
class RedditPwaApp extends LitElement {
    // ...

    static get styles() {
        return css`
            :host {
                background: linear-gradient(45deg, #d62baa, #ffcc00);
                display: inline-block;
                height: calc(100vh);
                width: 100%;
            }
            label {
                background: #3f568e73;
                border: 3px solid white;
                padding: 1rem;
                cursor: pointer;
            }
            input {
                display: none;
            }
        `;
    }

    render() {
        return html`
            <main>
                <h1>Giffr!</h1>
                <canvas></canvas>
                <label for="fileInput">upload pictures</label>
                <input type="file" id="fileInput" />
            </main>
        `;
    }
}

customElements.define('reddit-pwa-app', RedditPwaApp);
