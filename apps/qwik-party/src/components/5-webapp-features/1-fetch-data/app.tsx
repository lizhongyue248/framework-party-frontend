import { Resource, component$, useResource$, useStylesScoped$ } from "@builder.io/qwik"

type UsersResponse = {
  results: {
    picture: {
      thumbnail: string
    }
    name: {
      first: string
      last: string
    }
  }[]
}

export const fetchUsers = async () => {
  return (await fetch("https://randomuser.me/api/?results=3")).json()
}

export const App = component$(() => {
  const data = useResource$<UsersResponse>(fetchUsers)

  useStylesScoped$(`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
    }
    img {
      border-radius: 50%;
      margin-right: 15px;
    }
    p {
      margin: 0;
      font-size: 18px;
    }
  `)

  return (
    <Resource
      value={data}
      onPending={() => <p>Fetching users...</p>}
      onRejected={() => <p>An error occurred while fetching users</p>}
      onResolved={({ results: users }) => (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
              <p>
                {user.name.first} {user.name.last}
              </p>
            </li>
          ))}
        </ul>
      )}
    />
  )
})
