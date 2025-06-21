interface UserData {
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

class Response<T> {
  users = $state<T>()
  error = $state()
  isLoading = $state(false)
}

export const useFetchUsers = () => {
  const resp = new Response<UserData["results"]>()

  async function fetchData() {
    resp.isLoading = true
    try {
      const response = await fetch("https://randomuser.me/api/?results=3")
      resp.users = ((await response.json()) as UserData).results
      resp.error = undefined
    } catch (err) {
      resp.error = err
      resp.users = undefined
    }
    resp.isLoading = false
  }

  fetchData()
  return resp
}
