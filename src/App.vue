<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar v-show="!$route.meta.noTabBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar.vue'
export default {
  name: 'app',
  components: {
    TabBar,
  }
}
</script>

<style>
  @import url('assets/css/base.css');

</style>
