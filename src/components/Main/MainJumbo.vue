<script>
import { store } from "../../store.js";

export default {
    name: 'MainJumbo',
    components: {

    },
    data() {
        return {
            store,
        }
    },
    methods:{
        
    },
}
</script>


<template>
    <div class=" bg-primary">
        <div class="my_jumbo-container text-white d-flex justify-content-center align-items-center">
            <div class="text-center w-75">
                <h1>Contemporary ideas</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore harum delectus alias, ab aliquid nobis distinctio, commodi culpa, odit quos nesciunt! Ab expedita magnam accusantium tempore sit optio velit!
                </p>
                <button>
                    REGISTER NOW
                </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_jumbo-container{
        height: 80vh;
    }

</style>
