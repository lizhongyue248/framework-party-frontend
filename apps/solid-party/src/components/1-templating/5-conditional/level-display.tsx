import { createSignal } from "solid-js"

export const LevelDisplay = () => {
  const [count, setCount] = createSignal(0)

  const increase = () => {
    setCount(count() + 1)
  }

  const decrease = () => {
    setCount(count() - 1)
  }

  return (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <button type="button" onClick={increase}>
        Increase
      </button>
      <div>
        Counter {count()}
        {count() < 3 && <div>Low Level</div>}
        {count() >= 3 && count() <= 6 && <div>Middle Level</div>}
        {count() > 6 && <div>High Level</div>}
      </div>
      <button type="button" onClick={decrease}>
        Decrease
      </button>
    </div>
  )
}
