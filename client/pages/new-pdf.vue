<template>
  <div style="width: 800px" class="mx-auto">
    <div class="lof-pdf">
      <div class="lof-pdf__header">
        <div class="lof-pdf__header-logos">
          <div class="lof-pdf__header-logo lof-pdf__header-logo--dwls-logo">
            <img :src="require('../assets/images/logo.png')">
          </div>
          <div class="lof-pdf__header-logo lof-pdf__header-logo--win-logo">
            <img :src="require('../assets/images/win.png')">
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
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.practice') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telephone') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.lastName') }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.orthodontist') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.telefax') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.firstName') }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.postalcodeTownShort') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.email') }}
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <span class="lof-pdf__invoice-field__value">test</span>
            <div class="lof-pdf__invoice-field__label">
              {{ $t('section.h_2.patient.number') }}
            </div>
          </div>
        </div>
        <div class="lof-pdf__invoice-fields">
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__checkbox">
              <span v-if="!checked" class="lof-pdf__invoice-field__checkbox-check">
                &#9744;
              </span>
              <span v-if="checked" class="lof-pdf__invoice-field__checkbox-check">
                &#9745;
              </span>
              <span class="lof-pdf__invoice-field__checkbox-label">
                Soll der Name des Behandlers auf der Rechnung erscheinen?
              </span>
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__info">
              <img :src="require('../assets/images/warning.svg')" class="lof-pdf__invoice-field__info-icon">
              <span>
                Bitte informieren Sie uns, wenn die Lieferadresse nicht mit der Rechnungsadresse übereinstimmt.
              </span>
            </div>
          </div>
          <div class="lof-pdf__invoice-field">
            <div class="lof-pdf__invoice-field__logo">
              <img :src="require('../assets/images/logo_hell.png')">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'new-pdf',

    layout: 'plain',

    data () {
      return {
        checked: true
      }
    }
  }
</script>
