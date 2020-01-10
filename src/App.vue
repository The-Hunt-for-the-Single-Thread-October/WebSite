<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @import "../node_modules/bootstrap/scss/bootstrap.scss";
    @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css";

    body {
        margin: 0;

        #app {
            font-family: semplicitapro, Helvetica, Arial, sans-serif;
            font-style: normal;
            font-weight: 700;
        }
    }
</style>
