import { createSignal } from "solid-js"
import { CountDisplay } from "./count-display.tsx"

export const CountContent = () => {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <CountDisplay count={count()} setCount={setCount} />
      <div>Parent Count: {count()}</div>
    </div>
  )
}
