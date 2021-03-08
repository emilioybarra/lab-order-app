<template>
  <modal ref="notesModal" :show-tab="showModalTab">
    <card v-click-outside.stop="hideModal">
      <h4 class="lof-headline lof-headline--3">
        {{ $t('section.m_1.remarksTitle') }}
      </h4>
      <div class="d-flex flex-wrap my-4">
        <checkbox v-model="threeDSetup" class="mr-4" :is-checked="threeDSetup" @input="setThreeDSetup">
          {{ $t('section.m_1.threeDSetup') }}
        </checkbox>
        <checkbox v-model="tpa" class="mr-4" :is-checked="tpa" @input="setTpa">
          {{ $t('section.m_1.tpa') }}
        </checkbox>
        <checkbox v-model="herbst" class="mr-4" :is-checked="herbst" @input="setHerbst">
          {{ $t('section.m_1.herbst') }}
        </checkbox>
        <checkbox v-model="bondableHGTube" class="mr-4" :is-checked="bondableHGTube" @input="setBondableHGTube">
          {{ $t('section.m_1.bondableHGTube') }}
        </checkbox>
        <checkbox v-model="bondableHGTubeWithShell" :is-checked="bondableHGTubeWithShell" @input="setBondableHGTubeWithShell">
          {{ $t('section.m_1.bondableHGTubeWithShell') }}
        </checkbox>
        <checkbox v-if="$validateSelectedLanguage('jp')" v-model="superpositionPhoto" class="mr-4" :is-checked="superpositionPhoto" @input="setSuperpositionPhoto">
          {{ $t('section.m_1.superpositionPhoto') }}
        </checkbox>
        <checkbox v-if="$validateSelectedLanguage('jp')" v-model="dlcSteelWire" class="mr-4" :is-checked="dlcSteelWire" @input="setDlcSteelWire">
          {{ $t('section.m_1.dlcSteelWire') }}
        </checkbox>
        <checkbox v-if="$validateSelectedLanguage('jp')" v-model="upperJaw" class="mr-4" :is-checked="upperJaw" @input="setUpperJaw">
          {{ $t('section.m_1.upperJaw') }}
        </checkbox>
        <checkbox v-if="$validateSelectedLanguage('jp')" v-model="lowerJaw" :is-checked="lowerJaw" @input="setLowerJaw">
          {{ $t('section.m_1.lowerJaw') }}
        </checkbox>
      </div>
      <div>
        <textarea-field id="notes-1" v-model="notes1" :label="$t('section.m_1.notes')" :rows="8" @input="setNotes1" />
      </div>
      <div class="text-center my-4">
        <p class="text-primary" v-html="$t('section.m_1.keyInfo')" />
        <div class="d-flex flex-wrap justify-content-center" v-html="$t('section.m_1.keyInfoLegend')" />
      </div>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="my-4">
        <checkbox v-model="noCorrectionOfBite" :is-checked="noCorrectionOfBite" @input="setNoCorrectionOfBite">
          {{ $t('section.m_2.noCorrectionOfBite') }}
        </checkbox>
      </div>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr')">
        <textarea-field id="notes-2" v-model="notes2" :label="$t('section.m_1.notes')" :rows="6" @input="setNotes2" />
      </div>
      <div v-if="$validateSelectedLanguage('it', 'sp', 'ru', 'jp')">
        <b-table
          small
          bordered
          :items="tableItems"
          :fields="tableFields"
          head-variant="dark"
          thead-class="text-center"
          tbody-class="text-center"
          details-td-class="text-center"
        >
          <template #cell(right_2)="data">
            <div class="d-flex justify-content-center">
              <checkbox
                v-model="right2[data.item.type]"
                no-label
                class="m-0"
                :is-checked="right2[data.item.type]"
                @input="onSetCanineMolar('right2', data.item.type, right2[data.item.type])"
              />
            </div>
          </template>
          <template #cell(right_3)="data">
            <div class="d-flex justify-content-center">
              <checkbox
                v-model="right3[data.item.type]"
                no-label
                class="m-0"
                :is-checked="right3[data.item.type]"
                @input="onSetCanineMolar('right3', data.item.type, right3[data.item.type])"
              />
            </div>
          </template>
          <template #cell(left_2)="data">
            <div class="d-flex justify-content-center">
              <checkbox
                v-model="left2[data.item.type]"
                no-label
                class="m-0"
                :is-checked="left2[data.item.type]"
                @input="onSetCanineMolar('left2', data.item.type, left2[data.item.type])"
              />
            </div>
          </template>
          <template #cell(left_3)="data">
            <div class="d-flex justify-content-center">
              <checkbox
                v-model="left3[data.item.type]"
                no-label
                class="m-0"
                :is-checked="left3[data.item.type]"
                @input="onSetCanineMolar('left3', data.item.type, left3[data.item.type])"
              />
            </div>
          </template>
        </b-table>
      </div>
      <div class="d-flex my-4">
        <div class="d-flex align-items-center ml-3 mr-5">
          <span>{{ $t('section.m_3.tray.title') }}</span>
        </div>
        <div class="w-100">
          <checkbox v-model="nonTransparent" class="p-0" :is-checked="nonTransparent" @input="setNonTransparent">
            {{ $t('section.m_3.tray.nonTransparent') }}
          </checkbox>
          <checkbox v-model="trayTrimmed33" class="ml-3 p-0" :is-checked="trayTrimmed33" @input="setTrayTrimmed33">
            {{ $t('section.m_3.tray.trayTrimmed3_3') }}
          </checkbox>
          <hr>
          <checkbox v-model="transparent" class="p-0" :is-checked="transparent" @input="setTransparent">
            {{ $t('section.m_3.tray.transparent') }}
          </checkbox>
        </div>
      </div>
    </card>
  </modal>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'notes-modal',

    data () {
      return {
        invoiceAddress: false,
        invoiceAddressDropdown: false,
        showModalTab: true,
        threeDSetup: false,
        tpa: false,
        herbst: false,
        bondableHGTube: false,
        bondableHGTubeWithShell: false,
        superpositionPhoto: false,
        dlcSteelWire: false,
        upperJaw: false,
        lowerJaw: false,
        notes1: '',
        noCorrectionOfBite: false,
        notes2: '',
        nonTransparent: false,
        trayTrimmed33: false,
        transparent: false,
        right2: { canine: false, molar: false },
        right3: { canine: false, molar: false },
        left2: { canine: false, molar: false },
        left3: { canine: false, molar: false },
        tableItems: [
          {
            right_label: this.$t('section.m_2.rightCanine'),
            left_label: this.$t('section.m_2.leftCanine'),
            type: 'canine'
          },
          {
            right_label: this.$t('section.m_2.rightMolar'),
            left_label: this.$t('section.m_2.leftMolar'),
            type: 'molar'
          }
        ],
        tableFields: [
          { key: 'right_label', label: '' },
          { key: 'right_2', label: '||', value: 2, side: 'right' },
          { key: 'right_3', label: '|||', value: 3, side: 'right' },
          { key: 'left_label', label: '' },
          { key: 'left_2', label: '||', value: 2, side: 'left' },
          { key: 'left_3', label: '|||', value: 3, side: 'left' }
        ]
      }
    },

    computed: {
      ...mapGetters('notes', [
        'getThreeDSetup',
        'getTpa',
        'getHerbst',
        'getBondableHGTube',
        'getBondableHGTubeWithShell',
        'getSuperpositionPhoto',
        'getDlcSteelWire',
        'getUpperJaw',
        'getLowerJaw',
        'getNotes1',
        'getNoCorrectionOfBite',
        'getNotes2',
        'getNonTransparent',
        'getTrayTrimmed33',
        'getTransparent',
        'getLeft2CanineMolar',
        'getLeft3CanineMolar',
        'getRight2CanineMolar',
        'getRight3CanineMolar'
      ])
    },

    created () {
      this.threeDSetup = this.getThreeDSetup
      this.tpa = this.getTpa
      this.herbst = this.getHerbst
      this.bondableHGTube = this.getBondableHGTube
      this.bondableHGTubeWithShell = this.getBondableHGTubeWithShell
      this.superpositionPhoto = this.getSuperpositionPhoto
      this.dlcSteelWire = this.getDlcSteelWire
      this.upperJaw = this.getUpperJaw
      this.lowerJaw = this.getLowerJaw
      this.notes1 = this.getNotes1
      this.noCorrectionOfBite = this.getNoCorrectionOfBite
      this.notes2 = this.getNotes2
      this.nonTransparent = this.getNonTransparent
      this.trayTrimmed33 = this.getTrayTrimmed33
      this.transparent = this.getTransparent
      this.right2 = { ...this.getRight2CanineMolar }
      this.right3 = { ...this.getRight3CanineMolar }
      this.left2 = { ...this.getLeft2CanineMolar }
      this.left3 = { ...this.getLeft3CanineMolar }
    },

    methods: {
      ...mapMutations('notes', [
        'setThreeDSetup',
        'setTpa',
        'setHerbst',
        'setBondableHGTube',
        'setBondableHGTubeWithShell',
        'setSuperpositionPhoto',
        'setDlcSteelWire',
        'setUpperJaw',
        'setLowerJaw',
        'setNotes1',
        'setNoCorrectionOfBite',
        'setNotes2',
        'setNonTransparent',
        'setTrayTrimmed33',
        'setTransparent',
        'setCanineMolar'
      ]),
      showModal () {
        this.$refs.notesModal.show()
      },
      hideModal () {
        this.$refs.notesModal.hide()
      },
      onSetCanineMolar (side, tooth, value) {
        this.setCanineMolar({ side, tooth, value, sideObject: this[side] })
      }
    }
  }
</script>
