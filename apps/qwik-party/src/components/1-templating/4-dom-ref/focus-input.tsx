import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik"

export const FocusInput = component$(() => {
  const inputElement = useSignal<HTMLInputElement>()

  useVisibleTask$(({ track }) => {
    const el = track(inputElement)
    el?.focus()
  })

  return <input type="text" ref={inputElement} placeholder={"DomRef"} />
})
