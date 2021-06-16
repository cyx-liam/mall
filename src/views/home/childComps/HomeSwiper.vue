<template>
    <swiper class="home-swiper">
        <swiper-item v-for="item in banners" :key="item.image">
            <img :src="item.image" :alt="item.title">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper/index';
    export default {
        props: {
            banners: {
                type: Array,
            },
        },
        components: {
            Swiper,
            SwiperItem
        },
    }
</script>

<style scoped>
    .home-swiper img{
        width: 100%;
    }
</style>