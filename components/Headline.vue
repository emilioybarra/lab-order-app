<template>
  <div class="lof-page-headline mt-4">
    <h1 class="lof-page-headline__text lof-headline lof-headline--1">
      <slot />
    </h1>
    <tooth-divider />
  </div>
</template>

<script>
  export default {
    name: 'headline'
  }
</script>
