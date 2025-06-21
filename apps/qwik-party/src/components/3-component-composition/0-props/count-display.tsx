import { component$ } from "@builder.io/qwik"

type ChildrenProps = {
  count: number
}

export const CountDisplay = component$((props: ChildrenProps) => {
  return <div>Count display {props.count}</div>
})
