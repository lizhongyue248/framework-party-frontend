import { component$, useContext } from "@builder.io/qwik"
import { ThemeContext } from "./theme-context.ts"

export const ThemeToggle = component$(() => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <button
        type={"button"}
        onClick$={() => {
          theme.value = theme.value === "dark" ? "light" : "dark"
        }}
      >
        Flip
      </button>
    </div>
  )
})
