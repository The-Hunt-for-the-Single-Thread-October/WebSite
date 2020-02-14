<template>
    <div>
        <nav-bar></nav-bar>
        <PageDeroulementPartie></PageDeroulementPartie>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import PageDeroulementPartie from "../components/Game/PageDeroulementPartie";

    export default {

        name: "DeroulementPartie",
        components: {NavBar,PageDeroulementPartie},

    }
</script>