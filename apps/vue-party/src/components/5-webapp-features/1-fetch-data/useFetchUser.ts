import { ref } from "vue"

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

export default function useFetchUsers() {
  const data = ref()
  const error = ref()
  const isLoading = ref(false)

  async function fetchData() {
    isLoading.value = true
    try {
      const response = await fetch("https://randomuser.me/api/?results=3")
      const { results: users }: UserData = await response.json()
      data.value = users
      error.value = undefined
    } catch (err) {
      data.value = undefined
      error.value = err
    }
    isLoading.value = false
  }
  fetchData()

  return { isLoading, error, data }
}
