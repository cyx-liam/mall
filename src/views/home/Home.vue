<template>
    <div id="home">
        
        <nav-bar class="nav"><div slot="conter">购物街</div></nav-bar>
        <tab-control ref="contentTabtop" v-show="isTab" class="tab-control" @tabClick="tabClick" :title="['流行','新款','精选']"></tab-control>
        <scroll ref="scroll" 
                class="content"
                :click="true"
                @scroll="contentScroll"
                :pullUpLoad="true"
                :bounceTop="false"
                @pullUpLoad="loadMore">
            <home-swiper :banners="banners"/>  
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view/>
            <tab-control  ref="contentTab" class="tab-control" @tabClick="tabClick" :title="['流行','新款','精选']"></tab-control>
            <goods-list ref="goods" :goods="goods[currType].list"></goods-list>
        </scroll>
        <back-top @click.native="backTop" v-show="isBackTop"></back-top>
    </div>

</template>

<script>
    import NavBar from '../../components/common/navbar/NavBar.vue';
    import HomeSwiper from './childComps/HomeSwiper.vue';
    import RecommendView from './childComps/RecommendView.vue';
    import FeatureView from './childComps/FeatureView.vue';
    import TabControl from '../../components/content/tabControl/TabControl.vue';
    import GoodsList from '../../components/content/goods/GoodsList.vue';
    import Scroll from '../../components/common/scroll/Scroll.vue';
    import BackTop from '../../components/content/backTop/BackTop.vue';
    import {getMultiData,getHomeGoods} from '../../network/home';
    import { debounce } from '../../common/util';
    import { backTopMixin } from '../../common/mixin';

    export default {
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            // BackTop
        },
        mixins: [backTopMixin],
        data() {
            return {
                banners: [],
                recommends:[],
                goods:{
                    'pop':{page:0,list:[],scrolly:0},
                    'new':{page:0,list:[],scrolly:0},
                    'sell':{page:0,list:[],scrolly:0}

                },
                currType:"pop",
                // isBackTop:false,
                isTab:false,
                scrollPosition:0,
                goodsPosition:0,
                saveY:0,
                itemImgListener:null,
            }
        },
        created () {
            this.getMultiData();
            this.getHomeGoods("pop");
            this.getHomeGoods("new");
            this.getHomeGoods("sell");
            
        },
        mounted () {
            const refresh = debounce(this.$refs.scroll.refresh,100)
            this.itemImgListener = ()=>{
                refresh()
            }
            this.$but.$on("imgLoad",this.itemImgListener)
        },
        activated(){
            this.$refs.scroll.refresh()
            this.$refs.scroll.scrollTo(0,this.saveY,0)
            
        },
        deactivated(){
            this.saveY = this.$refs.scroll.scroll.y
            this.$but.$off("imgLoad",this.itemImgListener)
        },
        methods: {
            // 数据请求方法
            getMultiData(){
                getMultiData().then(res=>{
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type){
                let page = this.goods[type].page+1;
                getHomeGoods(type,page).then(res=>{
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page = res.data.page;
                    // console.log(res.data.list);
                })
            },

            // 事件方法
            
            tabClick(index){
                this.currType = Object.keys(this.goods)[index]
                this.$refs.contentTabtop.currIndex = index
                this.$refs.contentTab.currIndex = index

                //列表滚动bug
                if (this.goods[this.currType].scrolly==0) {
                    this.goods[this.currType].scrolly = this.goodsPosition
                }
                // console.log(this.goods[this.currType].scrolly);
                if (this.scrollPosition<=this.goodsPosition) {
                    this.$refs.scroll.scrollTo(0,this.goods[this.currType].scrolly,0)
                }
                
            },
            // backTop(){
            //     this.$refs.scroll.scrollTo(0,0)
            // },
            contentScroll(position){
                this.isBackTop = position.y < -800
                this.isTab = position.y < -this.$refs.contentTab.$el.offsetTop;

                //监听商品滚动值
                this.scrollPosition = position.y
                this.goodsPosition = -(this.$refs.goods.$el.offsetTop-this.$refs.contentTab.$el.offsetHeight)
                if(position.y < this.goodsPosition){
                    this.goods[this.currType].scrolly = position.y
                }
                
            },
            loadMore(){
                this.getHomeGoods(this.currType)
            }
        },
        
    }
</script>

<style scoped>
    #home{
        position: relative;
        /* padding-top: 44px;
        padding-bottom: 49px; */
        height: 100vh;
    }
    .content{
        position:absolute;
        top: 44px;
        bottom: 49px;
    }
    .nav{
        transform:translateZ(0);
        --webkit-transform:translateZ(0);
        background-color:var(--color-tint);
        color: #fff;
        letter-spacing: 5px;
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }
    .tab-control{
        position: sticky;
        top: 43px;
        background-color: #fff;
    }
</style>