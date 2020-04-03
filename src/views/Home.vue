<template>
    <Indexpage/>
</template>

<script>
import Indexpage from '@/components/Indexpage.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  beforeCreate: function() {
      //document.body.className = 'no-header-page  wsite-page-index  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light';
  },
  beforeLeave: function() {

  },
  async mounted() {
      this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-index  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
      //this.$nextTick().then(() => document.body.classList.add('fade-in'))
  },
  methods: {
  },
  components: {
    Indexpage
  }
}


</script>
