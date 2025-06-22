import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import "./card"

@customElement("slot-fallback-app")
export class SlotFallbackApp extends LitElement {
  render() {
    return html` 
      <div>
        <h2>With content</h2>
        <fallback-card>
          <span slot="title">Custom Title</span>
          <span>Custom content</span>
        </fallback-card>

        <h2>Without content (fallback)</h2>
        <fallback-card></fallback-card>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "slot-fallback-app": SlotFallbackApp
  }
}
