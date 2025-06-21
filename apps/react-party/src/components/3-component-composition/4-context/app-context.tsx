import { ThemeProvider } from "./theme-context.tsx"
import { ThemeToggle } from "./theme-toggle.tsx"

export const AppContext = () => {
  return (
    <ThemeProvider>
      Theme Provider <ThemeToggle />
    </ThemeProvider>
  )
}
