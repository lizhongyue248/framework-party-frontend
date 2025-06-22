import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { createFetchUsersTask } from "./fetch-users-task"

@customElement("fetch-app")
export class FetchApp extends LitElement {
  fetchUsers = createFetchUsersTask(this)
  render() {
    return this.fetchUsers.render({
      initial: () => html`<span class="initial">Enter a package name to display its npm info</span>`,
      pending: () => html`<p>Fetching users...</p>`,
      error: () => html`<p>An error occurred while fetching users</p>`,
      complete: (data) => html`
        <ul>
          ${data.results.map(
            (user) => html`
              <li>
                <img src=${user.picture.thumbnail} alt="user" />
                <p>${user.name.first} ${user.name.last}</p>
              </li>
            `
          )}
        </ul>
      `
    })
  }
}
