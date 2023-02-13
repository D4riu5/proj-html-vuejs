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

</template>


<style lang="scss" scoped>
 @use "../styles/partials/variables.scss" as *;
 
</style>
