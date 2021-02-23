<template>
  <div class="lof-textarea-field">
    <label class="lof-textarea-field__label" :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="value"
      class="lof-textarea-field__input"
      :name="name"
      :rows="rows"
      :cols="cols"
      :style="`resize: ${ resizeable ? 'vertical' : 'none' }`"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    name: 'textarea-field',

    props: {
      id: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      resizeable: {
        type: Boolean,
        required: false,
        default: false
      },
      rows: {
        type: Number,
        required: false
      },
      cols: {
        type: Number,
        required: false
      }
    }
  }
</script>
