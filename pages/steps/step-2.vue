<template>
  <page>
    <template #headline>
      {{ $t('common.titles.upperTeeth') }}
    </template>
    <template #body>
      <teeth-canvas :key="$i18n.locale" teeth-image="upper" />
      <div class="d-flex flex-column justify-content-center align-items-center mt-3">
        <checkbox v-model="onlySetup" :is-checked="onlySetup" @input="setOnlySetup">
          {{ $t('section.u_1.onlySetup') }}
        </checkbox>
        <p v-if="$validateSelectedLanguage('jp')" class="text-danger">{{ $t('section.u_1.euroTypeInfo') }}</p>
      </div>
      <tooth-divider />
      <link-button to="/templates?template=upper-teeth" class="mb-2">
        {{ $t('common.buttons.selectFromTemplate') }}
      </link-button>
      <div class="row">
        <div class="col-12">
          <h3 v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.strippingTitle') }}
          </h3>
          <h3 v-if="$validateSelectedLanguage('it', 'sp', 'ru')" class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.notes.title') }}
          </h3>
        </div>
      </div>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="row">
        <div class="col-12 d-flex flex-column">
          <checkbox v-model="boltonDiscrepancy" :is-checked="boltonDiscrepancy" @input="setBoltonDiscrepancy">
            {{ $t('section.u_2.boltonDiscrepancy') }}
          </checkbox>
          <checkbox v-model="resolveCrowding" :is-checked="resolveCrowding" @input="setResolveCrowding">
            {{ $t('section.u_2.resolveCrowding') }}
          </checkbox>
        </div>
      </div>
      <transition v-if="$validateSelectedLanguage('en', 'de', 'fr')" name="expand" @after-enter="resolveCrowdingFields = true">
        <div v-if="resolveCrowdingFieldsDropdown" class="input-field-expand-box">
          <transition name="fade" @after-leave="resolveCrowdingFieldsDropdown = false">
            <div v-if="resolveCrowdingFields" class="row my-4">
              <input-field
                id="rc-mm"
                v-model="rcMm"
                class="col-12 col-sm-6 mb-4"
                :right-label="$t('section.u_2.rcMm')"
                side-label="right"
                @input="setRcMm"
              />
              <input-field
                id="rc-where"
                v-model="rcWhere"
                class="col-12 col-sm-6 mb-4"
                :left-label="$t('section.u_2.rcWhere')"
                side-label="left"
                @input="setRcWhere"
              />
            </div>
          </transition>
        </div>
      </transition>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="row">
        <div class="col-12">
          <checkbox v-model="reduceOverjet" :is-checked="reduceOverjet" @input="showReduceOverjetFields">
            {{ $t('section.u_2.reduceOverjet') }}
          </checkbox>
        </div>
      </div>
      <transition v-if="$validateSelectedLanguage('en', 'de', 'fr')" name="expand" @after-enter="reduceOverjetFields = true">
        <div v-if="reduceOverjetFieldsDropdown" class="input-field-expand-box">
          <transition name="fade" @after-leave="reduceOverjetFieldsDropdown = false">
            <div v-if="reduceOverjetFields" class="row my-4">
              <input-field
                id="ro-mm"
                v-model="roMm"
                class="col-12 col-sm-6 mb-4 w-50"
                :right-label="$t('section.u_2.roMm')"
                side-label="right"
                @input="setRoMm"
              />
              <input-field
                id="ro-where"
                v-model="roWhere"
                class="col-12 col-sm-6 mb-4 w-50"
                :left-label="$t('section.u_2.roWhere')"
                side-label="left"
                @input="setRoWhere"
              />
            </div>
          </transition>
        </div>
      </transition>
      <div v-if="$validateSelectedLanguage('it', 'sp', 'ru', 'jp')" class="row">
        <input-field
          id="notes-stripping-mm"
          v-model="notesStrippingMm"
          both-side-labels
          class="col-12 col-sm-6 mb-4 w-50"
          :left-label="$t('section.u_2.notes.stripping')"
          :right-label="$t('section.u_2.notes.strippingMm')"
          @input="setNotesStrippingMm"
        />
        <input-field
          id="notes-where"
          v-model="notesStrippingWhere"
          class="col-12 col-sm-6 mb-4 w-50"
          :left-label="$t('section.u_2.notes.where')"
          side-label="left"
          @input="setNotesStrippingWhere"
        />
        <div class="col-12 d-flex flex-column">
          <checkbox v-model="notesBoltonDiscrepancy" :is-checked="notesBoltonDiscrepancy" @input="setNotesBoltonDiscrepancy">
            {{ $t('section.u_2.notes.boltonDiscrepancy') }}
          </checkbox>
        </div>
        <div v-if="$validateSelectedLanguage('it', 'sp', 'ru')" class="col-12 d-flex flex-column my-4">
          <textarea-field id="notesBox" v-model="notesBox" :label="$t('section.u_2.notes.boxTitle')" :rows="8" @input="setNotesBox" />
        </div>
      </div>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="row">
        <div class="col-12">
          <h3 class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.upperInfo') }}
          </h3>
        </div>
        <div class="col-12">
          <ul class="list-unstyled" v-html="$t('section.u_2.upperInfoLegend')" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_3.title') }}
          </h3>
        </div>
        <div class="col-12">
          <archwire-sizes-table :key="$i18n.locale" teeth="upper" />
        </div>
      </div>
      <div class="d-flex flex-column align-items-center my-5">
        <b-button class="lof-button mb-4" variant="primary" @click="openTemplateTitleModal">
          {{ $t('common.buttons.saveAsTemplate') }}
        </b-button>
        <link-button to="/steps/step-3" arrow-icon @click="$root.$emit('saveCanvas')">
          {{ $t('common.buttons.next') }}
        </link-button>
      </div>
    </template>
  </page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'step-2',
    middleware: 'isTermsAndConditionsAccepted',

    data () {
      return {
        onlySetup: false,
        boltonDiscrepancy: false,
        resolveCrowding: false,
        rcMm: '',
        rcWhere: '',
        reduceOverjet: false,
        roMm: '',
        roWhere: '',
        notesStrippingMm: '',
        notesStrippingWhere: '',
        notesBoltonDiscrepancy: false,
        notesBox: '',
        resolveCrowdingFields: false,
        resolveCrowdingFieldsDropdown: false,
        reduceOverjetFields: false,
        reduceOverjetFieldsDropdown: false
      }
    },

    computed: {
      ...mapGetters('upper-teeth', [
        'getOnlySetup',
        'getBoltonDiscrepancy',
        'getResolveCrowding',
        'getRcMm',
        'getRcWhere',
        'getReduceOverjet',
        'getRoMm',
        'getRoWhere',
        'getNotesStrippingMm',
        'getNotesStrippingWhere',
        'getNotesBoltonDiscrepancy',
        'getNotesBox'
      ])
    },

    watch: {
      resolveCrowding () {
        !this.resolveCrowding && !this.boltonDiscrepancy ? this.resolveCrowdingFields = false : this.resolveCrowdingFieldsDropdown = true
      },
      boltonDiscrepancy () {
        !this.resolveCrowding && !this.boltonDiscrepancy ? this.resolveCrowdingFields = false : this.resolveCrowdingFieldsDropdown = true
      }
    },

    created () {
      this.onlySetup = this.getOnlySetup
      this.boltonDiscrepancy = this.getBoltonDiscrepancy
      this.resolveCrowding = this.getResolveCrowding
      this.rcMm = this.getRcMm
      this.rcWhere = this.getRcWhere
      this.reduceOverjet = this.getReduceOverjet
      this.roMm = this.getRoMm
      this.roWhere = this.getRoWhere
      this.notesStrippingMm = this.getNotesStrippingMm
      this.notesStrippingWhere = this.getNotesStrippingWhere
      this.notesBoltonDiscrepancy = this.getNotesBoltonDiscrepancy
      this.notesBox = this.getNotesBox

      this.resolveCrowdingFields = this.getResolveCrowding
      this.resolveCrowdingFieldsDropdown = this.getResolveCrowding
      this.reduceOverjetFields = this.getReduceOverjet
      this.reduceOverjetFieldsDropdown = this.getReduceOverjet

      this.$store.commit('common/setTemplate', 'upper-teeth')
    },

    beforeDestroy () {
      if (!this.resolveCrowding && !this.boltonDiscrepancy) {
        this.setRcMm('')
        this.setRcWhere('')
      }
    },

    methods: {
      ...mapMutations('upper-teeth', [
        'setOnlySetup',
        'setBoltonDiscrepancy',
        'setResolveCrowding',
        'setRcMm',
        'setRcWhere',
        'setReduceOverjet',
        'setRoMm',
        'setRoWhere',
        'setNotesStrippingMm',
        'setNotesStrippingWhere',
        'setNotesBoltonDiscrepancy',
        'setNotesBox'
      ]),
      openTemplateTitleModal () {
        this.$root.$emit('showTemplateTitleModal')
      },
      /*
      showResolveCrowdingFields () {
        this.setResolveCrowding(this.resolveCrowding)
        this.resolveCrowdingFieldsDropdown ? this.resolveCrowdingFields = false : this.resolveCrowdingFieldsDropdown = true
      },

       */
      showReduceOverjetFields () {
        this.setReduceOverjet(this.reduceOverjet)
        this.reduceOverjetFieldsDropdown ? this.reduceOverjetFields = false : this.reduceOverjetFieldsDropdown = true
      }
    }
  }
</script>
