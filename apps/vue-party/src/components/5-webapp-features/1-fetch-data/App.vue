<script setup lang="ts">
import useFetchUsers from "./useFetchUser"

const { isLoading, error, data: users } = useFetchUsers()
</script>

<template>
  <p v-if="isLoading">Fetching users...</p>
  <p v-else-if="error">An error while fetching users</p>
  <ul v-else-if="users">
    <li
        v-for="user in users"
        :key="user.login.uuid"
    >
      <img
          :src="user.picture.thumbnail"
          alt="user"
      >
      <p>
        {{ user.name.first }}
        {{ user.name.last }}
      </p>
    </li>
  </ul>
</template>

<style scoped>

</style>
