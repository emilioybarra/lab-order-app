<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sentForms') }}
    </template>
    <template #body>
      <list-item name="Form 1" />
      <list-item name="Form 2" />
      <list-item name="Form 3" />
      <list-item name="Form 4" />
      <list-item name="Form 5" />
      <pagination-bar :pages="10" />
    </template>
  </page>
</template>

<script>
  export default {
    name: 'sent-forms'
  }
</script>
