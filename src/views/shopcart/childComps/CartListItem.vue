<template>
  <div>
    <div id="shop-item">
      <div class="item-selector">
          <check-button @click.native="isChecked" :active="product.checked"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.img" alt="商品图片"/>
      </div>
      <div class="item-info">
        <div class="item-title">{{ product.title }}</div>
        <div class="item-desc">{{ product.desc }}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{ product.price }}</div>
          <div class="item-count right">
            <div class="sub" :class="{subColor : product.count <= 1}"  @click="sub()">-</div>
            <div class="count">{{ product.count }}</div>
            <div class="add" @click="add()">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue';
export default {
  props: {
    product: {
      type: Object,
    },
    
  },
  components: {
        CheckButton,
  },
  methods: {
    isChecked() {
        this.product.checked = !this.product.checked
    },
    sub(){
      if (this.product.count > 1) {
        this.$store.commit("subCount",this.product.iid)
      }
      
    },
    add(){
      this.$store.commit("addCount",this.product.iid)
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 110px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
.item-count{
  display:flex;
  border: #999 thin solid;
  width: 90px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
  align-items: center;
}
.item-count .sub,.add{
  /* border: #000 1px solid; */
  text-align: center;
  flex: 1;
  font-size: 22px;
}
.item-count .count{
  width: 40px;
  text-align: center;
  border-left:#999 thin solid;
  border-right:#999 thin solid;
}
.subColor{
  color: #999;
}
</style>