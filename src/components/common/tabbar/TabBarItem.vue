<template>
    <div class="tabbar-item" @click="clickitem">
        <div v-if="isActive"><slot name="item-activeimg">图片</slot></div>
        <div v-else><slot name="item-img">图片</slot></div>
        <div :style="isActiveColor"><slot name="item-text">导航</slot></div>
    </div>
</template>

<script>
    export default {
        props: {
            path:{
                type:String
            },
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path)!=-1
            },
            isActiveColor(){
                return this.isActive ? "color:#ff5777":""
            }
        },
        methods: {
            clickitem() {
                this.$router.replace(this.path)
            }
        },
    }
</script>

<style scoped>
    .tabbar-item{
        flex:1;
        text-align: center;
        font-size: 14px;
        padding: 3px 0;
    }
    .tabbar-item img{
        height: 24px;
        width: 25px;
    }
</style>