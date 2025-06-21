import { component$, useStyles$ } from "@builder.io/qwik"

export const Styling = component$(() => {
  useStyles$(`
    .title {
      color: red;
    }
  `)

  return (
    <>
      <h1 class="title">I am red</h1>
    </>
  )
})
