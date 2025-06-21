import { useMemo, useState } from "react"

export const DoubleCount = () => {
  const [count] = useState(10)
  const doubleCount = count * 2
  const doubleCountMemo = useMemo(() => count * 2, [count])
  return (
    <div>
      <div>Count: {count}</div>
      <div>Double Count: {doubleCount}</div>
      <div>Double Count Memo: {doubleCountMemo}</div>
    </div>
  )
}
