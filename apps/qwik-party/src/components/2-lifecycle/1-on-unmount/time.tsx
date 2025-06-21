import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik"

export const Time = component$(() => {
  const store = useStore({
    time: new Date().toLocaleTimeString()
  })

  useVisibleTask$(({ cleanup }) => {
    const timer = setInterval(() => {
      store.time = new Date().toLocaleTimeString()
    }, 1000)

    cleanup(() => clearInterval(timer))
  })

  return <p>Current time: {store.time}</p>
})
