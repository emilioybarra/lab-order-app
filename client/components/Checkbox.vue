<template>
  <label class="checkbox">
    <span class="checkbox__container">
      <input :checked="checked" class="checkbox__input" type="checkbox" name="checkbox" @input="onCheck">
      <span class="checkbox__control" :class="{ 'checkbox__control--checked': checked }">
        <svg-icon v-if="checked" icon="check" class="checkbox__check" />
      </span>
    </span>
    <span class="checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',

    props: {
      isChecked: {
        type: Boolean,
        required: false
      }
    },

    data () {
      return {
        checked: this.isChecked
      }
    },

    methods: {
      onCheck (event) {
        this.checked = event.target.checked
        this.$emit('input', event.target.checked)
      }
    }
  }
</script>
