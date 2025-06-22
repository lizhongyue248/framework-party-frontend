<script setup lang="ts">
import { ref } from "vue"

const isChecked = ref(false)
</script>

<template>
  <div>
    <label>
      <input
        type="checkbox"
        v-model="isChecked"
      />
      Check me
    </label>
    <p>Checkbox is {{ isChecked ? 'checked' : 'unchecked' }}</p>
  </div>
</template>
