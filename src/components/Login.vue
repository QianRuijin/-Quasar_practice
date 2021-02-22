<template>
  <div class="wrap">
    <div class="container column content-center">
      <div class="title q-mt-md">第十一届<br/>中国医疗器械监督管理国际会议</div>
      <!-- 登录框 -->
      <q-form @submit="onSubmit" class="column content-center input-wrap">
        <q-input class="q-my-lg input" filled square v-model="account" bg-color="white" placeholder="请输入手机号/邮箱">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <q-input class="input" filled square v-model="pwd" bg-color="white" placeholder="请输入密码">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <div class="row justify-between">
          <a href="/#/register" class="link">用户注册</a>
          <a href="/#/forgetPWD" class="link">忘记密码</a>
        </div>
        <q-btn class="btn" label="登录" type="submit"/>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      pwd: ''
    }
  }
}
</script>

<style scoped>
.wrap {
  position: relative;
  width: 1280px;
  height: 400px;
  background: url('../../public/img/bannerCh.jpeg') no-repeat;
  background-size: cover;
}

.container {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 300px;
  height: 350px;
  padding: 0 16px;
  border-radius: 10px;
  background: rgba(234,241,249,.8);
  text-align: center;
}

.title {
  color: #a1052a;
  font-size: 18px;
  font-weight: 700;
}

.input {
  width: 100%;
}

.link {
  font-size: 14px;
  font-weight: 600;
  color: #666;
}

.btn {
  width: 100%;
  height: 56px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  background-color: #a1052a;
  margin-top: 25px;
}
</style>
