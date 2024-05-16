<template>
  <div v-if="showNotification" class="lof-notification">
    <b-alert show :variant="notification.variant" class="lof-notification__box">
      {{ notification.message }}
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
      notification: {
        type: Object,
        required: false
      }
    }
  }
</script>
