<script>
import { store } from "../../store.js";

export default {
    name: 'MainInfo',
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
    <div class="my_info-container p-5 bg-warning">
        same as boolzapp
        <div>
            CONTACTS -------------------------> CONTACT PAGE
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
 
    .my_info-container{
        height: 90vh;
    }
</style>
