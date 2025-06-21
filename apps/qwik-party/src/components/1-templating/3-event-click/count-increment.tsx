import { $, component$, useSignal } from "@builder.io/qwik"

export const CountIncrement = component$(() => {
  const count = useSignal(0)

  const incrementCount = $(() => {
    count.value++
  })

  return (
    <div>
      <p>Counter: {count.value}</p>
      <button type={"button"} onClick$={incrementCount}>
        Increment
      </button>
    </div>
  )
})
