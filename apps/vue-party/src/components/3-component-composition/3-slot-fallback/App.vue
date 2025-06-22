<script setup lang="ts">
import Card from './Card.vue'
</script>

<template>
  <div>
    <Card>
      <template #title>Custom Title</template>
      <template #body>Custom Body</template>
    </Card>

    <Card>
      <template #title>Only Title</template>
    </Card>

    <Card>
      <template #body>Only Body</template>
    </Card>

    <Card />
  </div>
</template>
