import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import "./components/reactivity/declare-state.ts"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <x-name />
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement
  }
}
