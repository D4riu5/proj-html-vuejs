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
    <div class="container text-white py-5 d-flex justify-content-between position-absolute start-0 end-0 z-2">
        <div class="py-2">
            <AppLogo/>
        </div>
        <div class="d-flex align-items-center">
            <a href="#nogo" v-for="link in store.headerLinks" class="p-2 mx-2">
                {{ link.text.toUpperCase() }}
            </a>
        </div>
        <div class="d-flex align-items-center">
            <a v-for="icon in store.headerIcons" href="#nogo" class="p-2 mx-2  position-relative">
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
            color: $dirtyWhite;
        }
        .item-counter{
            width: 15px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background-color: $lightBlue;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            top: 7px;
            right: -1px;
        }

        .fa-magnifying-glass{
            transform: scaleX(-1);
        }
    }
</style>
