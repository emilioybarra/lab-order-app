<template>
  <div>
    <div v-if="showPage1 || showBothPages" id="page-1" class="lof-pdf">
      <!-- H1 Section -->
      <div
        class="lof-pdf__header"
        :class="{
          'lof-pdf__header--variant-2': validateLanguagesToSavedLanguage([ 'ru' ]),
          'lof-pdf__header--variant-3': validateLanguagesToSavedLanguage([ 'jp' ])
        }"
      >
        <div class="lof-pdf__header-logos" :class="{ 'lof-pdf__header-logos--variant-2': validateLanguagesToSavedLanguage([ 'ru', 'jp' ]) }">
          <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__header-logo lof-pdf__header-logo--dwls-logo">
            <img class="w-100" :src="require('~/assets/images/logo.png')">
          </div>
          <div class="lof-pdf__header-logo lof-pdf__header-logo--win-logo" :class="{ 'lof-pdf__header-logo--variant-2': validateLanguagesToSavedLanguage([ 'ru', 'jp' ]) }">
            <img class="w-100" :src="require('~/assets/images/win.png')">
          </div>
        </div>
        <div class="lof-pdf__header-info" :class="{ 'lof-pdf__header-info--variant-2': validateLanguagesToSavedLanguage([ 'ru', 'jp' ]) }">
          <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__header-booking-info">
            <strong class="lof-pdf__header-booking-info__title">{{ $t('section.h_1.contact.title', pdfLanguage) }}</strong>
            <div class="lof-pdf__header-booking-info__item" v-html="$t('section.h_1.contact.openingTimes1', pdfLanguage)" />
            <div class="lof-pdf__header-booking-info__item" v-html="$t('section.h_1.contact.openingTimes2', pdfLanguage)" />
            <div class="lof-pdf__header-booking-info__item" v-html="$t('section.h_1.contact.telephone', pdfLanguage)" />
            <div class="lof-pdf__header-booking-info__item" v-html="$t('section.h_1.contact.fax', pdfLanguage)" />
            <span class="lof-pdf__header-booking-info__item">{{ $t('section.h_1.contact.email', pdfLanguage) }}</span>
          </div>
          <div v-if="validateLanguagesToSavedLanguage([ 'ru', 'jp' ])" class="lof-pdf__header-booking-info lof-pdf__header-booking-info--variant-2-and-3">
            <strong
              v-if="validateLanguagesToSavedLanguage([ 'ru' ])"
              class="lof-pdf__header-booking-info__title lof-pdf__header-booking-info__title--variant-2-and-3"
            >
              {{ $t('section.h_1.contact.title', pdfLanguage) }}
            </strong>
            <div v-if="validateLanguagesToSavedLanguage([ 'ru', 'jp' ])" class="lof-pdf__header-booking-info-logo">
              <img class="w-100" :src="require('~/assets/images/logo.png')">
            </div>
            <div class="lof-pdf__header-booking-info__item">{{ $t('section.h_1.contact.streetHouse', pdfLanguage) }}</div>
            <div class="lof-pdf__header-booking-info__item">{{ $t('section.h_1.contact.zipCityCountry', pdfLanguage) }}</div>
            <div class="lof-pdf__header-booking-info__item">{{ $t('section.h_1.contact.telephone', pdfLanguage) }}</div>
            <span class="lof-pdf__header-booking-info__item">{{ $t('section.h_1.contact.email', pdfLanguage) }}</span>
          </div>
          <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__header-address">
            <strong v-if="$te('section.h_1.address.title', pdfLanguage)" class="lof-pdf__header-address__title">{{ $t('section.h_1.address.title', pdfLanguage) }}</strong>
            <span v-if="$te('section.h_1.address.name', pdfLanguage)" class="lof-pdf__header-address__item">{{ $t('section.h_1.address.name', pdfLanguage) }}</span>
            <span v-if="$te('section.h_1.address.address', pdfLanguage)" class="lof-pdf__header-address__item">{{ $t('section.h_1.address.address', pdfLanguage) }}</span>
            <span v-if="$te('section.h_1.address.streetHouse', pdfLanguage)" class="lof-pdf__header-address__item">{{ $t('section.h_1.address.streetHouse', pdfLanguage) }}</span>
            <span class="lof-pdf__header-address__item">{{ $t('section.h_1.address.zipCity', pdfLanguage) }}</span>
            <span v-if="$te('section.h_1.address.country', pdfLanguage)" class="lof-pdf__header-address__item">{{ $t('section.h_1.address.country', pdfLanguage) }}</span>
            <span v-if="$te('section.h_1.address.telephone', pdfLanguage)" class="lof-pdf__header-address__item">{{ $t('section.h_1.address.telephone', pdfLanguage) }}</span>
          </div>
          <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__header-address">
            <strong class="lof-pdf__header-address__title">{{ $t('section.h_1.address.title', pdfLanguage) }}</strong>
            <span class="lof-pdf__header-address__item">{{ $t('section.h_1.address.name', pdfLanguage) }}</span>
            <span class="lof-pdf__header-address__item">{{ $t('section.h_1.address.address1', pdfLanguage) }}</span>
            <span class="lof-pdf__header-address__item">{{ $t('section.h_1.address.address2', pdfLanguage) }}</span>
            <span class="lof-pdf__header-address__item">{{ $t('section.h_1.address.email', pdfLanguage) }}</span>
          </div>
        </div>
      </div>
      <!-- End H1 Section -->

      <div class="lof-pdf__invoice">
        <!-- H2 Section (With H3 Section only for Japanese) -->
        <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-title">
          <strong>{{ $t('section.h_2.invoiceAddress', pdfLanguage) }}</strong>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.practice', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.practice }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.practice', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.telephone', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.telephone }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telephone', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.patient.lastName', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ patient.lastName }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.lastName', pdfLanguage) }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.orthodontist', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.orthodontist }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.orthodontist', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.telefax', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.fax }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telefax', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.patient.firstName', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ patient.firstName }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.firstName', pdfLanguage) }}
            </div>
          </div>
        </div>
        <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.address', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.address }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.address', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.email', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.email }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.email', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
            <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-field__label" :class="{ 'lof-pdf__invoice-field__label--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }">
              {{ $t('section.h_2.patient.number', pdfLanguage) }}
            </div>
            <span class="lof-pdf__invoice-field__value">{{ patient.number }}</span>
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.number', pdfLanguage) }}
            </div>
          </div>
        </div>
        <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field" :class="{ 'lof-pdf__invoice-field--variant-2': validateLanguagesToSavedLanguage([ 'ru' ]) }">
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.postalCodeTown }}</span>
            <div class="lof-pdf__invoice-field__label">{{ $t('section.h_2.postalcodeTownShort', pdfLanguage) }}</div>
          </div>
          <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.idVat }}</span>
            <div class="lof-pdf__invoice-field__label">{{ $t('section.h_2.idVat', pdfLanguage) }}</div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ patient.dateOfBonding }}</span>
            <div class="lof-pdf__invoice-field__label">{{ $t('section.h_2.patient.dateOfBonding', pdfLanguage) }}</div>
          </div>
        </div>

        <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__invoice-fields-columns">
          <div class="lof-pdf__invoice-fields lof-pdf__invoice-fields--variant-3">
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3">
              <div class="lof-pdf__invoice-field__label lof-pdf__invoice-field__label--variant-3">{{ $t('section.h_2.address', pdfLanguage) }}</div>
              <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.address }}</span>
            </div>
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3">
              <div class="lof-pdf__invoice-field__label lof-pdf__invoice-field__label--variant-3">
                {{ $t('section.h_2.postalcodeTownShort', pdfLanguage) }}
              </div>
              <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.postalcodeTown }}</span>
            </div>
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3 lof-pdf__invoice-field--variant-3-bottom-field">
              <div class="lof-pdf__invoice-field__checkbox">
                <span v-if="!invoiceAddress.stateOrthodontistName" class="lof-pdf__invoice-field__checkbox-check">&#9744;</span>
                <span v-if="invoiceAddress.stateOrthodontistName" class="lof-pdf__invoice-field__checkbox-check">&#9745;</span>
                <div>
                  <strong class="lof-pdf__invoice-field__checkbox-label lof-pdf__invoice-field__checkbox-label--variant-3">
                    {{ $t('section.h_3.stateOrthodontistNameOnInvoice', pdfLanguage) }}
                  </strong>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel">{{ $t('section.h_3.patientConsent', pdfLanguage) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lof-pdf__invoice-fields lof-pdf__invoice-fields--variant-3">
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3">
              <div class="lof-pdf__invoice-field__label lof-pdf__invoice-field__label--variant-3">{{ $t('section.h_2.email', pdfLanguage) }}</div>
              <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.email }}</span>
            </div>
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3">
              <div class="lof-pdf__invoice-field__label lof-pdf__invoice-field__label--variant-3">
                {{ $t('section.h_2.patient.number', pdfLanguage) }}
              </div>
              <span class="lof-pdf__invoice-field__value">{{ invoiceAddress.postalcodeTown }}</span>
            </div>
            <div class="lof-pdf__invoice-field__logo-container lof-pdf__invoice-field--variant-3 lof-pdf__invoice-field--variant-3-bottom-field">
              <img class="lof-pdf__invoice-field__logo" :src="require('~/assets/images/logo_hell.png')">
            </div>
          </div>
          <div class="lof-pdf__invoice-fields lof-pdf__invoice-fields--variant-3">
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3 lof-pdf__invoice-field--border-bottomless">
              <div class="lof-pdf__invoice-field__checkbox lof-pdf__invoice-field__checkbox--variant-3">
                <span
                  v-if="!invoiceAddress.standardSetup"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9744;
                </span>
                <span
                  v-if="invoiceAddress.standardSetup"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9745;
                </span>
                <div>
                  <strong class="lof-pdf__invoice-field__checkbox-label lof-pdf__invoice-field__checkbox-label--variant-3">
                    {{ $t('section.h_3.standardSetup', pdfLanguage) }}
                  </strong>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.standardSetupText1', pdfLanguage) }}
                  </div>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--borderder-top lof-pdf__invoice-field__checkbox-sublabel--variant-3 text-danger">
                    {{ $t('section.h_3.standardSetupText2', pdfLanguage) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3 lof-pdf__invoice-field--border-bottomless">
              <div class="lof-pdf__invoice-field__checkbox lof-pdf__invoice-field__checkbox--variant-3">
                <span
                  v-if="!invoiceAddress.standardSetupPlus"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9744;
                </span>
                <span
                  v-if="invoiceAddress.standardSetupPlus"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9745;
                </span>
                <div>
                  <strong class="lof-pdf__invoice-field__checkbox-label lof-pdf__invoice-field__checkbox-label--variant-3">
                    {{ $t('section.h_3.standardSetupPlus', pdfLanguage) }}
                  </strong>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.standardSetupPlusText1', pdfLanguage) }}
                  </div>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.standardSetupPlusText2', pdfLanguage) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="lof-pdf__invoice-field lof-pdf__invoice-field--variant-3 lof-pdf__invoice-field--border-bottomless">
              <div class="lof-pdf__invoice-field__checkbox lof-pdf__invoice-field__checkbox--variant-3">
                <span
                  v-if="!invoiceAddress.premiumSetupPlus"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9744;
                </span>
                <span
                  v-if="invoiceAddress.premiumSetupPlus"
                  class="lof-pdf__invoice-field__checkbox-check lof-pdf__invoice-field__checkbox-check--variant-3"
                >
                  &#9745;
                </span>
                <div>
                  <strong class="lof-pdf__invoice-field__checkbox-label lof-pdf__invoice-field__checkbox-label--variant-3">
                    {{ $t('section.h_3.premiumSetupPlus', pdfLanguage) }}
                  </strong>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.premiumSetupPlusText1', pdfLanguage) }}
                  </div>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.premiumSetupPlusText2', pdfLanguage) }}
                  </div>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3">
                    {{ $t('section.h_3.premiumSetupPlusText3', pdfLanguage) }}
                  </div>
                  <div class="lof-pdf__invoice-field__checkbox-sublabel lof-pdf__invoice-field__checkbox-sublabel--variant-3 text-danger">
                    {{ $t('section.h_3.premiumSetupPlusText4', pdfLanguage) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- End H2 Section -->

        <!-- H3 Section (Except for Japanese) -->
        <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp', 'ru' ])" class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__invoice-field__checkbox">
              <span v-if="!invoiceAddress.stateOrthodontistName" class="lof-pdf__invoice-field__checkbox-check">&#9744;</span>
              <span v-if="invoiceAddress.stateOrthodontistName" class="lof-pdf__invoice-field__checkbox-check">&#9745;</span>
              <div>
                <strong class="lof-pdf__invoice-field__checkbox-label">{{ $t('section.h_3.stateOrthodontistNameOnInvoice', pdfLanguage) }}</strong>
                <div class="lof-pdf__invoice-field__checkbox-sublabel">{{ $t('section.h_3.patientConsent', pdfLanguage) }}</div>
              </div>
            </div>
            <div v-if="validateLanguagesToSavedLanguage([ 'ru' ])" class="lof-pdf__invoice-field__consent-info">
              {{ $t('section.h_3.patientConsent', pdfLanguage) }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__invoice-field__info">
              <img :src="require('~/assets/images/warning.png')" class="lof-pdf__invoice-field__info-icon">
              <span class="lof-pdf__invoice-field__info-text">{{ $t('section.h_3.shippingAddress', pdfLanguage) }}</span>
            </div>
            <div v-if="validateLanguagesToSavedLanguage([ 'ru' ])" class="lof-pdf__invoice-field__box" />
          </div>
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__logo-container" :class="{ 'lof-pdf__invoice-field__logo-container--variant-2': validateLanguagesToSavedLanguage([ 'ru' ]) }">
              <img v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr', 'it', 'sp' ])" class="lof-pdf__invoice-field__logo" :src="require('~/assets/images/logo_hell.png')">
              <img v-if="validateLanguagesToSavedLanguage([ 'ru' ])" class="lof-pdf__invoice-field__logo" :src="require('~/assets/images/logo.png')">
            </div>
          </div>
        </div>
        <!-- End H3 Section -->

        <div class="lof-pdf__teeth">
          <div class="lof-pdf__teeth__upper">
            <!-- U1 Section -->
            <div class="lof-pdf__teeth__upper-image-container">
              <div class="lof-pdf__teeth__upper-image-container__boxes">
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 30px;left: 90px;">{{ upperTeeth.teethBoxes.upper_1 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 62px;left: 98px;">{{ upperTeeth.teethBoxes.upper_2 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 98px;left: 114px;">{{ upperTeeth.teethBoxes.upper_3 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 134px;left: 116px;">{{ upperTeeth.teethBoxes.upper_4 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 160px;left: 125px;">{{ upperTeeth.teethBoxes.upper_5 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 160px;right: 125px;">{{ upperTeeth.teethBoxes.upper_6 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 134px;right: 116px;">{{ upperTeeth.teethBoxes.upper_7 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 98px;right: 114px;">{{ upperTeeth.teethBoxes.upper_8 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 62px;right: 98px;">{{ upperTeeth.teethBoxes.upper_9 }}</div>
                <div class="lof-pdf__teeth__upper-image-container__box" style="bottom: 30px;right: 90px;">{{ upperTeeth.teethBoxes.upper_10 }}</div>
              </div>
              <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__teeth__upper-image-container__numbers">
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -82px;margin-left: -134px;">18</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -46px;margin-left: -126px;">17</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -6px;margin-left: -114px;">16</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 22px;margin-left: -102px;">15</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 48px;margin-left: -92px;">14</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 74px;margin-left: -78px;">13</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 90px;margin-left: -54px;">12</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 102px;margin-left: -20px;">11</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 102px;margin-left: 14px;">21</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 90px;margin-left: 46px;">22</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 74px;margin-left: 70px;">23</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 48px;margin-left: 84px;">24</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: 22px;margin-left: 94px;">25</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -6px;margin-left: 106px;">26</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -46px;margin-left: 118px;">27</div>
                <div class="lof-pdf__teeth__upper-image-container__numbers-number" style="bottom: -82px;margin-left: 126px;">28</div>
              </div>
              <p v-if="$validateSelectedLanguage('jp')" class="lof-pdf__teeth__upper__euroTypeInfo">{{ $t('section.u_1.euroTypeInfo', pdfLanguage) }}</p>
              <img v-if="upperTeeth.imageData.edited" class="lof-pdf__teeth__upper-image lof-pdf__teeth__upper-image--edited" :src="upperTeeth.imageData.dataURL">
              <img v-if="!upperTeeth.imageData.edited" class="lof-pdf__teeth__upper-image" :src="require('~/assets/images/Oberkiefer.png')">
              <div class="lof-pdf__checkbox lof-pdf__checkbox--upper">
                <span v-if="!upperTeeth.onlySetup" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="upperTeeth.onlySetup" class="lof-pdf__checkbox-check">&#9745;</span>
                <div class="lof-pdf__checkbox-label lof-pdf__checkbox-label--lg">{{ $t('section.u_1.onlySetup', pdfLanguage) }}</div>
              </div>
            </div>
            <!-- End U1 Section -->

            <!-- U2 Section -->
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__upper-info-container">
              <div class="lof-pdf__teeth__upper-stripping">
                <strong>{{ $t('section.u_2.strippingTitle', pdfLanguage) }}</strong>
                <div class="lof-pdf__checkbox">
                  <span v-if="!upperTeeth.boltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="upperTeeth.boltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.u_2.boltonDiscrepancy', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!upperTeeth.resolveCrowding" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="upperTeeth.resolveCrowding" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.u_2.resolveCrowding', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ upperTeeth.rcMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcMm', pdfLanguage) }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcWhere', pdfLanguage) }}</span>
                  <span class="lof-pdf__input-value">{{ upperTeeth.rcWhere }}</span>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!upperTeeth.reduceOverjet" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="upperTeeth.reduceOverjet" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.u_2.reduceOverjet', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ upperTeeth.roMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roMm', pdfLanguage) }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roWhere', pdfLanguage) }}</span>
                  <span class="lof-pdf__input-value">{{ upperTeeth.roWhere }}</span>
                </div>
                <div class="lof-pdf__info-legend">
                  <strong>{{ $t('section.u_2.upperInfo', pdfLanguage) }}</strong>
                  <ul class="lof-pdf__info-list" v-html="$t('section.u_2.upperInfoLegend', pdfLanguage)" />
                </div>
              </div>
            </div>
            <div v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])" class="lof-pdf__teeth__upper-info-container">
              <div class="lof-pdf__teeth__upper-comments">
                <span>{{ $t('section.u_2.notes.title', pdfLanguage) }}</span>
                <div
                  class="lof-pdf__teeth__upper-comments-box lof-pdf__teeth__upper-comments-box--comments"
                  :class="{ 'lof-pdf__teeth__upper-comments-box--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }"
                >
                  <div class="lof-pdf__input">
                    <span class="lof-pdf__input-label">{{ $t('section.u_2.notes.stripping', pdfLanguage) }}</span>
                    <span class="lof-pdf__input-value">{{ upperTeeth.notesStrippingMm }}</span>
                    <span class="lof-pdf__input-label">{{ $t('section.u_2.notes.strippingMm', pdfLanguage) }}</span>
                  </div>
                  <div class="lof-pdf__input">
                    <span class="lof-pdf__input-label">{{ $t('section.u_2.notes.where', pdfLanguage) }}</span>
                    <span class="lof-pdf__input-value">{{ upperTeeth.notesStrippingWhere }}</span>
                  </div>
                  <div class="lof-pdf__checkbox">
                    <span v-if="!upperTeeth.notesBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                    <span v-if="upperTeeth.notesBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                    <div class="lof-pdf__checkbox-label">
                      {{ $t('section.u_2.notes.boltonDiscrepancy', pdfLanguage) }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru' ])" class="lof-pdf__teeth__upper-notes">
                <span>{{ $t('section.u_2.notes.boxTitle', pdfLanguage) }}</span>
                <div class="lof-pdf__teeth__upper-notes-box lof-pdf__teeth__upper-notes-box--notes">{{ upperTeeth.notesBox }}</div>
              </div>
            </div>
            <!-- End U2 Section -->

            <!-- U3 Section -->
            <div class="lof-pdf__teeth__upper-arcs">
              <table class="lof-pdf__teeth__upper-arcs__table">
                <colgroup><col><col><col><col></colgroup>
                <thead>
                  <tr>
                    <th class="lof-pdf__teeth__upper-arcs__table__title" :colspan="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ]) ? 10 : 8">
                      <strong>{{ $t('section.u_3.title', pdfLanguage) }}</strong>
                    </th>
                  </tr>
                  <tr>
                    <th class="lof-pdf__teeth__upper-arcs__table__column-label" colspan="4">{{ $t('section.u_3.pleaseTick', pdfLanguage) }}</th>
                    <th class="lof-pdf__teeth__upper-arcs__table__column-label" colspan="2">{{ $t('section.u_3.straight', pdfLanguage) }}</th>
                    <th class="lof-pdf__teeth__upper-arcs__table__column-label" colspan="2">{{ $t('section.u_3.individual', pdfLanguage) }}</th>
                    <th v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__upper-arcs__table__column-label" colspan="2">
                      {{ $t('common.labels.expansion', pdfLanguage) }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">12 Ø</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__section" rowspan="5" colspan="1">
                      <div class="lof-pdf__teeth__upper-arcs__table__section-type">{{ $t('common.labels.sectionType1', pdfLanguage) }}</div>
                    </td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size12.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size12.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">14 Ø</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size14.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size14.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">16 Ø</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">16 x 22</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x22.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x22.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size16x22.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25_1.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25_1.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size18x25_1.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">16 x 24</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__section" :rowspan="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ]) ? 4 : 3" colspan="1">
                      <div class="lof-pdf__teeth__upper-arcs__table__section-type">{{ $t('common.labels.sectionType2', pdfLanguage) }}</div>
                    </td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size16x24.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">16 x 24 ET</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24ET.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24ET.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size16x24ET.expansion }}
                    </td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])">
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">16 x 24 EET</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24EET.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size16x24EET.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size16x24EET.expansion }}
                    </td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])">
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25_2.straight.size }}</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25_2.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size18x25_2.expansion }}
                    </td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])">
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">18 x 25 (red)</td>
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25red.straight.size }}</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size18x25red.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">17,5 x 17,5</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__section lof-pdf__teeth__upper-arcs__table__section--no-border-bottom" rowspan="4" colspan="1">
                      <div class="lof-pdf__teeth__upper-arcs__table__section-type">{{ $t('common.labels.sectionType3', pdfLanguage) }}</div>
                    </td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ upperTeeth.archwireSizes.size175x175.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size175x175.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">17 x 25</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ upperTeeth.archwireSizes.size17x25.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size17x25.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">18 x 18</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x18.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size18x18.expansion }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__upper-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td class="lof-pdf__teeth__upper-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ upperTeeth.archwireSizes.size18x25_3.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ upperTeeth.archwireSizes.size18x25_3.expansion }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End U3 Section -->
          </div>

          <div class="lof-pdf__teeth__notes">
            <!-- M1 Section -->
            <div class="lof-pdf__teeth__notes-left" :class="{ 'lof-pdf__teeth__notes-left--shorter-width': validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ]) }">
              <div class="lof-pdf__teeth__notes-remarks">
                <strong class="lof-pdf__teeth__notes-remarks-title">{{ $t('section.m_1.remarksTitle', pdfLanguage) }}</strong>
                <div class="lof-pdf__checkbox-rows-container">
                  <div class="lof-pdf__checkbox-row">
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.threeDSetup" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.threeDSetup" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.threeDSetup', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.tpa" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.tpa" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.tpa', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.herbst" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.herbst" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.herbst', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.bondableHGTube" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.bondableHGTube" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.bondableHGTube', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.bondableHGTubeWithShell" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.bondableHGTubeWithShell" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.bondableHGTubeWithShell', pdfLanguage) }}</div>
                    </div>
                  </div>
                  <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__checkbox-row">
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.superpositionPhoto" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.superpositionPhoto" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.superpositionPhoto', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.dlcSteelWire" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.dlcSteelWire" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.dlcSteelWire', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.upperJaw" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.upperJaw" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.upperJaw', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--margin-tb">
                      <span v-if="!notes.lowerJaw" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.bondableHGTubeWithShell" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_1.lowerJaw', pdfLanguage) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lof-pdf__teeth__notes-extra">{{ notes.notes1 }}</div>
              <div class="lof-pdf__teeth__notes-info-legend">
                <div class="lof-pdf__teeth__notes-info-legend__title" v-html="$t('section.m_1.keyInfo', pdfLanguage)" />
                <div class="lof-pdf__teeth__notes-info-legend__legend d-flex flex-wrap justify-content-center" v-html="$t('section.m_1.keyInfoLegendPDF', pdfLanguage)" />
              </div>
            </div>
            <!-- End M1 Section -->

            <div class="lof-pdf__teeth__notes-right" :class="{ 'lof-pdf__teeth__notes-right--longer-width': validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ]) }">
              <!-- M2 Section -->
              <div class="lof-pdf__teeth__notes-right-containers">
                <div v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])" class="lof-pdf__teeth__notes-canine-molar-table">
                  <div class="lof-pdf__teeth__notes-canine-molar-table__title">
                    <strong>{{ $t('section.m_2.differingFromOneClassTitle', pdfLanguage) }}</strong>
                  </div>

                  <table class="lof-pdf__teeth__notes-canine-molar-table__table">
                    <thead>
                      <tr>
                        <th v-for="field in tableFields" :key="field.key">{{ field.label }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t('section.m_2.rightCanine', pdfLanguage) }}</td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.right2.canine" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.right2.canine" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.right3.canine" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.right3.canine" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>{{ $t('section.m_2.leftCanine', pdfLanguage) }}</td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.left2.canine" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.left2.canine" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.left3.canine" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.left3.canine" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>{{ $t('section.m_2.rightMolar', pdfLanguage) }}</td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.right2.molar" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.right2.molar" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.right3.molar" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.right3.molar" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>{{ $t('section.m_2.leftMolar', pdfLanguage) }}</td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.left2.molar" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.left2.molar" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <div class="lof-pdf__checkbox">
                              <span v-if="!notes.left3.molar" class="lof-pdf__checkbox-check">&#9744;</span>
                              <span v-if="notes.left3.molar" class="lof-pdf__checkbox-check">&#9745;</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__notes-right-containers__top">
                  <div class="lof-pdf__checkbox">
                    <span v-if="!notes.noCorrectionOfBite" class="lof-pdf__checkbox-check">&#9744;</span>
                    <span v-if="notes.noCorrectionOfBite" class="lof-pdf__checkbox-check">&#9745;</span>
                    <div class="lof-pdf__checkbox-label">{{ $t('section.m_2.noCorrectionOfBite', pdfLanguage) }}</div>
                  </div>
                </div>
                <div class="lof-pdf__teeth__notes-right-containers__bottom">
                  <div class="lof-pdf__teeth__notes-right-containers__bottom-title">
                    <strong>{{ $t('section.m_3.tray.title', pdfLanguage) }}</strong>
                  </div>
                  <div class="lof-pdf__teeth__notes-right-containers__bottom-checkboxes">
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--extra-padding">
                      <span v-if="!notes.nonTransparent" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.nonTransparent" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_3.tray.nonTransparent', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--notes-tray-middle lof-pdf__checkbox--extra-padding">
                      <span v-if="!notes.trayTrimmed33" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.trayTrimmed33" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_3.tray.trayTrimmed3_3', pdfLanguage) }}</div>
                    </div>
                    <div class="lof-pdf__checkbox lof-pdf__checkbox--notes-tray-bottom lof-pdf__checkbox--extra-padding">
                      <span v-if="!notes.transparent" class="lof-pdf__checkbox-check">&#9744;</span>
                      <span v-if="notes.transparent" class="lof-pdf__checkbox-check">&#9745;</span>
                      <div class="lof-pdf__checkbox-label">{{ $t('section.m_3.tray.transparent', pdfLanguage) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End M2 Section -->
            </div>
          </div>

          <div class="lof-pdf__teeth__lower">
            <!-- L1 Section -->
            <div class="lof-pdf__teeth__lower-image-container">
              <div class="lof-pdf__teeth__lower-image-container__boxes">
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 46px;left: 90px;">{{ lowerTeeth.teethBoxes.lower_1 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 80px;left: 102px;">{{ lowerTeeth.teethBoxes.lower_2 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 120px;left: 112px;">{{ lowerTeeth.teethBoxes.lower_3 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 148px;left: 116px;">{{ lowerTeeth.teethBoxes.lower_4 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 167px;left: 122px;">{{ lowerTeeth.teethBoxes.lower_5 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 167px;right: 122px;">{{ lowerTeeth.teethBoxes.lower_6 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 148px;right: 116px;">{{ lowerTeeth.teethBoxes.lower_7 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 120px;right: 112px;">{{ lowerTeeth.teethBoxes.lower_8 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 80px;right: 102px;">{{ lowerTeeth.teethBoxes.lower_9 }}</div>
                <div class="lof-pdf__teeth__lower-image-container__box" style="top: 46px;right: 90px;">{{ lowerTeeth.teethBoxes.lower_10 }}</div>
              </div>
              <div v-if="validateLanguagesToSavedLanguage([ 'jp' ])" class="lof-pdf__teeth__lower-image-container__numbers">
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 82px;margin-left: -132px;">48</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 42px;margin-left: -124px;">47</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 4px;margin-left: -116px;">46</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -32px;margin-left: -100px;">45</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -56px;margin-left: -86px;">44</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -76px;margin-left: -66px;">43</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -90px;margin-left: -42px;">42</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -96px;margin-left: -18px;">41</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -96px;margin-left: 10px;">31</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -90px;margin-left: 32px;">32</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -76px;margin-left: 58px;">33</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -56px;margin-left: 78px;">34</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: -32px;margin-left: 92px;">35</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 6px;margin-left: 106px;">36</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 42px;margin-left: 116px;">37</div>
                <div class="lof-pdf__teeth__lower-image-container__numbers-number" style="bottom: 82px;margin-left: 124px;">38</div>
              </div>
              <p v-if="$validateSelectedLanguage('jp')" class="lof-pdf__teeth__lower__euroTypeInfo">{{ $t('section.l_1.euroTypeInfo', pdfLanguage) }}</p>
              <img v-if="lowerTeeth.imageData.edited" class="lof-pdf__teeth__lower-image lof-pdf__teeth__lower-image--edited" :src="lowerTeeth.imageData.dataURL">
              <img v-if="!lowerTeeth.imageData.edited" class="lof-pdf__teeth__lower-image" :src="require('~/assets/images/Unterkiefer.png')">
              <div class="lof-pdf__checkbox lof-pdf__checkbox--lower">
                <span v-if="!lowerTeeth.onlySetup" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="lowerTeeth.onlySetup" class="lof-pdf__checkbox-check">&#9745;</span>
                <div>
                  <strong class="lof-pdf__checkbox-label lof-pdf__checkbox-label--lg">{{ $t('section.u_1.onlySetup', pdfLanguage) }}</strong>
                </div>
              </div>
            </div>
            <!-- End L1 Section -->

            <!-- L2 Section -->
            <div v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__lower-info-container">
              <div class="lof-pdf__teeth__lower-stripping">
                <strong>{{ $t('section.l_2.strippingTitle', pdfLanguage) }}</strong>
                <div class="lof-pdf__checkbox">
                  <span v-if="!lowerTeeth.boltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="lowerTeeth.boltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.l_2.boltonDiscrepancy', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!lowerTeeth.resolveCrowding" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="lowerTeeth.resolveCrowding" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.l_2.resolveCrowding', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ lowerTeeth.rcMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.rcMm', pdfLanguage) }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.rcWhere', pdfLanguage) }}</span>
                  <span class="lof-pdf__input-value">{{ lowerTeeth.rcWhere }}</span>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!lowerTeeth.reduceOverjet" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="lowerTeeth.reduceOverjet" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">{{ $t('section.l_2.reduceOverjet', pdfLanguage) }}</div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ lowerTeeth.roMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.roMm', pdfLanguage) }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.roWhere', pdfLanguage) }}</span>
                  <span class="lof-pdf__input-value">{{ lowerTeeth.roWhere }}</span>
                </div>
                <div class="lof-pdf__info-legend">
                  <strong>{{ $t('section.l_2.lowerInfo', pdfLanguage) }}</strong>
                  <ul class="lof-pdf__info-list" v-html="$t('section.l_2.lowerInfoLegend', pdfLanguage)" />
                </div>
              </div>
            </div>
            <div v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])" class="lof-pdf__teeth__lower-info-container">
              <div class="lof-pdf__teeth__lower-comments">
                <span>{{ $t('section.l_2.notes.title', pdfLanguage) }}</span>
                <div
                  class="lof-pdf__teeth__lower-comments-box lof-pdf__teeth__lower-comments-box--comments"
                  :class="{ 'lof-pdf__teeth__lower-comments-box--variant-3': validateLanguagesToSavedLanguage([ 'jp' ]) }"
                >
                  <div class="lof-pdf__input">
                    <span class="lof-pdf__input-label">{{ $t('section.l_2.notes.stripping', pdfLanguage) }}</span>
                    <span class="lof-pdf__input-value">{{ lowerTeeth.notesStrippingMm }}</span>
                    <span class="lof-pdf__input-label">{{ $t('section.l_2.notes.strippingMm', pdfLanguage) }}</span>
                  </div>
                  <div class="lof-pdf__input">
                    <span class="lof-pdf__input-label">{{ $t('section.l_2.notes.where', pdfLanguage) }}</span>
                    <span class="lof-pdf__input-value">{{ lowerTeeth.notesStrippingWhere }}</span>
                  </div>
                  <div class="lof-pdf__checkbox">
                    <span v-if="!lowerTeeth.notesBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                    <span v-if="lowerTeeth.notesBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                    <div class="lof-pdf__checkbox-label">{{ $t('section.l_2.notes.boltonDiscrepancy', pdfLanguage) }}</div>
                  </div>
                </div>
              </div>
              <div v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru' ])" class="lof-pdf__teeth__lower-notes">
                <span>{{ $t('section.l_2.notes.boxTitle', pdfLanguage) }}</span>
                <div class="lof-pdf__teeth__lower-notes-box lof-pdf__teeth__lower-notes-box--notes">{{ lowerTeeth.notesBox }}</div>
              </div>
            </div>
            <!-- End L2 Section -->

            <!-- L3 Section -->
            <div class="lof-pdf__teeth__lower-arcs">
              <table class="lof-pdf__teeth__lower-arcs__table">
                <colgroup><col><col><col><col></colgroup>
                <thead>
                  <tr>
                    <th class="lof-pdf__teeth__lower-arcs__table__title" :colspan="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ]) ? 10 : 8">
                      <strong>{{ $t('section.l_3.title', pdfLanguage) }}</strong>
                    </th>
                  </tr>
                  <tr>
                    <th class="lof-pdf__teeth__lower-arcs__table__column-label" colspan="4">{{ $t('section.l_3.pleaseTick', pdfLanguage) }}</th>
                    <th class="lof-pdf__teeth__lower-arcs__table__column-label" colspan="2">{{ $t('section.l_3.straight', pdfLanguage) }}</th>
                    <th class="lof-pdf__teeth__lower-arcs__table__column-label" colspan="2">{{ $t('section.l_3.individual', pdfLanguage) }}</th>
                    <th v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__lower-arcs__table__column-label" colspan="2">
                      {{ $t('common.labels.compression', pdfLanguage) }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">12 Ø</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__section" rowspan="5" colspan="1">
                      <div class="lof-pdf__teeth__lower-arcs__table__section-type">{{ $t('common.labels.sectionType1', pdfLanguage) }}</div>
                    </td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size12.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size12.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">14 Ø</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size14.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size14.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">16 Ø</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">16 x 22</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x22.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x22.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size16x22.compression }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25_1.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25_1.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size18x25_1.compression }}
                    </td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])">
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 Ø</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__section" rowspan="3" colspan="1">
                      <div class="lof-pdf__teeth__lower-arcs__table__section-type">{{ $t('common.labels.sectionType2', pdfLanguage) }}</div>
                    </td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size18.compression }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">16 x 24</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])" class="lof-pdf__teeth__lower-arcs__table__section" rowspan="3" colspan="1">
                      <div class="lof-pdf__teeth__lower-arcs__table__section-type">{{ $t('common.labels.sectionType2', pdfLanguage) }}</div>
                    </td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x24.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x24.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size16x24.compression }}
                    </td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])">
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">16 x 24 ET</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x24ET.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x24ET.individual.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size16x24ET.compression }}</td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])">
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25_2.straight.size }}</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25_2.individual.size }}</td>
                  </tr>
                  <tr v-if="validateLanguagesToSavedLanguage([ 'it', 'sp', 'ru', 'jp' ])">
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 x 25 (red)</td>
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25red.straight.size }}</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">17,5 x 17,5</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__section lof-pdf__teeth__lower-arcs__table__section--no-border-bottom" rowspan="4" colspan="1">
                      <div class="lof-pdf__teeth__lower-arcs__table__section-type">{{ $t('common.labels.sectionType3', pdfLanguage) }}</div>
                    </td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size175x175.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size175x175.compression }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">17 x 25</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size17x25.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size17x25.compression }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 x 18</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x18.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size18x18.compression }}
                    </td>
                  </tr>
                  <tr>
                    <td class="lof-pdf__teeth__lower-arcs__table__size-label" colspan="3">18 x 25</td>
                    <td class="lof-pdf__teeth__lower-arcs__table__cell--disable" colspan="2" />
                    <td colspan="2">{{ lowerTeeth.archwireSizes.size18x25_3.individual.size }}</td>
                    <td v-if="validateLanguagesToSavedLanguage([ 'en', 'de', 'fr' ])" colspan="2">
                      {{ lowerTeeth.archwireSizes.size18x25_3.compression }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End L3 Section -->
          </div>
        </div>
      </div>
      <div class="lof-pdf__footer">
        <div class="lof-pdf__footer__generalTerms">{{ $t('section.f_1.generalTerms', pdfLanguage) }}:</div>
        <div class="lof-pdf__footer-bottom">
          <div class="lof-pdf__footer__signature-date-container">
            <div class="lof-pdf__footer__signature">{{ $t('section.f_1.signature', pdfLanguage) }}</div>
            <div class="lof-pdf__footer__date">{{ $t('section.f_1.date', pdfLanguage) }}</div>
          </div>
          <div class="lof-pdf__footer__version">{{ $t('section.f_1.version', pdfLanguage) }}</div>
        </div>
      </div>
    </div>
    <div v-if="showPage2 || showBothPages" id="page2" class="lof-pdf">
      <div class="lof-pdf__general-terms__title">
        <strong>{{ $t('agbs.title', pdfLanguage) }}</strong>
      </div>
      <div class="lof-pdf__general-terms__content" v-html="$t('agbs.content', pdfLanguage)" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'pdf-file',

    props: {
      isSentForm: {
        type: Boolean,
        default: false
      },
      orderForm: {
        type: Object,
        required: false
      },
      language: {
        type: String,
        required: false
      },
      showPage1: {
        type: Boolean
      },
      showPage2: {
        type: Boolean
      },
      showBothPages: {
        type: Boolean
      }
    },

    data () {
      return {
        variant: 2,
        checked: true,
        pdfLanguage: '',
        pdfLanguageDateFormate: '',
        tableFields: [
          { key: 'right_label', label: '' },
          { key: 'right_2', label: '||', value: 2, side: 'right' },
          { key: 'right_3', label: '|||', value: 3, side: 'right' },
          { key: 'left_label', label: '' },
          { key: 'left_2', label: '||', value: 2, side: 'left' },
          { key: 'left_3', label: '|||', value: 3, side: 'left' }
        ],
        invoiceAddress: {},
        patient: {},
        upperTeeth: {},
        notes: {},
        lowerTeeth: {}
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
      ]),
      ...mapGetters('upper-teeth', {
        getUpperImageData: 'getImageData',
        getUpperOnlySetup: 'getOnlySetup',
        getUpperBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getUpperResolveCrowding: 'getResolveCrowding',
        getUpperRcMm: 'getRcMm',
        getUpperRcWhere: 'getRcWhere',
        getUpperReduceOverjet: 'getReduceOverjet',
        getUpperRoMm: 'getRoMm',
        getUpperRoWhere: 'getRoWhere',
        getUpperNotesStrippingMm: 'getNotesStrippingMm',
        getUpperNotesStrippingWhere: 'getNotesStrippingWhere',
        getUpperNotesBoltonDiscrepancy: 'getNotesBoltonDiscrepancy',
        getUpperNotesBox: 'getNotesBox',
        getUpperArchwireSizes: 'getArchwireSizes',
        getUpperTeethBoxes: 'getTeethBoxes'
      }),
      ...mapGetters('notes', [
        'getThreeDSetup',
        'getTpa',
        'getHerbst',
        'getBondableHGTube',
        'getBondableHGTubeWithShell',
        'getSuperpositionPhoto',
        'getDlcSteelWire',
        'getUpperJaw',
        'getLowerJaw',
        'getNotes1',
        'getNoCorrectionOfBite',
        'getNonTransparent',
        'getTrayTrimmed33',
        'getTransparent',
        'getLeft2CanineMolar',
        'getLeft3CanineMolar',
        'getRight2CanineMolar',
        'getRight3CanineMolar'
      ]),
      ...mapGetters('lower-teeth', {
        getLowerImageData: 'getImageData',
        getLowerOnlySetup: 'getOnlySetup',
        getLowerBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getLowerResolveCrowding: 'getResolveCrowding',
        getLowerRcMm: 'getRcMm',
        getLowerRcWhere: 'getRcWhere',
        getLowerReduceOverjet: 'getReduceOverjet',
        getLowerRoMm: 'getRoMm',
        getLowerRoWhere: 'getRoWhere',
        getLowerNotesStrippingMm: 'getNotesStrippingMm',
        getLowerNotesStrippingWhere: 'getNotesStrippingWhere',
        getLowerNotesBoltonDiscrepancy: 'getNotesBoltonDiscrepancy',
        getLowerNotesBox: 'getNotesBox',
        getLowerArchwireSizes: 'getArchwireSizes',
        getLowerTeethBoxes: 'getTeethBoxes'
      })
    },

    created () {
      if (this.language) {
        this.pdfLanguage = this.language
      } else {
        this.pdfLanguage = this.$i18n.locale
      }

      this.pdfLanguageDateFormate = this.$i18n.locales.find(locale => locale.code === this.pdfLanguage).localeDateFormat
      if (!this.isSentForm) { this.getStoredData() }
      if (this.isSentForm) {
        const { invoiceAddress, patient, upperTeeth, notes, lowerTeeth } = this.orderForm
        this.invoiceAddress = { ...invoiceAddress }
        this.patient = {
          ...patient,
          dateOfBonding: this.$moment(patient.dateOfBonding, 'YYYY-MM-DD').format(this.pdfLanguageDateFormate)
        }
        this.upperTeeth = { ...upperTeeth }
        this.notes = { ...notes }
        this.lowerTeeth = { ...lowerTeeth }
      }
    },

    methods: {
      validateLanguagesToSavedLanguage (langs) {
        const language = this.pdfLanguage
        return langs.includes(language)
      },
      getStoredData () {
        this.invoiceAddress = {
          practice: this.getPractice,
          orthodontist: this.getOrthodontist,
          address: this.getAddress,
          postalCodeTown: this.getPostalcodeTown,
          telephone: this.getTelephone,
          fax: this.getFax,
          email: this.getEmail,
          idVat: this.getUstId,
          standardSetup: this.getStandardSetup,
          standardSetupPlus: this.getStandardSetupPlus,
          premiumSetupPlus: this.getPremiumSetupPlus,
          stateOrthodontistName: this.getStateOrthodontistNameOnInvoice,
          isShippingAddress: this.getIsShippingAddress,
          shippingAddress: this.getShippingAddress,
          shippingPostalcodeTown: this.getShippingPostalcodeTown
        }

        this.patient = {
          lastName: this.getPatientLastName,
          firstName: this.getPatientFirstName,
          number: this.getPatientNumber,
          dateOfBonding: this.$moment(this.getAppointmentDate, 'YYYY-MM-DD').format(this.pdfLanguageDateFormate)
        }

        this.upperTeeth = {
          imageData: {
            edited: !!this.getUpperImageData,
            dataURL: this.getUpperImageData
          },
          onlySetup: this.getUpperOnlySetup,
          boltonDiscrepancy: this.getUpperBoltonDiscrepancy,
          resolveCrowding: this.getUpperResolveCrowding,
          rcMm: this.getUpperRcMm,
          rcWhere: this.getUpperRcWhere,
          reduceOverjet: this.getUpperReduceOverjet,
          roMm: this.getUpperRoMm,
          roWhere: this.getUpperRoWhere,
          notesStrippingMm: this.getUpperNotesStrippingMm,
          notesStrippingWhere: this.getUpperNotesStrippingWhere,
          notesBoltonDiscrepancy: this.getUpperNotesBoltonDiscrepancy,
          notesBox: this.getUpperNotesBox,
          archwireSizes: this.$prepareArchwires(this.getUpperArchwireSizes),
          teethBoxes: this.getUpperTeethBoxes()
        }

        this.notes = {
          threeDSetup: this.getThreeDSetup,
          tpa: this.getTpa,
          herbst: this.getHerbst,
          bondableHGTube: this.getBondableHGTube,
          bondableHGTubeWithShell: this.getBondableHGTubeWithShell,
          superpositionPhoto: this.getSuperpositionPhoto,
          dlcSteelWire: this.getDlcSteelWire,
          upperJaw: this.getUpperJaw,
          lowerJaw: this.getLowerJaw,
          notes1: this.getNotes1,
          noCorrectionOfBite: this.getNoCorrectionOfBite,
          nonTransparent: this.getNonTransparent,
          trayTrimmed33: this.getTrayTrimmed33,
          transparent: this.getTransparent,
          right2: { ...this.getRight2CanineMolar },
          right3: { ...this.getRight3CanineMolar },
          left2: { ...this.getLeft2CanineMolar },
          left3: { ...this.getLeft3CanineMolar }
        }

        this.lowerTeeth = {
          imageData: {
            edited: !!this.getLowerImageData,
            dataURL: this.getLowerImageData
          },
          onlySetup: this.getLowerOnlySetup,
          boltonDiscrepancy: this.getLowerBoltonDiscrepancy,
          resolveCrowding: this.getLowerResolveCrowding,
          rcMm: this.getLowerRcMm,
          rcWhere: this.getLowerRcWhere,
          reduceOverjet: this.getLowerReduceOverjet,
          roMm: this.getLowerRoMm,
          roWhere: this.getLowerRoWhere,
          notesStrippingMm: this.getLowerNotesStrippingMm,
          notesStrippingWhere: this.getLowerNotesStrippingWhere,
          notesBoltonDiscrepancy: this.getLowerNotesBoltonDiscrepancy,
          notesBox: this.getLowerNotesBox,
          archwireSizes: this.$prepareArchwires(this.getLowerArchwireSizes),
          teethBoxes: this.getLowerTeethBoxes()
        }
      }
    }
  }
</script>
