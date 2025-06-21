import { ThemeProvider } from "./theme-context"
import { ThemeToggle } from "./themed-button.tsx"

export const AppContext = () => {
  return (
    <ThemeProvider>
      Theme Provider <ThemeToggle />
    </ThemeProvider>
  )
}
