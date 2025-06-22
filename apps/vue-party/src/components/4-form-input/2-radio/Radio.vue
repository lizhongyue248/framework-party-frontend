<script setup lang="ts">
import { ref } from "vue"

const selectedOption = ref("")
</script>

<template>
  <div>
    <label>
      <input
        type="radio"
        v-model="selectedOption"
        value="option1"
      />
      Option 1
    </label>
    <label>
      <input
        type="radio"
        v-model="selectedOption"
        value="option2"
      />
      Option 2
    </label>
    <p>Selected option: {{ selectedOption }}</p>
  </div>
</template>
