<template>
    <b-container fluid="xs">
        <nav-bar :navTitle="navTitle" />
        <header-bar :headerTitle="headerTitle" />
        <b-container class="justify-content-md-center">
            <table-view :tableItems="cryptoCurrencies" />
        </b-container>
    </b-container>
</template>

<script>
import NavBar from "./navbar/NavBar";
import HeaderBar from "./header/HeaderBar";
import TableView from "./table/TableView";
import { mapGetters } from "vuex";
import { LIMIT, INTERVAL } from "../constants";

export default {
    name: "CryptoCurrencies",
    components: {
        NavBar,
        HeaderBar,
        TableView,
    },
    data() {
        return {
            navTitle: "CryptoList",
            fetchOnInterval: null,
            interval: INTERVAL,
            limit: LIMIT,
            headerTitle: "List of top 100 crypto currencies",
        };
    },
    mounted() {
        this.$store.dispatch("fetchCryptoCurrencies");
        this.fetchOnInterval = setInterval(() => {
            this.$store.dispatch("fetchCryptoCurrencies");
        }, this.interval);
    },
    computed: mapGetters(["cryptoCurrencies", "stats", "base", "loading"]),
    beforeDestroy() {
        clearTimeout(this.fetchOnInterval);
    },
};
</script>

<style scoped>

</style>
