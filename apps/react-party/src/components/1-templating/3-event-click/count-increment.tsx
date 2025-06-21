import { useState } from "react"

export const CountIncrement = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button type={"button"} onClick={incrementCount}>
        Increment
      </button>
    </div>
  )
}
