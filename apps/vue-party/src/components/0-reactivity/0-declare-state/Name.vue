<script setup lang="ts">
import { reactive, ref } from "vue"

const name = ref("John")
const aName = reactive({
  name: "Bob"
})
</script>

<template>
  <div>Hello {{ name }} {{aName.name}}</div>
</template>
