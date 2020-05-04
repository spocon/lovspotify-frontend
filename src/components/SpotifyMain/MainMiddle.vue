<template>
    <div class="MainMiddle">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 "></div>
                <div class="col-md-5 ">
                    <div class="container pl-xl-5">
                        <div class="row pb-lg-5">
                            <div class="col-auto">
                                <font-awesome-icon icon="music" inverse size="2x"></font-awesome-icon>
                            </div>

                            <div class="col-auto">
                                {{spotify.track.name}}
                            </div>
                        </div>
                        <div class="row pb-lg-5">
                            <div class="col-auto">
                                <font-awesome-icon icon="user-tie" inverse size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-auto">
                                {{spotify.track.artist[0].name}}
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-auto">
                                <font-awesome-icon icon="clock" inverse size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-auto">
                                {{ time }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <input type="image" :src="'https://i.scdn.co/image/'+spotify.image.key" alt=""/>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
        <div class="percentBar">
            <div id="percent" v-bind:style="{ width: songPercent + '%' }"></div>
        </div>
    </div>
</template>


<script>

    export default {
        name: 'MainMiddle',
        props: {
            spotify: {
                type: Object,
                default: function () {
                    return {
                        track: {
                            name: "No Connection"
                        }
                    }
                }
            }
        },
        watch: {
            spotify: function () {
                this.getCurrentTime()
            }
        },
        data: function () {
            return {
                time: String,
                songPercent: Number
            }

        },
        methods: {
            getCurrentTime() {
                this.songPercent = (this.spotify.trackTime / this.spotify.track.duration) * 100;
                this.time = GetTime(this.spotify.trackTime, this.spotify.track.duration)
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
</style>
