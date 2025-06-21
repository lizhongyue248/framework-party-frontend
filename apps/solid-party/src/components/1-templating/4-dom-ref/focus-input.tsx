import { createSignal, onMount } from "solid-js"

export const FocusInput = () => {
  let inputRef: HTMLInputElement | undefined
  const [isFocused, setIsFocused] = createSignal(false)

  onMount(() => {
    if (inputRef) {
      inputRef.focus()
    }
  })

  return (
    <div>
      <input ref={inputRef} type="text" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      <div>Input is focused: {isFocused() ? "Yes" : "No"}</div>
    </div>
  )
}
