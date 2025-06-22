import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("input-text")
export class InputText extends LitElement {
  @state()
  private inputValue = ""

  private handleInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value
  }

  render() {
    return html`
      <div>
        <input 
          type="text" 
          .value=${this.inputValue} 
          @input=${this.handleInput}
          placeholder="Enter text"
        />
        <p>You entered: ${this.inputValue}</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "input-text": InputText
  }
}
