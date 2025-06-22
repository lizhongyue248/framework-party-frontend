import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("radio-input")
export class RadioInput extends LitElement {
  @state()
  private selectedOption = ""

  private handleChange(e: Event) {
    this.selectedOption = (e.target as HTMLInputElement).value
  }

  render() {
    return html`
      <div>
        <label>
          <input 
            type="radio" 
            name="option" 
            value="option1" 
            .checked=${this.selectedOption === "option1"} 
            @change=${this.handleChange}
          />
          Option 1
        </label>
        <label>
          <input 
            type="radio" 
            name="option" 
            value="option2" 
            .checked=${this.selectedOption === "option2"} 
            @change=${this.handleChange}
          />
          Option 2
        </label>
        <p>Selected option: ${this.selectedOption}</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "radio-input": RadioInput
  }
}
