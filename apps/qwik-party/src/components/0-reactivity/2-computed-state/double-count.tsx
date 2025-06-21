import { component$, useComputed$, useSignal } from "@builder.io/qwik"

export const DoubleCount = component$(() => {
  const count = useSignal(0)
  const countDouble = useComputed$(() => {
    return count.value * 2
  })

  return <div>{countDouble.value}</div>
})
