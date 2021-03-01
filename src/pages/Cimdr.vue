<template>
  <div class="column container">
    <cimdr-login class="q-my-lg"></cimdr-login>
    <div class="row q-my-lg">
      <div class="news-wrap">
        <item-title :title="'新闻动态'" :more="true" :link="'新闻动态'"></item-title>
        <div class="row q-mb-xs">
          <q-img src="http://cdnoss.medcircle.cn/app/info/33_1408_15715_1605060765398_95916.jpg" class="news-img"></q-img>
          <div class="q-ml-md text-h5">{{firstNew.infoTitle}}</div>
        </div>
        <div class="row justify-between news-item" v-for="item in newsList" :key="item.infoId">
          <div>{{item.infoTitle}}</div>
          <div>{{newsDate(item.infoDt)}}</div>
        </div>
      </div>
      <div class="doc-wrap">
        <item-title :title="'资料下载'" :more="true" :link="'资料下载'" class="q-mx-lg"></item-title>
        <ul class="q-mr-lg q-mt-none">
          <li v-for="item in docList" :key="item.infoId" class="doc-item">
            <a :href="item.infoUrl">{{item.infoTitle}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row q-my-lg pic-wrap wrap">
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/APAC.1b35aa2.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Kmdica.5630c8d.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Ditta.45fa40c.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Jira.d724e73.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Kmdica.5630c8d.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Ditta.45fa40c.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Jira.d724e73.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Kmdica.5630c8d.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Ditta.45fa40c.png"></q-img>
      <q-img class="img" src="http://www.cimdr.com/cimdr/static/img/Jira.d724e73.png"></q-img>
    </div>
    <div class="history-wrap q-my-lg">
      <item-title :title="'往期回顾'" :more="true" :link="'往期回顾'"></item-title>
      <div class="row wrap">
        <div class="history-item" v-for="item in historyList" :key="item.infoId">
          {{item.infoTitle}}
        </div>
      </div>
    </div>
    <div class="carousel-wrap q-my-lg">
      <vue-seamless-scroll :data="listData" :class-option="optionLeft" class="seamless-warp">
        <ul class="item row">
          <li class="scroll-li" v-for="(item, index) in listData" :key="index">
            <div>
              <img class="scroll-img" :src="item.url" />
            </div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
    <!-- <div class="carousel-wrap q-my-lg">
      <vue-seamless-scroll :data="listData" :class-option="optionLeft" class="seamless-warp">
        <div class="item row">
          <q-img class="scroll-img" v-for="(item, index) in listData" :key="index" :src="item.url"> </q-img>
        </div>
      </vue-seamless-scroll>
    </div> -->
  </div>
</template>

<script>
import { date } from 'quasar'
import CimdrLogin from '../components/Login'
import ItemTitle from '../components/Title'
export default {
  name: 'Cimdr',
  components: {
    CimdrLogin,
    ItemTitle
  },
  data () {
    return {
      firstNew: {},
      newsList: [],
      docList: [],
      historyList: [],
      listData: [
        { url: 'http://www.cimdr.com/cimdr/static/img/img2.00ef986.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img5.c8f2dd8.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img10.3ac5ed5.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img4.ea28bae.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img8.71498b4.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img2.00ef986.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img5.c8f2dd8.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img10.3ac5ed5.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img4.ea28bae.jpg' },
        { url: 'http://www.cimdr.com/cimdr/static/img/img8.71498b4.jpg' }
      ]
    }
  },
  mounted () {
    this.loadnews()
  },
  computed: {
    newsDate () {
      return function (i) {
        return date.formatDate(i, 'YYYY.MM.DD')
      }
    },
    optionLeft () {
      return {
        direction: 2,
        step: 1,
        hoverStop: false
      }
    }
  },
  methods: {
    loadnews () {
      this.$axios.get('/data/news.json')
        .then((response) => {
          this.firstNew = response.data.slice(0, 1)[0]
          this.newsList = response.data.slice(1, 6)
          console.log(this.firstNew)
          console.log(this.newsList)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
      this.$axios.get('/data/doc.json')
        .then((response) => {
          this.docList = response.data.slice(0, 9)
          console.log(this.docList)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
      this.$axios.get('/data/history.json')
        .then((response) => {
          this.historyList = response.data.slice(0, 10)
          console.log(this.historyList)
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

<style scoped lang="scss">
.container {
  width: 1280px;
  margin: 0 auto;
  font-size: 16px;
}

.news-wrap {
  width: 800px;
  height: 400px;
  padding: 0 16px;
  border: 1px solid #eee;
  margin-right: 16px;

  .news-img {
    width: 300px;
    height: 140px;
  }

  .news-item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
}

.doc-wrap {
  width: 464px;
  height: 400px;
  border: 1px solid #eee;

  .doc-item {
    width: 100%;
    margin: 8px 0;
    line-height: 20px;
    font-size: 16px;
    line-height: 24px;

    a {
      color: #666;
    }
  }
}

.pic-wrap {
  overflow: hidden;
}

.img {
  width: 220px;
  height: 44px;
  margin: 5px;
}

.history-wrap {
  width: 1280px;
  height: 250px;

  .history-item {
    width: 630px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #f7f7f7;
    padding-left: 16px;
    border-bottom: 1px solid #eee;

    &:nth-child(odd) {
      margin-right: 20px;
    }
  }
}

.carousel-wrap {
  width: 1280px;
  height: 180px;
}

.seamless-warp {
  width: 1280px;
  height: 180px;
  overflow: hidden;

  ul.item {
    width: 1560px;
    height: 180px;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;

    .scroll-li {
      width: 146px;
      height: 180px;
      padding: 0;
      margin: 0;
      margin-right: 10px;

      .scroll-img {
        width: 146px;
        height: 180px;
      }
    }
  }
}
</style>
