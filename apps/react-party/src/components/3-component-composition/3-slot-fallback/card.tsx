import type * as React from "react"
import type { FC } from "react"

type Props = {
  title?: React.ReactNode
  children?: React.ReactNode
}

export const Card: FC<Props> = ({ title, children }) => {
  return (
    <article>
      <header>{title ?? <h2>Card Title</h2>}</header>
      <section>{children ?? <p>Card Body</p>}</section>
    </article>
  )
}
