import { createSignal, onCleanup } from "solid-js"

export const Time = () => {
  const [time, setTime] = createSignal(new Date().toLocaleTimeString())

  const timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  onCleanup(() => {
    clearInterval(timer)
  })

  return <div>Current Time: {time()}</div>
}
