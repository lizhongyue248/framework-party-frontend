import { createMemo, createSignal } from "solid-js"

export const DoubleCount = () => {
  const [count] = createSignal(10)
  const doubleCount = () => count() * 2
  const doubleCountMemo = createMemo(() => count() * 2)

  return (
    <div>
      <div>Count: {count()}</div>
      <div>Double Count: {doubleCount()}</div>
      <div>Double Count Memo: {doubleCountMemo()}</div>
    </div>
  )
}
