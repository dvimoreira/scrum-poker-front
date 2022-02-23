<template>
  <div>
    <div id="layout">
      <div id="layout__content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  html {
    background: #000000;
    height: 100%;
  }

  .modal {
    padding: 0 1rem;
  }

  .help {
    margin: 0.25rem 0;
  }

  .field {
    margin-bottom: 0.80rem;
  }
</style>
