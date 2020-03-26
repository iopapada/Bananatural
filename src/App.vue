<template>
  <body class="no-header-page  wsite-page-contact  nav-position-sidebar sticky-nav-on full-width-nav-on full-width-body-off header-overlay-on  wsite-theme-light">
    <Sidebar/>
    <router-view/>
    <SidebarMobile/>
  </body>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import SidebarMobile from './components/SidebarMobile'

  export default {
    // data() {
    //   return {
    //   }
    // },
    // head: {
    //   script: [
    //     { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js' },
    //     { src: "http://cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1234&", type: "text/javascript"},
    //     { src: "http://cdn2.editmysite.com/js/site/main.js?buildTime=1234"}
    //   ],
    //   link: [
    //     { id:"wsite-base-style", rel: 'stylesheet', type:"text/css", href: 'http://cdn2.editmysite.com/css/sites.css?buildTime=1234' },
    //     { rel: 'stylesheet', type:"text/css", href: 'http://cdn2.editmysite.com/css/old/fancybox.css?1234' },
    //     { rel: 'stylesheet', type:"text/css", href: 'http://cdn2.editmysite.com/css/social-icons.css?buildtime=1234', media:"screen,projection" },
    //     { rel: 'stylesheet', type:"text/css", href: 'files/main_style.css?1500119234' }
    //   ],
    //   meta: [
    //     {name:"viewport", content:"width=device-width, initial-scale=1.0"}
    //   ]
    // },
    components: {
      Sidebar, SidebarMobile
    },
    methods: {
      
    },
    async created() {
    
    }
  }
</script>

<style>
@import "files/main_style.css?1500119234";
@import url("http://cdn2.editmysite.com/css/sites.css?buildTime=1234");
@import url("http://cdn2.editmysite.com/css/old/fancybox.css?1234");
@import url("http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext");
@import url("http://fonts.googleapis.com/css?family=Droid+Sans:400,700&subset=latin,latin-ext");
@import url("http://fonts.googleapis.com/css?family=Abril+Fatface&subset=latin,latin-ext");

.wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, 
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, 
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, 
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, 
#wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, 
#wsite-content .product-small .product-title, .blog-sidebar h2 {font-family:"Droid Sans" !important;text-transform:  none !important;}
#wsite-title {font-family:"Abril Fatface" !important;text-transform:  none !important;}
.wsite-product .wsite-product-price a {font-family:"Arial" !important;font-weight:400 !important;
}

@media screen and (min-width: 767px) {
.wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {font-size:30px !important;}
.wsite-product .wsite-product-price a {font-size:15px !important;}
}
</style>
