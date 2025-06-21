<script lang="ts">
let originalTitle: string

$effect(() => {
  originalTitle = document.title
  document.title = "New Page Title"

  return () => {
    document.title = originalTitle
  }
})
</script>

<div>Check the page title</div>
