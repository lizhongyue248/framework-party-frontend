import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik"

export const Card = component$(() => {
  useStylesScoped$(`
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 16px 0;
    }
    .title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .title:empty::before {
      content: 'Fallback title'
    }
    .body {
      font-size: 1em;
    }
    
    .body:empty::before {
      content: 'Fallback body'
    }
  `)
  return (
    <article class="card">
      <header class="title">
        <Slot name="title" />
      </header>
      <section class="body">
        <Slot name="body" />
      </section>
    </article>
  )
})
