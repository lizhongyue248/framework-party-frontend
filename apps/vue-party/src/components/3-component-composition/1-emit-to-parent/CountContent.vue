<script setup lang="ts">
import { defineEmits, defineProps } from "vue"

interface Props {
  count: number
}

const props = defineProps<Props>()
const emit = defineEmits<(e: "increment") => void>()

const handleClick = () => {
  emit("increment")
}
</script>

<template>
  <div>
    <p>Count: {{ props.count }}</p>
    <button @click="handleClick">Increment</button>
  </div>
</template>
