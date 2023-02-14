<script>
import { store } from "../../store.js";

export default {
    name: 'MainTestimonials',
    components: {

    },
    
    data() {
        return {
            store,
            currentTestimonialIndex: 0,
        }
    },
    methods:{
        startTestimonialInterval() {
            clearInterval(this.testimonialInterval);
            this.testimonialInterval = setInterval(() => {
            this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.store.testimonialSlides.length;
        }, 8000);
  },
    },
    computed: {
        currentTestimonialSlide() {
            return this.store.testimonialSlides[this.currentTestimonialIndex];
        },
    },
    created() {
        this.startTestimonialInterval();
    },
    beforeDestroy() {
        clearInterval(this.testimonialInterval);
    },
}
</script>


<template>
    <div :style="{ 'background-image': `url(src/assets/img/bg/${currentTestimonialSlide.bg})`,'background-size': 'cover' }" class="my_testimonials-container position-relative">
        <div class="text-white d-flex justify-content-center align-items-center">
            <div class="text-center w-75 mt-xl-5">
                
                <img class="mt-5 mb-3" :src="`src/assets/img/profile/${currentTestimonialSlide.image}`" :alt="currentTestimonialSlide.name">
                <p>
                    {{ currentTestimonialSlide.text }}
                </p>
                <div class="fw-bold fs-5 py-2">
                    {{ currentTestimonialSlide.name }}
                </div>
                <div>
                    {{ currentTestimonialSlide.occupation }}
                </div>

            </div>
        </div>
        <div class="position-absolute bottom-0 start-50 translate-middle pb-2 pb-xl-4">
            <i v-for="(slide, index) in store.testimonialSlides"
            @click="currentTestimonialIndex = index; startTestimonialInterval()"  
            class="fa-solid fa-circle p-1 mx-1"
            :style="{ color: currentTestimonialIndex === index ? 'white' : '' }">
            </i>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .my_testimonials-container{
        height: 75vh;
    }

    img{
        width: 100px;
        aspect-ratio: 1/1;
    }

    // ICONS
    .fa-circle{
        cursor: pointer;
        color: $dirtyWhite;
        &:hover{
            color: $white;
        }
    }
</style>
