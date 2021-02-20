<template>
  <q-page class="column">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <div class="row flex-center">
        <span class="text-red">*</span>
        <span>Email</span>
        <q-input filled v-model="ph" bg-color="cyan-1" placeholder="Placeholder" hint="With placeholder" :dense="dense" :input-style="{height: '300px'}"/>
      </div>

      <div></div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>Email</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入Email"  class="input"/>
        <text class="hint"></text>
      </div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>手机</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入手机号"  class="input"/>
        <text class="hint"></text>
      </div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>密码</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入密码"  class="input"/>
        <text class="hint"></text>
      </div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>确认密码</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入密码"  class="input"/>
        <text class="hint"></text>
      </div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>姓名</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入姓名"  class="input"/>
        <text class="hint"></text>
      </div>

      <div class="row">
        <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>姓的拼音</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入姓"  class="input"/>
        <text class="hint"></text>
      </div>
      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>名的拼音</span>
        </div>
        <input type="text" v-model="email"  placeholder="输入名"  class="input"/>
        <text class="hint"></text>
      </div>
      </div>

      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>Email</span>
        </div>
        <q-radio dense size="sm" v-model="gender" val="male" label="男" />
        <q-radio size="sm" v-model="gender" val="female" label="女" />
      </div>

      <div class="row flex-center">
        <div class="label">
          <span class="text-red">*</span>
          <span>Email</span>
        </div>
        <input type="text" v-model="email"  placeholder="Placeholder"  class="input"/>
        <text class="hint"></text>
      </div>
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      gender: 'female'
    }
  }
}
</script>

<style scoped>
.input {
  width: 600px;
  height: 30px;
  color: orangered;
}
</style>
