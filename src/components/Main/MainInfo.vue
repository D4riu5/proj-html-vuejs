<script>
import { store } from "../../store.js";

export default {
    name: 'MainInfo',
    components: {

    },
    data() {
        return {
            store,
            currentInfoTabIndex: 0,
            visible: true,
        }
    },
    methods: {
        transitionEffect() {
            this.visible = false;
            setTimeout(() => {
                this.visible = true;
            }, 400);
        }
        
    },
    computed: {
        currentInfoTab() {
            return this.store.infos[this.currentInfoTabIndex];
        },
    },
}
</script>


<template>
    <div class="container py-5 my-5">
       <div class="row">
            <div class="col-4 d-flex flex-column">
                <div v-for="(info, index) in store.infos" 
                @click="currentInfoTabIndex !== index ? (currentInfoTabIndex = index, transitionEffect()) : null "
                :class="currentInfoTabIndex === index ? 'selected' : ''"
                class="p-4 fw-bold my_tab">
                    {{ info.title }}
                </div>
            </div>

            <transition name="fade">
                <div v-if="visible" class="col-8 px-5 d-flex flex-column justify-content-between position-relative">
                    <h2 class="mb-4">
                        {{ currentInfoTab.header }}
                    </h2>
                    <p>
                        {{ currentInfoTab.description }}
                    </p>
                    <ul class="mt-xl-3 mt-1">
                        <li>
                            We enrich lives through learning.
                        </li>
                        <li>
                            Maximizing potential through individual attention.
                        </li>
                        <li>
                            The trusted name for specialized training.
                        </li>
                        <li>
                            People teach. People learn. This is where they connect.
                        </li>
                    </ul>


                    <img class="position-absolute" :src="`src/assets/img/misc${currentInfoTab.image}`" :alt="currentInfoTab.title">

                </div>
            </transition>
       </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .selected{
            border-left: 7px solid $lighterBlue!important;
            background-color: $lightGray;
            color: $lighterBlue;
        }
    .my_tab{
        border-top: 1px solid $gray;
        border-left: 1px solid $gray;
        border-right: 1px solid $gray;
        transition: 0.3s ease;
        cursor: pointer;

        &:last-child{
            border-bottom: 1px solid $gray;
        }

        &:hover{
            border-left: 7px solid $lighterBlue;
            background-color: $lightGray;
            color: $lighterBlue;
        }
    }
    
    // text
    h2{
        font-size: 40px;
    }

    // List
    ul{
        padding-left: 0;

        li{
            list-style: none;
            padding: 15px 0;
            
            &::before{
                content: '\2713';
                margin-right: 10px;
                color: $lighterBlue;
            }
        }
    }

    // imgs
    img{
        width: 130px;
        aspect-ratio: 1/1;
        bottom: 0;
        left: 550px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
