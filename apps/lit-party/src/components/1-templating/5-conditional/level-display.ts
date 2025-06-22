import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("level-display")
export class LevelDisplay extends LitElement {
  @state()
  private level = 0

  private getLevel() {
    if (this.level <= 0) {
      return "You have no level yet"
    }
    if (this.level <= 5) {
      return "Your level is low"
    }
    if (this.level <= 10) {
      return "Your level is medium"
    }
    return "Your level is high"
  }

  render() {
    return html`
      <div>
        <p>Current Level:${this.level} ${this.getLevel()}</p>
        <button @click=${() => this.level++}>Increase Level</button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "level-display": LevelDisplay
  }
}
