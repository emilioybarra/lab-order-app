<template>
  <div style="width: 800px; height: 885px; position: relative; overflow: scroll;" class="mx-auto">
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
            <span class="lof-pdf__invoice-field__value">{{ getPostalcodeTown }}</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.firstName') }}
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
            <div class="lof-pdf__invoice-field__checkbox">
              <span v-if="!getOrthodontistInvoice" class="lof-pdf__invoice-field__checkbox-check">
                &#9744;
              </span>
              <span v-if="getOrthodontistInvoice" class="lof-pdf__invoice-field__checkbox-check">
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
              <img v-if="getImageData" class="lof-pdf__teeth__upper-image lof-pdf__teeth__upper-image--edited" :src="getImageData">
              <img v-if="!getImageData" class="lof-pdf__teeth__upper-image" :src="require('~/assets/images/Oberkiefer.png')">              <div class="lof-pdf__checkbox lof-pdf__checkbox--upper">
                <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
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
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.boltonDiscrepancy') }}
                  </div>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.resolveCrowding') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">test</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.rcWhere') }}</span>
                  <span class="lof-pdf__input-value">test</span>
                </div>
                <div class="lof-pdf__checkbox">
                  <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                  <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                  <div class="lof-pdf__checkbox-label">
                    {{ $t('section.u_2.resolveCrowding') }}
                  </div>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-value">test</span>
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roMm') }}</span>
                </div>
                <div class="lof-pdf__input">
                  <span class="lof-pdf__input-label">{{ $t('section.u_2.roWhere') }}</span>
                  <span class="lof-pdf__input-value">test</span>
                </div>
                <div class="lof-pdf__info-legend">
                  <strong>{{ $t('section.u_2.upperInfo') }}</strong>
                  <div v-html="$t('section.u_2.upperInfoLegend')" />
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
              <div />
              <div />
            </div>
            <div class="lof-pdf__teeth__notes-right" />
          </div>
          <div class="lof-pdf__teeth__lower">
            <div class="lof-pdf__teeth__lower-image-container">
              <img class="lof-pdf__teeth__lower-image" :src="require('~/assets/images/Unterkiefer.png')">
              <div class="lof-pdf__checkbox lof-pdf__checkbox--lower">
                <span v-if="!checked" class="lof-pdf__checkbox-check">&#9744;</span>
                <span v-if="checked" class="lof-pdf__checkbox-check">&#9745;</span>
                <div>
                  <strong class="lof-pdf__checkbox-label lof-pdf__checkbox-label--lg">
                    {{ $t('section.u_1.onlySetup') }}
                  </strong>
                </div>
              </div>
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
      ...mapGetters('upper-teeth', [
        'getImageData'
      ]),
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
    }
  }
</script>
