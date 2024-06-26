<template>
  <page>
    <template #headline>
      {{ $t('common.titles.templates') }}
    </template>
    <template #body>
      <b-skeleton-wrapper class="d-flex flex-column" :loading="loading">
        <template #loading>
          <div v-for="item in 5" :key="item" class="lof-list-item">
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1">
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
          no-external-button
          @onSelect="selectTemplate(template._id)"
          @onDelete="deleteTemplate(template._id)"
        />
        <div v-for="item in (5 - templates.length)" v-if="!!templates.length" :key="item" class="lof-list-item">
          <div class="col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1" />
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
  import { navigationBackController } from '~/utils/navigationBackController'

  export default {
    name: 'templates',
    middleware: 'isTermsAndConditionsAccepted',

    data () {
      return {
        loading: true,
        currentPage: 1,
        templates: [],
        template: '',
        templatePage: '',
        totalTemplates: 0
      }
    },

    computed: {
      getUserId () {
        return this.$store.getters['auth/getUser']._id
      },
      capitalizeTemplatePage () {
        return this.templatePage ? this.templatePage[0].toUpperCase() + this.templatePage.slice(1) : ''
      }
    },

    watch: {
      currentPage () {
        this.loading = true
        this.getAllTemplates(this.currentPage)
      }
    },

    created () {
      if (this.$route.query.template !== 'invoice-address') {
        this.templatePage = this.$route.query.template.replace(/(upper-|lower-)/, '')
      }
      this.template = this.$route.query.template.replace('archwires', 'teeth')
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
          templatePath: this.$route.query.template,
          userId: this.getUserId
        }

        this.$store.dispatch('common/fetchTemplates', payload).then((response) => {
          if (!response) { this.$router.push('/unauthorized') }
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
          userId: this.getUserId
        }

        const storeDispatchPath = this.templatePage
          ? `${ this.template }/fetch${ this.capitalizeTemplatePage }ById`
          : `${ this.template }/fetchTemplateById`

        this.$store.dispatch(storeDispatchPath, payload).then((response) => {
          if (!response) { this.$router.push('/unauthorized') }
          if (response) {
            this.$router.push(navigationBackController(this.$route))
          }
        })
      },
      deleteTemplate (templateId) {
        this.loading = true
        const payload = {
          templateId,
          templatePath: this.$route.query.template,
          userId: this.getUserId
        }

        this.$store.dispatch('common/deleteTemplateById', payload).then((response) => {
          if (!response) { this.$router.push('/unauthorized') }
          if (response) {
            this.getAllTemplates(this.currentPage)
          }
        })
      }
    }
  }
</script>
