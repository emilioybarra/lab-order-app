<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sentForms') }}
    </template>
    <template #body>
      <list-item name="Form 1" />
      <list-item name="Form 2" />
      <list-item name="Form 3" />
      <list-item name="Form 4" />
      <list-item name="Form 5" />
      <pagination-bar v-if="totalTemplates > 5" :pages="Math.ceil(totalTemplates / 5)" :page="currentPage" @selectPage="selectPage" />
    </template>
  </page>
</template>

<script>
  export default {
    name: 'sent-forms',

    data () {
      return {
        currentPage: 1,
        totalTemplates: 10
      }
    },

    methods: {
      selectPage (page) {
        this.currentPage = page
      }
    }
  }
</script>
