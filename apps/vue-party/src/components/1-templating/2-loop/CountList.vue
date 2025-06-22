<script setup lang="ts">
const counts = [1, 2, 3, 4, 5]
</script>

<template>
  <ul>
    <li v-for="count in counts" :key="count">{{ count }}</li>
  </ul>
</template>
