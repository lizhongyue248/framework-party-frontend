<script setup lang="ts">
import { ref } from "vue"

const selectedOption = ref("")
</script>

<template>
  <div>
    <select v-model="selectedOption">
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <p>Selected option: {{ selectedOption }}</p>
  </div>
</template>
