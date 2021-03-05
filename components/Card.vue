<template>
  <div class="lof-card" :style="!fullWidth ? 'padding-right: 0px;' : ''">
    <div class="lof-card__body" :style="fullWidth ? 'padding-right: 0px; overflow-y: auto;' : ''">
      <div class="lof-card__body-content" :class="fullWidth ? 'w-100' : ''">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',

    props: {
      fullWidth: Boolean
    }
  }
</script>
