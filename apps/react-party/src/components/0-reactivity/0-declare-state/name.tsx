import { useState } from "react"

export const Name = () => {
  const [name] = useState("John")
  return <div>Hello {name}</div>
}
