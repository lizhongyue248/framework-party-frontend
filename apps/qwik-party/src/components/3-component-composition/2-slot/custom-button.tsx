import { Slot, component$ } from "@builder.io/qwik"

export const CustomButton = component$(() => {
  return (
    <div>
      Custom Button <Slot />
    </div>
  )
})
