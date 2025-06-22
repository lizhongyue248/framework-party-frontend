import { Task } from "@lit/task"
import type { LitElement } from "lit"
export type UsersResponse = {
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

export const createFetchUsersTask = (element: LitElement) => {
  return new Task(element, {
    task: async (): Promise<UsersResponse> => {
      const response = await fetch("https://randomuser.me/api/?results=3")
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    },
    args: () => [],
    autoRun: true
  })
}
