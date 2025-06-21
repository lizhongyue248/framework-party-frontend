import { type PropFunction, component$ } from "@builder.io/qwik"

type Props = {
  onIncrease$: PropFunction<() => void>
  onDecrease$: PropFunction<() => void>
}

export const CountAction = component$((props: Props) => {
  return (
    <>
      <button type={"button"} onClick$={props.onIncrease$}>
        Increase
      </button>
      <button type={"button"} onClick$={props.onDecrease$}>
        Decrease
      </button>
    </>
  )
})
