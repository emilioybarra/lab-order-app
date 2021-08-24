<template>
  <div class="container py-5">
    <h1 v-if="error.statusCode === 404">
      This page is not found.
    </h1>
    <h1 v-else>
      An error occurred.
    </h1>
    <b-button class="lof-button mb-4" variant="primary" to="/">
      Start Page
    </b-button>
  </div>
</template>

<script>
  export default {
    name: 'error',
    layout: 'plain',
    // eslint-disable-next-line vue/require-prop-types
    props: [ 'error' ]
  }
</script>
