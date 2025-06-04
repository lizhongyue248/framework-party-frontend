import { useState } from "react"

const Name = () => {
  const [name] = useState("John")

  return <h1>Hello {name}</h1>
}

export default Name
