<template>
    <div class="Home">
        <nav-bar></nav-bar>
        <main-page></main-page>
    </div>
</template>

<script>
    import MainPage from "../components/Main/MainPage";
    import NavBar from "../components/NavBar";

    export default {
        name: "Main",
        components: {NavBar, MainPage}
    }
</script>

<style scoped>
</style>