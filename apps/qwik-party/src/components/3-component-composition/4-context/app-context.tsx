import { component$, useContextProvider, useSignal } from "@builder.io/qwik"
import { ThemeContext } from "./theme-context.ts"
import { ThemeToggle } from "./theme-toggle.tsx"

export const AppContext = component$(() => {
  const theme = useSignal("dark")
  useContextProvider(ThemeContext, theme)
  return (
    <div>
      Theme is {theme.value}
      <ThemeToggle />
    </div>
  )
})
