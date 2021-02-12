<template>
    <!-- <b-col sm="5" md="6" class="my-1"> -->
    <b-form-group
        label="Per page"
        label-for="per-page-select"
        label-cols-md="10"
        label-align-sm="right"
        label-size="sm"
        class="mb-3"
    >
        <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
            align="right"
        ></b-form-select>
    </b-form-group>
    <!-- </b-col> -->
</template>

<script>
export default {
    name: "PageSize",
    props: ["pageOptions", "perPage"],
    date() {
        return {};
    },
};
</script>

<style></style>
