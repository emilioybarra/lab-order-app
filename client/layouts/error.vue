<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/" class="lof-link-button">
      <b-button class="lof-link-button__button" variant="primary">
        Home
      </b-button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'error',

    // eslint-disable-next-line vue/require-prop-types
    props: [ 'error' ]

    // layout: 'blog' // you can set a custom layout for the error page
  }
</script>
