<template>
  <div class="lof-pagination-bar">
    <div class="lof-pagination-bar__container col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1">
      <div v-if="currentPage !== 1" class="lof-pagination-bar__arrows lof-pagination-bar__arrows--left-arrow" @click="previousPage">
        <svg-icon class="lof-pagination-bar__arrows-icon" icon="right-arrow" />
      </div>
      <span v-if="currentPage === 1" class="lof-pagination-bar__ends">—</span>
      <div v-if="pages > 5" class="lof-pagination-bar__pages">
        <div
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === 1 }"
          @click="selectCurrentPage(1)"
        >
          <span>1</span>
        </div>
        <div v-if="currentPage > 3">
          ...
        </div>
        <div
          v-for="page in [ currentPage + 1, currentPage + 2, currentPage + 3 ]"
          v-if="currentPage === 1"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
        <div
          v-for="page in [ currentPage, currentPage + 1, currentPage + 2 ]"
          v-if="currentPage <= 2 && currentPage !== 1"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
        <div
          v-for="page in [ currentPage - 1, currentPage, currentPage + 1 ]"
          v-if="currentPage > 2 && currentPage + 1 < pages"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
        <div
          v-for="page in [ currentPage - 2, currentPage - 1, currentPage ]"
          v-if="currentPage === (pages - 1) && currentPage !== pages"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
        <div v-if="currentPage < pages - 2">
          ...
        </div>
        <div
          v-for="page in [ currentPage - 3, currentPage - 2, currentPage - 1, currentPage ]"
          v-if="currentPage === pages"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
        <div
          v-if="currentPage !== pages"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === pages }"
          @click="selectCurrentPage(pages)"
        >
          <span>{{ pages }}</span>
        </div>
      </div>
      <div v-if="pages < 6" class="lof-pagination-bar__pages">
        <div
          v-for="page in pages"
          :key="page"
          class="lof-pagination-bar__page"
          :class="{ 'lof-pagination-bar__page--current-page': currentPage === page }"
          @click="selectCurrentPage(page)"
        >
          <span>{{ page }}</span>
        </div>
      </div>
      <span v-if="currentPage === pages" class="lof-pagination-bar__ends">—</span>
      <div v-if="currentPage !== pages" class="lof-pagination-bar__arrows" @click="nextPage">
        <svg-icon class="lof-pagination-bar__arrows-icon" icon="right-arrow" />
      </div>
    </div>
    <div class="col-4 col-md-3 col-lg-3 col-xl-2" />
  </div>
</template>

<script>
  export default {
    name: 'pagination-bar',

    props: {
      pages: {
        type: Number,
        required: true
      },
      page: {
        type: Number
      }
    },

    data () {
      return {
        currentPage: this.page
      }
    },

    watch: {
      page () {
        this.currentPage = this.page
      },
      currentPage () {
        this.$emit('selectPage', this.currentPage)
      }
    },

    methods: {
      selectCurrentPage (page) {
        this.currentPage = page
      },
      previousPage () {
        this.currentPage--
      },
      nextPage () {
        this.currentPage++
      }
    }
  }
</script>
