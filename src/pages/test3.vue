<template>
  <div class="wrapper">
    <div class="boxes">
      <div class="box" v-anime="animation(1)">1</div>
      <div class="box" v-anime="animation(2)">2</div>
      <div class="box" v-anime="animation(3)">3</div>
      <div class="box" v-anime="animation(4)">4</div>
      <div class="box" v-anime="animation(5)">5</div>
      <div class="box" v-anime="animation(6)">6</div>
      <div class="box" v-anime="animation(7)">7</div>
      <div class="box" v-anime="animation(8)">8</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test3',
  data () {
    return {}
  },
  computed: {
    animation () {
      return (n) => {
        const distance = (100 * n)
        // const backDistance = 800 + distance
        return {
          translateX: distance,
          duration: 0,
          // loop: true,
          easing: 'linear'
          // update: function (anim) {
          //   this.$anime.set({ translateX: 90 })
          // }
        }
      }
    }
  },
  mounted () {
    const targets = this.$el
    console.log(targets)
    this
      .$anime
      .timeline()
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo'
      })
      .add({
        targets,
        translateX: -250,
        loop: true,
        duration: 3000,
        easing: 'easeOutExpo'
      })
  }
}
</script>

<style scoped>
.container {
  width: 1280px;
  overflow: hidden;
}

.wrapper {
  width: 700px;
  height: 100px;
  position: relative;
  margin: 40px auto 0;
  background: #ccc;
  overflow: hidden;
}

.box {
  position: absolute;
  width: 100px;
  height: 100px;
  background: red;
  font-size: 25px;
  line-height: 100px;
  text-align: center;
}
.box:nth-child(odd) {
  background: #f8f8f8;
}
.box:nth-child(even) {
  background: #eee;
}

.boxes {
  position: relative;
  left: -100px;
}
</style>
