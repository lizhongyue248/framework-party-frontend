<script lang="ts">
import { getContext } from "svelte"
import type { ThemeContextType } from "./theme"

const themeStore = getContext<ThemeContextType>("theme")
</script>
<div>
  <h2>Theme Content</h2>
  <p>Current theme: {themeStore.theme}</p>
</div>
