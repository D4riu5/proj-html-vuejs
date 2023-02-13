<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from "./store.js";

export default {
    name: "App",
    components: {
      AppHeader,
      AppMain,
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
  <div class="container">
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>

</template>


<style lang="scss">
  @use "./styles/main";

</style>