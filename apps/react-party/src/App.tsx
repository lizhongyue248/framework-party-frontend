import type React from "react"
import "./App.css"

import { Name } from "./components/0-reactivity/0-declare-state/name"
import { UpdateCount } from "./components/0-reactivity/1-update-state/update-count"
import { DoubleCount } from "./components/0-reactivity/2-computed-state/double-count"
import { HelloWorld } from "./components/1-templating/0-minimal-template/hello-world"
import { Styling } from "./components/1-templating/1-styling/styling"
import { CountList } from "./components/1-templating/2-loop/count-list"
import { CountIncrement } from "./components/1-templating/3-event-click/count-increment"
import { FocusInput } from "./components/1-templating/4-dom-ref/focus-input"
import { LevelDisplay } from "./components/1-templating/5-conditional/level-display"
import { PageTitle } from "./components/2-lifecycle/0-on-mount/page-title"
import { Time } from "./components/2-lifecycle/1-on-unmount/time"
import { CountContent } from "./components/3-component-composition/0-props/count-content"
import { CountContent as EmitCountContent } from "./components/3-component-composition/1-emit-to-parent/count-content"
import { ButtonContent } from "./components/3-component-composition/2-slot/button-content"
import { App as SlotFallback } from "./components/3-component-composition/3-slot-fallback/app"
import { AppContext } from "./components/3-component-composition/4-context/app-context"
import { InputText } from "./components/4-form-input/0-input-text/input-text"
import { Checkbox } from "./components/4-form-input/1-checkbox/checkbox"
import { Radio } from "./components/4-form-input/2-radio/radio"
import { Select } from "./components/4-form-input/3-select/select"
import { App as FetchApp } from "./components/5-webapp-features/1-fetch-data/app"

const App: React.FC = () => {
  return (
    <>
      <div className="section">
        <h2>Reactivity</h2>
        <div className="component">
          <Name />
        </div>
        <div className="component">
          <UpdateCount />
        </div>
        <div className="component">
          <DoubleCount />
        </div>
      </div>

      <div className="section">
        <h2>Templating</h2>
        <div className="component">
          <HelloWorld />
        </div>
        <div className="component">
          <Styling />
        </div>
        <div className="component">
          <CountList />
        </div>
        <div className="component">
          <CountIncrement />
        </div>
        <div className="component">
          <FocusInput />
        </div>
        <div className="component">
          <LevelDisplay />
        </div>
      </div>

      <div className="section">
        <h2>Lifecycle</h2>
        <div className="component">
          <PageTitle />
        </div>
        <div className="component">
          <Time />
        </div>
      </div>

      <div className="section">
        <h2>Component Composition</h2>
        <div className="component">
          <CountContent />
        </div>
        <div className="component">
          <EmitCountContent />
        </div>
        <div className="component">
          <ButtonContent />
        </div>
        <div className="component">
          <SlotFallback />
        </div>
        <div className="component">
          <AppContext />
        </div>
      </div>

      <div className="section">
        <h2>Form Input</h2>
        <div className="component">
          <InputText />
        </div>
        <div className="component">
          <Checkbox />
        </div>
        <div className="component">
          <Radio />
        </div>
        <div className="component">
          <Select />
        </div>
      </div>

      <div className="section">
        <h2>WebApp Features</h2>
        <div className="component">
          <FetchApp />
        </div>
      </div>
    </>
  )
}

export default App
