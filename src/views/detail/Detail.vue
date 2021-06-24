<template>
  <div class="detail">
    <detail-nav-bar :itemIndex="currentIndex" @titleClick="titleClick"></detail-nav-bar>
    <scroll ref="scroll" class="content" :click="true" :pullUpLoad="true" @scroll="contentScroll" :bounceTop="false">
      <detail-swiper class="swiper-img" :imgList="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="goodsList" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childDetail/DetailNavBar.vue";
import DetailSwiper from "./childDetail/DetailSwiper.vue";
import DetailBaseInfo from "./childDetail/DetailBaseInfo.vue";
import DetailShopInfo from "./childDetail/DetailShopInfo.vue";
import DetailGoodsInfo from "./childDetail/DetailGoodsInfo.vue";
import DetailParamInfo from "./childDetail/DetailParamInfo.vue";
import DetailCommentInfo from "./childDetail/DetailCommentInfo.vue";
import DetailBottomBar from './childDetail/DetailBottomBar.vue';
import GoodsList from "../../components/content/goods/GoodsList.vue";

import Scroll from "../../components/common/scroll/Scroll.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail.js";
import { debounce } from "../../common/util";
import { backTopMixin } from "../../common/mixin";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      themeTops:[],
      currentIndex:0
    };
  },
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.id;

    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      (this.detailInfo = data.detailInfo),
        (this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        ));
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res) => {
      // console.log(res.data.list);
      this.goodsList = res.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$but.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();

      this.themeTops.push(0)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
      // console.log(this.themeTops);
    },
    contentScroll(position) {
      this.isBackTop = position.y < -800;
      this.listenScrollTheme(position)
    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTops[index],300)
    },
    listenScrollTheme(position){
      // console.log(position.y);
      for (let i = 0; i < this.themeTops.length-1; i++) {
        if (position.y <= (-this.themeTops[i]) && position.y > (-this.themeTops[i+1])) {
          this.currentIndex = i
          break;
        }
      }
    },
    addToCart(){
      let product = {}
      product.iid = this.iid,
      product.img = this.topImages[0],
      product.title = this.goods.title,
      product.desc = this.goods.desc,
      product.price = this.goods.realPrice,
      product.count = 1

      this.$store.dispatch("addCart",product)
      console.log(this.$store.state.cartList);
    }
  },
  
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 6;
  background-color: #fff;
  height: 100vh;
}
.content {
  position: absolute;
  background-color: #fff;
  top: 44px;
  bottom: 58px;
  /* top: 44px;
        bottom: 0; */
  /* height: calc(100vh - 44px); */
}
</style>