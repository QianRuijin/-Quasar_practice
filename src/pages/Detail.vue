<template>
  <div class="wrap row justify-center">
    <div class="row">
      <div class="content-wrap">
      </div>
      <div class="info-wrap column">
        <div class="info-title">第十一届<br/>中国医疗器械监督管理国际会议</div>
        <div class="info">
          <div class="row justify-between">
            <div class="info-item">会议日期</div>
            <div>2020年11月17日-20日</div>
          </div>
          <div class="row justify-between">
            <div class="info-item">网上注册优惠截止日期</div>
            <div>2020年10月18日</div>
          </div>
          <div class="row justify-between">
            <div class="info-item">网上注册截止日期</div>
            <div>2020年11月20日</div>
          </div>
          <div class="row justify-between">
            <div class="info-item">现场注册时间</div>
            <div>2020年11月17日</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$axios.post('/api/con/info/get')
        .then((response) => {
          this.data = response.data
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>

<style scoped>
.content-wrap {
  width: 800px;
  min-height: 440px;
  border: 1px solid #eee;
  font-size: 16px;
  padding: 0 16px;
  margin: 32px 16px 0 0;
}

.info-wrap {
  width: 464px;
  height: 440px;
  border: 1px solid #eee;
  margin: 32px 0 0;
  font-size: 16px;
}

.info-title {
  color: #a1052a;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 16px 0;
}

.info {
  width: 418px;
  height: 320px;
  padding: 20px;
  margin: 0 22px;
  background: #f5fafd;
}

.info-item {
  color: rgb(255, 156, 0);
  height: 80px;
}
</style>
