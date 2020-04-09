<template>
    <div class="Home">
        <nav-bar></nav-bar>
        <home-page></home-page>
        <modal-start-game></modal-start-game>
    </div>
</template>

<script>
    import HomePage from "../components/Home/HomePage";
    import NavBar from "../components/NavBar";
    import ModalStartGame from "../components/Home/ModalStartGame";

    export default {
        name: "Home",
        components: {ModalStartGame, NavBar, HomePage}
    }
</script>

<style scoped>
</style>