<template>
    <div class="info-list">
        <div class="item" v-for="item in infoList" :key="item.info">
            <img :src="item.ico">
            <span>{{item.info}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            infoList: {
                type: Array,
                default(){
                    return []
                }
            },
        },
    }
</script>

<style scoped>
    .info-list{
        /* border: 1px #000 solid; */
        padding-left: 20px;
        border-top: 15px solid #f2f2f2;
    }
    .item{
        /* border: 1px #000 solid; */
        display: flex;
        align-items: center;
        line-height: 40px;
    }
    .item img{
        width: 22px;
        margin-right: 6px;
    }
    .item span{
        color: #000;
        flex: 1;
        border-bottom: thin #f2f2f2 solid;
    }
    .item:last-of-type span{
        border-bottom: none;
    }
</style>