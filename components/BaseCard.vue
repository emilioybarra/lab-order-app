<template>
  <div class="lof-base-card">
    <div class="lof-base-card__body">
      <div class="lof-base-card__body-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'base-card',

    props: {
      fullWidth: Boolean
    }
  }
</script>
