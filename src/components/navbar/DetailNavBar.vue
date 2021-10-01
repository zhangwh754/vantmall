<template>
  <div class="detail-nav-bar">
    <van-nav-bar fixed placeholder 
      left-arrow @click-left="onClickLeft"
      class="title-box"
    >
      <template #title>
        <div class="title">
          <div 
            v-for="(title, index) in titles" :key="index"
            class="title-item" :class="{activedTitle: currentIndex === index}"
            @click="titleClick(index)"
          >
            {{title}}
          </div>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>

export default {
  name: 'detailnavbar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleScroll', index)
    }
  }
}
</script>
<style scoped>
  .van-nav-bar {
    background-color: pink;  
  }

  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    margin: 7px;
  }

  .activedTitle {
    color: var(--color-high-text);
  }
</style>