import { type Component, type JSX, createContext, createSignal } from "solid-js"

export type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}
})

export const ThemeProvider: Component<{ children: JSX.Element }> = (props) => {
  const [theme, setTheme] = createSignal<string>("light")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return <ThemeContext.Provider value={{ theme: theme(), toggleTheme }}>{props.children}</ThemeContext.Provider>
}
