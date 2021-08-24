<template>
  <div class="lof-modal">
    <div v-if="!showContent && showTab && !showOnlyCloseTab" class="lof-tab" @click.stop="show">
      <svg-icon icon="notes" class="lof-tab__icon" />
    </div>
    <div v-if="showContent && showTab || showContent && showOnlyCloseTab" class="lof-tab" @click="hide">
      <svg-icon icon="times" class="lof-tab__icon" />
    </div>
    <transition name="fade" mode="out-in" @after-enter="showContent = true">
      <div v-if="showModal" class="lof-overlay">
        <transition name="fade" mode="out-in" @after-leave="showModal = false">
          <div v-if="showContent" class="lof-modal__container">
            <card v-click-outside.stop="{ handler: 'closeModal' }" class="lof-modal__container__card" :class="heightAuto ? 'h-auto' : ''" :full-width="fullWidth">
              <slot />
            </card>
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
      showTab: Boolean,
      showOnlyCloseTab: {
        type: Boolean,
        default: false
      },
      fullWidth: Boolean,
      heightAuto: Boolean,
      clickOutside: {
        type: Boolean,
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
        this.showContent = false
      },
      closeModal () {
        if (this.clickOutside) {
          this.$emit('closeModal')
        }
      }
    }
  }
</script>
