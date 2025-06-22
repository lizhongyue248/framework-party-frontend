import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("checkbox-input")
export class CheckboxInput extends LitElement {
  @state()
  private isChecked = false

  private handleChange(e: Event) {
    this.isChecked = (e.target as HTMLInputElement).checked
  }

  render() {
    return html`
      <div>
        <label>
          <input 
            type="checkbox"  
            .checked=${this.isChecked} 
            @change=${this.handleChange}
          />
          Check me
        </label>
        <p>Checkbox is ${this.isChecked ? "checked" : "unchecked"}</p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "checkbox-input": CheckboxInput
  }
}
