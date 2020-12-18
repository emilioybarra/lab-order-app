<template>
  <page>
    <template #headline>
      {{ $t('common.titles.upperTeeth') }}
    </template>
    <template #body>
      <teeth-canvas teeth-image="upper" />
      <div class="d-flex align-self-center mt-3">
        <checkbox v-model="onlySetup" :is-checked="onlySetup" @input="setOnlySetup">
          {{ $t('section.u_1.onlySetup') }}
        </checkbox>
      </div>
      <tooth-divider />
      <link-button to="/templates" class="mb-2">
        {{ $t('common.buttons.selectFromTemplate') }}
      </link-button>
      <div class="row">
        <div class="col-12">
          <h3 class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.strippingTitle') }}
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex flex-column">
          <checkbox v-model="boltonDiscrepancy" :is-checked="boltonDiscrepancy" @input="setBoltonDiscrepancy">
            {{ $t('section.u_2.boltonDiscrepancy') }}
          </checkbox>
          <checkbox v-model="resolveCrowding" :is-checked="resolveCrowding" @input="setResolveCrowding">
            {{ $t('section.u_2.resolveCrowding') }}
          </checkbox>
        </div>
        <input-field
          id="rc-mm"
          v-model="rcMm"
          class="col-12 col-sm-6 mb-4 w-50"
          :right-label="$t('section.u_2.rcMm')"
          side-label="right"
          @input="setRcMm"
        />
        <input-field
          id="rc-where"
          v-model="rcWhere"
          class="col-12 col-sm-6 mb-4 w-50"
          :left-label="$t('section.u_2.rcWhere')"
          side-label="left"
          @input="setRcWhere"
        />
      </div>
      <div class="row">
        <div class="col-12">
          <checkbox v-model="reduceOverjet" :is-checked="reduceOverjet" @input="setReduceOverjet">
            {{ $t('section.u_2.reduceOverjet') }}
          </checkbox>
        </div>
        <input-field
          id="ro-mm"
          v-model="roMm"
          class="col-12 col-sm-6 mb-4 w-50"
          :right-label="$t('section.u_2.roMm')"
          side-label="right"
          @input="setRoMm"
        />
        <input-field
          id="ro-where"
          v-model="roWhere"
          class="col-12 col-sm-6 mb-4 w-50"
          :left-label="$t('section.u_2.roWhere')"
          side-label="left"
          @input="setRoWhere"
        />
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.upperInfo') }}
          </h3>
        </div>
        <div class="col-12">
          <ul class="list-unstyled" v-html="$t('section.u_2.upperInfoLegend')" />
        </div>
      </div>
      <div class="d-flex flex-column align-items-center my-5">
        <b-button class="lof-button mb-4" variant="primary">
          {{ $t('common.buttons.saveAsTemplate') }}
        </b-button>
        <link-button to="/steps/step-3" arrow-icon>
          {{ $t('common.buttons.next') }}
        </link-button>
      </div>
    </template>
  </page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'step-2',

    data () {
      return {
        onlySetup: false,
        boltonDiscrepancy: false,
        resolveCrowding: false,
        rcMm: '',
        rcWhere: '',
        reduceOverjet: false,
        roMm: '',
        roWhere: ''
      }
    },

    computed: {
      ...mapGetters('upper-teeth', [
        'getOnlySetup',
        'getBoltonDiscrepancy',
        'getResolveCrowding',
        'getRcMm',
        'getRcWhere',
        'getReduceOverjet',
        'getRoMm',
        'getRoWhere'
      ])
    },

    created () {
      this.onlySetup = this.getOnlySetup
      this.boltonDiscrepancy = this.getBoltonDiscrepancy
      this.resolveCrowding = this.getResolveCrowding
      this.rcMm = this.getRcMm
      this.rcWhere = this.getRcWhere
      this.reduceOverjet = this.getReduceOverjet
      this.roMm = this.getRoMm
      this.roWhere = this.getRoWhere

      this.$store.commit('common/setTemplate', 'upper-teeth')
    },

    methods: {
      ...mapMutations('upper-teeth', [
        'setOnlySetup',
        'setBoltonDiscrepancy',
        'setResolveCrowding',
        'setRcMm',
        'setRcWhere',
        'setReduceOverjet',
        'setRoMm',
        'setRoWhere'
      ])
    }
  }
</script>
