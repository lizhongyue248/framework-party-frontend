<script setup lang="ts">
import { inject } from "vue"
import { ThemeKey, type ThemeType } from "./ThemeProvider.ts"

const theme = inject<ThemeType>(ThemeKey)
</script>

<template>
  <div>
    Current Theme: {{ theme?.theme }}
  </div>
</template>

<style scoped>

</style>
