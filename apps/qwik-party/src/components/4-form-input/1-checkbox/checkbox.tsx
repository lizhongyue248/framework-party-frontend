import { component$, useSignal } from "@builder.io/qwik"

export const Checkbox = component$(() => {
  const isAvailable = useSignal(false)

  return (
    <div>
      <input id="is-available" type="checkbox" bind:checked={isAvailable} />
      <label for="is-available">Is available</label>
    </div>
  )
})
