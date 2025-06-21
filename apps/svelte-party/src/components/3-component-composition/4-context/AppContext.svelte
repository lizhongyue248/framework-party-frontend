<script lang="ts">
import { setContext } from "svelte"
import ThemeContent from "./ThemeContent.svelte"
import ThemeButton from "./ThemedButton.svelte"

const themeStore = $state({
  theme: "light",
  toggleTheme: () => {
    themeStore.theme = themeStore.theme === "light" ? "dark" : "light"
  }
})
setContext("theme", themeStore)
</script>

<div>
  Theme Provider
  <ThemeContent />
  <ThemeButton />
</div>
