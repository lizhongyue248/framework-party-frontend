import { component$ } from "@builder.io/qwik"

export const CountList = component$(() => {
  const numbers = [1, 2, 3, 4]
  return (
    <ul>
      {numbers.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  )
})
