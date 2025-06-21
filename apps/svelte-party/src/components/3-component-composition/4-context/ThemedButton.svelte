<script lang="ts">
import { getContext } from "svelte"
import type { ThemeContextType } from "./theme"

const { theme, toggleTheme } = getContext<ThemeContextType>("theme")
</script>

<button type="button" onclick={toggleTheme}>
  Toggle Theme (Current: {theme})
</button>
