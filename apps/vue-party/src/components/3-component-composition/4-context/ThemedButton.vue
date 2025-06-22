<script setup lang="ts">
import { inject } from "vue"
import { ThemeKey, type ThemeType } from "./ThemeProvider.ts"

const theme = inject<ThemeType>(ThemeKey)
</script>

<template>
  <button :class="theme" @click="() => theme?.toggleTheme()">
    Toggle Theme
  </button>
</template>

