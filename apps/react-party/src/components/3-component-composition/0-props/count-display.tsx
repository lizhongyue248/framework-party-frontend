type ChildrenProps = {
  count: number
}

export const CountDisplay = (props: ChildrenProps) => {
  return <div>Count display {props.count}</div>
}
