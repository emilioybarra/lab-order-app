<template>
  <div class="lof-toolbar">
    <div class="col-12 col-md-12 col-lg-10 col-xl-10 offset-lg-1">
      <form class="lof-toolbar__top-bar" @submit.prevent="onSearch">
        <b-icon-funnel v-if="!filtersDropdown" class="lof-toolbar__filters__icon" @click="showFilters" />
        <b-icon-funnel-fill v-else class="lof-toolbar__filters__icon" @click="showFilters" />
        <div class="lof-toolbar__searchbar">
          <b-input-group>
            <template #prepend>
              <b-dropdown :text="searchKey.label" variant="primary">
                <b-dropdown-item v-for="item in searchKeyList" :key="item.value" @click="setSearchKey(item)">{{ item.label }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <input
              v-model="searchQuery"
              type="search"
              class="lof-toolbar__searchbar__input"
              :placeholder="$t('common.labels.searchPlaceholder')"
              @input="setSearchQuery"
            >
          </b-input-group>
        </div>
        <b-button-group>
          <b-button class="lof-toolbar__search-button" variant="primary" :disabled="!searchKey.searchable" type="submit">
            {{ $t('common.buttons.search') }}
          </b-button>
          <b-button class="lof-toolbar__search-button" variant="primary" @click="onShowAllForms">{{ $t('common.buttons.allForms') }}</b-button>
        </b-button-group>
      </form>
      <transition name="expand" @after-enter="filters = true">
        <div v-if="filtersDropdown" class="filters-expand-box">
          <transition name="fade" @after-leave="filtersDropdown = false">
            <div v-if="filters" class="lof-toolbar__filters-container">
              <div class="lof-toolbar__filters">
                <div class="lof-toolbar__filters__languages">
                  <b-button
                    v-for="lang in languageButtons"
                    :key="lang.label"
                    class="lof-toolbar__filters__language"
                    variant="outline-primary"
                    size="sm"
                    pill
                    :pressed="lang.pressed"
                    @click="setLanguageFilters(lang)"
                  >
                    <svg-icon class="lof-toolbar__icon" :icon="lang.label" />
                  </b-button>
                </div>
                <div class="lof-toolbar__filters__datePicker">
                  <b-form-radio-group
                    v-model="activeDateFilters.mode"
                    name="date-mode"
                    class="lof-toolbar__filters__datePicker__date-mode"
                    @input="setDateFilters"
                  >
                    <b-form-radio inline value="date">{{ $t('common.buttons.date') }}</b-form-radio>
                    <b-form-radio inline value="dateRange">{{ $t('common.buttons.dateRange') }}</b-form-radio>
                  </b-form-radio-group>
                  <b-form-datepicker
                    v-model="activeDateFilters.fromDate"
                    selected-variant="primary"
                    today-variant="primary"
                    nav-button-variant="secondary"
                    :locale="$i18n.localeProperties.iso"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    class="lof-toolbar__filters__datePicker__date-input"
                    :class="{ 'lof-toolbar__filters__datePicker__date-input--single-date': activeDateFilters.mode === 'date' }"
                    :placeholder="activeDateFilters.mode === 'date' ? $t('common.buttons.date') : $t('common.buttons.fromDate')"
                    @input="setDateFilters"
                  />
                  <b-form-datepicker
                    v-if="activeDateFilters.mode === 'dateRange'"
                    v-model="activeDateFilters.toDate"
                    selected-variant="primary"
                    today-variant="primary"
                    nav-button-variant="secondary"
                    :locale="$i18n.localeProperties.iso"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    class="lof-toolbar__filters__datePicker__date-input ml-sm-3"
                    :placeholder="$t('common.buttons.toDate')"
                    @input="setDateFilters"
                  />
                </div>
              </div>
              <b-button class="lof-toolbar__apply-button" variant="primary" @click="onApplyFilters">{{ $t('common.buttons.apply') }}</b-button>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toolbar',

    data () {
      return {
        searchQuery: '',
        filters: false,
        filtersDropdown: false,
        activeLanguageFilters: [],
        activeDateFilters: {
          mode: 'date',
          fromDate: '',
          toDate: ''
        },
        languageButtons: [
          { label: 'de', pressed: false },
          { label: 'en', pressed: false },
          { label: 'fr', pressed: false },
          { label: 'it', pressed: false },
          { label: 'jp', pressed: false },
          { label: 'ru', pressed: false },
          { label: 'sp', pressed: false }
        ],
        searchKey: { label: this.$t('common.buttons.select', this.$i18n.locale), value: '', searchable: false },
        searchKeyList: [
          { label: this.$t('section.h_2.practice', this.$i18n.locale), value: 'invoiceAddress.practice', searchable: true },
          { label: this.$t('section.h_2.orthodontist', this.$i18n.locale), value: 'invoiceAddress.orthodontist', searchable: true },
          { label: this.$t('section.h_2.patient.lastName'), value: 'patient.lastName', searchable: true },
          { label: this.$t('section.h_2.patient.firstName'), value: 'patient.firstName', searchable: true }
        ]
      }
    },

    methods: {
      onSearch () {
        this.$emit('onSearch', {
          searchKey: this.searchKey.value,
          searchQuery: this.searchQuery
        })
      },
      onShowAllForms () {
        this.searchQuery = ''
        this.activeLanguageFilters = []
        this.searchKey = {
          value: '',
          searchable: false,
          label: this.$t('common.buttons.select', this.$i18n.locale)
        }
        this.languageButtons.map((lang) => {
          lang.pressed = false
        })
        this.activeDateFilters = {
          mode: 'date',
          fromDate: '',
          toDate: ''
        }

        this.$emit('activeSearchKey', this.searchKey.value)
        this.$emit('activeSearchQuery', this.searchQuery)
        this.$emit('activeDateFilters', this.activeDateFilters)
        this.$emit('activeLanguageFilters', this.activeLanguageFilters)
        this.$emit('onShowAllForms')
      },
      showFilters () {
        this.filtersDropdown ? this.filters = false : this.filtersDropdown = true
      },
      onApplyFilters () {
        this.$emit('onApplyFilters')
      },
      setSearchKey (searchKey) {
        this.searchKey = searchKey
        this.$emit('activeSearchKey', this.searchKey.value)
      },
      setSearchQuery () {
        this.$emit('activeSearchQuery', this.searchQuery)
      },
      setDateFilters () {
        this.$emit('activeDateFilters', this.activeDateFilters)
      },
      setLanguageFilters (selectedLanguage) {
        const language = this.languageButtons.find((lang) => {
          return lang.label === selectedLanguage.label
        })
        language.pressed = !language.pressed
        if (language.pressed) {
          this.activeLanguageFilters.push(language.label)
        } else {
          this.activeLanguageFilters = this.activeLanguageFilters.filter((lang) => {
            return lang !== selectedLanguage.label
          })
        }
        this.$emit('activeLanguageFilters', this.activeLanguageFilters)
      }
    }
  }
</script>
