<script>
import AppLogo from './mini components/AppLogo.vue'
import { store } from "../store.js";

export default {
    name: 'AppFooter',
    components: {
        AppLogo,
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
    <div class="my_footer-container text-white pt-5">
        <div class="container py-5 d-flex border-bottom border-secondary">

            <!-- COLUMN 1 -->
            <div class="col-3 pb-3">
                <AppLogo/>
                <p class="my-5">
                    Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
                </p>
                <div class="my-4 icon-wrapper">
                    <i class="fa-solid fa-phone me-3"></i>
                    <span>1-677-124-44227</span>
                </div>
                <div class="icon-wrapper">
                    <i class="fa-regular fa-clock me-3"></i>
                    <span>Mon - Sat 8.00 - 18.00</span>
                </div>
            </div>

            <!-- COLUMN 2 -->
            <div class="col-3 ms-4 pb-3">
                <h4 class="mb-5">Popular Courses</h4>
                <div v-for="(course,index) in store.courses" class="my-4">
                    <template v-if="index < 3">
                        <a class="fw-bolder pb-2" href="#nogo">
                            {{ course.title }}
                        </a>
                        <a class="sub-link" href="#nogo">
                            {{ course.teacher }}
                        </a>
                    </template>
                </div>
            </div>

            <!-- COLUMN 3 -->
            <div class="col-2 pb-3">
                <h4 class="mb-5">Support</h4>
                <a v-for="link in store.support" href="#nogo" class="my-3">
                    {{ link }}
                </a>
            </div>

            <!-- COLUMN 4 -->
            <div class="col-3 offset-1 d-flex flex-column pb-3">
                <h4 class="mb-5">Flexible Learning</h4>
                <img src="../assets/img/misc/footer-img-1.png" alt="">
            </div>
        </div>
        <div class="container py-5 footer-bottom d-flex justify-content-between">
            <div style="cursor: pointer; margin-left: -12px">
                © 2017 Qode Interactive, All Rights Reserved
            </div>
            <div style="margin-right: -12px" class="d-flex justify-content-between">
                <div class="mx-3">
                    CALL +44 300 303 0266
                </div>
                <div class="mx-3">
                    FOLLOW US
                </div>
                <div>
                    <i v-for="social in store.socials" class="fa-brands ms-4" :class="social"></i>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../styles/partials/variables.scss" as *;

    .my_footer-container{
        background-color: $dark;
    }

    .icon-wrapper{
        cursor: pointer;

        &:hover > i{
            color: $lighterBlue;
        }
    }

    a{
        display: block;
        text-decoration: none;
        color: $white;

        &:hover:not(.sub-link){
            color: $lighterBlue;
        }
        
        &.sub-link{
            font-size: 14px;
        }
        &.sub-link:hover{
            color: $dirtyWhite;
        }
    }

    .footer-bottom{
        font-size: 12px;
        color: $dirtyWhite;
    }

    // imgs
    img{
        width: 90%;
    }
 
    //icons
    .fa-brands{
        cursor: pointer;

        &:hover{
            color: $lighterBlue
        }
    }
</style>
