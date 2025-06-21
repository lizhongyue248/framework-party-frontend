import type { Component, JSX } from "solid-js"

type Props = {
  title?: JSX.Element
  children?: JSX.Element
}

export const Card: Component<Props> = (props) => {
  return (
    <article>
      <header>{props.title ?? <h2>Card Title</h2>}</header>
      <section>{props.children ?? <p>Card Body</p>}</section>
    </article>
  )
}
