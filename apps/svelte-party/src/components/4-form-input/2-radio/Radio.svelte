<script lang="ts">
let selectedColor = $state("red")
const colors = ["red", "green", "blue"]
</script>

{#each colors as color}
  <label>
    <input type="radio" bind:group={selectedColor} value={color} />
    {color}
  </label>
{/each}

<p>Selected color: {selectedColor}</p>
