import { useEffect, useState } from "react"

export const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <p>Current time: {time}</p>
}
