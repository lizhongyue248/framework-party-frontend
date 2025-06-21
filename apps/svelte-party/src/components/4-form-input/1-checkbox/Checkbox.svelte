<script lang="ts">
let isChecked = $state(false)
</script>

<label>
  <input type="checkbox" bind:checked={isChecked} />
  {isChecked ? 'Checked' : 'Unchecked'}
</label>
