import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"
import "./components/0-reactivity/0-declare-state/name"
import "./components/0-reactivity/1-update-state/update-count"
import "./components/0-reactivity/2-computed-state/double-count"
import "./components/1-templating/0-minimal-template/hello-world"
import "./components/1-templating/1-styling/styling"
import "./components/1-templating/2-loop/count-list"
import "./components/1-templating/3-event-click/count-increment"
import "./components/1-templating/4-dom-ref/focus-input"
import "./components/1-templating/5-conditional/level-display"
import "./components/2-lifecycle/0-on-mount/page-title"
import "./components/2-lifecycle/1-on-unmount/time"
import "./components/3-component-composition/0-props/app"
import "./components/3-component-composition/1-emit-to-parent/app"
import "./components/3-component-composition/2-slot/app"
import "./components/3-component-composition/3-slot-fallback/app"
import "./components/3-component-composition/4-context/app"
import "./components/4-form-input/0-input-text/input-text"
import "./components/4-form-input/1-checkbox/checkbox"
import "./components/4-form-input/2-radio/radio"
import "./components/4-form-input/3-select/select"
import "./components/5-webapp-features/1-fetch-data/app"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    .section {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }
    h2 {
      margin-top: 0;
      border-bottom: 2px solid #ddd;
      padding-bottom: 10px;
    }
    .component {
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `
  render() {
    return html`
      <div class="section">
        <h2>Reactivity</h2>
        <div class="component">
          <declare-state></declare-state>
        </div>
        <div class="component">
          <update-count></update-count>
        </div>
        <div class="component">
          <double-count></double-count>
        </div>
      </div>

      <div class="section">
        <h2>Templating</h2>
        <div class="component">
          <hello-world></hello-world>
        </div>
        <div class="component">
          <styling-component></styling-component>
        </div>
        <div class="component">
          <count-list></count-list>
        </div>
        <div class="component">
          <count-increment></count-increment>
        </div>
        <div class="component">
          <focus-input></focus-input>
        </div>
        <div class="component">
          <level-display></level-display>
        </div>
      </div>

      <div class="section">
        <h2>Lifecycle</h2>
        <div class="component">
          <page-title></page-title>
        </div>
        <div class="component">
          <time-component></time-component>
        </div>
      </div>

      <div class="section">
        <h2>Component Composition</h2>
        <div class="component">
          <count-content></count-content>
        </div>
        <div class="component">
          <emit-count-content></emit-count-content>
        </div>
        <div class="component">
          <button-content></button-content>
        </div>
        <div class="component">
          <slot-fallback-app></slot-fallback-app>
        </div>
        <div class="component">
          <app-context></app-context>
        </div>
      </div>

      <div class="section">
        <h2>Form Input</h2>
        <div class="component">
          <input-text></input-text>
        </div>
        <div class="component">
          <checkbox-input></checkbox-input>
        </div>
        <div class="component">
          <radio-input></radio-input>
        </div>
        <div class="component">
          <select-input></select-input>
        </div>
      </div>

      <div class="section">
        <h2>WebApp Features</h2>
        <div class="component">
          <fetch-app></fetch-app>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement
  }
}
