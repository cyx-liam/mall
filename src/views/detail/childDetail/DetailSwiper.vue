<template>
    <swiper v-if="topImg" class="swiperImg">
        <swiper-item v-for="item in topImg" :key="item">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
    export default {
        props: {
            imgList:{
                type:Array,
            }
        },
        data() {
            return {
                topImg: null,
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        watch: {
            imgList(newValue, oldValue) {
                this.topImg = newValue
            }
        },
    }    
    
</script>

<style scoped>
    .swiperImg{
        height:300px;
    }
</style>