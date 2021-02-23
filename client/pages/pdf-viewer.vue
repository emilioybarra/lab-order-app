<template>
  <div style="width: 800px; height: 100%; position: absolute; overflow: scroll;" class="mx-auto">
    <pdf-file show-both-pages />
  </div>
</template>

<script>
  export default {
    name: 'pdf-viewer',

    layout: 'plain'
  }
</script>
