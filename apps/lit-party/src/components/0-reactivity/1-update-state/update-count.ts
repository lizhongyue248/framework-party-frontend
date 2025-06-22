import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("update-count")
export class UpdateCount extends LitElement {
  @state()
  private count = 0

  private increment() {
    this.count++
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
    "update-count": UpdateCount
  }
}
