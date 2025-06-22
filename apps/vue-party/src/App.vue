
<script setup lang="ts">
import "./style.css"

import Name from "./components/0-reactivity/0-declare-state/Name.vue"
import UpdateCount from "./components/0-reactivity/1-update-state/UpdateCount.vue"
import DoubleCount from "./components/0-reactivity/2-computed-state/DoubleCount.vue"
import HelloWorld from "./components/1-templating/0-minimal-template/HelloWorld.vue"
import Styling from "./components/1-templating/1-styling/Styling.vue"
import CountList from "./components/1-templating/2-loop/CountList.vue"
import CountIncrement from "./components/1-templating/3-event-click/CountIncrement.vue"
import FocusInput from "./components/1-templating/4-dom-ref/FocusInput.vue"
import LevelDisplay from "./components/1-templating/5-conditional/LevelDisplay.vue"
import PageTitle from "./components/2-lifecycle/0-on-mount/PageTitle.vue"
import Time from "./components/2-lifecycle/1-on-unmount/Time.vue"
import CountContent from "./components/3-component-composition/0-props/App.vue"
import EmitCountContent from "./components/3-component-composition/1-emit-to-parent/App.vue"
import ButtonContent from "./components/3-component-composition/2-slot/ButtonContent.vue"
import SlotFallback from "./components/3-component-composition/3-slot-fallback/App.vue"
import AppContext from "./components/3-component-composition/4-context/App.vue"
import InputText from "./components/4-form-input/0-input-text/InputText.vue"
import Checkbox from "./components/4-form-input/1-checkbox/Checkbox.vue"
import Radio from "./components/4-form-input/2-radio/Radio.vue"
import Select from "./components/4-form-input/3-select/Select.vue"
import FetchApp from "./components/5-webapp-features/1-fetch-data/App.vue"
</script>

<template>
  <div>
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
  </div>
</template>
