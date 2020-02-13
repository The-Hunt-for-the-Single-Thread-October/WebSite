<template>
    <b-modal id="start-game" title="Démarrer la partie" centered cancel-title="Retour" ok-title="Démarrer">
        <div class="text-center" v-if="!$store.state.room">
            <b-spinner variant="primary" style="width: 5em; height: 5em;"></b-spinner>
            <p>Création du QR code en cours...</p>
        </div>
        <div class="text-center" v-if="$store.state.room">
            <qrcode-vue :value="JSON.stringify($store.state.room)"></qrcode-vue>
            <p>Scannez le QR code pour rejoindre la partie</p>
        </div>

    </b-modal>
</template>

<script>
    import QrcodeVue from 'qrcode.vue'

    export default {
        name: "ModalStartGame",
        components: {
            QrcodeVue
        }
    }
</script>

<style scoped>
    p{
        margin-top: 1em;
    }
</style>