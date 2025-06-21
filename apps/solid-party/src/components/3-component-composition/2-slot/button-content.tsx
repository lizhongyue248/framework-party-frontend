import type { JSX } from "solid-js"

const Button = (props: { children: JSX.Element }) => {
  return <button type={"button"}>Custom {props.children}</button>
}

export const ButtonContent = () => {
  return (
    <div>
      <Button>
        <span>Click me!</span>
      </Button>
    </div>
  )
}
