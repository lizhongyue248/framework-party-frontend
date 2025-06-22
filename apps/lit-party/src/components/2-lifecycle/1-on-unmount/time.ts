import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"

@customElement("time-display")
export class TimeDisplay extends LitElement {
  @state()
  private time = new Date().toLocaleTimeString()

  private intervalId: number | null = null

  connectedCallback() {
    super.connectedCallback()
    this.intervalId = window.setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
  }

  render() {
    return html`<p>Current time: ${this.time}</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "time-display": TimeDisplay
  }
}
