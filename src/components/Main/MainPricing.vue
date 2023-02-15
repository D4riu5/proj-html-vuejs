<script>
import { store } from "../../store.js";

export default {
    name: 'MainPricing',
    components: {

    },
    data() {
        return {
            store,
            tableData: [
                {
                    firstCell: 'Number of Courses',
                    secondCell: '2',
                    thirdCell: '4',
                    fourthCell: '6',
                },
                {
                    firstCell: 'Time',
                    secondCell: '15 Days',
                    thirdCell: '30 Days',
                    fourthCell: '30 Days',
                },
                {
                    firstCell: 'Web Designing',
                    secondCell: '✔',
                    thirdCell: '✔',
                    fourthCell: '✔',
                },
                {
                    firstCell: 'Human-Centered Design',
                    secondCell: '✔',
                    thirdCell: '✔',
                    fourthCell: '✔',
                },
                {
                    firstCell: 'Basic Marketing',
                    secondCell: '✖',
                    thirdCell: '✔',
                    fourthCell: '✔',
                },
                {
                    firstCell: 'Phyton for Everybody',
                    secondCell: '✖',
                    thirdCell: '✔',
                    fourthCell: '✔',
                },
                {
                    firstCell: 'Android Developer',
                    secondCell: '✖',
                    thirdCell: '✖',
                    fourthCell: '✔',
                },
                {
                    firstCell: 'Business English',
                    secondCell: '✖',
                    thirdCell: '✖',
                    fourthCell: '✔',
                },
            ]
        }
    },
    methods:{
        
    },
}
</script>


<template>
    <div class="border-bottom my_pricing-container">
        <div class="container py-5">

            <div class="d-flex flex-column align-items-center my-5 text-center">
                <h1>
                    Pricing Plans
                </h1>
                <p class="w-50">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dicta!
                </p>
            </div>

            <!-- STATIC VERSION -->
            <table class="table-custom d-flex justify-content-center">
                <tbody class="py-4 mb-5 text-center">
                    <!-- Table head -->
                    <tr>
                        <td class="p-4 cell_type-1">
                            <h3 class="text-start" style="margin-top: 40%">
                                Save up to 40% by paying weekly
                            </h3>
                        </td>
                        <td class="p-4 cell_type-1 cell-bg">
                            <img class="my-2" src="../../assets/img/misc/h5-custom-icon-7.png" alt="h5-custom-icon-7.png">
                            <h3>
                                Standard
                            </h3>
                            <h4>
                                $12
                            </h4>
                        </td>
                        <td class="p-4 cell_type-2 cell-bg">
                            <img class="my-2" src="../../assets/img/misc/h5-custom-icon-8.png" alt="h5-custom-icon-8.png">
                            <h3>
                                Professional
                            </h3>
                            <h4>
                                $59
                            </h4>
                        </td>
                        <td class="p-4 cell_type-1 cell-bg">
                            <img class="my-2" src="../../assets/img/misc/h5-custom-icon-9.png" alt="h5-custom-icon-9.png">
                            <h3>
                                Advanced
                            </h3>
                            <h4>
                                $88 
                            </h4>
                        </td>
                    </tr>

                    <!-- table body -->
                    <tr v-for="data in tableData">
                        <td class="p-4 text-start">
                            {{ data.firstCell }}
                        </td>
                        <td class="p-4" 
                        :style="{color: data.secondCell === '✔' ? '#40c4ff' : ''}"
                        >
                        {{ data.secondCell }}
                        </td>
                        <td class="p-4"
                        :style="{color: data.thirdCell === '✔' ? '#40c4ff' : ''}"
                        >
                            {{ data.thirdCell }}
                        </td>
                        <td class="p-4"
                        :style="{color: data.fourthCell === '✔' ? '#40c4ff' : ''}"
                        >
                            {{ data.fourthCell }}
                        </td>
                    </tr>

                    <!-- table footer -->
                    <tr>
                        <td></td>
                        <td  class="p-4 cell-bg">
                            <button class="my_button-white fw-bold py-3 px-5">
                                GET IT NOW
                            </button>
                        </td>
                        <td class="p-4 cell-bg">
                            <button class="my_button-blue fw-bold py-3 px-5">
                                GET IT NOW
                            </button>
                        </td>
                        <td class="p-4 cell-bg">
                            <button class="my_button-white fw-bold py-3 px-5">
                                GET IT NOW
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>

</template>


<style lang="scss" scoped>
    @use "../../styles/partials/variables.scss" as *;

    .my_pricing-container{
        background-image: url(../../assets/img/bg/background-pattern.jpg);
        background-size: auto;
        background-position: 0 17%;
    }
 
    h1{
        font-size: 50px;
    }

    h3, h4{
        font-weight: bold;
    }
    .table-custom td{
        border:1px $dirtyWhite solid;
    }

    /* remove border from bottom left cell */
    .table-custom tr:last-child td:first-child {
        border:none;
    }

    td{
        width: 500px;
        background-color: $white;
    }

    .cell_type-1{
        border-top: 4px solid $lightestBlue!important;
    }
    .cell_type-2{
        border-top: 4px solid $lightBlue!important;
    }

    .cell-bg{
        background-color: $lightGray;
    }

    // imgs
    img{
        width: 90px;
        aspect-ratio: 1/1;
    }

    // buttons

    .my_button-white{
        border: none;
        color: $black;
        background-color: $white;
        transition: 0.3s;
        -webkit-box-shadow: 0px 0px 0px 3px rgba(206,206,206,0.91); 
        box-shadow: 0px 0px 0px 3px rgba(206,206,206,0.91);

        &:hover{
            color: $white;
            background-color: $lighterBlue;
            -webkit-box-shadow: none; 
            box-shadow: none;
        }
    }

    .my_button-blue{
        border: none;
        color: white;
        background-color: $lighterBlue;
        transition: 0.3s;
        
        &:hover{
            background-color: $lightBlue;
        }
    }
</style>
