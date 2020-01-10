<template>
    <div class="HomePage">
        <div class="content">
            <div>
                <h2>The hunt for the single thread october</h2>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br/>
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante<br/>
                    . Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                    eleifend leo.</p>
                <button type="button" class="btn btn-primary" v-b-modal.start-game>Jouer !</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style lang="scss">
    body {
        background-image: url("../../assets/background_home.jpg");
        background-size: cover;
    }

    .content {
        margin-top: 20vh;
        text-align: right;
        padding-right: 10vw;
        color: white;

        div{
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