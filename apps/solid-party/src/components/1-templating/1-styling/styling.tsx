import { createSignal } from "solid-js"

export const Styling = () => {
  const [isRed, setIsRed] = createSignal(false)

  return (
    <div>
      <div style={{ color: "blue", "font-weight": "bold" }}>Text with scoped style</div>
      <div style={{ "font-size": "20px" }}>Text with inline style</div>
      <div style={{ color: isRed() ? "red" : "inherit" }}>Text with conditional style</div>
      <button type="button" onClick={() => setIsRed(!isRed())}>
        Toggle Red
      </button>
    </div>
  )
}
