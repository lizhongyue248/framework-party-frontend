import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import "./count-content"

@customElement("props-app")
export class PropsApp extends LitElement {
  @state()
  private count = 0

  private increment() {
    this.count++
  }

  render() {
    return html`
      <div>
        <count-content .count=${this.count} />
        <button @click=${this.increment}>Increment</button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "props-app": PropsApp
  }
}
