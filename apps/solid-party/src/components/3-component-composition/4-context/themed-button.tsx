import { useContext } from "solid-js"
import { ThemeContext, type ThemeContextType } from "./theme-context.tsx"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext)

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button type={"button"} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}
