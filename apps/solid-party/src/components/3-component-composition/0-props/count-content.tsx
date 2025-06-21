import { createSignal } from "solid-js"
import { CountDisplay } from "./count-display.tsx"

export const CountContent = () => {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <CountDisplay count={count()} />
      <button type={"button"} onClick={() => setCount(count() + 1)}>
        Increment
      </button>
    </div>
  )
}
