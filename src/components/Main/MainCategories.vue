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
        handleLinkClick(element) {
            if (element.text === 'Languages') {
                this.store.homePage = false;
                this.store.languagesSelected = true;
            } else if (element.text === 'Software') {
                this.store.homePage = false;
                this.store.softwareSelected = true;
            } else if (element.text === 'Business') {
                this.store.homePage = false;
                this.store.businessSelected = true;
            } else if (element.text === 'Chemistry') {
                this.store.homePage = false;
                this.store.chemistrySelected = true;
            } else if (element.text === 'Science') {
                this.store.homePage = false;
                this.store.scienceSelected = true;
            } else if (element.text === 'DIY&Craft') {
                this.store.homePage = false;
                this.store.craftsSelected = true;
            }
            else {
                this.store.homePage = false;
            }
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
            
        }
    },
}
</script>


<template>
    <div class="container p-5 mt-5 my-3 d-flex justify-content-between">
        <div v-for="category in store.categories" class="p-xl-5 p-4 my_category-container d-flex flex-column justify-content-between"
        @click="handleLinkClick(category)">
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
