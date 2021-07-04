<template>
    <div>
        <nav-bar class="nav-bar"><div slot="conter">我的档案</div></nav-bar>
        <user-info></user-info>
        <account-info></account-info>
        <info-list :infoList="orderList"></info-list>
        <info-list :infoList="serviceList"></info-list>
        
    </div>
</template>

<script>
    import UserInfo from './childComps/UserInfo.vue';
    import AccountInfo from './childComps/AccountInfo.vue';
    import InfoList from './childComps/InfoList.vue';

    import NavBar from '../../components/common/navbar/NavBar.vue';
    export default {
        components: {
            NavBar,
            UserInfo,
            AccountInfo,
            InfoList
        },
        data() {
            return {
                orderList: [
                    {
                        ico:require('../../assets/img/profile/message.svg'),
                        info:"我的消息"
                    },
                    {
                        ico:require('../../assets/img/profile/pointer.svg'),
                        info:"积分商城"
                    },
                    {
                        ico:require('../../assets/img/profile/vip.svg'),
                        info:"会员卡"
                    }
                ],
                serviceList:[
                    {
                        ico:require('../../assets/img/profile/cart.svg'),
                        info:"我的购物车"
                    },
                    {
                        ico:require('../../assets/img/profile/shopping.svg'),
                        info:"下载购物车APP"
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #fff;
        letter-spacing: 5px;
    }
</style>