<template>
    <scroll v-if="titleList.length" ref="scroll" class="scroll" :scrollbar="false" >
        <div class="content">
            <div class="titleItem"
             v-for="(item,index) in titleList" 
             :key="index"
             @click="clickTitle(index)" 
             :class="{titleColor : clickIndex==index}" >
                <span>{{item.title}}</span>
            </div>
        </div>
    </scroll>
</template>

<script>
    import Scroll from '../../../components/common/scroll/Scroll.vue';
    export default {
        components: {
            Scroll,
        },
        props: {
            titleList: {
                type:Array
            },
        },
        data() {
            return {
                clickIndex: 0
            }
        },
        methods: {
            clickTitle(index) {
                this.clickIndex = index
                this.$emit("titleClick",index)
            }
        }
    }
</script>

<style scoped>
    .scroll{
        height: 100%;
        /* border: 1px #000 solid; */
        width:100px;
        background-color: #f6f6f6;
    }
    .titleItem{
        /* border: 1px #000 solid; */
        text-align: center;
    }
    .titleItem span{
       
        line-height: 50px;
    }
    .titleColor{
        font-weight: bold;
        background-color: #fff;
        color: var(--color-high-text);
        border-left: 3px solid var(--color-high-text);

    }

</style>