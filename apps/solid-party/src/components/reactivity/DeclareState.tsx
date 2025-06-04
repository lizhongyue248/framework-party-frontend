import { createSignal } from "solid-js"

const Name = () => {
  const [name] = createSignal("John")

  return <h1>Hello {name()}</h1>
}

export default Name
