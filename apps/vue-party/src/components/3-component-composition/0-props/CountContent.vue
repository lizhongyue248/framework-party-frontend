<script setup lang="ts">
import { defineProps } from "vue"

interface Props {
  count: number
}

const props = defineProps<Props>()
</script>

<template>
  <div>Count: {{ props.count }}</div>
</template>
