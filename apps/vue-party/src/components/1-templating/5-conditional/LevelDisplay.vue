<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increase = () => {
  count.value++
}

const decrease = () => {
  count.value--
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <button type="button" @click="increase">
      Increase
    </button>
    <div>
      Counter {{ count }}
      <div v-if="count < 3">Low Level</div>
      <div v-else-if="count >= 3 && count <= 6">Middle Level</div>
      <div v-else>High Level</div>
    </div>
    <button type="button" @click="decrease">
      Decrease
    </button>
  </div>
</template>
