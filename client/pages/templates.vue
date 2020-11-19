<template>
  <page>
    <template #headline>
      {{ $t('common.titles.templates') }}
    </template>
    <template #body>
      <b-skeleton-wrapper class="lof-page__body" :loading="loading">
        <template #loading>
          <div v-for="item in 2" :key="item" class="lof-list-item">
            <div class="col-8 col-md-9 col-lg-7 col-xl-6 offset-lg-1">
              <b-skeleton class="w-100" type="button" animation="fade" />
            </div>
            <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
              <div class="lof-list-item__button">
                <b-skeleton class="lof-list-item__button-icon--loading" type="avatar" animation="fade" />
              </div>
            </div>
          </div>
        </template>

        <list-item
          v-for="template in templates"
          :key="template._id"
          :name="template.title"
          no-download-button
          @onSelect="selectTemplate(template._id)"
          @onDelete="deleteTemplate(template._id)"
        />
        <pagination-bar :pages="Math.ceil(totalTemplates / 2)" :page="currentPage" @selectPage="selectPage" />
      </b-skeleton-wrapper>
    </template>
  </page>
</template>

<script>
  export default {
    name: 'templates',

    data () {
      return {
        loading: true,
        currentPage: 1,
        templates: [],
        template: this.$route.query.template,
        totalTemplates: 0
      }
    },

    watch: {
      currentPage () {
        this.loading = true
        this.getAllTemplates(this.currentPage)
      }
    },

    mounted () {
      this.getAllTemplates()
    },

    methods: {
      selectPage (page) {
        this.currentPage = page
      },
      getAllTemplates (currentPage) {
        this.$store.dispatch(`${ this.$route.query.template }/fetchTemplates`, currentPage).then((response) => {
          if (response) {
            this.templates = response.templates
            this.totalTemplates = response.totalTemplates
            this.loading = false
          }
        })
      },
      selectTemplate (templateId) {
        this.$store.dispatch(`${ this.$route.query.template }/fetchTemplateById`, templateId).then((result) => {
          console.log(result)
          if (result) {
            this.$router.go(-1)
          }
        })
      },
      deleteTemplate (templateId) {
        this.loading = true
        this.$store.dispatch(`${ this.$route.query.template }/deleteTemplateById`, templateId).then((result) => {
          console.log(result)
          if (result) {
            this.getAllTemplates()
          }
        })
      }
    }
  }
</script>
