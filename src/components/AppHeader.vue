<script>
import AppLogo from './mini components/AppLogo.vue'
import { store } from "../store.js";

export default {
    name: 'AppHeader',
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
<div class="text-white p-5 d-flex justify-content-between bg-secondary">
    <div>
        LOGO
    </div>
    <div>
        <span class="px-3">TEXT</span>
        <span class="px-3">TEXT</span>
        <span class="px-3">TEXT</span>
        <span class="px-3">TEXT</span>
        <span class="px-3">TEXT</span>
        <span class="px-3">TEXT</span>
    </div>
    <div>
        <span class="px-3">icon</span>
        <span class="px-3">icon</span>
        <span class="px-3">icon</span>
    </div>
</div>
</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

</style>
