<template>
    <Benefitspage/>
</template>

<script>
import Benefitspage from '@/components/Benefitspage.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  beforeCreate: function() {
      //document.body.className = 'no-header-page  wsite-page-benefits  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in';
  },
  async mounted() {
      this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-benefits  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
  },
  methods: {
  },
  components: {
    Benefitspage
  }
}
</script>
