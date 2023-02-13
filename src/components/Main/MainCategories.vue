<script>
import { store } from "../../store.js";

export default {
    name: 'MainCategories',
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
    <div class="p-5 my-3 d-flex justify-content-between">
        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>

        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>

        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>

        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>

        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>

        <div class="bg-secondary p-5">
            <div>
                IMAGE
            </div>
            <div>
                TEXT
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

</style>
