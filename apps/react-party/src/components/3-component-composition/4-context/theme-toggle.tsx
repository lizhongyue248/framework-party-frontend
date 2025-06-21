import { useContext } from "react"
import { ThemeContext } from "./theme-context.tsx"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button type={"button"} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}
