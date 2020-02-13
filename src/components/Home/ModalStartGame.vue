<template>
    <b-modal id="start-game" title="Démarrer la partie" centered hide-footer>
        <div class="text-center" v-if="!room">
            <b-spinner variant="primary" style="width: 5em; height: 5em;"></b-spinner>
            <p>Création du QR code en cours...</p>
        </div>
        <div class="text-center" v-if="room">
            <qrcode-vue :value="JSON.stringify(room)"></qrcode-vue>
            <p>Scannez le QR code pour rejoindre la partie</p>
            <b-spinner variant="primary" style="width: 1em; height: 1em;"></b-spinner>
            <p style="display: inline;"> En attente de : Joueur{{ JSON.stringify(room.clients) }}</p>
        </div>

    </b-modal>
</template>

<script>
    import QrcodeVue from 'qrcode.vue'

    export default {
        name: "ModalStartGame",
        components: {
            QrcodeVue
        },
        computed:{
            room: function(){
                return this.$store.state.room
            }
        }
    }
</script>

<style scoped>
    p{
        margin-top: 1em;
    }
</style>