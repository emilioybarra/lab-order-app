<template>
  <div class="lof-scrollable-card" :style="!fullWidth ? 'padding-right: 0px;' : ''">
    <div class="lof-scrollable-card__body" :style="fullWidth ? 'padding-right: 0px; overflow-y: auto;' : ''">
      <div class="lof-scrollable-card__body-content" :class="fullWidth ? 'w-100' : ''">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scrollable-card',

    props: {
      fullWidth: Boolean
    }
  }
</script>
