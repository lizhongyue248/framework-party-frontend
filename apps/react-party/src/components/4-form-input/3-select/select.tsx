import type React from "react"
import { useState } from "react"

export const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true }
]

export const Select: React.FC = () => {
  const [selectedColorId, setSelectedColorId] = useState("2")

  return (
    <div>
      <select value={selectedColorId} onChange={(e) => setSelectedColorId(e.target.value)}>
        {colors.map((color) => (
          <option key={color.id} value={color.id} disabled={color.isDisabled}>
            {color.text}
          </option>
        ))}
      </select>
    </div>
  )
}
