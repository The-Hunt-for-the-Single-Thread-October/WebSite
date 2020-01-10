<template>
    <div class="Home">
        <nav-bar></nav-bar>
        <home-page></home-page>
    </div>
</template>

<script>
    import HomePage from "../components/Home/HomePage";
    import NavBar from "../components/NavBar";

    export default {
        name: "Home",
        components: {NavBar, HomePage}
    }
</script>

<style>
</style>