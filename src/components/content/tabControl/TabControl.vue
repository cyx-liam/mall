<template>
    <div class="tab-control">
        <div  class="tab-control-item"
                v-for="(item,index) in title"
                :key="item" @click="clickTab(index)"
                :class="{activeColor:index==currIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: Array,
            },
        },
        data() {
            return {
                currIndex: 0
            }
        },
        methods: {
            clickTab(index) {
                this.currIndex = index
                this.$emit("tabClick",index)
            }
        },
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #fff;
        z-index: 2;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .activeColor span{
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-high-text);
    }

</style>