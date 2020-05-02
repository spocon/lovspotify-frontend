<template>
    <div class="MainMiddle">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 "></div>
                <div class="col-md-5 ">
                    <div class="container pl-xl-5" >
                        <div class="row ">
                            <div class="col-auto pb-lg-5">
                                <font-awesome-icon icon="music" inverse size="2x"></font-awesome-icon>
                            </div>

                            <div class="col-auto">
                                {{spotify.track.name}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-auto">
                            <font-awesome-icon icon="user-tie" inverse size="2x"></font-awesome-icon>
                            </div>
                            <div class="col-auto">
                                {{spotify.track.artist[0].name}}
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
        }
    }

</script>
