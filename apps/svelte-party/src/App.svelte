<script lang="ts">
import Name from "./components/0-reactivity/0-declare-state/Name.svelte"
import UpdateCount from "./components/0-reactivity/1-update-state/UpdateCount.svelte"
import DoubleCount from "./components/0-reactivity/2-computed-state/DoubleCount.svelte"
import HelloWorld from "./components/1-templating/0-minimal-template/HelloWorld.svelte"
import Styling from "./components/1-templating/1-styling/Styling.svelte"
import CountList from "./components/1-templating/2-loop/CountList.svelte"
import CountIncrement from "./components/1-templating/3-event-click/CountIncrement.svelte"
import FocusInput from "./components/1-templating/4-dom-ref/FocusInput.svelte"
import LevelDisplay from "./components/1-templating/5-conditional/LevelDisplay.svelte"
import PageTitle from "./components/2-lifecycle/0-on-mount/PageTitle.svelte"
import Time from "./components/2-lifecycle/1-on-unmount/Time.svelte"
import CountContent from "./components/3-component-composition/0-props/CountContent.svelte"
import { default as EmitCountContent } from "./components/3-component-composition/1-emit-to-parent/CountContent.svelte"
import ButtonContent from "./components/3-component-composition/2-slot/ButtonContent.svelte"
import { default as SlotFallback } from "./components/3-component-composition/3-slot-fallback/ButtonContent.svelte"
import AppContext from "./components/3-component-composition/4-context/AppContext.svelte"
import InputText from "./components/4-form-input/0-input-text/InputText.svelte"
import Checkbox from "./components/4-form-input/1-checkbox/Checkbox.svelte"
import Radio from "./components/4-form-input/2-radio/Radio.svelte"
import Select from "./components/4-form-input/3-select/Select.svelte"
import { default as FetchApp } from "./components/5-webapp-features/1-fetch-data/App.svelte"
</script>

<main>
  <div class="section">
    <h2>Reactivity</h2>
    <div class="component">
      <Name />
    </div>
    <div class="component">
      <UpdateCount />
    </div>
    <div class="component">
      <DoubleCount />
    </div>
  </div>

  <div class="section">
    <h2>Templating</h2>
    <div class="component">
      <HelloWorld />
    </div>
    <div class="component">
      <Styling />
    </div>
    <div class="component">
      <CountList />
    </div>
    <div class="component">
      <CountIncrement />
    </div>
    <div class="component">
      <FocusInput />
    </div>
    <div class="component">
      <LevelDisplay />
    </div>
  </div>

  <div class="section">
    <h2>Lifecycle</h2>
    <div class="component">
      <PageTitle />
    </div>
    <div class="component">
      <Time />
    </div>
  </div>

  <div class="section">
    <h2>Component Composition</h2>
    <div class="component">
      <CountContent />
    </div>
    <div class="component">
      <EmitCountContent />
    </div>
    <div class="component">
      <ButtonContent />
    </div>
    <div class="component">
      <SlotFallback />
    </div>
    <div class="component">
      <AppContext />
    </div>
  </div>


  <div class="section">
    <h2>Form Input</h2>
    <div class="component">
      <InputText />
    </div>
    <div class="component">
      <Checkbox />
    </div>
    <div class="component">
      <Radio />
    </div>
    <div class="component">
      <Select />
    </div>
  </div>


  <div class="section">
    <h2>WebApp Features</h2>
    <div class="component">
      <FetchApp />
    </div>
  </div>
</main>

<style>
</style>
