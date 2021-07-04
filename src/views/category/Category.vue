<template>
  <div>
    <nav-bar class="nav"><span slot="conter">商品分类</span></nav-bar>
    <div class="content">
      <cate-menu :titleList="titles" @titleClick="titleClick"></cate-menu>
      <scroll ref="scroll" class="content-scroll" @scroll="scroll">
        <cate-content :titleContent="subcategoryContent" @imgLoad="imgLoad"></cate-content>
        <h2 v-if="goods.length" class="hot">热销推荐</h2>
        <goods-list :goods="goods"></goods-list>
      </scroll>
      <back-top @click.native="backTop" v-show="isBackTop"></back-top>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CateMenu from './childComps/CateMenu.vue';
import CateContent from './childComps/CateContent.vue';

import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodsList from '../../components/content/goods/GoodsList.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';
import { getcategory, getSubcategory, getCategoryDetail } from "../../network/category";
import { backTopMixin} from '../../common/mixin';
export default {
  data() {
    return {
      titles: [],
      categoryData:{},
      titleIndex:-1,
      // goodsIndex:-1,
      scrollY:0,
    };
  },
  mixins: [backTopMixin],
  components: {
    NavBar,
    CateMenu,
    CateContent,
    Scroll,
    GoodsList
  },
  created() {
    getcategory().then((res) => {
      // console.log(res.data.category.list);
      this.titles = res.data.category.list;
      for (let i = 0; i < this.titles.length; i ++) {
        this.categoryData[i]={
          subcategories:[],
          goods:[],
          scrollY:0
        }
        // this._getSubcategory(i)
        // this._getCategoryDetail(i)
      }
      this._getSubcategory(0)
    });
    
  },
  mounted () {
    this.$but.$on("imgLoad",()=>{
      this.$refs.scroll.refresh()
    })
  },
  activated(){
    this.$refs.scroll.refresh()
  },
  computed: {
    subcategoryContent() {
      if(this.titleIndex==-1){
        return []
      }
      return this.categoryData[this.titleIndex].subcategories
    },
    goods(){
      if(this.titleIndex==-1){
        return []
      }
      // console.log(this.categoryData[this.titleIndex].goods);
      return this.categoryData[this.titleIndex].goods
    }
  },
  methods: {
    //网络请求
    _getSubcategory(index) {
      getSubcategory(this.titles[index].maitKey).then(res=>{
        if(!this.categoryData[index].subcategories.length){
          this.categoryData[index].subcategories = res.data.list
        }
        
        
        // if (this.titleIndex == -1) {
        //   if(this.categoryData[0].subcategories.length){
        //       this.titleIndex=0
        //   }
        // }
        this._getCategoryDetail(index)
      })
    },
    _getCategoryDetail(index){
      let miniWallkey = this.titles[index].miniWallkey
      // console.log(index,miniWallkey);
      getCategoryDetail(miniWallkey,'pop').then(res =>{
        if(this.categoryData[index].goods.length == 0){
          this.categoryData[index].goods = res
        }
       this.titleIndex = index
       
        // console.log(this.titles[index].goods);
        // if (this.titleIndex == -1) {
        //   if(this.categoryData[0].goods.length){
        //       this.goodsIndex=0
        //   }
        // }
      })
    },
    // 事件
    titleClick(index){
      // this.titleIndex = index
      // this.goodsIndex = index
      this.goodLength = 0
      this._getSubcategory(index);

      
    },
    imgLoad(){
      this.$refs.scroll.refresh()
      
    },
    scroll(position){
      this.scrollY = position.y
      this.isBackTop = position.y < -800
    }
    
  },
  mounted () {
    this.$but.$on("imgLoad",()=>{
      //   setTimeout(()=>{
        this.$refs.scroll.refresh()
         this.$refs.scroll.scrollTo(0,this.categoryData[this.titleIndex].scrollY,0)
      //  },0)
    })
  },
  activated(){
    this.$refs.scroll.refresh()
    if (this.titleIndex!=-1) {
      this.$refs.scroll.scrollTo(0,this.categoryData[this.titleIndex].scrollY,0)
    }
    
  },
  deactivated(){
    this.categoryData[this.titleIndex].scrollY = this.scrollY
  },
  watch: {
      titleIndex(newValue, oldValue) {
        if(oldValue!=-1){
          this.categoryData[oldValue].scrollY = this.scrollY
        }
      }
    },
}
</script>

<style scoped>
.nav {
  background-color: var(--color-tint);
  color: #fff;
  letter-spacing: 5px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
}
.content-scroll {
  height: 100%;
  flex: 1;
}
.hot{
  margin: 30px 0px 10px 0;
  padding:3px 0 3px 10px;
  letter-spacing: 2px;
  background-color: var(--color-high-text);
  color: #fff;
}
</style>