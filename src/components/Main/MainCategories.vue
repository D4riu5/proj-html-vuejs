<script>
import { store } from "../../store.js";

export default {
    name: 'MainCategories',
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
    <div class="container p-5 my-3 d-flex justify-content-between">
        <div v-for="category in store.categories" class="p-xl-5 p-4 my_category-container d-flex flex-column justify-content-between">
            <div class="position-relative">
                <img class="mb-4" :src="`src/assets/img/misc${category.image}`" :alt="category.text">
            </div>
            <div class="fw-bold">
                {{ category.text }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_category-container{
        background-color: $lightGray;
        cursor: pointer;

        &:hover div:first-child{
            position: absolute;
            bottom: 5px;
            
        }

        div:first-child{
            position: absolute;
            bottom: 0;
            transition: 0.2s linear;
        }

        img{
            width: 90%;
            aspect-ratio: 1.2/1;
        }
    }

</style>
