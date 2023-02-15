<script>
import { store } from "../store.js";

export default {
    name: 'AppMainTwo',
    components: {

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
    },
    computed: {
        filteredCourses() {
            if (this.store.languagesSelected) {
                // Show only courses with tag == 'LANGUAGES'
                return this.store.courses.filter(course => course.tag === 'LANGUAGES');
            } else if (this.store.softwareSelected) {
                // Show only courses with tag == 'PROGRAMMING'
                return this.store.courses.filter(course => course.tag === 'PROGRAMMING');
            } else if (this.store.businessSelected) {
                // Show only courses with tag == 'BUSINESS'
                return this.store.courses.filter(course => course.tag === 'BUSINESS');
            } else {
                // Show all courses
                return this.store.courses;
            }
        }
    }
}
</script>


<template>
    
    <div class="my_container"></div>
    <div class="my_wrapper text-white d-flex align-items-center">
        <div class="container">
            <h1>
                Archive
            </h1>
            <div>
                {{
                    store.languagesSelected ? 'Home / Courses / Languages' :
                    store.softwareSelected ? 'Home / Courses / Software' :
                    store.businessSelected ? 'Home / Courses / Business' :
                    store.chemistrySelected ? 'Home / Courses / Chemistry' :
                    store.scienceSelected ? 'Home / Courses / Science' :
                    store.craftsSelected ? 'Home / Courses / DYI&Craft' :
                    'Home / Courses'
                }}
            </div>
        </div>
    </div>
    <div  ref="myMainJumbo"></div>


    <div v-if="store.chemistrySelected || store.scienceSelected || store.craftsSelected" class="container py-5 my-4 d-flex justify-content-center">
        <h2>No courses have been found</h2>
    </div>

    <div v-else class="container py-5 my-4 d-flex flex-wrap justify-content-center">
        <div v-for="(course, index) in filteredCourses" class="d-flex flex-column border m-4 more-margin">
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
    </div>


    <a v-if="show" href="#" class="my-div d-flex flex-column align-items-center justify-content-center">
        <i class="fa-solid fa-chevron-up"></i>
        <span>
            TOP
        </span>
    </a>
</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

    .my_container{
        padding-top: 95px;
    }

    .my_wrapper{
        height: 350px;
        background-image: url(../assets/img/bg/pages-title-parallax.jpg);
        background-size: contain;
        background-attachment: fixed;
    }


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

    // copy pasted from MainCourses cuz im too lazy to learn mixins, for now
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
        width: 25%;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            transform: translateY(-10px);
            -webkit-box-shadow: 0px 6px 6px -1px rgba(0,0,0,0.47); 
            box-shadow: 0px 6px 6px -1px rgba(0,0,0,0.47);
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
