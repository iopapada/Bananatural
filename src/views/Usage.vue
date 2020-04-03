<template>
    <Usagepage/>
</template>

<script>
import Usagepage from '@/components/Usagepage.vue'

export default {
  name: 'Usage',
  data() {
    return {
    }
  },
  beforeCreate: function() {
      //document.body.className = 'no-header-page  wsite-page-usage  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light';
  },
  async mounted() {
      this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-usage  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
  },
  methods: {
  },
  components: {
    Usagepage
  }
}
</script>
