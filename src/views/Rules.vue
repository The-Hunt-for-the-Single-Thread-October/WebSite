<template>
    <div class="Rules">
        <nav-bar></nav-bar>
        <rules-page></rules-page>
    </div>
</template>

<script>
    import RulesPage from "../components/Rules/RulesPage";
    import NavBar from "../components/NavBar";

    export default {
        name: "Rules",
        components: {NavBar, RulesPage}
    }
</script>

<style>
</style>