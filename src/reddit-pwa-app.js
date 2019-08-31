import { LitElement, html } from 'lit-element';

class RedditPwaApp extends LitElement {
    // ...

    render() {
        return html`
            <h1>Hello world!</h1>
        `;
    }
}

customElements.define('reddit-pwa-app', RedditPwaApp);
