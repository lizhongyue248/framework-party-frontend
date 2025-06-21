type Props = {
  onIncrease: () => void
  onDecrease: () => void
}

export const CountAction = (props: Props) => {
  return (
    <>
      <button type={"button"} onClick={props.onIncrease}>
        Increase
      </button>
      <button type={"button"} onClick={props.onDecrease}>
        Decrease
      </button>
    </>
  )
}
