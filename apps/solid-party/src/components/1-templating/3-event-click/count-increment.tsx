import { createSignal } from "solid-js"

export const CountIncrement = () => {
  const [count, setCount] = createSignal(0)

  const increment = () => setCount(count() + 1)

  return (
    <div>
      <div>Count: {count()}</div>
      <button type={"button"} onClick={increment}>
        Increment
      </button>
    </div>
  )
}
