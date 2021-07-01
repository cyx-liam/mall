<template>
    <div>
        <cart-list-item v-for="item in cartList" :key="item.iid" :product="item" ></cart-list-item>
    </div>
</template>

<script>
    import CartListItem from './CartListItem.vue';
    import {mapGetters} from 'vuex';
    export default {
        // props: {
        //     cartList: {
        //         type: Array,
        //     },
        // },
        components: {
            CartListItem,
        },
        computed: {
            ...mapGetters(['cartList'])
        },
    }
</script>

<style scoped>

</style>