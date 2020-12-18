<template>
  <div class="lof-list-item">
    <div class="col-8 col-md-9 col-lg-7 col-xl-6 offset-lg-1">
      <b-button variant="primary" class="w-100" @click="onSelect">
        {{ name }}
      </b-button>
    </div>
    <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
      <div v-if="!noDeleteButton" class="lof-list-item__button lof-list-item__button--times" @click="onDelete">
        <svg-icon class="lof-list-item__button-icon lof-list-item__button-icon--times" icon="times" />
      </div>
      <div v-if="!noDownloadButton" class="lof-list-item__button" @click="onDownload">
        <svg-icon class="lof-list-item__button-icon lof-list-item__button-icon--download" icon="download" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-item',

    props: {
      name: {
        type: String,
        required: true
      },
      noDownloadButton: {
        type: Boolean
      },
      noDeleteButton: {
        type: Boolean
      }
    },

    methods: {
      onSelect () {
        this.$emit('onSelect')
      },
      onDelete () {
        this.$emit('onDelete')
      },
      onDownload () {
        this.$emit('onDownload')
      }
    }
  }
</script>
