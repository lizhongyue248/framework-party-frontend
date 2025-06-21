import { $, component$, useSignal } from "@builder.io/qwik"
import { CountAction } from "./count-action.tsx"

export const CountContent = component$(() => {
  const count = useSignal(0)
  const onIncrease = $(() => {
    count.value = count.value + 1
  })
  const onDecrease = $(() => {
    count.value = count.value - 1
  })

  return (
    <div>
      <div>Count {count.value}</div>
      <CountAction onIncrease$={onIncrease} onDecrease$={onDecrease} />
    </div>
  )
})
