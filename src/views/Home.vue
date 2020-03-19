<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Indexpage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Indexpage from '@/components/Indexpage.vue'

export default {
  name: 'Home',
  components: {
    Indexpage
  }
}
</script>
