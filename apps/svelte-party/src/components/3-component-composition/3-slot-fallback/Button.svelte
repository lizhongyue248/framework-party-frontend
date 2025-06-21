<script>
let { children } = $props()
</script>

<button type="button">
  {#if children}
    {@render children()}
  {:else}
    <span>No content found</span>
  {/if}
</button>
