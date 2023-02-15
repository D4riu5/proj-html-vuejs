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
        resetForCategories() {
            this.store.homePage = true
            this.store.languagesSelected = false;
            this.store.softwareSelected = false;
            this.store.businessSelected = false;
            this.store.chemistrySelected = false;
            this.store.scienceSelected = false;
            this.store.craftsSelected = false;
        }
    },
}
</script>


<template>
    <a @click="resetForCategories()" href="#nogo">
        <img :src="store.homePage ? 'src/assets/img/logo/logo-light.png' : 'src/assets/img/logo/logo-default.png'" alt="Logo">
    </a>
</template>


<style lang="scss" scoped>
    img{
        width: 160px;
    }
</style>
