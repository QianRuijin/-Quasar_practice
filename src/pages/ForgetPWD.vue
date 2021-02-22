<template>
  <q-page class="row justify-center">
    <div class="wrap">
      <div class="row justify-between rwgister-header">
        <div>用户注册</div>
        <router-link to="/">返回首页 》</router-link>
      </div>

      <div class="row justify-center q-mb-sm">
        <q-radio dense size="sm" v-model="findWay" val="phone" label="手机号找回密码" />
        <q-radio size="sm" v-model="findWay" val="email" label="邮箱找回密码" />
      </div>

      <q-form @submit="onSubmit" class="column content-center input-wrap">
        <!-- 手机验证 -->
        <q-input v-if="findWay==='phone'" class="q-mb-sm" outlined v-model="phone" placeholder="输入手机号" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '手机号不能为空', val => /^(1)[0,3,4,5,6,7,8,9]\d{9}$/.test(val) || '手机号格式错误']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>手机</span>
            </div>
          </template>
        </q-input>
        <!-- email验证 -->
        <q-input v-else class="q-mb-sm" outlined v-model="email" placeholder="输入Email" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '邮箱不能为空', val => /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/.test(val) || '不正确的邮箱格式']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>Email</span>
            </div>
          </template>
        </q-input>
        <!-- 验证码 -->
        <div class="row justify-between">
          <q-input class="col-7 q-mb-sm" outlined v-model="verification" placeholder="输入验证码" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '验证码不能为空', val => /^\d{6}$/.test(val) || '验证码格式错误']" lazy-rules>
            <template v-slot:before>
              <div class="label">
                <span class="text-red">*</span>
                <span>验证码</span>
              </div>
            </template>
          </q-input>
          <q-btn class="col-4 commitBtn" label="验证码"/>
        </div>
        <!-- 密码验证 -->
        <q-input class="q-mb-sm" outlined v-model="pwd" placeholder="输入密码" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '密码不能为空', val => /^\S{6,20}$/.test(val) || '密码在6-20位数之间']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>密码</span>
            </div>
          </template>
        </q-input>
        <!-- 密码确认 -->
        <q-input class="q-mb-sm" outlined v-model="pwdConfirm" placeholder="输入密码" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '密码不能为空', val => val === pwd || '两次输入的密码不同']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>确认密码</span>
            </div>
          </template>
        </q-input>
        <!-- 提交按钮 -->
        <div class="row justify-center q-mt-lg q-mb-xl">
          <q-btn label="提交" type="submit" class="commitBtn"/>
        </div>
    </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      findWay: 'phone',
      email: '',
      phone: '',
      verification: '',
      pwd: '',
      pwdConfirm: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 900px;
}

.rwgister-header {
  font-size: 24px;
  margin: 20px 0;
}

.input-wrap {
  width: 900px;
}

.label {
  width: 90px;
  font-size: 15px;
  color: black;
  font-weight: 600;
}

.commitBtn {
  width: 160px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: #a10629;
}
</style>
