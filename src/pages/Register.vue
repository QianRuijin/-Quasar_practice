<template>
  <q-page class="row justify-center">
    <div class="wrap">
      <div class="row justify-between rwgister-header">
        <div>用户注册</div>
        <a href="/">返回首页 》</a>
      </div>

      <q-form @submit="onSubmit" class="column content-center input-wrap">
        <!-- email验证 -->
        <q-input class="q-mb-sm" outlined v-model="email" placeholder="输入Email" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '邮箱不能为空', val => /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/.test(val) || '不正确的邮箱格式']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>Email</span>
            </div>
          </template>
        </q-input>
        <!-- 手机验证 -->
        <q-input class="q-mb-sm" outlined v-model="phone" placeholder="输入手机号" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '手机号不能为空', val => /^(1)[0,3,4,5,6,7,8,9]\d{9}$/.test(val) || '手机号格式错误']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>手机</span>
            </div>
          </template>
        </q-input>
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
        <!-- 姓名 -->
        <q-input class="q-mb-sm" outlined v-model="uname" placeholder="输入姓名" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '姓名不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>姓名</span>
            </div>
          </template>
        </q-input>
        <!-- 姓名拼音 -->
        <div class="row justify-between">
          <q-input class="col-5" outlined v-model="lastName" placeholder="输入姓" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '姓不能为空']" lazy-rules>
            <template v-slot:before>
              <div class="label">
                <span class="text-red">*</span>
                <span>姓的拼音</span>
              </div>
            </template>
          </q-input>
          <q-input class="col-5" outlined v-model="firstName" placeholder="输入名" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '名不能为空']" lazy-rules>
            <template v-slot:before>
              <div class="label">
                <span class="text-red">*</span>
                <span>名的拼音</span>
              </div>
            </template>
          </q-input>
        </div>
        <!-- 选择性别 -->
        <div class="row items-center q-mb-sm">
          <div class="label">
            <span class="text-red">*</span>
            <span>性别</span>
          </div>
          <q-radio dense size="sm" v-model="gender" val="male" label="男" />
          <q-radio size="sm" v-model="gender" val="female" label="女" />
        </div>
        <!-- 省份 -->
        <q-select class="q-mb-sm"  outlined v-model="province" :options="provinceOptions" bg-color="light-blue-1" :dense="true" :options-dense="true" :rules="[ val => val !== '选择你的省份' || '省直辖市不能为空']" lazy-rules virtual-scroll-slice-size="6">
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>省直辖市</span>
            </div>
          </template>
        </q-select>
        <!-- 市县 -->
        <q-select class="q-mb-sm" outlined v-model="city" :options="cityOptions" bg-color="light-blue-1" :dense="true" :options-dense="true" :rules="[ val => val !== '选择你的城市' || '市/县不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>市 / 县</span>
            </div>
          </template>
        </q-select>
        <!-- 单位 -->
        <q-input class="q-mb-sm" outlined v-model="company" placeholder="输入单位" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '单位不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>单位</span>
            </div>
          </template>
        </q-input>
        <!-- 行政职务 -->
        <q-input class="q-mb-sm" outlined v-model="position" placeholder="输入行政职务" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '行政职务不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>行政职务</span>
            </div>
          </template>
        </q-input>
        <!-- 通讯地址 -->
        <q-input class="q-mb-sm" outlined v-model="address" placeholder="输入通讯地址" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '通讯地址不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>通讯地址</span>
            </div>
          </template>
        </q-input>
        <!-- 邮编 -->
        <q-input class="q-mb-sm" outlined v-model="postcode" placeholder="输入邮编" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '邮编 不能为空']" lazy-rules>
          <template v-slot:before>
            <div class="label">
              <span class="text-red">*</span>
              <span>邮编 </span>
            </div>
          </template>
        </q-input>
        <!-- 电话 -->
        <div class="row justify-between">
          <q-input class="col-4" outlined v-model="areacode" placeholder="区号" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '区号不能为空']" lazy-rules>
            <template v-slot:before>
              <div class="label">
                <span class="text-red">*</span>
                <span>电话</span>
              </div>
            </template>
          </q-input>
          <q-input class="col-7" outlined v-model="tel" placeholder="电话号" bg-color="light-blue-1" :dense="true" :rules="[ val => val.length > 0 || '电话号不能为空']" lazy-rules>
          </q-input>
        </div>
        <!-- 提交按钮 -->
        <div class="row justify-center q-mt-lg">
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
      email: '',
      phone: '',
      pwd: '',
      pwdConfirm: '',
      uname: '',
      lastName: '',
      firstName: '',
      gender: 'female',
      province: '选择你的省份',
      city: '选择你的城市',
      company: '',
      position: '',
      address: '',
      postcode: '',
      areacode: '',
      tel: '',
      provinceOptions: ['北京市',
        '天津市',
        '河北省',
        '山西省',
        '内蒙古自治区',
        '辽宁省',
        '吉林省',
        '黑龙江省',
        '上海市',
        '江苏省',
        '浙江省',
        '安徽省',
        '福建省',
        '江西省',
        '山东省',
        '河南省',
        '湖北省',
        '湖南省',
        '广东省',
        '广西省',
        '海南省',
        '重庆市',
        '四川省',
        '贵州省',
        '云南省',
        '西藏自治区',
        '陕西省',
        '甘肃省',
        '青海省',
        '宁夏回族自治区',
        '新疆维吾尔自治区',
        '台湾省',
        '香港特别行政区',
        '澳门特别行政区']
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
  height: 36px;
  font-size: 16px;
  color: #fff;
  background-color: #a10629;
}
</style>
