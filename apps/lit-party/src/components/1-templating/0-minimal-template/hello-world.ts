import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("hello-world")
export class HelloWorld extends LitElement {
  render() {
    return html`<h1>Hello, World!</h1>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hello-world": HelloWorld
  }
}
