<template>
  <page>
    <template #headline>
      {{ $t('common.titles.invoiceAddress') }}
    </template>
    <template #body>
      <b-overlay :show="isLoading" fixed no-wrap z-index="10000" spinner-variant="primary">
        <template #overlay>
          <div class="d-flex flex-column align-items-center">
            <b-spinner class="mb-3" variant="primary" />
            <strong>Saving...</strong>
          </div>
        </template>
      </b-overlay>
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
          v-if="$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp')"
          id="ust-id"
          v-model="ustId"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.idVat')"
          name="ust-id"
          @input="setUstId"
        />
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
          v-if="$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'ru')"
          id="appointmentDate"
          v-model="appointmentDate"
          type="date"
          class="col-12 col-sm-6"
          :label="$t('section.h_2.patient.dateOfBonding')"
          name="appointmentDate"
          @input="setAppointmentDate"
        />
      </div>
      <div v-if="$validateSelectedLanguage('jp')" class="row">
        <div class="col-12 col-sm-6 d-flex flex-column">
          <checkbox
            v-model="standardSetup"
            :is-checked="standardSetup"
            @input="setStandardSetup"
          >
            {{ $t('section.h_3.standardSetup') }}
          </checkbox>
          <p class="lof-content lof-content--2 mb-1">{{ $t('section.h_3.standardSetupText1') }}</p>
          <p class="lof-content lof-content--2 mb-0 text-danger">{{ $t('section.h_3.standardSetupText2') }}</p>
        </div>
        <div class="col-12 col-sm-6 d-flex flex-column">
          <checkbox
            v-model="standardSetupPlus"
            :is-checked="standardSetupPlus"
            @input="setStandardSetupPlus"
          >
            {{ $t('section.h_3.standardSetupPlus') }}
          </checkbox>
          <p class="lof-content lof-content--2 mb-1">{{ $t('section.h_3.standardSetupPlusText1') }}</p>
          <p class="lof-content lof-content--2 mb-0">{{ $t('section.h_3.standardSetupPlusText2') }}</p>
        </div>
        <div class="col-12 col-sm-6 d-flex flex-column">
          <checkbox
            v-model="premiumSetupPlus"
            :is-checked="premiumSetupPlus"
            @input="setPremiumSetupPlus"
          >
            {{ $t('section.h_3.premiumSetupPlus') }}
          </checkbox>
          <p class="lof-content lof-content--2 mb-1">{{ $t('section.h_3.premiumSetupPlusText1') }}</p>
          <p class="lof-content lof-content--2 mb-1">{{ $t('section.h_3.premiumSetupPlusText2') }}</p>
          <p class="lof-content lof-content--2 mb-1">{{ $t('section.h_3.premiumSetupPlusText3') }}</p>
          <p class="lof-content lof-content--2 mb-0 text-danger">{{ $t('section.h_3.premiumSetupPlusText4') }}</p>
        </div>
      </div>
      <div v-if="$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp', 'jp')" class="row mt-5">
        <div class="col-12 d-flex flex-column">
          <checkbox
            v-model="stateOrthodontistNameOnInvoice"
            :is-checked="stateOrthodontistNameOnInvoice"
            @input="setStateOrthodontistNameOnInvoice"
          >
            {{ $t('section.h_3.stateOrthodontistNameOnInvoice') }}
          </checkbox>
          <p v-if="$validateSelectedLanguage('jp')" class="lof-content lof-content--2 mb-0">{{ $t('section.h_3.patientConsent') }}</p>
          <!--                <checkbox-->
          <!--                  v-if="$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp')"-->
          <!--                  v-model="isShippingAddress"-->
          <!--                  :is-checked="isShippingAddress"-->
          <!--                  @input="differentInvoiceAddress"-->
          <!--                >-->
          <!--                  {{ $t('section.h_3.shippingAddress') }}-->
          <!--                </checkbox>-->
        </div>
      </div>

      <!--      <transition v-if="$validateSelectedLanguage('en', 'de', 'fr', 'it', 'sp')" name="expand" @after-enter="invoiceAddress = true">-->
      <!--        <div v-if="invoiceAddressDropdown" class="input-field-expand-box">-->
      <!--          <transition name="fade" @after-leave="invoiceAddressDropdown = false">-->
      <!--            <div v-if="invoiceAddress" class="row my-4">-->
      <!--              <input-field-->
      <!--                id="shippingAddress"-->
      <!--                v-model="shippingAddress"-->
      <!--                class="col-12 col-sm-6"-->
      <!--                :label="$t('section.h_2.address')"-->
      <!--                name="shippingAddress"-->
      <!--                @input="setShippingAddress"-->
      <!--              />-->
      <!--              <input-field-->
      <!--                id="shippingPostalcodeTown"-->
      <!--                v-model="shippingPostalcodeTown"-->
      <!--                class="col-12 col-sm-6"-->
      <!--                :label="$t('section.h_2.postalcodeTownShort')"-->
      <!--                name="shippingPostalcodeTown"-->
      <!--                @input="setShippingPostalcodeTown"-->
      <!--              />-->
      <!--            </div>-->
      <!--          </transition>-->
      <!--        </div>-->
      <!--      </transition>-->

      <div class="d-flex flex-column align-items-center my-5">
        <b-button class="lof-button mb-4" variant="primary" @click="openTemplateTitleModal">
          {{ $t('common.buttons.saveAsTemplate') }}
        </b-button>
        <link-button to="/steps/step-2" arrow-icon>
          {{ $t('common.buttons.next') }}
        </link-button>
      </div>
    </template>
  </page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'step-1',
    middleware: 'isTermsAndConditionsAccepted',

    data () {
      return {
        isLoading: false,
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
        standardSetup: false,
        standardSetupPlus: false,
        premiumSetupPlus: false,
        stateOrthodontistNameOnInvoice: false,
        isShippingAddress: false,
        shippingAddress: '',
        shippingPostalcodeTown: ''
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
        'getStandardSetup',
        'getStandardSetupPlus',
        'getPremiumSetupPlus',
        'getStateOrthodontistNameOnInvoice',
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
      this.standardSetup = this.getStandardSetup
      this.standardSetupPlus = this.getStandardSetupPlus
      this.premiumSetupPlus = this.getPremiumSetupPlus
      this.stateOrthodontistNameOnInvoice = this.getStateOrthodontistNameOnInvoice
      this.isShippingAddress = this.getIsShippingAddress

      this.invoiceAddress = this.getIsShippingAddress
      this.invoiceAddressDropdown = this.getIsShippingAddress
    },

    beforeRouteLeave (to, from, next) {
      this.isLoading = true
      if (!this.shippingAddress && !this.shippingPostalcodeTown) {
        this.setIsShippingAddress(false)
      }

      if (!this.isShippingAddress) {
        this.setShippingAddress('')
        this.setShippingPostalcodeTown('')
      }

      this.$nextTick(() => {
        next()
      })
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
        'setStandardSetup',
        'setStandardSetupPlus',
        'setPremiumSetupPlus',
        'setStateOrthodontistNameOnInvoice',
        'setIsShippingAddress',
        'setShippingAddress',
        'setShippingPostalcodeTown'
      ]),
      openTemplateTitleModal () {
        this.$root.$emit('showTemplateTitleModal', 'invoice-address', 'Template')
      },
      differentInvoiceAddress () {
        this.setIsShippingAddress(this.isShippingAddress)
        this.invoiceAddressDropdown ? this.invoiceAddress = false : this.invoiceAddressDropdown = true
      }
    }
  }
</script>
