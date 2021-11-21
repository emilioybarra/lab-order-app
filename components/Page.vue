<template>
  <div class="lof-page">
    <div v-if="!noHeadline" class="lof-page__headline">
      <headline>
        <slot name="headline" />
      </headline>
    </div>
    <div class="lof-page__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page',

    props: {
      noHeadline: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
