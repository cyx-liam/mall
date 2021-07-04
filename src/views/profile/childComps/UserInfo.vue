<template>
    <div class="user">
        <div class="head-img"><img src="../../../assets/img/profile/avatar.svg"></div>
        <div class="info">
            <div class="login">登录/注册</div>
            <div class="phone">
                <img src="../../../assets/img/profile/phone.svg">
                <span>暂无绑定手机号</span>
            </div>
        </div>
        <div class="arrow"><img src="../../../assets/img/common/arrow-left.svg"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .user{
        display: flex;
        align-items: center;
        background-color: var(--color-tint);
        padding: 10px 15px;
    }
    .head-img{
        width:100px;
        /* border: 1px solid #000; */
    }
    .head-img img{
        width: 95%;
    }
    .info{
        /* border: 1px solid #000; */
        color: #fff;
        flex: 1;
    }
    .info .login{
        padding-left: 5px;
        margin-bottom: 10px;
    }
    .info .phone{
        display: flex;
        align-items: center;
    }
    .info img{
        width: 25px;
    }
    .arrow{
        width: 30px;
        text-align: right;
        /* border: 1px solid #000; */
    }
    .arrow img{
        width: 80%;
    }
</style>