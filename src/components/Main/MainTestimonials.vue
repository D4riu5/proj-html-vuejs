<script>
import { store } from "../../store.js";

export default {
    name: 'MainTestimonials',
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
    <div class="my_testimonials-container bg-primary d-flex flex-column justify-content-center align-items-center text-center my-5 text-white">
        <div class="my-4">
            IMAGE
        </div>
        <p class="my-4 w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem voluptatibus sed possimus exercitationem. Odit debitis excepturi eius velit libero maxime quis assumenda eum asperiores neque autem expedita earum laboriosam, consequuntur quam tempore, cupiditate sapiente veniam quasi temporibus minima nulla?
        </p>
        <h3>
            NAME
        </h3>
        <div class="mb-4">
            OCCUPATION
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .my_testimonials-container{
        height: 90vh;
    }
</style>
