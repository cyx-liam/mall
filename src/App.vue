<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar/Tabbar';
  export default {
    components: {
      Tabbar,
    },
  }
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>