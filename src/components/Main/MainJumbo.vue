<script>
import { store } from "../../store.js";

export default {
    name: 'MainJumbo',
    components: {

    },
    data() {
        return {
            store,
            currentJumboIndex: 0,
        }
    },
    methods:{
        startJumboInterval() {
            clearInterval(this.jumboInterval);
            this.jumboInterval = setInterval(() => {
            this.currentJumboIndex = (this.currentJumboIndex + 1) % this.store.jumboSlides.length;
        }, 6000);
  },
    },
    computed: {
        currentJumboSlide() {
            return this.store.jumboSlides[this.currentJumboIndex];
        },
    },
    created() {
        this.startJumboInterval();
    },
    beforeDestroy() {
        clearInterval(this.jumboInterval);
    },
}
</script>


<template>
    <div :style="{ 'background-image': `url(src/assets/img/bg/${currentJumboSlide.bg})`,'background-size': 'cover'}">
        <div class="my_jumbo-container text-white d-flex justify-content-center align-items-center">
            <div class="text-center w-50 mt-5">
                <h1>
                    {{ currentJumboSlide.title }}
                </h1>
                <p>
                    {{ currentJumboSlide.paragraph }}
                </p>
                <button :class="currentJumboSlide.button == 'REGISTER NOW' ? 'my_button-normal fw-bold py-3 px-5' : 'p-2 my_button-round'">
                    <template v-if="currentJumboSlide.button == 'PLAY'">
                        <i class="fa-solid fa-play"></i>
                    </template>
                    <template v-if="currentJumboSlide.button == 'REGISTER NOW'">
                        {{currentJumboSlide.button}}
                    </template>
                </button>
            </div>
        </div>
    </div>

    <div class="position-absolute top-75 start-50 translate-middle pb-5">
        <i v-for="(slide, index) in store.jumboSlides"
        @click="currentJumboIndex = index; startJumboInterval()" 
        :class="currentJumboIndex === index ? 'fa-regular fa-circle-dot' : 'fa-solid fa-circle'" 
        class="p-1 mx-1">
        </i>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_jumbo-container{
        height: 80vh;
        background-size: contain;
    }
    
    // TEXT
    h1{
        font-size: 55px;
        font-weight: bold;
    }

    // BUTTONS
    .my_button-normal{
        border: none;
        color: white;
        background-color: $lighterBlue;
        &:hover{
            background-color: $lightBlue;
        }
    }
    .my_button-round{
        border: none;
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: $white;
        &:hover{
            background-color: $dirtyWhite;
        }
    }

    // ICONS
    .fa-circle-dot, .fa-circle{
        cursor: pointer;
    }

    .fa-circle-dot{
        color: $white;
    }
    .fa-circle{
        color: $dirtyWhite;
        &:hover{
            color: $white;
        }
    }
</style>
