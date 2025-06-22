<script setup lang="ts">
import { ref } from "vue"
import CountContent from "./CountContent.vue"

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div>
    <CountContent :count="count" />
    <button @click="increment">Increment</button>
  </div>
</template>
