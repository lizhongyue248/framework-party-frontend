import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("count-content")
export class CountContent extends LitElement {
  @property({ type: Number })
  count = 0

  render() {
    return html`<p>Count: ${this.count}</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "count-content": CountContent
  }
}
