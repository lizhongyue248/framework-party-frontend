import { createEffect, createSignal } from "solid-js"

export const UpdateCount = () => {
  const [count, setCount] = createSignal(0)

  createEffect(() => {
    setCount(2)
  })

  return <div>Double count: {count()}</div>
}
