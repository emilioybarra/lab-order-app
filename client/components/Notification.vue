<template>
  <div v-if="showNotification" class="lof-notification">
    <b-alert show :variant="variant" class="lof-notification__box">
      {{ message }}
    </b-alert>
  </div>
</template>

<script>
  export default {
    name: 'notification',

    props: {
      showNotification: {
        type: Boolean,
        required: false
      },
      message: {
        type: String,
        required: false
      },
      variant: {
        type: String,
        required: false
      }
    }
  }
</script>
