<template>
  <article class="card">
    <header class="title">
      <slot name="title">
        Fallback title
      </slot>
    </header>
    <section class="body">
      <slot name="body">
        Fallback body
      </slot>
    </section>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
}
.title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 8px;
}
.body {
  font-size: 1em;
}
</style>
