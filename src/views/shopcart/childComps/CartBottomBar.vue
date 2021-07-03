<template>
    <div class="bottom-bar">
        <div class="checked-all">
            <check-button @click.native="checkedAll" :active='isCheckedAll'></check-button>
            <span>全选</span>
        </div>
        <div class="total-price">合计:￥{{totalPrice}}</div>
        <div class="del" @click="del">删除</div>
        <div class="calc">去计算({{cartLength}})</div>
    </div>
</template>

<script>
    import CheckButton from './CheckButton.vue';
    import {mapGetters} from 'vuex';
    export default {
        
        components: {
            CheckButton,
        },
        computed: {
            ...mapGetters(['cartLength','cartList']),
            totalPrice() {
                return  this.cartList.filter(item=>{
                    return item.checked
                }).reduce((preValue,item)=>{
                    return preValue + item.price * item.count
                },0).toFixed(2)
            },
            cartLength(){
                return  this.cartList.filter(item=>{
                    return item.checked
                }).length
            },
            isCheckedAll(){
                if (this.cartLength == 0) {
                    return false
                }
                return this.cartList.every(item => {
                    return item.checked
                })
            }
        },
        methods:{
            checkedAll() {
                if (this.isCheckedAll) {
                    this.cartList.forEach(item => {
                        item.checked = false
                    })
                }else(
                    this.cartList.forEach(item => {
                        item.checked = true
                    })
                )
            },
            del(){
                this.$store.commit("del")
            }
        },
    }
</script>

<style scoped>
    .bottom-bar{
        position:fixed;
        bottom: 49px;
        left: 0;
        right: 0;
        height: 44px;
        background-color: #eee;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        display:flex;
        align-items: center;
        
    }
    .checked-all{
        /* border:1px solid #000; */
        display:flex;
        align-items: center;
        width: 90px;
        padding-left: 10px;
    }
    .checked-all span{
        margin-left: 7px;
        color: #636363;
    }
    .total-price{
        flex: 1;
        font-size: 18px;
        color: #666;
    }
    .del{
        width: 70px;
        line-height: 44px;
        background-color: #ffbb0d;
        text-align: center;
        font-weight: bold;
        color: #fff;
        letter-spacing: 3px;
    }
    .calc{
        /* border:1px solid #000; */
        line-height: 44px;
        width: 110px;
        text-align: center;
        background-color: #ff4500;
        color: #fff;
        font-weight:bold
        
    }
</style>