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
    mounted() {
        

    }
}
</script>


<template>
    <div class="border-top border-bottom my_bg">
        <div class="container py-5 my_courses-container position-relative">

            <div class="d-flex flex-column align-items-center my-5 text-center">
                <h2>
                Popular Online Courses
                </h2>
                <p class="w-75">
                    Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.
                </p>
            </div>

            <div class="d-flex justify-content-between">

                <swiper-container speed="2000" rewind="true" slides-per-view="3" slides-per-group="3" :pagination="{ clickable: true }" :autoplay="{delay: 6000,disableOnInteraction: false, pauseOnMouseEnter: true,}">
                    <swiper-slide v-for="(course, index) in store.courses">
                        <div class="d-flex flex-column border m-4 mb-5 more-margin">
                            <div>
                                <img :src="`src/assets/img/misc${course.image}`" :alt="course.title">
                            </div>
                            <div class="p-xl-4 bg-white">
                                <div class="position-relative">
                                    <h5>
                                        {{ course.title }}
                                    </h5>
                                    <div class="my_badge position-absolute top-0 px-3 rounded-pill"
                                    :style="{ backgroundColor: course.price === 'FREE' ? '#ffd740!important' : '',
                                     Color: course.price === 'FREE' ? 'black!important' : ''}">
                                        {{ course.price }}
                                    </div>
                                </div>

                                <div class="sub-text pb-2">
                                    {{ course.teacher }}
                                </div>
                                <p>
                                    {{ course.description }}
                                </p>
                                
                                <div class="my_tags-container">
                                    <span>
                                        <i class="fa-solid fa-user pe-1 fs-6"></i>
                                        {{ course.students }}
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-tag pe-2 ps-1 fs-6"></i>
                                        {{ course.tag }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>

            </div>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_bg{
        background-image: url(../../assets/img/bg/background-pattern.jpg);
        background-size: auto;
    }
 
    .my_badge{
        background-color: $lighterBlue;
        font-size: 12px;
        padding-bottom: 4px;
        color: $white;
        right: -10px;
    }

    .my_tags-container, .sub-text{
        color: $gray;
        font-size: 15px;
    }

    h2{
        font-size: 50px;
    }

    p{
        font-size: 14px;
        color: $darkgray;
    }

    .more-margin{
        margin-bottom: 20%!important;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            transform: translateY(-10px);
            -webkit-box-shadow: 0px 0px 20px -1px rgba(0,0,0,0.91); 
            box-shadow: 0px 0px 20px -1px rgba(0,0,0,0.91);
        }
    }


    // imgs
    img{
        width: 100%;
        aspect-ratio: 2/1.4;
        object-fit: cover;
    }


    // icons
    .fa-tag{
            transform: scaleX(-1);
        }



</style>
