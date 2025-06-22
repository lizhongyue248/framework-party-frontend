<script lang="ts">
let count = $state(0)

const increment = () => {
  count += 1
}
</script>

<div>
  <div>Count: {count}</div>
  <button onclick={increment}>Increment</button>
</div>
