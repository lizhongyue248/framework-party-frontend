<script lang="ts">
import { writable } from "svelte/store"

const count = writable(0)

const increase = () => {
  count.update((n) => n + 1)
}

const decrease = () => {
  count.update((n) => n - 1)
}
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
  <button type="button" onclick={increase}>
    Increase
  </button>
  <div>
    Counter {$count}
    {#if $count < 3}
      <div>Low Level</div>
    {:else if $count >= 3 && $count <= 6}
      <div>Middle Level</div>
    {:else if $count > 6}
      <div>High Level</div>
    {/if}
  </div>
  <button type="button" onclick={decrease}>
    Decrease
  </button>
</div>
