<template>
  <div class="lof-page">
    <div class="lof-page__body">
      <div class="d-flex flex-column text-center mb-5">
        <h6 class="lof-content lof-content--1 w-75 d-flex justify-content-center align-self-center">
          {{ $t('common.headlines.newForm') }}
        </h6>
        <link-button to="/steps/step-1">
          {{ $t('common.buttons.newForm') }}
        </link-button>
      </div>
      <div class="d-flex flex-column text-center mb-5">
        <h6 class="lof-content lof-content--1 w-75 d-flex justify-content-center align-self-center">
          {{ $t('common.headlines.sentForms') }}
        </h6>
        <link-button to="/sent-forms">
          {{ $t('common.buttons.sentForms') }}
        </link-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'start'
  }
</script>
