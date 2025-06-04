import { component$, useSignal } from "@builder.io/qwik"

const Name = component$(() => {
  const name = useSignal("John")

  return <h1>Hello {name.value}</h1>
})

export default Name
