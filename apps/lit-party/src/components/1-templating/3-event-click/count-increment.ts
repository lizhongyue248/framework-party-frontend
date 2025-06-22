import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("count-increment")
export class CountIncrement extends LitElement {
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
    "count-increment": CountIncrement
  }
}
