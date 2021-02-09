<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">CryptoList</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
    <div class="container">
      <h3 class="p-3 text-center">List of top 100 crypto currencies</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CryptoCurrencies",
  mounted() {
    this.$store.dispatch('fetchCryptoCurrencies')
  },
};
</script>
