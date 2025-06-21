<script lang="ts">
let text = $state("Hello World")
</script>

<p>{text}</p>
<input bind:value={text} />
