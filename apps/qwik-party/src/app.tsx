import { component$ } from "@builder.io/qwik"

import "./app.css"
import DeclareState from "./components/reactivity/DeclareState.tsx"

export const App = component$(() => {
  return (
    <>
      <DeclareState />
    </>
  )
})
