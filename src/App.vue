<template>
  <div>
    <!-- <keep-alive exclude="betail"> -->
      <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/Tabbar';
  export default {
    components: {
      TabBar,
    },
  }
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>