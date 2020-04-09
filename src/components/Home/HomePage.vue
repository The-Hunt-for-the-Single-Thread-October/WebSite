<template>
    <div class="HomePage">
        <div class="content">
            <div class="col-5">
                <h1><strong>The Hunt for the Single Thread October</strong></h1>
                <br>
                <h4>« Être en mer, c'est être devant l'ennemi. Un navire qui fait une traversée est une armée qui livre une bataille. »
                </h4>
                <br/><h5>- Victor Hugo</h5>
                <br><br>
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
                this.$store.commit('saveRoom', room);
                if(room.clients == room.maxClients) {
                    this.goMainPage();
                }
            });
        },
        methods: {
            startGame() {
                this.$bvModal.show('start-game');
                this.$io.emit('create');
            },
            goMainPage() {
                this.$router.push('/game');
            }
        }
    }
</script>

<style scoped lang="scss">
    body {
        background-image: url("../../assets/background_home.jpg");
        width: 100%;
        height: 90vh;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
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