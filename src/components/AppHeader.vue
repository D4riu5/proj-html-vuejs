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
        handleLinkClick(element) {
            if (element.text === 'home') {
                this.store.homePage = true;
            } else if (element.text === 'courses') {
                this.store.homePage = false;
            }
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
    <div class="container text-white py-4 d-flex justify-content-between position-absolute start-0 end-0 z-2">
        <div class="py-2">
            <AppLogo/>
        </div>
        <div class="d-flex align-items-center">
            <a :class="{'alternative' : !store.homePage}" :style="{'color': (store.homePage && link.text === 'home') || (!store.homePage && link.text === 'courses') ? '#40c4ff!important' : ''}" href="#nogo" v-for="link in store.headerLinks" class="p-2 mx-2"
            @click="handleLinkClick(link)"
            >
                {{ link.text.toUpperCase() }}
            </a>
        </div>
        <div class="d-flex align-items-center">
            <a v-for="icon in store.headerIcons" href="#nogo" :class="{'alternative' : !store.homePage}" class="p-2 mx-2 position-relative">
                <i class="fa-solid" :class="icon.type"></i>
                <div v-if="icon.hasOwnProperty('items') " class="item-counter d-flex position-absolute">
                    {{ icon.items }}
                </div>
            </a>
        </div>
    </div>

</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

    a{
        text-decoration: none;
        color: $white;

        &:hover{
            color: $lighterBlue;
        }
        .item-counter{
            width: 17px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background-color: $lightBlue;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            top: 7px;
            right: -1px;
        }

        // icons
        .fa-magnifying-glass{
            transform: scaleX(-1);
        }
    }


    .alternative{
        color: $black!important;

        &:hover{
            color: $lighterBlue!important;
        }
    }
</style>



