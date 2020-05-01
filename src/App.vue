<template>
    <div id="app">
        <app-header/>
        <img alt="Vue logo" src="./assets/logo.png">
        <app-main/>
    </div>
</template>

<script>
    import SpotifyHeader from './components/SpotifyMain/MainHeader.vue'
    import SpotifyMain from './components/SpotifyMain/SpotifyMain.vue'

    export default {
        name: 'App',
        components: {
            'app-header': SpotifyHeader,
            'app-main': SpotifyMain,
        },

    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
