<script setup lang="ts">
import { computed, ref } from "vue"

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
  </div>
</template>
