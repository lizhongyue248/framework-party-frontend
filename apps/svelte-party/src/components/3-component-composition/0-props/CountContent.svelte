<script lang="ts">
import CountDisplay from "./CountDisplay.svelte"

let count = 0

const increment = () => {
  count += 1
}
</script>

<div>
  <CountDisplay count={count} />
  <button type="button" onclick={increment}>
    Increment
  </button>
</div>
