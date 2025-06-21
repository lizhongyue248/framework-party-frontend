<script lang="ts">
export const colors = [
  { id: 1, text: "red" },
  { id: 2, text: "blue" },
  { id: 3, text: "green" },
  { id: 4, text: "gray", isDisabled: true }
]

let selectedColorId = $state(2)
</script>

<div>
  <select bind:value={selectedColorId}>
    {#each colors as color}
      <option value={color.id} disabled={color.isDisabled}>
        {color.text}
      </option>
    {/each}
  </select>
</div>
