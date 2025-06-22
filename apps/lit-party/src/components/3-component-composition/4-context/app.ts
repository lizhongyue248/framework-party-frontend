import { ContextProvider } from "@lit/context"
import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import "./theme-toggle"
import { type ThemeType, themeContext } from "./theme-context.ts"

@customElement("theme-app")
export class ThemeApp extends LitElement {
  @state()
  theme: ThemeType = {
    current: "dark"
  }

  provider = new ContextProvider(this, {
    context: themeContext,
    initialValue: this.theme
  })

  updateTheme() {
    this.theme = { ...this.theme, current: this.theme.current === "light" ? "dark" : "light" }
    this.provider.setValue(this.theme)
  }

  render() {
    return html`
      <div>
        Theme Example ${this.theme.current}
        <theme-toggle .updateTheme=${this.updateTheme.bind(this)}/>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "theme-app": ThemeApp
  }
}
