<template>
  <div class="lof-swatches">
    <div
      v-for="(swatch, index) in swatches"
      :key="index"
      class="lof-swatches__swatch"
      @click="$emit('selectedSwatch', swatch.color)"
    >
      <div class="lof-swatches__swatch-color" :style="`background-color: ${ swatch.color };`">
        <div v-if="selectedSwatch === swatch.color" class="lof-swatches__swatch-selected">&#10004;</div>
      </div>
      <div class="lof-swatches__swatch-label">{{ swatch.label }}</div>
    </div>
    <div v-for="(swatch, index) in (swatches.length % 4)" :key="`placeholder-${ index }`" class="lof-swatches__swatch" />
  </div>
</template>

<script>
  export default {
    name: 'Swatches',

    props: {
      selectedSwatch: {
        type: String,
        required: true
      },
      swatches: {
        type: Array,
        required: true
      }
    }
  }
</script>
