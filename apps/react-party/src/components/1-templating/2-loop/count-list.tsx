export const CountList = () => {
  const numbers = [1, 2, 3, 4]
  return (
    <ul>
      {numbers.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  )
}
