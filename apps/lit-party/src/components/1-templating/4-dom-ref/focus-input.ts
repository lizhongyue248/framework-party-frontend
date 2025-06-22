import { LitElement, html } from "lit"
import { customElement, query } from "lit/decorators.js"

@customElement("focus-input")
export class FocusInput extends LitElement {
  @query("input")
  private inputElement!: HTMLInputElement

  firstUpdated() {
    this.inputElement.focus()
  }

  render() {
    return html`
      <div>
        <input type="text" placeholder="This input will be focused">
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "focus-input": FocusInput
  }
}
