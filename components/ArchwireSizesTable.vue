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
          <b-td class="lof-archwire-sizes-table__row__size" colspan="2">
            {{ archwire.label }}
          </b-td>
          <b-td v-if="archwire.typeDivider.visible" :rowspan="archwire.typeDivider.rowspan" class="lof-archwire-sizes-table__section-type-column" colspan="1">
            <div class="lof-archwire-sizes-table__section-type">
              {{ archwire.typeDivider.label }}
            </div>
          </b-td>
          <b-td class="lof-archwire-sizes-table__cell" colspan="2">
            <button
              v-if="!archwire.straight.disabled"
              class="lof-archwire-sizes-table__cell__button"
              @click="toggleArchwireXSize('straight', index)"
            >
              {{ archwire.straight.size }}
            </button>
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td class="lof-archwire-sizes-table__cell" colspan="2">
            <button
              v-if="!archwire.individual.disabled"
              class="lof-archwire-sizes-table__cell__button"
              @click="toggleArchwireXSize('individual', index)"
            >
              {{ archwire.individual.size }}
            </button>
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td v-if="teeth === 'upper' && $validateSelectedLanguage('en', 'de', 'fr')" class="lof-archwire-sizes-table__cell" colspan="2">
            <button
              v-if="!archwire.expansion.disabled"
              class="lof-archwire-sizes-table__cell__button"
              @click="toggleArchwireNumberSize('expansion', index)"
            >
              {{ archwire.expansion.size }}
            </button>
            <div v-else class="lof-archwire-sizes-table__cell__input lof-archwire-sizes-table__cell__input--disable" />
          </b-td>
          <b-td v-if="teeth === 'lower' && $validateSelectedLanguage('en', 'de', 'fr')" class="lof-archwire-sizes-table__cell" colspan="2">
            <button
              v-if="!archwire.compression.disabled"
              class="lof-archwire-sizes-table__cell__button"
              @click="toggleArchwireNumberSize('compression', index)"
            >
              {{ archwire.compression.size }}
            </button>
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
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: true, check: 0 },
            expansion: { size: '', disabled: true, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '14 Ø',
            key: 'size14',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: true, check: 0 },
            expansion: { size: '', disabled: true, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '16 Ø',
            key: 'size16',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: true, check: 0 },
            expansion: { size: '', disabled: true, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '16 x 22',
            key: 'size16x22',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_1',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
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
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
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
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: (this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp') && this.teeth === 'upper') || this.$validateSelectedLanguage('en', 'de', 'fr'),
            label: '16 x 24 ET',
            key: 'size16x24ET',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr') && this.teeth === 'upper',
            label: '16 x 24 EET',
            key: 'size16x24EET',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_2',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('it', 'sp', 'ru', 'jp'),
            label: '18 x 25 (red)',
            key: 'size18x25red',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: false, check: 0 },
            individual: { size: '', disabled: true, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
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
            straight: { size: '', disabled: true, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '17 x 25',
            key: 'size17x25',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: true, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 18',
            key: 'size18x18',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: true, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          },
          {
            rowVisible: this.$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru', 'jp'),
            label: '18 x 25',
            key: 'size18x25_3',
            typeDivider: {
              label: '',
              visible: false
            },
            straight: { size: '', disabled: true, check: 0 },
            individual: { size: '', disabled: false, check: 0 },
            compression: { size: '', disabled: false, check: 0 },
            expansion: { size: '', disabled: false, check: 0 }
          }
        ]
      }
    },

    computed: {
      getArchwireSizes () {
        return this.$store.getters[`${ this.teeth }-teeth/getArchwireSizes`]()
      }
    },

    created () {
      this.archwireSizes.map((size) => {
        size.straight.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].straight.size : ''
        size.straight.check = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].straight.check : 0
        size.individual.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].individual.size : ''
        size.individual.check = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].individual.check : 0
        size.expansion.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].expansion.size : ''
        size.expansion.check = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].expansion.check : 0
        size.compression.size = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].compression.size : ''
        size.compression.check = this.getArchwireSizes[size.key] ? this.getArchwireSizes[size.key].compression.check : 0
      })
    },

    methods: {
      toggleArchwireXSize (column, index) {
        const cell = this.archwireSizes[index][column]
        if (cell.check < 2) {
          cell.check++
          if (cell.check === 1) {
            cell.size = 'X'
          } else {
            cell.size = 'X X'
          }
        } else {
          cell.check = 0
          cell.size = ''
        }

        this.setArchwireSizes()
      },
      toggleArchwireNumberSize (column, index) {
        const cell = this.archwireSizes[index][column]
        console.log(cell)

        if (cell.check < (this.teeth === 'upper' ? 3 : 2)) {
          cell.check++
          cell.size = cell.check
        } else {
          cell.check = 0
          cell.size = ''
        }

        this.setArchwireSizes()
      },
      setArchwireSizes () {
        const archwireSizes = {}
        this.archwireSizes.map((size) => {
          archwireSizes[size.key] = {
            key: size.key,
            straight: {
              size: size.straight.size,
              check: size.straight.check
            },
            individual: {
              size: size.individual.size,
              check: size.individual.check
            },
            compression: {
              size: size.compression.size,
              check: size.compression.check
            },
            expansion: {
              size: size.expansion.size,
              check: size.expansion.check
            }
          }
        })

        this.$store.commit(`${ this.teeth }-teeth/setArchwireSizes`, archwireSizes)
      }
    }
  }
</script>
