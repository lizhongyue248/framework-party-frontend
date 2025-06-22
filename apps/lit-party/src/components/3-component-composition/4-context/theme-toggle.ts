import { consume } from "@lit/context"
import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { type ThemeType, themeContext } from "./theme-context.ts"

@customElement("theme-toggle")
export class ThemeToggle extends LitElement {
  @consume({ context: themeContext })
  @property({ type: Object, attribute: false })
  theme!: ThemeType

  @property({ type: Function, attribute: false })
  updateTheme!: () => void

  render() {
    return html`
      <div>
        <button @click="${this.updateTheme}">
          Toggle Theme
        </button>
      </div>
    `
  }
}
