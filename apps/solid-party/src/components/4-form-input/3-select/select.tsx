import { createSignal } from "solid-js"

export const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true }
]

export const Select = () => {
  const [selectedColorId, setSelectedColorId] = createSignal("2")

  return (
    <div>
      <select value={selectedColorId()} onChange={(e) => setSelectedColorId(e.currentTarget.value)}>
        {colors.map((color) => (
          <option value={color.id} disabled={color.isDisabled}>
            {color.text}
          </option>
        ))}
      </select>
    </div>
  )
}
