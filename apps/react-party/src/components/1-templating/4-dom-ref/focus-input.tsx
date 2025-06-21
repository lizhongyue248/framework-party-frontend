import { useEffect, useRef } from "react"

export const FocusInput = () => {
  const inputElement = useRef<HTMLInputElement>(null)

  useEffect(() => inputElement.current?.focus(), [])

  return <input type="text" ref={inputElement} />
}
