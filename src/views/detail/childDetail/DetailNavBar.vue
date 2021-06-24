<template>
    <div>
        <nav-bar>
            <div @click="backClick" class="back" slot="left"><img src="../../../assets/img/common/back.svg" alt=""></div>
            <div class="title" slot="conter">
                <span  v-for="(item,index) in titles" :key="item.id" :class="{'activeTitle':index == itemIndex}" @click="itemClick(index)"> 
                    {{ item }}
                </span>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from '../../../components/common/navbar/NavBar.vue';
    export default {
        props: {
            itemIndex: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                titles: ["商品","参数","评论","推荐"],
            }
        },
        components: {
            NavBar,
        },
        methods: {
            itemClick(index) {
                // this.itemIndex = index
                this.$emit("titleClick",index)
            },
            backClick(){
                this.$router.back()
            }
        },
    }
</script>

<style scoped>
    .title{
        display: flex;
        padding: 0 15px;
    }
    .title span{
        flex: 1;
        font-size: 15px;
    }
    .back{
        margin-top: 8px;
    }
    .activeTitle{
        color: var(--color-high-text);
    }
</style>