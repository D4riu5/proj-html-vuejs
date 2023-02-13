<script>
import { store } from "../../store.js";

export default {
    name: 'MainCourses',
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
    <div class="bg-secondary border-top border-bottom">
        <div class="container my_courses-container p-5">

            <div class="d-flex flex-column align-items-center my-5 text-center">
                <h2>
                Popular Online Courses
                </h2>
                <p class="w-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut, optio dolorem libero omnis sequi dolor accusamus numquam, enim adipisci ipsum error, quos rerum ducimus?
                </p>
            </div>

            <div class="d-flex justify-content-between">

                <div>
                    <div>
                        card image
                    </div>
                    <div class="p-2">
                        card text
                    </div>
                </div>

                <div>
                    <div>
                        card image
                    </div>
                    <div class="p-2">
                        card text
                    </div>
                </div>

                <div>
                    <div>
                        card image
                    </div>
                    <div class="p-2">
                        card text
                    </div>
                </div>

            </div>

        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
    
    .my_courses-container{
        height: 100vh;
    }
</style>
