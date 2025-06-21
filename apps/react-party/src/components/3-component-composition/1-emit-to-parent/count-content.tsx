import { useState } from "react"
import { CountAction } from "./count-action.tsx"

export const CountContent = () => {
  const [count, setCount] = useState(0)
  const onIncrease = () => {
    setCount((count) => count + 1)
  }
  const onDecrease = () => {
    setCount((count) => count - 1)
  }

  return (
    <div>
      <div>Count {count}</div>
      <CountAction onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  )
}
