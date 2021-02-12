<template>
    <b-container>
        <b-row>
            <b-col md="12">
                <!-- <page-size :pageOptions="pageOptions" :perPage="perPage" /> -->
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
            </b-col>
        </b-row>
        <b-table
            id="bitcoin-table"
            responsive
            striped
            hover
            :items="tableItems"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
        >
            <template v-slot:cell(iconUrl)="data">
                <img
                    class="img-fluid"
                    :src="data.item.iconUrl"
                    alt="..."
                    height="50"
                    width="50"
                />
            </template>
        </b-table>
        <!-- <pagination-value :perPage="perPage" :rows="rows" /> -->
        <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="bitcoin-table"
                    align="center"
                ></b-pagination>
    </b-container>
</template>

<script>
// import PageSize from '../pager/PageSize';
// import PaginationValue from '../pager/PaginationValue';

export default {
    name: "TableView",
    props: ["tableItems"],
    components: {
        // PageSize,
        // PaginationValue,
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            pageOptions: [5, 10, 15, 20, 25, 30, 40, 50, { value: 100, text: "Show a lot" }],
            fields: ['iconUrl', 'name', 'price']
        };
    },
    computed: {
        rows() {
            return this.tableItems.length;
        },
    },
};
</script>

<style>

.page-item.active .page-link {  
    background-color: #52a3b8 !important;
    border-color: #52a3b8 !important;
}

</style>
