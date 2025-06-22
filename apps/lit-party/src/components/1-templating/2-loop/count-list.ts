import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("count-list")
export class CountList extends LitElement {
  @state()
  private counts = [1, 2, 3, 4, 5]

  render() {
    return html`
      <ul>
        ${this.counts.map((count) => html`<li>Count: ${count}</li>`)}
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "count-list": CountList
  }
}
