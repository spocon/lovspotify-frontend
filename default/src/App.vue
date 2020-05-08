<template>
    <div id="app" >
        <div v-show="connected" class="container-fluid flex-column vh-100 ">
            <SpotifyHeader class="row h-auto"/>
            <div class="row flex-fill d-flex justify-content-start " >
                <SpotifyMain class="col-10 pt-xl-5" v-bind:time="time" v-bind:spotify="spotify"/>
            </div>
        </div>
        <SpotifyDisconnected v-show="!connected"/>
        <div class="percentBar">
            <div id="percent" v-bind:style="{ width: songPercent + '%' }"></div>
        </div>
    </div>


</template>

<script>
    import "bootstrap/dist/css/bootstrap.min.css"
    import "bootstrap-vue/dist/bootstrap-vue.css"
    import SpotifyHeader from './components/SpotifyMain/MainHeader.vue'
    import SpotifyMain from './components/SpotifyMain/MainMiddle.vue'
    import SpotifyDisconnected from './components/SpotifyMain/MainDisconnected.vue'


    const axios = require('axios').default;
    export default {
        name: 'App',
        components: {
            SpotifyHeader,
            SpotifyMain,
            SpotifyDisconnected
        },
        data: function () {
            return {
                spotify: [],
                connected: Boolean,
                time: String,
                songPercent: Number
            }
        },
        methods: {
            getCurrentSong() {
                axios.get('/player/current').then(response => {
                   // console.debug("debug: " + JSON.stringify(response.data))
                    this.spotify = response.data
                    this.connected = true
                }).catch(err => {
                    if (err.response.status === 404) {
                        //console.debug("Not connected")
                    }
                    this.connected = false
                })
            },
            getCurrentTime() {
                this.songPercent = (this.spotify.trackTime / this.spotify.track.duration) * 100;
                this.time = GetTime(this.spotify.trackTime, this.spotify.track.duration)
            },
        },
        created() {
            this.getCurrentSong()
            setInterval(function () {
                this.getCurrentSong();
            }.bind(this), 1100);
        },
        watch: {
            spotify: function () {
                this.getCurrentTime()
            }
        }
    }

    function GetTime(time, duration) {
        return time.toHHMMSS() + " / " + duration.toHHMMSS();
    }

    Number.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10) / 1000; // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = Math.floor(sec_num - (hours * 3600) - (minutes * 60));

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;

    }

</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: xx-large;
        text-align: center;
        color: hsla(0, 0%, 100%, 0.7);
    }

    html, body {
        background: rgba(52, 52, 50, 1);
        max-height: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }


    .percentBar {
        position: absolute;
        height: 10px;
        bottom: 0;
        width: 100%;
        z-index: 1000;
        background-color: hsla(0, 0%, 15%, 0.8);
    }

    #percent {
        position: relative;
        height: 100%;
        background-color: hsla(0, 0%, 85%, 0.8);
    }

    .flex-fill {
        flex: 1;
    }


</style>
