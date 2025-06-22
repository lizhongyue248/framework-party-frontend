<script setup lang="ts">
import { ref } from "vue"

const inputValue = ref("")
</script>

<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      placeholder="Enter some text"
    />
    <p>You entered: {{ inputValue }}</p>
  </div>
</template>
