<script lang="ts">
const { increment }: { increment: () => void } = $props()
</script>

<div>
  <button type="button" onclick={() => increment()}>
    Increment
  </button>
</div>
