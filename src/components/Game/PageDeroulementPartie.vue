<template>
    <div>
        <div class="container">
            <div class="rules-div">
                <div class="section rounded text-white">
                    <div class="header">
                        <div class="title">
                            <h1>Joueur 1</h1>

                        </div>
                        <div class="instructions">
                            <p>C'est à toi d'attaquer !</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageDeroulementPartie",
        mounted() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">
    body {
        background-image: url("../../assets/BackGroundPartie.jpg");
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;


    }
    .title{
        text-align: center;
    }
    .instructions{
        text-align: center;
        font-size: 4em;
        margin-top: 2em;
    }
    .container{
        margin-top: 9em;
    }

    .content {
        margin-top: 20vh;
        text-align: right;
        padding-right: 10vw;
        color: white;

        div {
            display: inline-block;
            text-align: center;
        }
    }

    @media (max-width: 980px) {
        .content {
            padding-right: 0px;

            div {
                display: block;
                text-align: center;
            }
        }
    }
</style>
