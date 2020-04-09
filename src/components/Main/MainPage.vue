<template>
    <div class="MainPage">
        <div class="content">
            <div v-if="montreMessage">
                <p>En attente de confirmation des joueurs...</p>
                <b-spinner variant="primary" style="width: 1em; height: 1em;"></b-spinner>
            </div>
            <div v-if="montreMessageDeTours">
                <p>C'est au joueur {{ joueur }}</p>
            </div>
             <div v-if="montreMessageDeTouched">
                <p>Le joueur {{ joueur }} a touché l'ennemi</p>
            </div>
            <div v-if="montreMessageDeMissed">
                <p>Le joueur {{ joueur }} n'a pas touché l'adversaire</p>
            </div>
            <div v-if="montreMessageDeSink">
                <p>Le joueur {{ joueur }} a coulé un bateau</p>
            </div>
            <div v-if="montreMessageDeWin">
                <p>Le joueur {{ joueur }} a gagné </p>
                <button class="btn btn-primary" @click="rejouer()">Rejouer</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage",
        data() {
            return {
                montreMessage: true,
                montreMessageDeTours: false,
                montreMessageDeTouched: false,
                montreMessageDeMissed: false,
                montreMessageDeSink: false,
                montreMessageDeWin: false,
                joueur: '1',
                tour: true,
                confirmation: 0,       
            }
        },
        mounted() {
            this.$io.on('shipsPlaced', (roomId) => {
                this.confirmation++;
                if(this.confirmation === 2) {
                    this.montreMessageDeTours = true;
                    this.montreMessage = false;
                }
            });

            this.$io.on('touched', () => {
                this.playerTouches();
            });

            this.$io.on('missed', () => {
                this.playerMisses();
            });

            this.$io.on('win', () => {
                this.playerWins();
            });

            this.$io.on('sink', () => {
                this.playerSinks();
            });
        },
        created() {
           
        },
        methods: {
            changerTour() {
                if(this.joueur === '1') {
                    this.joueur = '2';
                } else if(this.joueur === '2') {
                    this.joueur = '1';
                }
            },
            playerTouches() {
                this.montreMessageDeMissed = false;
                this.montreMessageDeSink = false;
                this.montreMessageDeWin = false;
                this.montreMessageDeTours = false;
                this.montreMessageDeTouched = true;
                setTimeout(() => { 
                    this.montreMessageDeTouched = false;
                    this.montreMessageDeTours = true; 
                }, 1000);
            },
            playerMisses() {
                this.montreMessageDeSink = false;
                this.montreMessageDeWin = false;
                this.montreMessageDeTouched = false;
                this.montreMessageDeTours = false;
                this.montreMessageDeMissed = true;
                setTimeout(() => {
                    this.montreMessageDeMissed = false;
                    this.changerTour();
                    this.montreMessageDeTours = true;
                }, 1000);
            },
            playerSinks() {
                this.montreMessageDeMissed = false;
                this.montreMessageDeTouched = false;
                this.montreMessageDeTours = false;
                this.montreMessageDeWin = false;
                this.montreMessageDeSink = true;
                setTimeout(() => { 
                    this.montreMessageDeSink = false; 
                    this.montreMessageDeTours = true;
                }, 1000);
            },
            playerWins() {
                this.montreMessageDeMissed = false;
                this.montreMessageDeTouched = false;
                this.montreMessageDeTours = false;
                this.montreMessageDeSink = false;
                this.montreMessageDeWin = true;
            },
            rejouer() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang="scss">
    body {
        background-image: url("https://s3.amazonaws.com/files.technologyreview.com/p/pub/images/quantumradar.jpg");
        width: 100%;
        height: 90vh;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }

    .content {
        margin-top: 50vh;
        text-align: center;
        color: white;
        font-size: 40px;

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