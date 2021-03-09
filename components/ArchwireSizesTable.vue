<template>
  <card class="h-auto position-relative" full-width>
    <b-table-simple table-class="lof-archwire-sizes-table" bordered fixed>
      <colgroup><col><col><col><col></colgroup>
      <b-thead class="lof-archwire-sizes-table__header">
        <b-tr>
          <b-th class="lof-archwire-sizes-table__header-label" colspan="3">
            <span v-if="teeth === 'upper'">{{ $t('section.u_3.pleaseTick') }}</span>
            <span v-if="teeth === 'lower'">{{ $t('section.l_3.pleaseTick') }}</span>
          </b-th>
          <b-th class="lof-archwire-sizes-table__header-label" colspan="2">
            <span v-if="teeth === 'upper'">{{ $t('section.u_3.straight') }}</span>
            <span v-if="teeth === 'lower'">{{ $t('section.l_3.straight') }}</span>
          </b-th>
          <b-th class="lof-archwire-sizes-table__header-label" colspan="2">
            <span v-if="teeth === 'upper'">{{ $t('section.u_3.individual') }}</span>
            <span v-if="teeth === 'lower'">{{ $t('section.l_3.individual') }}</span>
          </b-th>
          <b-th v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="lof-archwire-sizes-table__header-label" colspan="2">
            <span v-if="teeth === 'upper'">{{ $t('common.labels.expansion') }}</span>
            <span v-if="teeth === 'lower'">{{ $t('common.labels.compression') }}</span>
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody class="lof-archwire-sizes-table__body">
        <b-tr v-for="(archwire, index) in archwireSizes" v-if="archwire.rowVisible" :key="index" class="lof-archwire-sizes-table__row">
          <b-td class="text-left" colspan="2">
            {{ archwire.label }}
          </b-td>
          <b-td v-if="archwire.typeDivider.visible" :rowspan="archwire.typeDivider.rowspan" class="lof-archwire-sizes-table__section-type-column" colspan="1">
            <div class="lof-archwire-sizes-table__section-type">
              {{ archwire.typeDivider.label }}
            </div>
          </b-td>
          <b-td class="lof-archwire-sizes-table__cell" colspan="2">
            <input
              v-if="!archwire.straight.disabled"
              v-model="archwire.straight.size"
              class="lof-archwire-sizes-table__cell__input"
              type="number"
              min="1"
              max="9"
              maxlength="1"
              @input="setArchwireSizes"
            >
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td class="lof-archwire-sizes-table__cell" colspan="2">
            <input
              v-if="!archwire.individual.disabled"
              v-model="archwire.individual.size"
              class="lof-archwire-sizes-table__cell__input"
              type="number"
              min="1"
              max="9"
              maxlength="1"
              @input="setArchwireSizes"
            >
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td v-if="teeth === 'upper' && $validateSelectedLanguage('en', 'de', 'fr')" class="lof-archwire-sizes-table__cell" colspan="2">
            <input
              v-if="!archwire.expansion.disabled"
              v-model="archwire.expansion.size"
              class="lof-archwire-sizes-table__cell__input"
              type="number"
              min="1"
              max="9"
              maxlength="1"
              @input="setArchwireSizes"
            >
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td v-if="teeth === 'lower' && $validateSelectedLanguage('en', 'de', 'fr')" class="lof-archwire-sizes-table__cell" colspan="2">
            <input
              v-if="!archwire.compression.disabled"
              v-model="archwire.compression.size"
              class="lof-archwire-sizes-table__cell__input"
              type="number"
              min="1"
              max="9"
              maxlength="1"
              @input="setArchwireSizes"
            >
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </card>
</template>

<script>
  export default {
    name: 'archwire-sizes-table',

    props: {
      teeth: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        archwireSizes: [
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '12 Ø',
            key: 'size12',
            typeDivider: {
              label: this.$t('common.labels.sectionType1'),
              visible: true,
              rowspan: 5
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: true },
            expansion: { size: null, disabled: true }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '14 Ø',
            key: 'size14',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: true },
            expansion: { size: null, disabled: true }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '16 Ø',
            key: 'size16',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: true },
            expansion: { size: null, disabled: true }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '16 x 22',
            key: 'size16x22',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_1',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr') && this.teeth === 'lower',
            label: '18 Ø',
            key: 'size18',
            typeDivider: {
              label: this.$t('common.labels.sectionType2'),
              visible: this.$validateSelectedLanguage('en', 'de', 'fr') && this.teeth === 'lower',
              rowspan: 3
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '16 x 24',
            key: 'size16x24',
            typeDivider: {
              label: this.$t('common.labels.sectionType2'),
              visible: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp') || this.teeth === 'upper',
              rowspan: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp') && this.teeth === 'upper' ? 4 : 3
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: (this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp') && this.teeth === 'upper') || this.$validateSelectedLanguage('en', 'de', 'fr'),
            label: '16 x 24 ET',
            key: 'size16x24ET',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr') && this.teeth === 'upper',
            label: '16 x 24 EET',
            key: 'size16x24EET',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_2',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp'),
            label: '18 x 25 (red)',
            key: 'size18x25red',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: false },
            individual: { size: null, disabled: true },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '17,5 x 17,5',
            key: 'size175x175',
            typeDivider: {
              label: this.$t('common.labels.sectionType3'),
              visible: true,
              rowspan: 4
            },
            straight: { size: null, disabled: true },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '17 x 25',
            key: 'size17x25',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: true },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 18',
            key: 'size18x18',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: true },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_3',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: null, disabled: true },
            individual: { size: null, disabled: false },
            compression: { size: null, disabled: false },
            expansion: { size: null, disabled: false }
          }
        ]
      }
    },

    computed: {
      getArchwireSizes () {
        return this.$store.getters[`${ this.teeth }-teeth/getArchwireSizes`]
      }
    },

    created () {
      this.archwireSizes.map((size) => {
        size.straight.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].straight : null
        size.individual.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].individual : null
        size.expansion.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].expansion : null
        size.compression.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].compression : null
      })
    },

    methods: {
      setArchwireSizes () {
        const archwireSizes = {}
        this.archwireSizes.map((size) => {
          archwireSizes[size.key] = {
            key: size.key,
            straight: size.straight.size,
            individual: size.individual.size,
            compression: size.compression.size,
            expansion: size.expansion.size
          }
        })

        this.$store.commit(`${ this.teeth }-teeth/setArchwireSizes`, archwireSizes)
      }
    }
  }
</script>
