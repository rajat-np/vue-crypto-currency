<template>
  <div class="currency-list">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">CryptoList</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
    <div class="container">
      <h2 class="p-3 text-center">List of top 100 crypto currencies</h2>
      <div class="table-contents">
        <div class="loader" v-if="loading">
          <h1>Loading...</h1>
        </div>
        <table class="striped hover">
          <tbody>
            <tr
              v-for="cryptoCurrency in cryptoCurrencies.slice(this.offset, this.offset + this.pageSize)"
              v-bind:key="cryptoCurrency.id"
            >
              <th><img :src="cryptoCurrency.iconUrl" /></th>
              <th>{{ cryptoCurrency.name }}</th>
              <th>{{ cryptoCurrency.symbol }}</th>
              <th>
                {{ base.sign }}{{ parseFloat(cryptoCurrency.price).toFixed(2) }}
              </th>
              <th
                :class="{
                  red: cryptoCurrency.change < 0,
                  green: cryptoCurrency.change >= 0,
                }"
              >
                {{ cryptoCurrency.change }}%
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="paginate">
        <select v-model="pageSize">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div>
          <paginate
            :pageCount="10"
            :containerClass="'pagination'"
            :clickHandler="changePage"
            :pageClass="'page-item'"
            :nextClass="'next-item'"
            :prevClass="'prev-item'"
          >
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Paginate from "vuejs-paginate";

export default {
  name: "CryptoCurrencies",
  components: {
    Paginate,
  },
  watch: {
    pageSize: function (value) {
      this.pageSize = value
    },
  },
  mounted() {
    this.$store.dispatch("fetchCryptoCurrencies");
  },
  methods: {
    changePage: function(pageNum) {
      this.offset = pageNum * this.pageSize;
    },
  },
  computed: mapGetters(["cryptoCurrencies", "stats", "base", "loading"]),
  data() {
    return {
      offset: 0,
      pageSize: 10,
    };
  },
};
</script>
