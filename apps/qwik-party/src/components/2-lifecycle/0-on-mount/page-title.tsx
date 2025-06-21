import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik"

export const PageTitle = component$(() => {
  const store = useStore({
    pageTitle: ""
  })

  useVisibleTask$(() => {
    store.pageTitle = document.title
  })

  return <p>Page title: {store.pageTitle}</p>
})
