<template>
    <Patentinfo/>
</template>

<script>
import Patentinfo from '@/components/Patentinfo.vue'

export default {
  name: 'Usage',
  data() {
    return {
    }
  },
  beforeCreate: function() {
    //document.body.className = 'no-header-page  wsite-page-patentinfo  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light';
  },
  afterCreate(){

  },
  async mounted() {
      this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-patentinfo  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
  },
  methods: {
  },
  components: {
    Patentinfo
  }
}
</script>
