import { useEffect, useState } from "react"

export const UpdateCount = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(2)
  }, [])

  return <div>Double count: {count}</div>
}
