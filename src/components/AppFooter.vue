<script>
import AppLogo from './mini components/AppLogo.vue'
import { store } from "../store.js";

export default {
    name: 'AppFooter',
    components: {
        AppLogo,
    },
    data() {
        return {
            store
        }
    },
    methods:{
        
    },
}
</script>


<template>
    <div class="my_footer-container bg-dark text-white">

    </div>
</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

    .my_footer-container{
        height: 80vh;
    }

</style>
