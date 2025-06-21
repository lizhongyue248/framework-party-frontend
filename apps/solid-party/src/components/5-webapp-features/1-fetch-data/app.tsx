import { createSignal, createEffect, For, Show } from "solid-js"

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

export const fetchUsers = async (): Promise<UsersResponse> => {
  const response = await fetch("https://randomuser.me/api/?results=3")
  return response.json()
}

export const App = () => {
  const [users, setUsers] = createSignal<UsersResponse["results"] | null>(null)
  const [isLoading, setIsLoading] = createSignal(true)
  const [error, setError] = createSignal<string | null>(null)

  createEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data.results)
        setIsLoading(false)
      })
      .catch(() => {
        setError("An error occurred while fetching users")
        setIsLoading(false)
      })
  })

  return (
    <Show
      when={!isLoading()}
      fallback={<p>Fetching users...</p>}
    >
      <Show
        when={!error()}
        fallback={<p>{error()}</p>}
      >
        <ul>
          <For each={users()}>
            {(user) => (
              <li>
                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </Show>
  )
}
