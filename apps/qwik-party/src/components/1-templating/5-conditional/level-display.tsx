import { $, component$, useSignal } from "@builder.io/qwik"

export const LevelDisplay = component$(() => {
  const count = useSignal(0)

  const increase = $(() => {
    count.value = count.value + 1
  })

  const decrease = $(() => {
    count.value = count.value - 1
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button type={"button"} onClick$={increase}>
        Increase
      </button>
      <div>
        Counter {count.value}
        {count.value < 3 && <div>Low Level</div>}
        {count.value >= 3 && count.value <= 6 && <div>Middle Level</div>}
        {count.value > 6 && <div>High Level</div>}
      </div>
      <button type={"button"} onClick$={decrease}>
        Decrease
      </button>
    </div>
  )
})
