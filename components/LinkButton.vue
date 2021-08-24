<template>
  <nuxt-link :to="to" class="lof-link-button">
    <b-button class="lof-link-button__button" variant="primary" :disabled="disabled" @click="$emit('click')">
      <slot />
      <svg-icon v-if="arrowIcon" icon="right-arrow" class="lof-link-button__button-icon" />
    </b-button>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'link-button',

    props: {
      to: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      },
      arrowIcon: {
        type: Boolean,
        required: false
      }
    }
  }
</script>
