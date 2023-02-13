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
            store
        }
    },
    methods:{
        
    },
}
</script>


<template>

<MainJumbo/>
<MainCategories/>
<MainTutoring/>
<MainTestimonials/>
<MainInfo/>
<MainCourses/>
<MainPricing/>
<MainSponsors/>

</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

</style>
