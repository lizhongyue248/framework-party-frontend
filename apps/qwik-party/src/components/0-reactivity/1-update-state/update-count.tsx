import { component$, useSignal, useTask$ } from "@builder.io/qwik"

export const UpdateCount = component$(() => {
  const count = useSignal(0)
  useTask$(() => {
    count.value = 2
  })

  return <div>Double count: {count}</div>
})
