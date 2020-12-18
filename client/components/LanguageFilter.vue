<template>
  <div class="lof-language-filter">
    <div class="lof-language-filter__icons col-8 col-md-9 col-lg-7 col-xl-6 offset-lg-1">
      <div
        :class="{ 'lof-language-filter__icon-container--active': allFilter }"
        class="lof-language-filter__icon-container lof-language-filter__icon-container--all"
        @click="selectAllFilter"
      >
        All
      </div>
      <div
        v-for="filterItem in filters"
        :key="filterItem.filter"
        class="lof-language-filter__icon-container"
        :class="{ 'lof-language-filter__icon-container--active': filterItem.active }"
        @click="selectFilter(filterItem.filter, filterItem.active)"
      >
        <svg-icon class="lof-language-filter__icon" :icon="filterItem.filter" />
      </div>
    </div>
    <div class="col-4 col-md-3 col-lg-3 col-xl-2" />
  </div>
</template>

<script>
  export default {
    name: 'language-filter',

    data () {
      return {
        allFilter: false,
        activeFilters: [],
        filters: [
          {
            filter: 'de',
            active: false
          },
          {
            filter: 'en',
            active: false
          },
          {
            filter: 'fr',
            active: false
          },
          {
            filter: 'it',
            active: false
          },
          {
            filter: 'jp',
            active: false
          },
          {
            filter: 'ru',
            active: false
          },
          {
            filter: 'sp',
            active: false
          }

        ]
      }
    },

    methods: {
      selectAllFilter () {
        this.allFilter = !this.allFilter

        this.filters.map((filterItem, i) => {
          setTimeout(() => {
            filterItem.active = this.allFilter
            if (this.allFilter) {
              this.activeFilters.push(filterItem.filter)
            } else {
              this.activeFilters = this.activeFilters.filter(filter => filter !== filterItem)
            }
          }, i * 10)
        })
      },
      selectFilter (filter, active) {
        const selectedFilter = this.filters.find(filterItem => filterItem.filter === filter)
        selectedFilter.active = !active
        if (selectedFilter.active) {
          this.activeFilters.push(filter)
        } else {
          this.activeFilters = this.activeFilters.filter(filterItem => filterItem !== filter)
        }
      }
    }
  }
</script>
