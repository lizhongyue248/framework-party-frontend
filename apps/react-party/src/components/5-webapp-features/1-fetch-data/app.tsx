import type React from "react"
import { useEffect, useState } from "react"

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

export const App: React.FC = () => {
  const [users, setUsers] = useState<UsersResponse["results"] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data.results)
        setIsLoading(false)
      })
      .catch(() => {
        setError("An error occurred while fetching users")
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Fetching users...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {users?.map((user) => (
        <li key={`user-${user.name.first}-${user.name.last}`}>
          <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </li>
      ))}
    </ul>
  )
}
