import { createSignal } from "solid-js"

export const Name = () => {
  const [name] = createSignal("John")
  return <div>Name: {name()}</div>
}
