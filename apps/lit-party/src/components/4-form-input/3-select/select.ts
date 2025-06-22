import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("select-input")
export class SelectInput extends LitElement {
  @state()
  private selectedValue = ""

  private handleChange(e: Event) {
    this.selectedValue = (e.target as HTMLSelectElement).value
  }

  render() {
    return html` 
      <div>
        <select .value=${this.selectedValue} @change=${this.handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <p>Selected value: ${this.selectedValue}</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "select-input": SelectInput
  }
}
