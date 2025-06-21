<script lang="ts">
const count = $state(10)
const doubleCount = $derived(count * 2)
</script>

<div>
  <div>Count: {count}</div>
  <div>Double Count: {doubleCount}</div>
</div>
