import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("double-count")
export class DoubleCount extends LitElement {
  @state()
  private count = 0

  private get doubleCount() {
    return this.count * 2
  }

  private increment() {
    this.count++
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <p>Double Count: ${this.doubleCount}</p>
        <button @click=${this.increment}>Increment</button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "double-count": DoubleCount
  }
}
