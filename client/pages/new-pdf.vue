<template>
  <div style="width: 800px; height: 100%; position: relative; overflow: scroll;" class="mx-auto">
    <div class="lof-pdf">
      <div class="lof-pdf__header">
        <div class="lof-pdf__header-logos">
          <div class="lof-pdf__header-logo lof-pdf__header-logo--dwls-logo">
            <img :src="require('~/assets/images/logo.png')">
          </div>
          <div class="lof-pdf__header-logo lof-pdf__header-logo--win-logo">
            <img :src="require('~/assets/images/win.png')">
          </div>
        </div>
        <div class="lof-pdf__header-info">
          <div class="lof-pdf__header-booking-info">
            <strong class="lof-pdf__header-booking-info__title">Terminabsprache:</strong>
            <div class="lof-pdf__header-booking-info__item">
              <span>Mo. — Do.</span><span>08:00 — 17:00 Uhr</span>
            </div>
            <div class="lof-pdf__header-booking-info__item">
              <span>Fr.</span><span>08:00 — 14:00 Uhr</span>
            </div>
            <div class="lof-pdf__header-booking-info__item">
              <span>Tel.</span><span>+49 5472 95444 - 251</span>
            </div>
            <div class="lof-pdf__header-booking-info__item">
              <span>Fax</span><span>+49 5472 95444 - 294</span>
            </div>
            <span class="lof-pdf__header-booking-info__item">win@lingualsystems.de</span>
          </div>
          <div class="lof-pdf__header-address">
            <strong class="lof-pdf__header-address__title">Abdrücke senden Sie bitte an:</strong>
            <span class="lof-pdf__header-address__item">DW Lingual Systems GmbH</span>
            <span class="lof-pdf__header-address__item">Lindenstraße 44</span>
            <span class="lof-pdf__header-address__item">49152 Bad Essen</span>
            <span class="lof-pdf__header-address__item">Deutschland</span>
          </div>
        </div>
      </div>
      <div class="lof-pdf__invoice">
        <div class="lof-pdf__invoice-title">
          <strong>{{ $t('section.h_2.invoiceAddress') }}</strong>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getPractice }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.practice') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getTelephone }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telephone') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getPatientLastName }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.lastName') }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getOrthodontist }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.orthodontist') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getFax }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telefax') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getPatientFirstName }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.firstName') }}
            </div>
          </div>
        </div>

        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getAddress }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.address') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getEmail }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.email') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getPatientNumber }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.number') }}
            </div>
          </div>
        </div>

        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getPostalcodeTown }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.postalcodeTownShort') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getUstId }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.idVat') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">{{ getAppointmentDate }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.dateOfBonding') }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__checkbox">
              <span v-if="!getStateOrthodontistNameOnInvoice" class="lof-pdf__invoice-field__checkbox-check">
                &#9744;
              </span>
              <span v-if="getStateOrthodontistNameOnInvoice" class="lof-pdf__invoice-field__checkbox-check">
                &#9745;
              </span>
              <div>
                <strong class="lof-pdf__invoice-field__checkbox-label">
                  Soll der Name des Behandlers auf der Rechnung erscheinen?
                </strong>
                <div class="lof-pdf__invoice-field__checkbox-sublabel">
                  (Für die Übermittlung von personenbezogenen Gesundheitsdaten benötigen Sie die schriftliche Einwilligung Ihres Patienten)
                </div>
              </div>
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__info">
              <img :src="require('~/assets/images/warning.svg')" class="lof-pdf__invoice-field__info-icon">
              <span class="lof-pdf__invoice-field__info-text">
                Bitte informieren Sie uns, wenn die Lieferadresse nicht mit der Rechnungsadresse übereinstimmt.
              </span>
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__logo-container">
              <img class="lof-pdf__invoice-field__logo" :src="require('~/assets/images/logo_hell.png')">
            </div>
          </div>
        </div>
        <div class="lof-pdf__teeth">
          <div class="lof-pdf__teeth__upper">
            <div class="lof-pdf__teeth__upper-image-container">
              <img v-if="getUpperImageData" class="lof-pdf__teeth__upper-image lof-pdf__teeth__upper-image--edited" :src="getUpperImageData">
              <img v-if="!getUpperImageData" class="lof-pdf__teeth__upper-image" :src="require('~/assets/images/Oberkiefer.png')">
              <div class="lof-pdf__checkbox lof-pdf__checkbox--upper">
                <span v-if="!getUpperOnlySetup" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="getUpperOnlySetup" class="lof-pdf__checkbox-check">&#9745;</span>
                <div>
                  <strong class="lof-pdf__checkbox-label lof-pdf__checkbox-label--lg">
                    {{ $t('section.u_1.onlySetup') }}
                  </strong>
                </div>
              </div>
            </div>
            <div class="lof-pdf__teeth__upper-info-container">
              <div class="lof-pdf__teeth__upper-stripping">
                <strong>{{ $t('section.u_2.strippingTitle') }}</strong>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getUpperBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getUpperBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.boltonDiscrepancy') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getUpperResolveCrowding" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getUpperResolveCrowding" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.resolveCrowding') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ getUpperRcMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcWhere') }}</span>
                  <span class="lof-pdf__input-value">{{ getUpperRcWhere }}</span>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getUpperReduceOverjet" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getUpperReduceOverjet" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.reduceOverjet') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ getUpperRoMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roWhere') }}</span>
                  <span class="lof-pdf__input-value">{{ getUpperRoWhere }}</span>
                </div>
                <div class="lof-pdf__info-legend">
                  <strong>{{ $t('section.u_2.upperInfo') }}</strong>
                  <ul class="lof-pdf__info-list" v-html="$t('section.u_2.upperInfoLegend')" />
                </div>
              </div>
              <div class="lof-pdf__teeth__upper-arcs" />
            </div>
          </div>
          <div class="lof-pdf__teeth__notes">
            <div class="lof-pdf__teeth__notes-left">
              <div class="lof-pdf__teeth__notes-remarks">
                <strong class="lof-pdf__teeth__notes-remarks-title">{{ $t('section.m_1.remarksTitle') }}</strong>
                <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--padding">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.m_1.3dSetup') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--padding">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.m_1.tpa') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--padding">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.m_1.herbst') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--padding">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.m_1.bondableHGTube') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox lof-pdf__checkbox--margin-sides lof-pdf__checkbox--padding">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.m_1.bondableHGTubeWithShell') }}
                  </div>
                </div>
              </div>
              <div class="lof-pdf__teeth__notes-extra" />
              <div class="lof-pdf__teeth__notes-info-legend">
                <div class="lof-pdf__teeth__notes-info-legend__title" v-html="$t('section.m_1.keyInfo')" />
                <div class="lof-pdf__teeth__notes-info-legend__legend d-flex flex-wrap justify-content-center" v-html="$t('section.m_1.keyInfoLegend')" />
              </div>
            </div>
            <div class="lof-pdf__teeth__notes-right" />
          </div>
          <div class="lof-pdf__teeth__lower">
            <div class="lof-pdf__teeth__lower-image-container">
              <img v-if="getLowerImageData" class="lof-pdf__teeth__lower-image lof-pdf__teeth__lower-image--edited" :src="getLowerImageData">
              <img v-if="!getLowerImageData" class="lof-pdf__teeth__lower-image" :src="require('~/assets/images/Unterkiefer.png')">
              <div class="lof-pdf__checkbox lof-pdf__checkbox--lower">
                <span v-if="!getLowerOnlySetup" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="getLowerOnlySetup" class="lof-pdf__checkbox-check">&#9745;</span>
                <div>
                  <strong class="lof-pdf__checkbox-label lof-pdf__checkbox-label--lg">
                    {{ $t('section.u_1.onlySetup') }}
                  </strong>
                </div>
              </div>
            </div>
            <div class="lof-pdf__teeth__lower-info-container">
              <div class="lof-pdf__teeth__lower-stripping">
                <strong>{{ $t('section.l_2.strippingTitle') }}</strong>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getLowerBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getLowerBoltonDiscrepancy" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.l_2.boltonDiscrepancy') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getLowerResolveCrowding" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getLowerResolveCrowding" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.l_2.resolveCrowding') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ getLowerRcMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.rcMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.rcWhere') }}</span>
                  <span class="lof-pdf__input-value">{{ getLowerRcWhere }}</span>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!getLowerReduceOverjet" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="getLowerReduceOverjet" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.l_2.reduceOverjet') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">{{ getLowerRoMm }}</span>
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.roMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.l_2.roWhere') }}</span>
                  <span class="lof-pdf__input-value">{{ getLowerRoWhere }}</span>
                </div>
                <div class="lof-pdf__info-legend">
                  <strong>{{ $t('section.l_2.lowerInfo') }}</strong>
                  <ul class="lof-pdf__info-list" v-html="$t('section.l_2.lowerInfoLegend')" />
                </div>
              </div>
              <div class="lof-pdf__teeth__lower-arcs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'new-pdf',

    layout: 'plain',

    data () {
      return {
        checked: true
      }
    },

    computed: {
      ...mapGetters('upper-teeth', {
        getUpperImageData: 'getImageData',
        getUpperOnlySetup: 'getOnlySetup',
        getUpperBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getUpperResolveCrowding: 'getResolveCrowding',
        getUpperRcMm: 'getRcMm',
        getUpperRcWhere: 'getRcWhere',
        getUpperReduceOverjet: 'getReduceOverjet',
        getUpperRoMm: 'getRoMm',
        getUpperRoWhere: 'getRoWhere'
      }),
      ...mapGetters('lower-teeth', {
        getLowerImageData: 'getImageData',
        getLowerOnlySetup: 'getOnlySetup',
        getLowerBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getLowerResolveCrowding: 'getResolveCrowding',
        getLowerRcMm: 'getRcMm',
        getLowerRcWhere: 'getRcWhere',
        getLowerReduceOverjet: 'getReduceOverjet',
        getLowerRoMm: 'getRoMm',
        getLowerRoWhere: 'getRoWhere'
      }),
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
        'getStateOrthodontistNameOnInvoice',
        'getIsShippingAddress',
        'getShippingAddress',
        'getShippingPostalcodeTown'
      ])
    }
  }
</script>
