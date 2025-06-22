import { createContext } from "@lit/context"

export interface ThemeType {
  current: string
}

export const themeContext = createContext<ThemeType>("themeContext")
