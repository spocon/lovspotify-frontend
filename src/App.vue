<template>
    <div id="app">
        <SpotifyHeader class="pb-5"/>
        <SpotifyMain v-show="connected" class="pb-5" v-bind:spotify="spotify"/>
        <div v-show="!connected">Not Connected</div>
    </div>


</template>

<script>
    import "bootstrap/dist/css/bootstrap.min.css"
    import "bootstrap-vue/dist/bootstrap-vue.css"
    import SpotifyHeader from './components/SpotifyMain/MainHeader.vue'
    import SpotifyMain from './components/SpotifyMain/MainMiddle.vue'


    const axios = require('axios').default;
    export default {
        name: 'App',
        components: {
            SpotifyHeader,
            SpotifyMain
        },
        meta: {
            title: "Lovspotify"
        },
        data: function () {
            return {
                spotify: [],
                connected: Boolean
            }
        },
        methods: {
            getCurrentSong: function () {
                axios.get('http://localhost:8081/player/current').then(response => {
                    console.debug("test" + JSON.stringify(response.data))
                    this.spotify = response.data
                    this.connected = true
                }).catch(err =>  {
                    if(err.response.status === 404 ) {
                        console.log("Not connected")

                    }
                    this.connected = false
                })


            }
        },
        created() {
            this.getCurrentSong()
            setInterval(function () {
                this.getCurrentSong();
            }.bind(this), 1100);
        }
    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: xx-large;
        text-align: center;
        background: rgba(52, 52, 50, 1);
        color: hsla(0, 0%, 100%, 0.7);
        height: 100%;
    }

    html, body {
        height: 100%;
    }

</style>
