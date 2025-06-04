import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("x-name")
export class XName extends LitElement {
  @state()
  name = "John"

  render() {
    return html`<h1>Hello ${this.name}!</h1>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "x-name": XName
  }
}
