<template>
  <img :src="require(`../assets/${ directory }/${ icon }.svg`)" :alt="icon">
</template>

<script>
  export default {
    name: 'svg-icon',

    props: {
      icon: {
        type: String,
        required: true
      },
      directory: {
        type: String,
        default: 'images/icons'
      }
    }
  }
</script>
