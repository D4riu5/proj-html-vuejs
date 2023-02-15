<script>
import { store } from "../../store.js";

export default {
    name: 'MainSponsors',
    components: {

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
    <div class="container py-5 my-3 d-flex justify-content-between">
        <div v-for="sponsor in store.sponsors" class="m-4">
            <img :src="`src/assets/img/misc${sponsor.image}`" :alt="sponsor.title">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    img{
        width: 100%;
        transition: 0.3s;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
</style>
