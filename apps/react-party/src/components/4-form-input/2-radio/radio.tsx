import type React from "react"
import { useState } from "react"

export const Radio: React.FC = () => {
  const [pickedColor, setPickedColor] = useState("red")

  return (
    <>
      <div>Picked: {pickedColor}</div>
      <input id="blue-pill" type="radio" checked={pickedColor === "blue"} onChange={() => setPickedColor("blue")} value="blue" />
      <label htmlFor="blue-pill">Blue</label>

      <input id="red-pill" type="radio" checked={pickedColor === "red"} onChange={() => setPickedColor("red")} value="red" />
      <label htmlFor="red-pill">Red</label>
    </>
  )
}
