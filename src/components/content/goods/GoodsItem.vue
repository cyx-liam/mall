<template>
    <div class="goods-item" @click="itemClick">
        <div><img :src="img" @load="imgLoad"></div>
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect"> <img src="../../../assets/img/common/collect.svg">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goodsItem: {
                type:Object
            },
        },
        computed: {
            img() {
                return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
            }
        },
        methods: {
            imgLoad() {
                this.$but.$emit("imgLoad")
            },
            itemClick(){
                if(this.goodsItem.iid){
                    this.$router.push("/detail/"+this.goodsItem.iid)
                }
                
            }
        },
    }
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    /* border: 1px solid #000; */
  }
    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
   
    .collect img{
        margin-left:7px;
        width: 15px;
        position: relative;
        top: 2px;
    }
    .price{
        color:var(--color-tint)
    }
</style>