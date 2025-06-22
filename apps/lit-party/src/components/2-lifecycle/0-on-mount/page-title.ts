import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("page-title")
export class PageTitle extends LitElement {
  connectedCallback() {
    super.connectedCallback()
    document.title = "My Awesome Page"
    console.log("PageTitle connectedCallback called")
  }

  render() {
    return html`<p>Check the page title!</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "page-title": PageTitle
  }
}
