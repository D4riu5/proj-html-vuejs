<script>
import {store} from "../../store.js"
export default {
    name: 'AppLogo',
    components: {

    },
    data() {
        return {
            store,
        }
    },
    methods:{
        
    },
}
</script>


<template>
    <a @click="this.store.homePage = true" href="#nogo">
        <img :src="store.homePage ? 'src/assets/img/logo/logo-light.png' : 'src/assets/img/logo/logo-default.png'" alt="Logo">
    </a>
</template>


<style lang="scss" scoped>
    img{
        width: 160px;
    }
</style>
