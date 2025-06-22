import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import "./button-content"

@customElement("slot-app")
export class SlotApp extends LitElement {
  render() {
    return html`
      <div>
        <button-content>
          <span>Custom Content</span>
        </button-content> 
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "slot-app": SlotApp
  }
}
