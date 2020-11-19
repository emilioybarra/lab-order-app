<template>
  <div class="lof-modal">
    <div v-if="!showContent && showTab" class="lof-modal__tab" @click.stop="show">
      {{ $t('common.buttons.notes') }}
    </div>
    <div v-if="showContent && showTab" class="lof-modal__tab" @click="hide">
      <svg-icon icon="times" class="lof-modal__tab-close" />
    </div>
    <transition name="fade" mode="out-in" @after-enter="showContent = true">
      <div v-if="showModal" class="lof-modal__overlay">
        <transition name="fade" mode="out-in" @after-leave="showModal = false">
          <div v-if="showContent" class="lof-modal__container row">
            <div v-click-outside.stop="hide" class="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 d-flex align-items-center p-0">
              <slot />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'modal',

    props: {
      showTab: {
        type: Boolean,
        required: false,
        default: true
      }
    },

    data () {
      return {
        showModal: false,
        showContent: false
      }
    },

    watch: {
      showModal () {
        document.body.style.overflow = this.showModal ? 'hidden' : ''
      }
    },

    methods: {
      show () {
        this.showModal = true
      },
      hide () {
        console.log('fired')
        this.showContent = false
      }
    }
  }
</script>
