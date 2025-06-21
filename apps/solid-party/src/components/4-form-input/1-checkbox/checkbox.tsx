import { createSignal } from "solid-js"

export const Checkbox = () => {
  const [checked, setChecked] = createSignal(false)

  return (
    <>
      <p>Checked: {checked().toString()}</p>
      <input
        type="checkbox"
        checked={checked()}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      />
    </>
  )
}
