import type React from "react"
import { useState } from "react"

export const Checkbox: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  return (
    <div>
      <input id="is-available" type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
      <label htmlFor="is-available">Is available</label>
    </div>
  )
}
