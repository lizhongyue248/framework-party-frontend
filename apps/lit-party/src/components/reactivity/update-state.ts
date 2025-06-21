import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("update-state")
export class UpdateState extends LitElement {
  @state()
  name = "John"

  private names = ["Alice", "Bob", "Charlie", "David", "Eva"]

  private _updateName() {
    const randomIndex = Math.floor(Math.random() * this.names.length)
    this.name = this.names[randomIndex]
  }

  render() {
    return html`
      <h1>Hello ${this.name}!</h1>
      <button @click=${this._updateName}>Change Name</button>
    `
  }
}
