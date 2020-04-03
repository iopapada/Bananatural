<template>
    <Patentpage/>
</template>

<script>
import Patentpage from '@/components/Patentpage.vue'

export default {
  name: 'Patent',
  data() {
    return {
    }
  },
  beforeCreate: function() {
    //document.body.className = 'no-header-page  wsite-page-patent  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light';
  },
  afterCreate(){

  },
  async mounted() {
      this.$nextTick().then(() => document.body.className = 'no-header-page  wsite-page-patent  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light fade-in');
  },
  methods: {
  },
  components: {
    Patentpage
  }
}


</script>