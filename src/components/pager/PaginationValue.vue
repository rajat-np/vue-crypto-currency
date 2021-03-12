<template>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="bitcoin-table"
        align="right"
    >
    </b-pagination>
</template>

<script>
export default {
    name: "PaginationValue",
    data() {
        return {};
    },
};
</script>
