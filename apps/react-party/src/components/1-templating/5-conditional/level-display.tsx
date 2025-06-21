import { useState } from "react"

export const LevelDisplay = () => {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount((count) => count + 1)
  }
  const decrease = () => {
    setCount((count) => count - 1)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button type={"button"} onClick={increase}>
        Increase
      </button>
      <div>
        Counter {count}
        {count < 3 && <div>Low Level</div>}
        {count >= 3 && count <= 6 && <div>Middle Level</div>}
        {count > 6 && <div>High Level</div>}
      </div>
      <button type={"button"} onClick={decrease}>
        Decrease
      </button>
    </div>
  )
}
