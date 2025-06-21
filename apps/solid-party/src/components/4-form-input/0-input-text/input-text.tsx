import { createSignal } from "solid-js"

export const InputText = () => {
  const [text, setText] = createSignal("")

  return (
    <>
      <p>{text()}</p>
      <input value={text()} onInput={(e) => setText(e.currentTarget.value)} />
    </>
  )
}
