<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends" :key="item.sort">
            <img :src="item.image" :alt="item.title">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            recommends: {
                type:Array
            },
        },
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
    }
    .recommend-item{
        flex:1;
        text-align: center;
        padding: 13px 0 28px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item img{
        width: 85%;
        margin-bottom: 12px;

    }
</style>