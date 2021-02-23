<template>
  <page>
    <template #headline>
      {{ $t('common.titles.templates') }}
    </template>
    <template #body>
      <b-skeleton-wrapper class="d-flex flex-column" :loading="loading">
        <template #loading>
          <div v-for="item in 5" :key="item" class="lof-list-item">
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
        <div v-if="!templates.length && !loading" class="d-flex justify-content-center lof-headline lof-headline--3">
          {{ $t('common.headlines.emptyTemplates') }}
        </div>
        <list-item
          v-for="template in templates"
          v-if="!!templates.length"
          :key="template._id"
          :name="template.title"
          no-download-button
          @onSelect="selectTemplate(template._id)"
          @onDelete="deleteTemplate(template._id)"
        />
        <div v-for="item in (5 - templates.length)" v-if="!!templates.length" :key="item" class="lof-list-item">
          <div class="col-8 col-md-9 col-lg-7 col-xl-6 offset-lg-1" />
          <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
            <div class="lof-list-item__button" />
          </div>
        </div>
      </b-skeleton-wrapper>
      <pagination-bar v-if="totalTemplates > 5" :pages="Math.ceil(totalTemplates / 5)" :page="currentPage" @selectPage="selectPage" />
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
      this.getAllTemplates(this.currentPage)
    },

    methods: {
      selectPage (page) {
        this.currentPage = page
      },
      getAllTemplates (currentPage) {
        const payload = {
          currentPage,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch(`${ this.$route.query.template }/fetchTemplates`, payload).then((response) => {
          if (response) {
            this.templates = response.templates
            this.totalTemplates = response.totalTemplates
            this.currentPage = response.currentPage
            this.loading = false
          }
        })
      },
      selectTemplate (templateId) {
        const payload = {
          templateId,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch(`${ this.$route.query.template }/fetchTemplateById`, payload).then((result) => {
          if (result) {
            this.$router.go(-1)
          }
        })
      },
      deleteTemplate (templateId) {
        this.loading = true
        const payload = {
          templateId,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch(`${ this.$route.query.template }/deleteTemplateById`, payload).then(() => {
          this.getAllTemplates(this.currentPage)
        })
      }
    }
  }
</script>
