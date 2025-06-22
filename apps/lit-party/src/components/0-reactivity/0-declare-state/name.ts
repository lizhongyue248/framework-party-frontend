import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("declare-state")
export class DeclareState extends LitElement {
  @state()
  private name = "John Doe"

  render() {
    return html`
      <div>
        <p>My name is ${this.name}</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "declare-state": DeclareState
  }
}
