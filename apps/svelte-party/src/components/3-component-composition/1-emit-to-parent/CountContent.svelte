<script lang="ts">
import CountDisplay from "./CountDisplay.svelte"
let count = 0

const increment = () => {
  count += 1
}
</script>

<div>
  <div>Count: {count}</div>
  <CountDisplay increment={increment} />
</div>
