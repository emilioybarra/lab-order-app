<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sentForms') }}
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
          v-for="orderForm in orderForms"
          :key="orderForm._id"
          :name="orderForm.patient.firstName"
          no-delete-button
          @onSelect="selectOrderForm(orderForm._id)"
          @onDownload="downloadOrderForm(orderForm._id)"
        />
        <pagination-bar v-if="totalOrderForms > 5" :pages="Math.ceil(totalOrderForms / 5)" :page="currentPage" @selectPage="selectPage" />
      </b-skeleton-wrapper>
    </template>
  </page>
</template>

<script>
  export default {
    name: 'sent-forms',

    data () {
      return {
        loading: true,
        currentPage: 1,
        orderForms: [],
        totalOrderForms: 0
      }
    },

    watch: {
      currentPage () {
        this.loading = true
        this.getAllOrderForms(this.currentPage)
      }
    },

    mounted () {
      this.getAllOrderForms(this.currentPage)
    },

    methods: {
      selectPage (page) {
        this.currentPage = page
      },
      getAllOrderForms (currentPage) {
        const payload = {
          currentPage,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch('order-form/fetchOrderForms', payload).then((response) => {
          if (response) {
            this.orderForms = response.orderForms
            this.totalOrderForms = response.totalOrderForms
            this.currentPage = response.currentPage
            this.loading = false
          }
        })
      },
      selectOrderForm (orderFormId) {
        const payload = {
          orderFormId,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch('order-form/fetchOrderFormById', payload).then((result) => {
          if (result) {
            this.$router.go(-1)
          }
        })
      },
      downloadOrderForm (orderFormId) {
        console.log(orderFormId)
      }
    }
  }
</script>
