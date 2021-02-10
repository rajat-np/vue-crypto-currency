<template>
  <div id="app">
    <CryptoCurrencies/>
  </div>
</template>

<script>
import CryptoCurrencies from './components/CryptoCurrencies.vue'

export default {
  name: 'App',
  components: {
    CryptoCurrencies
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
