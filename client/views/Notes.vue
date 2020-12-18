<template>
  <modal ref="notesModal" :show-tab="showModalTab">
    <card v-click-outside.stop="hideModal">
      <h4 class="lof-headline lof-headline--3">
        {{ $t('section.m_1.remarksTitle') }}
      </h4>
      <div class="d-flex flex-wrap my-4">
        <checkbox class="mr-4">
          {{ $t('section.m_1.3dSetup') }}
        </checkbox>
        <checkbox class="mr-4">
          {{ $t('section.m_1.tpa') }}
        </checkbox>
        <checkbox class="mr-4">
          {{ $t('section.m_1.herbst') }}
        </checkbox>
        <checkbox class="mr-4">
          {{ $t('section.m_1.bondableHGTube') }}
        </checkbox>
        <checkbox>
          {{ $t('section.m_1.bondableHGTubeWithShell') }}
        </checkbox>
      </div>
      <div>
        <textarea-field id="notes-1" :label="$t('section.m_1.notes')" :rows="12" />
      </div>
      <div class="text-center my-4">
        <p class="text-primary" v-html="$t('section.m_1.keyInfo')" />
        <div class="d-flex flex-wrap justify-content-center" v-html="$t('section.m_1.keyInfoLegend')" />
      </div>
      <div class="my-4">
        <checkbox>
          {{ $t('section.m_2.noCorrectionOfBite') }}
        </checkbox>
      </div>
      <div>
        <textarea-field id="notes-2" :label="$t('section.m_1.notes')" :rows="10" />
      </div>
      <div class="d-flex my-4">
        <div class="d-flex align-items-center ml-3 mr-5">
          <span>Tray</span>
        </div>
        <div class="w-100">
          <checkbox class="p-0">
            {{ $t('section.m_3.tray.nonTransparent') }}
          </checkbox>
          <checkbox class="ml-3 p-0">
            {{ $t('section.m_3.tray.trayTrimmed3_3') }}
          </checkbox>
          <hr>
          <checkbox class="p-0">
            {{ $t('section.m_3.tray.transparent') }}
          </checkbox>
        </div>
      </div>
    </card>
  </modal>
</template>

<script>
  export default {
    name: 'notes',

    data () {
      return {
        invoiceAddress: false,
        invoiceAddressDropdown: false,
        showModalTab: true
      }
    },

    methods: {
      showModal () {
        this.$refs.notesModal.show()
      },
      hideModal () {
        this.$refs.notesModal.hide()
      }
    }
  }
</script>
