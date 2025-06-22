import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import "./count-content"

@customElement("emit-app")
export class EmitApp extends LitElement {
  @state()
  private count = 0

  private handleIncrement(e: CustomEvent) {
    this.count = e.detail
  }

  render() {
    return html`
      <div>
        <emit-count-content
          .count=${this.count}
          @increment=${this.handleIncrement}
        />
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "emit-app": EmitApp
  }
}
