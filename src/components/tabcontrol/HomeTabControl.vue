<template>
  <div class="tabcontrol">
    <van-tabs sticky offset-top="46px" title-active-color="var(--color-tint)">
      <van-tab v-for="(item, index) in tab" :key="index" :title="item.name">
        <div>
          <h2 v-for="(good, index) in goods[item['type']].list" :key="index">{{item['type']}}：{{index+1}}、{{good.price}}</h2>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: 'hometabcontrol',
  props: {
    tab: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
  
</style>