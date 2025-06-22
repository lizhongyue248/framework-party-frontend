import type { InjectionKey, Ref } from "vue"

export interface ThemeType {
  theme: Ref<string>
  toggleTheme: () => void
}

export const ThemeKey: InjectionKey<ThemeType> = Symbol("theme")
