<template>
  <img :src="require(`~/assets/images/icons/${ icon }.svg`)" :alt="icon">
</template>

<script>
  export default {
    name: 'svg-icon',

    props: {
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>
