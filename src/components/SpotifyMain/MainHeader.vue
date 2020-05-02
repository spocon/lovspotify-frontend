<template>
    <div class="main-header">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand href="#"><img :src="require('@/assets/lovspotify_50x50.png')" class="pr-3" alt=""/>Lovspotify
                </b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Settings" right>
                    <b-dropdown-item v-b-modal.modal-settings v-on:click="getConfig" href="#">Change Settings</b-dropdown-item>
                    <b-dropdown-item v-b-modal.modal-about href="#">About</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="modal-settings" title="Local Settings">
            <div>Settings are stored in <code>/opt/lovspotify/config.toml</code></div>
            <div class="container">
                <div class="row">
                    <div class="col-auto">
                        Device-Name:
                    </div>
                    <div class="col-auto">
                        {{configdata.deviceName}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto">
                        Device-Type:
                    </div>
                    <div class="col-auto">
                        {{configdata.deviceType}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-auto">
                        Device-Host:
                    </div>
                    <div class="col-auto">
                        {{configdata.url}}
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="modal-about" title="About Lovspotify">
            <div class="container">
                <div class="row">
                    <div class="col-auto">
                        <img :src="require('@/assets/lovspotify_100x100.png')" alt=""/>
                    </div>
                    <div class="col-auto">
                        Have fun !
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
                configdata: []
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show;
                if (this.show) {
                    this.getConfig();
                }
            },
            getConfig() {
                axios.get('http://localhost:8081/config/data').then(response => {
                    console.debug("test" + JSON.stringify(response.data))
                    this.configdata = response.data
                }).catch(err => {
                    if (err.response.status === 404) {
                        console.log("Not connected")
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

</style>