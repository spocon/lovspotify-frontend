<template>
    <div class="SpotifyMain">

        <div>Name {{ songname }}</div>

    </div>
</template>


<script>
    const axios = require('axios').default;

getCurrentSong()
    export default {
        name: 'SpotifyMain',
        created: {
           getCurrentSong
        }
    }


    function getCurrentSong() {
        axios.get('http://192.168.8.152:8080/player/current')
            .then(response => {
                console.log("response name : "+response.track.name)
                this.songname = response.track.name;

                console.info(response);
            })

    }
</script>
