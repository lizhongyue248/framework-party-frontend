import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("button-content")
export class ButtonContent extends LitElement {
  render() {
    return html`
      <button>
        <slot>Default Text</slot>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "button-content": ButtonContent
  }
}
