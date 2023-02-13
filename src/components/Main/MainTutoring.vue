<script>
import { store } from "../../store.js";

export default {
    name: 'MainTutoring',
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
    <div class="container my_tutoring-container bg-success p-5">

        <h2>
            The Trusted Name for In-Home Tutoring.
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illum minus! Molestiae nemo et officiis ducimus voluptate ad veritatis debitis itaque, suscipit quasi ea deleniti corporis minus maxime, labore temporibus fuga saepe tenetur  vitae. Neque quos consequuntur eveniet quo obcaecati! Omnis perferendis repudiandae nostrum necessitatibus?
        </p>

        <div class="debug-height1">
            IMAGE
        </div>

        <div class="d-flex py-5">
            <div class="w-50 debug-height1">
                IMAGE
            </div>
            <div class="w-50 debug-height1 px-5">
                <h2>
                    Empowering Children to Reach Their Potential.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime vel vitae voluptate fuga asperiores, explicabo quidem quae vero eos reiciendis provident natus, delectus, voluptates pariatur tempora. Assumenda, eaque! Doloremque ullam eveniet similique non repellendus!
                </p>
                <div class="d-flex justify-content-between">
                    <div>
                        <h1>
                            number
                        </h1>
                        <div>
                            text
                        </div>
                    </div>

                    <div>
                        <h1>
                            number
                        </h1>
                        <div>
                            text
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .my_tutoring-container{
        height: 1300px;
    }

    .debug-height1{
        height: 45%;
    }

    .debug-height2{
        height: 30%;
    }
</style>
