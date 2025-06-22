import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("emit-count-content")
export class EmitCountContent extends LitElement {
  @property({ type: Number })
  count = 0

  private increment() {
    this.dispatchEvent(new CustomEvent("increment", { detail: this.count + 1 }))
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button @click=${this.increment}>Increment</button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "emit-count-content": EmitCountContent
  }
}
