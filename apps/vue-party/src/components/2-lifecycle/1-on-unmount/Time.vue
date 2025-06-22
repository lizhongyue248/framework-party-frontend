<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref(new Date().toLocaleTimeString())

let timer: number

onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date().toLocaleTimeString()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>
