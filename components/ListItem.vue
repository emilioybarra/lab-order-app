<template>
  <div class="lof-list-item">
    <div class="col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1">
      <b-button variant="primary" class="w-100" @click="onSelect">
        <span v-if="!loadingPreview">{{ name }}</span>
        <b-spinner v-if="loadingPreview" small variant="light" />
        <span v-if="loadingPreview">{{ loadingText }}</span>
      </b-button>
    </div>
    <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
      <div v-if="!noDeleteButton" class="lof-list-item__button lof-list-item__button--times" @click="onDelete">
        <svg-icon class="lof-list-item__button-icon lof-list-item__button-icon--times" icon="times" />
      </div>
      <div v-if="!noDownloadButton" class="lof-list-item__button" @click="onDownload">
        <svg-icon v-if="!loadingDownload" class="lof-list-item__button-icon lof-list-item__button-icon--download" icon="download" />
        <b-spinner v-if="loadingDownload" variant="secondary" />
      </div>
      <div v-if="!noExternalButton" class="lof-list-item__button">
        <b-icon-box-arrow-up-right
          v-if="!loadingExternal"
          variant="secondary"
          class="lof-list-item__button-icon lof-list-item__button-icon--external"
          @click="onExternal"
        />
        <b-spinner v-if="loadingExternal" variant="secondary" />
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
      loadingText: {
        type: String
      },
      loadingPreview: {
        type: Boolean
      },
      loadingDownload: {
        type: Boolean
      },
      loadingExternal: {
        type: Boolean
      },
      noDownloadButton: {
        type: Boolean
      },
      noDeleteButton: {
        type: Boolean
      },
      noExternalButton: {
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
      },
      onExternal () {
        this.$emit('onExternal')
      }
    }
  }
</script>
