<template>
  <div>
    <div v-if="bothSideLabels || sideLabel" class="lof-input-field">
      <label v-if="bothSideLabels || sideLabel === 'left'" class="lof-input-field__label lof-input-field__label--side-label" :for="id">
        {{ leftLabel }}
      </label>
      <input
        :id="id"
        :value="value"
        class="lof-input-field__input lof-input-field__input--side-label"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
      <label v-if="bothSideLabels || sideLabel === 'right'" class="lof-input-field__label lof-input-field__label--side-label lof-input-field__label--side-label-right" :for="id">
        {{ rightLabel }}
      </label>
    </div>
    <div v-else class="lof-input-field lof-input-field--floating-label">
      <input
        :id="id"
        :value="value"
        class="lof-input-field__input lof-input-field__input--floating-label"
        :type="type"
        :required="required"
        :name="name"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
      <label class="lof-input-field__label lof-input-field__label--floating-label" :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'input-field',

    props: {
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        default: false
      },
      leftLabel: {
        type: String,
        required: false
      },
      rightLabel: {
        type: String,
        required: false
      },
      id: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String
      },
      placeholder: {
        type: String,
        default: ' '
      },
      sideLabel: {
        type: String
      },
      bothSideLabels: {
        type: Boolean
      }
    }
  }
</script>
