import { useState } from "react"
import { CountDisplay } from "./count-display.tsx"

export const CountContent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type={"button"} onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <CountDisplay count={count} />
    </div>
  )
}
