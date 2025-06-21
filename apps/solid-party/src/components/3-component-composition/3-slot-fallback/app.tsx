import { Card } from "./card"

export const App = () => {
  return (
    <div>
      <Card>
        <div slot="title">Custom Title</div>
        <div slot="body">Custom Body</div>
      </Card>
      <Card>
        <div slot="title">Only Title</div>
      </Card>
      <Card>
        <div slot="body">Only Body</div>
      </Card>
      <Card />
    </div>
  )
}
