<template>
  <div class="title row">
    <div class="title-icon"></div>
    <div>{{title}}</div>
    <router-link :to="linkTo" v-if="more" class="title-more">更多&nbsp;&gt;</router-link>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    more: Boolean,
    link: String
  },
  computed: {
    linkTo () {
      let url = '/detail'
      if (this.link) {
        url = url + '?title=' + this.link
      }
      return url
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  position: relative;
  color: #a1052a;
  font-size: 18px;
  line-height: 24px;
  padding: 16px 0;
  .title-icon {
    width: 5px;
    height: 20px;
    margin-right: 6px;
    background-color: #a1052a;
  }
  .title-more {
    position: absolute;
    right: 0;
    color: #a1052a;
  }
}
</style>
