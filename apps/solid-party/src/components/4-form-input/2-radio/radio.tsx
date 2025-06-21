import { createSignal } from "solid-js"

export const Radio = () => {
  const [pickedColor, setPickedColor] = createSignal("red")

  return (
    <>
      <div>Picked: {pickedColor()}</div>
      <input 
        id="blue-pill" 
        type="radio" 
        checked={pickedColor() === "blue"} 
        onChange={() => setPickedColor("blue")} 
        value="blue" 
      />
      <label for="blue-pill">Blue</label>

      <input 
        id="red-pill" 
        type="radio" 
        checked={pickedColor() === "red"} 
        onChange={() => setPickedColor("red")} 
        value="red" 
      />
      <label for="red-pill">Red</label>
    </>
  )
}
