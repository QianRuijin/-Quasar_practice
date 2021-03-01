<template>
  <div id="q-app" class="wrap">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import VueAnime from 'vue-animejs'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
Vue.use(VueAnime)
export default {
  name: 'App'
}
</script>
