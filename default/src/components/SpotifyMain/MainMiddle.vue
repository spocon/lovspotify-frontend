<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="container">
                    <div class="row pb-lg-6">
                        <div class="col-md-6 col-md-push-6">
                            <div class="container">
                                <div class="row pb-lg-5">
                                    <div class="col-2">
                                        <font-awesome-icon icon="music" inverse size="1x"></font-awesome-icon>
                                    </div>

                                    <div class="col-10 ">
                                        <p class="text-left">{{spotify.track.name}}</p>
                                    </div>
                                </div>
                                <div class="row pb-lg-5">
                                    <div class="col-2">
                                        <font-awesome-icon icon="user-tie" inverse size="1x"></font-awesome-icon>
                                    </div>
                                    <div class="col-10">
                                        <p class="text-left"> {{spotify.track.artist[0].name}}</p>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-2">
                                        <font-awesome-icon icon="clock" inverse size="1x"></font-awesome-icon>
                                    </div>
                                    <div class="col-10">
                                        <p class="text-left">{{ time }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-md-pull-3">
                            <input type="image" :src="'https://i.scdn.co/image/'+spotify.image.key" alt=""/>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-11 controller p-1">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-1"></div>
                                    <div class="col-2">
                                        <font-awesome-icon class="cursor-pointer"
                                                           v-on:click="callController('/player/previous')"
                                                           icon="less-than" inverse size="2x"></font-awesome-icon>
                                    </div>
                                    <div class="col-2">
                                        <font-awesome-icon class="cursor-pointer"
                                                           v-on:click="callController('/player/volume/down')"
                                                           icon="minus-circle" inverse size="2x"></font-awesome-icon>
                                    </div>
                                    <div v-on:click="currentlyPlaying" class="col-2">
                                        <font-awesome-icon v-show="!play" class="cursor-pointer" icon="play-circle"
                                                           inverse
                                                           size="2x"></font-awesome-icon>
                                        <font-awesome-icon v-show="play" class="cursor-pointer" icon="pause-circle"
                                                           inverse
                                                           size="2x"></font-awesome-icon>

                                    </div>
                                    <div class="col-2">
                                        <font-awesome-icon class="cursor-pointer"
                                                           v-on:click="callController('/player/volume/up')"
                                                           icon="plus-circle" inverse size="2x"></font-awesome-icon>
                                    </div>
                                    <div class="col-2" v-on:click="callController('/player/next')">
                                        <font-awesome-icon class="cursor-pointer" icon="greater-than" inverse
                                                           size="2x"></font-awesome-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1 border-left"/>
            <div class="col-md-4">
                <div class="container">
                    <div class="row"><h3> Next in Line: </h3></div>
                    <div v-for="next in spotify.nextTracks" v-bind:key="next" v-bind:value="next" class="border-bottom">

                        <div class="row pt-3">
                            <div class="col-2">
                                <input type="image" :src="'https://i.scdn.co/image/'+next.image.key" alt=""/>
                            </div>
                            <div class="col-2">
                                <font-awesome-icon icon="music" inverse size="1x"></font-awesome-icon>
                            </div>

                            <div class="col-8">
                                <p class="text-left">{{next.track.name}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2"/>
                            <div class="col-2">
                                <font-awesome-icon icon="user-tie" inverse size="1x"></font-awesome-icon>
                            </div>
                            <div class="col-8">
                                <p class="text-left">{{next.track.artist[0].name}}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    const axios = require('axios').default;

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
            },
            time: String,
            play: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            currentlyPlaying() {
                if (this.play === true) {
                    this.play = false;
                    this.callController("/player/pause");
                } else {
                    this.play = true;
                    this.callController("/player/resume");
                }
            },
            callController(path) {
                //console.debug("received : " + path)
                axios.get(path).catch(err => {
                    if (err.response.status === 404) {
                        // console.debug("Not connected")
                    } else {
                        //console.debug(err)
                    }
                })
            }
        }
    }


</script>

<style>


    .controller {
        background-color: darkgrey;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
    }

    .cursor-pointer {
        cursor: pointer;
    }


</style>
