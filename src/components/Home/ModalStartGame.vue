<template>
    <b-modal id="start-game" title="Démarrer la partie" centered cancel-title="Retour" ok-title="Démarrer" >
        <qrcode-vue :value="$store.state.room.id" v-if="$store.state.room"></qrcode-vue>
        <p>Scannez le QR code pour rejoindre la partie</p>
    </b-modal>
</template>

<script>
    import QrcodeVue from 'qrcode.vue'

    export default {
        name: "ModalStartGame",
        components:{
            QrcodeVue
        }
    }
</script>

<style scoped>
    .modal-body > *{
        text-align: center;
        margin: 1em;
    }
</style>