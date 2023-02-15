<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppMainTwo from './components/AppMainTwo.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from "./store.js";

export default {
    name: "App",
    components: {
      AppHeader,
      AppMain,
      AppMainTwo,
      AppFooter,
    },
    data() {
          return {
             store, 
          }
      },
    methods:{
        
    },
};
</script>


<template>

  <AppHeader/>
  <div v-if="store.homePage == true">
    <AppMain/>
  </div>
  <div v-else>
    <AppMainTwo/>
  </div>
  <AppFooter/>

</template>


<style lang="scss">
  @import "./styles/main";


// SWIPER CUSTOM STYLE
  :root {
    --swiper-theme-color: #40c4ff;
    --swiper-pagination-bullet-inactive-color: #40c4ff;
    --swiper-pagination-bullet-inactive-opacity: 0.5;
    --swiper-pagination-bullet-width: 16px;
    --swiper-pagination-bullet-height: 16px;
    --swiper-pagination-bullet-horizontal-gap: 8px;
    --swiper-pagination-bottom: 0;
  }


</style>