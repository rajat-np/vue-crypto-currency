<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container class="justify-content-md-left">
            <b-navbar-brand href="#">{{ title }}</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: "TopBar",
    props: ['navTitle'],
    data() {
        return {
            title: this.navTitle,
        };
    },
};
</script>
