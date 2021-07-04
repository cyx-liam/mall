<template>
    <div class="good-list">
        <goods-item class="item" v-for="item in goods" :goodsItem="item" :key="item.id"></goods-item>
    </div>
</template>

<script>
    import GoodsItem from './GoodsItem.vue';
    export default {
        props: {
            goods: {
                type: Array,
            },
        },
        components: {
            GoodsItem,
        },
    }
</script>

<style scoped>
    .good-list {
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
    }
    .good-list .item{
        width: 48%;
    }
</style>