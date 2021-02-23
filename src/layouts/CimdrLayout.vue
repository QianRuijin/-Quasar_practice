<template>
  <q-layout view="hhh lpR fff" class="layout-wrap">
    <q-header elevated class="header row justify-center" height-hint="98">
      <q-img class="header-img" src="http://www.cimdr.com/cimdr/static/img/banner.0c450fe.jpeg"></q-img>

      <q-tabs class="tabs" align="left">
        <q-route-tab to="/" label="首页" />
        <q-route-tab to="/detail?" label="关于CIMDR" />
        <q-route-tab to="/detail?" label="2020CIMDR"/>
        <q-route-tab to="/detail?title=新闻动态" label="新闻动态"/>
        <q-route-tab to="/detail?title=资料下载" label="资料下载"/>
        <q-route-tab to="/detail?title=往期回顾" label="往期回顾"/>
        <q-route-tab to="/detail?" label="联系我们"/>
        <q-route-tab to="/detail?" label="平行会议"/>
        <q-route-tab to="/detail?" label="疫情防控须知"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-2 q-py-lg footer column justify-center">
      <div class="row justify-center">
        <div class="row q-px-lg">
          <div>地址：</div>
          <div class="footer-item-text">中国北京市西直门北大街32号枫蓝国际中心B座写字楼11层1106室</div>
        </div>
        <div class="column q-px-lg">
          <div class="row">
            <div>电话：</div>
            <div>010-82212866</div>
          </div>
          <div class="row">
            <div>网址：</div>
            <div>
              <a class="link q-pr-md" href="http://www.cimdr.com/">www.cimdr.com</a>
              <a class="link" href="http://www.ccfdie.org/"> www.ccfdie.org</a>
            </div>
          </div>
        </div>
        <div class="column q-px-lg">
          <div class="row">
            <div>传真：</div>
            <div>010-82212857</div>
          </div>
          <div class="row">
            <div>邮编：</div>
            <div>100082</div>
          </div>
        </div>
      </div>
      <div class="q-pt-md">国家药品监督管理局&nbsp;(NMPA)&nbsp;中国食品药品国际交流中心&nbsp;(CCFDIE)&nbsp;版权所有&nbsp;&nbsp;京ICP备15042885号-1</div>
      <div>
        <q-avatar square size="14px">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCMEI1MjRBM0M5RjExRThBQzMzQkJFMEQzMzRDODQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCMEI1MjRCM0M5RjExRThBQzMzQkJFMEQzMzRDODQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUIwQjUyNDgzQzlGMTFFOEFDMzNCQkUwRDMzNEM4NDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUIwQjUyNDkzQzlGMTFFOEFDMzNCQkUwRDMzNEM4NDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KgA0PAAACXklEQVR42kRTS0wTURQ9b/raaUs/VNPQUggRYyx0SVwhfha6EdGViQsVFxJ144Lowr2J0cjKaICFn7XBhStdFBPR6oIQG3+gQkHJtI1tBa3tTGfmed+06EvOzJ3knXfOPfcNm+vouQLgJMFLYJCLsQd2rXabqobi812EEGNUKwSLYBBmOD2GCSmCyyEpCoRhXLUNPQkBi3F+nHk8Ydg2WksWpiQK5zTGFMYY9HweiscTaEvuPkHSorq45LNLJajxOAnTVgl68pa8kKS6tobw3v3oOj8GX+8OryDj+to3rN+dQuV5GmqsGy2mxbfsGT8KaB/ch+7xS9jMvkVu4ibcgQC2Hx1B54VzEJaJjUwGnmgM0rbi6JqmYzg+ehr13CoMTYN/5y5U3y9h9cYtGGS15/I4FLcKoetNLYeoG9RDAmpnDPWvOUSPDCP18D4ddAZqtAOBZB/URAI8EGyK0GpapV5sg1K2BZhPhVEsovrxE8xyiQ6tofz0GfR1TQYB5nb/JzKVNhc0VN99QFuqH+XXGXy/Mwn9yzLc8Sgq6Vn8XsjCFQrJxJ18mkSXC4rqw/rkNHqvX0N4YACmlkewvw+Rw4dIuYLcco4C+jdLMLo5aXoPMe7i0o63K4HY6ClEDgw5c9t4+QbFRzOorayAB4NSTY5vXhJfUDHozJPzsln5GbL+/PIqfr/Tu6jWoHj9db4tsgnLitA+2eSCtNogyIznYJpTPBwacYWCx9BoqI6nYLtBl+MJkR7T11nCwa0rN01YJEwQPtNwZ0koS+p7nLyFmCfco7ogLRLkT/HqrwADAF//8WR+ze95AAAAAElFTkSuQmCC" />
        </q-avatar>
        医点通提供技术支持
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'CimdrLayout',
  data () {
    return {}
  }
}
</script>

<style scoped>
.layout-wrap {
  min-width: 1280px;
}

.header {
  background-color: #a10629;
  min-width: 1280px;
}

.header-img {
  width: 1280px;
}

.tabs {
  width: 1280px;
}

.footer {
  color: #666;
  text-align: center;
  font-size: 14px;
  min-width: 1280px;
  line-height: 30px;
}

.footer-item-text {
 max-width: 300px;
 text-align: left;
}

.link {
  color: rgb(14, 14, 221);
}
</style>
