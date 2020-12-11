<template>
  <page>
    <template #headline>
      {{ $t('common.titles.invoiceAddress') }}
    </template>
    <template #body>
      <link-button to="/templates?template=invoice-address" class="mb-2">
        {{ $t('common.buttons.selectFromTemplate') }}
      </link-button>
      <div class="row">
        <input-field
          id="practice"
          v-model="practice"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.practice')"
          name="practice"
          @input="setPractice"
        />
        <input-field
          id="orthodontist"
          v-model="orthodontist"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.orthodontist')"
          name="orthodontist"
          @input="setOrthodontist"
        />
        <input-field
          id="address"
          v-model="address"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.address')"
          name="address"
          @input="setAddress"
        />
        <input-field
          id="postalcodeTown"
          v-model="postalcodeTown"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.postalcodeTownShort')"
          name="postalcodeTown"
          @input="setPostalcodeTown"
        />
        <input-field
          id="telephone"
          v-model="telephone"
          type="tel"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.telephone')"
          name="telephone"
          @input="setTelephone"
        />
        <input-field
          id="fax"
          v-model="fax"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.telefax')"
          name="fax"
          @input="setFax"
        />
        <input-field
          id="email"
          v-model="email"
          type="email"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.email')"
          name="email"
          @input="setEmail"
        />
        <input-field
          id="ust-id"
          v-model="ustId"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.idVat')"
          name="ust-id"
          @input="setUstId"
        />
      </div>
      <div class="row">
        <input-field
          id="patientLastName"
          v-model="patientLastName"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.patient.lastName')"
          name="patientLastName"
          @input="setPatientLastName"
        />
        <input-field
          id="patientFirstName"
          v-model="patientFirstName"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.patient.firstName')"
          name="patientFirstName"
          @input="setPatientFirstName"
        />
        <input-field
          id="patientNumber"
          v-model="patientNumber"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.patient.number')"
          name="patientNumber"
          @input="setPatientNumber"
        />
        <input-field
          id="appointmentDate"
          v-model="appointmentDate"
          type="date"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.patient.dateOfBonding')"
          name="appointmentDate"
          @input="setAppointmentDate"
        />
      </div>
      <div class="row mt-5">
        <div class="col-12 d-flex flex-column">
          <checkbox v-model="orthodontistInvoice" :is-checked="orthodontistInvoice" @input="setOrthodontistInvoice">
            {{ $t('section.h_3.orthodontistInvoice') }}
          </checkbox>
          <checkbox v-model="isShippingAddress" :is-checked="isShippingAddress" @input="differentInvoiceAddress">
            {{ $t('section.h_3.shippingAddress') }}
          </checkbox>
        </div>
      </div>
      <transition name="expand" @after-enter="invoiceAddress = true">
        <div v-if="invoiceAddressDropdown" class="invoice-address-expand-box">
          <transition name="fade" @after-leave="invoiceAddressDropdown = false">
            <div v-if="invoiceAddress" class="row my-4">
              <input-field
                id="shippingAddress"
                v-model="shippingAddress"
                class="col-12 col-sm-6"
                :label="$t('section.h_2.address')"
                name="shippingAddress"
                @input="setShippingAddress"
              />
              <input-field
                id="shippingPostalcodeTown"
                v-model="shippingPostalcodeTown"
                class="col-12 col-sm-6"
                :label="$t('section.h_2.postalcodeTownShort')"
                name="shippingPostalcodeTown"
                @input="setShippingPostalcodeTown"
              />
            </div>
          </transition>
        </div>
      </transition>
      <div class="d-flex flex-column align-items-center my-5">
        <b-button class="lof-button mb-4" variant="primary" @click="openTemplateTitleModal">
          {{ $t('common.buttons.saveAsTemplate') }}
        </b-button>
        <link-button to="/steps/step-2" arrow-icon>
          {{ $t('common.buttons.next') }}
        </link-button>
      </div>
      <modal ref="templateTitle" :show-tab="false">
        <card v-click-outside.stop="closeTemplateTitleModal" class="h-auto">
          <h3 class="lof-headline lof-headline--2 my-4">
            Template Title
          </h3>
          <form @submit.prevent="saveAsTemplate">
            <input-field
              id="templateTitle"
              v-model="templateTitle"
              label="Template Title"
              name="templateTitle"
              required
            />
            <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-end">
              <b-button class="lof-button mr-4 w-25" variant="secondary" @click="closeTemplateTitleModal">
                {{ $t('common.buttons.cancel') }}
              </b-button>
              <b-button class="lof-button w-25" variant="primary" @click="saveAsTemplate">
                {{ $t('common.buttons.save') }}
              </b-button>
            </b-button-toolbar>
          </form>
        </card>
      </modal>
    </template>
  </page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'step-1',

    data () {
      return {
        saveAsTemplateModal: false,
        invoiceAddress: false,
        invoiceAddressDropdown: false,
        practice: '',
        orthodontist: '',
        address: '',
        postalcodeTown: '',
        telephone: '',
        fax: '',
        email: '',
        ustId: '',
        patientLastName: '',
        patientFirstName: '',
        patientNumber: '',
        appointmentDate: '',
        orthodontistInvoice: false,
        isShippingAddress: false,
        shippingAddress: '',
        shippingPostalcodeTown: '',
        templateTitle: ''
      }
    },

    computed: {
      ...mapGetters('invoice-address', [
        'getPractice',
        'getOrthodontist',
        'getAddress',
        'getPostalcodeTown',
        'getTelephone',
        'getFax',
        'getEmail',
        'getUstId',
        'getPatientLastName',
        'getPatientFirstName',
        'getPatientNumber',
        'getAppointmentDate',
        'getOrthodontistInvoice',
        'getIsShippingAddress',
        'getShippingAddress',
        'getShippingPostalcodeTown'
      ])
    },

    created () {
      this.practice = this.getPractice
      this.orthodontist = this.getOrthodontist
      this.address = this.getAddress
      this.shippingAddress = this.getShippingAddress
      this.postalcodeTown = this.getPostalcodeTown
      this.shippingPostalcodeTown = this.getShippingPostalcodeTown
      this.telephone = this.getTelephone
      this.fax = this.getFax
      this.email = this.getEmail
      this.ustId = this.getUstId
      this.patientLastName = this.getPatientLastName
      this.patientFirstName = this.getPatientFirstName
      this.patientNumber = this.getPatientNumber
      this.appointmentDate = this.getAppointmentDate
      this.orthodontistInvoice = this.getOrthodontistInvoice
      this.isShippingAddress = this.getIsShippingAddress
      this.invoiceAddress = this.getIsShippingAddress
      this.invoiceAddressDropdown = this.getIsShippingAddress

      this.$store.commit('common/setTemplate', 'invoice-address')
    },

    methods: {
      ...mapMutations('invoice-address', [
        'setPractice',
        'setOrthodontist',
        'setAddress',
        'setPostalcodeTown',
        'setTelephone',
        'setFax',
        'setEmail',
        'setUstId',
        'setPatientLastName',
        'setPatientFirstName',
        'setPatientNumber',
        'setAppointmentDate',
        'setOrthodontistInvoice',
        'setIsShippingAddress',
        'setShippingAddress',
        'setShippingPostalcodeTown'
      ]),
      openTemplateTitleModal () {
        this.$refs.templateTitle.show()
      },
      closeTemplateTitleModal () {
        this.$refs.templateTitle.hide()
        this.templateTitle = ''
      },
      saveAsTemplate () {
        const payload = {
          templateTitle: this.templateTitle,
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch('invoice-address/saveTemplateData', payload).then(() => {
          this.$refs.templateTitle.hide()
          this.templateTitle = ''
        })
      },
      differentInvoiceAddress () {
        this.setIsShippingAddress(this.isShippingAddress)
        this.invoiceAddressDropdown ? this.invoiceAddress = false : this.invoiceAddressDropdown = true
      }
    }
  }
</script>
