<template>
  <page>
    <template #headline>
      {{ $t('common.titles.upperTeeth') }}
    </template>
    <template #body>
      <teeth-canvas teeth-image="upper" />
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
          <checkbox>
            {{ $t('section.u_2.boltonDiscrepancy') }}
          </checkbox>
          <checkbox>
            {{ $t('section.u_2.resolveCrowding') }}
          </checkbox>
        </div>
        <input-field id="rc-mm" class="col-12 col-sm-6 mb-4 w-50" :right-label="$t('section.u_2.rcMm')" side-label="right" />
        <input-field id="rc-where" class="col-12 col-sm-6 mb-4 w-50" :left-label="$t('section.u_2.rcWhere')" side-label="left" />
      </div>
      <div class="row">
        <div class="col-12">
          <checkbox>
            {{ $t('section.u_2.reduceOverjet') }}
          </checkbox>
        </div>
        <input-field id="ro-mm" class="col-12 col-sm-6 mb-4 w-50" :right-label="$t('section.u_2.roMm')" side-label="right" />
        <input-field id="ro-where" class="col-12 col-sm-6 mb-4 w-50" :left-label="$t('section.u_2.roWhere')" side-label="left" />
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="lof-headline lof-headline--2 my-4">
            {{ $t('section.u_2.upperInfo') }}
          </h3>
        </div>
        <div class="col-12" v-html="$t('section.u_2.upperInfoLegend')" />
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
  export default {
    name: 'step-2'
  }
</script>
