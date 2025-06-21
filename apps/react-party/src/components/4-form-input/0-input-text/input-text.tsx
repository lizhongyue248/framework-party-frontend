import type React from "react"
import { useState } from "react"

export const InputText: React.FC = () => {
  const [text, setText] = useState("")

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  )
}
