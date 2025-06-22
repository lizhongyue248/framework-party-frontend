import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("fallback-card")
export class FallbackCard extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 16px 0;
    }
    .title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 8px;
    }
  `

  render() {
    return html`
      <div class="card">
        <div class="title">
          <slot name="title">Fallback Title</slot>
        </div> 
        <div>
          <slot>Fallback content</slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fallback-card": FallbackCard
  }
}
