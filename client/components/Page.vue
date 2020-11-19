<template>
  <div class="lof-page">
    <div class="lof-page__headline mt-5">
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
    name: 'page'
  }
</script>

<style scoped>

</style>
