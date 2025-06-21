import type { Setter } from "solid-js"

export const CountDisplay = (props: { count: number; setCount: Setter<number> }) => {
  return (
    <div>
      <div>Count: {props.count}</div>
      <button type={"button"} onClick={() => props.setCount(props.count + 1)}>
        Increment
      </button>
    </div>
  )
}
