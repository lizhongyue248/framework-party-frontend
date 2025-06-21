import { component$, useSignal } from "@builder.io/qwik"
import { CountDisplay } from "./count-display.tsx"

export const CountContent = component$(() => {
  const count = useSignal(0)

  return (
    <div>
      <button type={"button"} onClick$={() => count.value++}>
        Increment
      </button>
      <CountDisplay count={count.value} />
    </div>
  )
})
