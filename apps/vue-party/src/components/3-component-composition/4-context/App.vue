<script setup lang="ts">
import { provide, ref } from "vue"
import ThemeContent from "./ThemeContent.vue"
import { ThemeKey } from "./ThemeProvider.ts"
import ThemedButton from "./ThemedButton.vue"

const theme = ref("light")

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light"
}

provide(ThemeKey, { theme, toggleTheme })
</script>

<template>
  <div>
    <h1>Theme Example</h1>
    <ThemeContent />
    <ThemedButton />
  </div>
</template>
