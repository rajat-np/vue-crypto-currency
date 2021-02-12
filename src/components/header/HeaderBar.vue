<template> 
    <h1 class="p-3 text-center">
        {{title}}
    </h1>
</template>

<script>
export default {
    name: 'HeaderBar',
    props: ['headerTitle'],
    data() {
        return {
            title: this.headerTitle
        }
    }
};
</script>

<style></style>
