<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/TabBar';
  export default {
    components: {
      TabBar,
    },
  }
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>