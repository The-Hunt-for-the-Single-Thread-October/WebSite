<template>
    <div class="HomePage">
        <div class="content">
            <div>
                <h2>The hunt for the single thread october</h2>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br/>
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante<br/>
                    . Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
                    eleifend leo.</p>
                <button type="button" class="btn btn-primary" @click="startGame">Jouer !</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        mounted() {
            this.$io.on('roomJoined', room => {
                // eslint-disable-next-line no-console
                console.log('Incoming message:', room);
                this.$store.commit('saveRoom', room);
            });
        },
        methods: {
            startGame() {
                if (this.$store.state.room === null) {
                    this.$bvModal.show('start-game');
                    this.$io.emit('create');
                }
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-image: url("../../assets/background_home.jpg");
        background-size: cover;
        background-repeat:no-repeat;

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