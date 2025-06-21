import { onMount } from "solid-js"

export const PageTitle = () => {
  onMount(() => {
    document.title = "New Page Title"
  })

  return <div>Check the page title</div>
}
