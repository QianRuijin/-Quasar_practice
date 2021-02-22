<template>
  <div class="row justify-center">
    <div>
      <cimdr-login class="q-mt-lg"></cimdr-login>
    </div>
  </div>
</template>

<script>
import CimdrLogin from '../components/Login'
export default {
  name: 'Cimdr',
  components: {
    CimdrLogin
  },
  data () {
    return {
    }
  }
}
</script>
