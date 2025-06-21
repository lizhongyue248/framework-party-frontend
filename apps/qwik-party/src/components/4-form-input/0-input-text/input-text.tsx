import { component$, useSignal } from "@builder.io/qwik"

export const InputText = component$(() => {
  const text = useSignal("")

  return (
    <>
      <p>{text.value}</p>
      <input bind:value={text} />
    </>
  )
})
