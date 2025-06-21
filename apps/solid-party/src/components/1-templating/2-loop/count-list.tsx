import { For } from "solid-js"

export const CountList = () => {
  const counts = [1, 2, 3, 4, 5]

  return (
    <ul>
      <For each={counts}>{(count) => <li>Count: {count}</li>}</For>
    </ul>
  )
}
