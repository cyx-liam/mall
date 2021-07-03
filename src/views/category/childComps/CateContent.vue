<template>
    <div class="title-context" v-if="titleContent.length">
        <div class="context-item" v-for="item in titleContent" :key="item.acm">
            <div><img :src="item.image" @load="imgLoad"></div>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titleContent: {
                type: Array,
            },
        },
        methods: {
            imgLoad() {
                this.$emit("imgLoad")
            }
        },
    }
</script>

<style scoped>
    .title-context{
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        /* padding: 0 10px; */
    }
    .context-item{
        /* border: 1px solid #000; */
        width: 33%;
        text-align: center;
        margin-top: 15px;
    }
    .context-item img{
        width: 75%;
    }
    .context-item p{
        margin-top: 5px;
        font-size: 13px;
    }
</style>