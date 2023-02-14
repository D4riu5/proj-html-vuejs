<script>
import { store } from "../../store.js";

export default {
    name: 'MainTutoring',
    components: {

    },
    data() {
        return {
            store,
            userStoriesCount: 0,
            eventsCount: 0,
            targetUserStoriesCount: 168,
            targetEventsCount: 348,
        }
    },
    methods:{
        countUp() {
            let interval = setInterval(() => {
                if (this.userStoriesCount < this.targetUserStoriesCount) {
                    this.userStoriesCount = this.userStoriesCount + 3;
                }
                if (this.eventsCount < this.targetEventsCount) {
                    this.eventsCount = this.eventsCount + 3;
                }
                if (this.userStoriesCount === this.targetUserStoriesCount && this.eventsCount === this.targetEventsCount)
                {
                clearInterval(interval);
                }
            }, 20);
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.countUp();
                observer.disconnect();
            }
        });
        observer.observe(this.$refs.counterStarter);
    },
}
</script>


<template>
    <div class="container pt-5">

        <h2>
            The Trusted Name <br> for In-Home Tutoring.
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illum minus! Molestiae nemo et officiis ducimus voluptate ad veritatis debitis itaque, suscipit quasi ea deleniti corporis minus maxime, labore temporibus fuga saepe tenetur  vitae. Neque quos consequuntur eveniet quo obcaecati! Omnis perferendis repudiandae nostrum necessitatibus?
        </p>
        <a href="#nogo" class="fw-bold">
            LEARN MORE
        </a>

        <div class="mt-5">
            <img class="my_img-1" src="../../assets/img/misc/h5-img-1.jpg" alt="tutoring img 1">
        </div>
    </div>
    <div class="border-bottom">

    </div>
    <div class="container p-5">    

        <div class="d-flex pt-5">

            <div class="w-50">
                <img class="my_img-2 pt-5" src="../../assets/img/misc/h5-img-2.jpg" alt="tutoring img 2">
            </div>
            <div class="w-50 px-5">
                <h2>
                    Empowering <br> Children to Reach Their Potential.
                </h2>
                <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate. 
                </p>
                <div class="d-flex justify-content-between">
                    <div class="w-50" ref="counterStarter">
                        <h3>
                            {{ userStoriesCount }}
                        </h3>
                        <div class="fw-bold">
                            USER STORIES
                        </div>
                    </div>

                    <div class="w-50">
                        <h3>
                            {{ eventsCount }}
                        </h3>
                        <div class="fw-bold">
                            EVENTS
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;
    //  TEXT
    h2{
        font-size: 40px;
    }

    h3{
        font-size: 50px;
    }

    h3, h3 + div{
        color: $lighterBlue;
    }

    a{
        color: $lighterBlue;
        text-decoration: none;
    }

    // IMGS
    .my_img-1{
        width: 100%;
    }
    .my_img-2{
        width: 100%;
    }


</style>
