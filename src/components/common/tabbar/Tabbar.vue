<template>
    <div class="tabbar">
        <tabbar-item path="/home">
            <img slot="item-activeimg"  src="../../../assets/img/tabbar/home_active.svg">
            <img slot="item-img"   src="../../../assets/img/tabbar/home.svg">
            <p slot="item-text">首页</p>
        </tabbar-item>
        <tabbar-item path="/category">
            <img slot="item-activeimg"  src="../../../assets/img/tabbar/category_active.svg">
            <img slot="item-img"   src="../../../assets/img/tabbar/category.svg">
            <p slot="item-text">分类</p>
        </tabbar-item>
        <tabbar-item path="shopcart">
            <img slot="item-activeimg"  src="../../../assets/img/tabbar/shopcart_active.svg">
            <img slot="item-img"   src="../../../assets/img/tabbar/shopcart.svg">
            <p slot="item-text">购物车</p>
        </tabbar-item>
        <tabbar-item path="profile">
            <img slot="item-activeimg"  src="../../../assets/img/tabbar/profile_active.svg">
            <img slot="item-img"   src="../../../assets/img/tabbar/profile.svg">
            <p slot="item-text">我的</p>
        </tabbar-item>
    </div>
</template>

<script>
import TabbarItem from './TabBarItem.vue';
    export default {
        components: {
            TabbarItem,
        },
    }
</script>

<style scoped>
    .tabbar{
        width: 100%;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 49px;
        background-color:#f6f6f6;
        box-shadow: 0 -1px  #c9c9c9;
        z-index: 5;
    }
    
</style>