import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("styled-component")
export class StyledComponent extends LitElement {
  static styles = css`
    .styled {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }
  `

  render() {
    return html`
      <div class="styled">
        <p>This is a styled component</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "styled-component": StyledComponent
  }
}
