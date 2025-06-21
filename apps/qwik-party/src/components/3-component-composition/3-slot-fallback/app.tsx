import { Card } from "./card.tsx"

export const App = () => {
  return (
    <div>
      <Card>
        <span q:slot="title">Qwik</span>
        <span q:slot="body">Content</span>
      </Card>
      <Card>
        <span q:slot="title">No content</span>
      </Card>
      <Card>
        <span q:slot="body">No header</span>
      </Card>
    </div>
  )
}
