<template>
  <b-button
    v-if="to"
    :to="to"
    class="lof-link-button"
    variant="primary"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
    <svg-icon v-if="arrowIcon" icon="right-arrow" class="lof-link-button__button-icon" />
  </b-button>
  <b-button v-else class="lof-link-button" variant="primary" :disabled="disabled" @click="$emit('click')">
    <slot />
    <svg-icon v-if="arrowIcon" icon="right-arrow" class="lof-link-button__button-icon" />
  </b-button>
</template>

<script>
  export default {
    name: 'link-button',

    props: {
      to: {
        type: String,
        required: false
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
