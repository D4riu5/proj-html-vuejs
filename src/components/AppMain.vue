<script>
import MainJumbo from './Main/MainJumbo.vue';
import MainCategories from './Main/MainCategories.vue';
import MainTutoring from './Main/MainTutoring.vue';
import MainTestimonials from './Main/MainTestimonials.vue';
import MainInfo from './Main/MainInfo.vue';
import MainCourses from './Main/MainCourses.vue';
import MainPricing from './Main/MainPricing.vue';
import MainSponsors from './Main/MainSponsors.vue';
import { store } from "../store.js";

export default {
    name: 'AppMain',
    components: {
        MainJumbo,
        MainCategories,
        MainTutoring,
        MainTestimonials,
        MainInfo,
        MainCourses,
        MainPricing,
        MainSponsors
    },
    data() {
        return {
            store,
            show: true,
        }
    },
    methods:{
        
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.show = false;
            } else {
                this.show = true;
            }
        });
        observer.observe(this.$refs.myMainJumbo);
    }
}
</script>


<template>
    
    <MainJumbo/>
    <div  ref="myMainJumbo"></div>
    <MainCategories/>
    <MainTutoring/>
    <MainTestimonials/>
    <MainInfo/>
    <MainCourses/>
    <MainPricing/>
    <MainSponsors/>

    <a v-if="show" href="#" class="my-div d-flex flex-column align-items-center justify-content-center">
        <i class="fa-solid fa-chevron-up"></i>
        <span>
            TOP
        </span>
    </a>

</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

    .my-div{
        position: fixed;
        bottom: 80px;
        right: 0;
        width: 65px;
        aspect-ratio: 1/1;
        background-color: $lighterBlue;
        color: $white;
        text-decoration: none;
        
        &:hover > span{
            display: none;
        }
    }

</style>
