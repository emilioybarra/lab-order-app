<template>
  <div class="col">
    <teeth-canvas ref="upperTeethCanvas" teeth-image="upper" />
    <div class="d-flex flex-column justify-content-center align-items-center mt-3">
      <checkbox v-model="onlySetup" :is-checked="onlySetup" @input="setOnlySetup">
        {{ $t('section.u_1.onlySetup') }}
      </checkbox>
      <p v-if="$validateSelectedLanguage('jp')" class="text-danger">{{ $t('section.u_1.euroTypeInfo') }}</p>
    </div>

    <b-button-toolbar class="d-flex justify-content-center">
      <b-button class="lof-button mx-2 mb-2" variant="primary" @click="openTemplateTitleModal">
        {{ $t('common.buttons.saveAsTemplate') }}
      </b-button>
      <link-button to="/templates?template=upper-teeth" class="mx-2 mb-2">
        {{ $t('common.buttons.selectFromTemplate') }}
      </link-button>
    </b-button-toolbar>

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
        <checkbox v-model="resolveCrowding" :is-checked="resolveCrowding" @input="showResolveCrowdingFields">
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
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'UpperTeethForm',

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
      async saveData () {
        if (!this.resolveCrowding && !this.boltonDiscrepancy) {
          this.setRcMm('')
          this.setRcWhere('')
        }

        return await this.$refs.upperTeethCanvas.saveCanvas()
      },
      showResolveCrowdingFields () {
        this.setResolveCrowding(this.resolveCrowding)
        this.resolveCrowdingFieldsDropdown ? this.resolveCrowdingFields = false : this.resolveCrowdingFieldsDropdown = true
      },
      showReduceOverjetFields () {
        this.setReduceOverjet(this.reduceOverjet)
        this.reduceOverjetFieldsDropdown ? this.reduceOverjetFields = false : this.reduceOverjetFieldsDropdown = true
      },
      openTemplateTitleModal () {
        this.$root.$emit('showTemplateTitleModal', 'upper-teeth', 'Teeth')
      }
    }
  }
</script>
