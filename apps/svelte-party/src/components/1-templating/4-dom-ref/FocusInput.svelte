<script lang="ts">
let inputElement: HTMLInputElement

$effect(() => {
  inputElement.focus()
})
</script>

<input bind:this={inputElement} type="text" />
