<template>
    <div>
        <b-navbar toggleable="sm" fixed="top">
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/">Accueil</b-nav-item>
                    <b-nav-item href="/rules">Règles</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navbar{
        background-color: #0b0d12;
    }
    a.nav-link{
        color: #5c8ad6 !important;
    }
</style>