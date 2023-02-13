<script>
import { store } from "../../store.js";

export default {
    name: 'MainPricing',
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
    <div class="my_pricing-container border-bottom p-5">

        <div class="d-flex flex-column align-items-center my-5 text-center">
            <h2>
                Pricing Plans
            </h2>
            <p class="w-50">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dicta!
            </p>
        </div>

        <div>
            PRICING TABLE?
        </div>

    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_pricing-container{
        height: 100vh;
    }
 
</style>
