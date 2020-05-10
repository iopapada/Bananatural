<template>
    <Contactpage/>
</template>

<script>
import Contactpage from '@/components/Contactpage.vue'

export default {
  name: 'Contact',
  data() {
    return {
    }
  },
  beforeCreate: function() {
      //document.body.className = 'no-header-page  wsite-page-contact  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light';
  },
  async mounted() {
      //this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-contact  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
  },
  methods: {
  },
  components: {
    Contactpage
  }
}
</script>