import { Card } from "./card.tsx"

export const App = () => {
  return (
    <div>
      <Card title={<span style={{ color: "#4a90e2" }}>React</span>}>Custom Content</Card>
      <Card>Custom Content</Card>
      <Card title={<span style={{ color: "#4a90e2" }}>React</span>} />
    </div>
  )
}
