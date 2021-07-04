<template>
    <div class="account">
        <div class="account-item">
            <div class="num">0.00<span>元</span></div>
            <p>我的余额</p>
        </div>
        <div class="account-item">
            <div class="num">0<span>个</span></div>
            <p>我的优惠</p>
        </div>
        <div class="account-item">
            <div class="num">0<span>分</span></div>
            <p>我的积分</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .account{
        /* border: 1px solid #000; */
        display: flex;
        
    }
    .account-item{
        /* border: 1px solid #000; */
        padding: 18px 0;
        flex: 1;
        text-align: center;
        height: 100%;
        border-right: 1px solid #f2f2f2;
    }
    .account-item:nth-of-type(3){
        border-right:none;
    }
    .num{
        color: #ff5f3e;
        font-weight: bolder;
        font-size: 27px;
    }
    .num span{
        color: #000;
        font-weight: normal;
        font-size: 15px;
        margin-left: 3px;
    }
    .account-item p{
        margin-top: 8px;
        font-size: 15px;
    }
</style>