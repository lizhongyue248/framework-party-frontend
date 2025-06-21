<script lang="ts">
const counts = [1, 2, 3, 4, 5]
</script>

<ul>
  {#each counts as count}
    <li>{count}</li>
  {/each}
</ul>
