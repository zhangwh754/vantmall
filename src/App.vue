<template>
  <div id="app">
    <div id="nav">
      <tab-bar></tab-bar>
      <router-view></router-view>
    </div>
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
