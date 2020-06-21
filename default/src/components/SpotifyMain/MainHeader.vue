<template>
    <div class="main-header">
        <b-navbar class="vw-100" type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand href="#"><img :src="require('@/assets/lovspotify_50x50.png')" class="pr-3" alt=""/>Lovspotify
                </b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Settings" right>
                    <b-dropdown-item v-b-modal.modal-themes href="#">Themes</b-dropdown-item>
                    <b-dropdown-item v-b-modal.modal-settings v-on:click="getConfig" href="#">Device</b-dropdown-item>
                    <b-dropdown-item v-b-modal.modal-about href="#">About</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="modal-themes" title="Select a theme">
            <div class="container">
                <div class="row pb-1">
                    <div class="col-auto">
                        <img :src="require('@/assets/lovspotify_100x100.png')" alt=""/>
                    </div>
                    <div class="col-auto">
                        <select style="background: lavender;min-width: 300px;max-width:300px;"> v-model="themes">
                            <option v-for="theme in themes" v-bind:key="theme" v-bind:value="theme">
                                {{ theme }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="modal-settings" @ok="setConfig" ok-title="Restart" title="Local Settings">
            <div class="container">
                <div class="row pb-1">
                    <div class="col-md-4 " style="red">
                        Config-File:
                    </div>
                    <div class="col-md-8">
                        <code>/opt/lovspotify/config.toml</code>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        Device-Host:
                    </div>
                    <div class="col-md-7">
                        <code>{{configdata.url}}</code>
                    </div>
                </div>
                <div class="row pb-1">
                    <div class="col-md-4">
                        Server-Port:
                    </div>
                    <div class="col-md-4">
                        <input type="text" name="serverPort" placeholder="8080" v-model="configdata.serverPort"/>
                    </div>
                </div>
                <div class="row pb-1">
                    <div class="col-md-4">
                        Device-Name:
                    </div>
                    <div class="col-md-4">
                        <input type="text" name="deviceName" placeholder="Device Name" v-model="configdata.deviceName"/>
                    </div>
                </div>
                <div class="row pb-1">
                    <div class="col-md-4">
                        Device-Type:
                    </div>
                    <div class="col-md-4">
                        <select v-model="configdata.deviceType" >
                            <option v-for="deviceType in configdata.availableDeviceTypes" v-bind:key="deviceType" v-bind:value="deviceType">
                                {{ deviceType }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row pb-1">
                    <div class="col-md-4">
                        Mixers:
                    </div>
                    <div class="col-md-4">
                        <select v-model="configdata.chosenMixer" >
                            <option v-for="mixer in configdata.availableMixers" v-bind:key="mixer" v-bind:value="mixer">
                                {{ mixer }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row pb-1">
                    <div class="col-md-4">
                        LogLevel:
                    </div>
                    <div class="col-md-4">
                        <select v-model="configdata.logLevel" class="mdb-select" >
                            <option v-for="loglevel in configdata.availableLogLevels" v-bind:key="loglevel"
                                    v-bind:value="loglevel">
                                {{ loglevel }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="modal-about" title="About Lovspotify">
            <div class="container">
                <div class="row pb-1">
                    <div class="col-auto">
                        <a href="https://github.com/spocon/lovspotify" target="_blank"><img
                                :src="require('@/assets/github_100x100.png')" alt=""/> Spocon (Spotify Connect
                            Client)</a>

                    </div>
                </div>
            </div>
        </b-modal>
    </div>


</template>


<script>

    const axios = require('axios').default;
    export default {
        name: "MainHeader",
        props: {
            msg: String
        },
        data() {
            return {
                show: true,
                configdata: [],
                selectedMixer: '',
                themes: ['Default']
            }
        },
        methods: {
            getConfig() {
                axios.get('/config/data').then(response => {
                    //console.debug("test" + JSON.stringify(response.data))
                    this.configdata = response.data
                }).catch(err => {
                    if (err.response.status === 404) {
                        // console.debug("Not connected")
                    }
                })
            },
            setConfig() {
                axios.post('/config/data', this.configdata)
                    /*.then(response => {
                    console.debug("test" + JSON.stringify(response.data))
                })*/
                    .catch(err => {
                        if (err.response.status === 404) {
                            //console.debug("Not connected")
                        }
                    })
            }

        }
    }
</script>

<style scoped>
    .main-header {
        font-size: large;
    }
    select {
        max-width: 250px;
        width:250px;
        background-color: aliceblue;
    }
    input {
        max-width: 250px;
        width: 250px;
        background-color: aliceblue;
    }

</style>