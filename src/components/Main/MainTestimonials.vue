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
            colors: false,
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
    <div :style="{ backgroundImage: colors ? `url(src/assets/img/bg/${currentTestimonialSlide.bg})` : `url(src/assets/img/bg/h5-parallax-img-1.png)` }"
    class="my_testimonials-container position-relative">
        <div class="text-white d-flex justify-content-center align-items-center">
            <div class="text-center w-50 mt-xl-5">
                
                <img class="mt-5 mb-3" :src="`src/assets/img/profile/${currentTestimonialSlide.image}`" :alt="currentTestimonialSlide.name">
                <p class="mx-xl-5">
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


        <button @click="colors = !colors" class="btn btn-primary position-absolute bottom-0 end-0">
            click me!
        </button>
    </div>

</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .my_testimonials-container{
        height: 550px;
        background-size: cover;
        background-attachment: fixed;
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
