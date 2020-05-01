<template>
    <div class="main-header">
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand href="#"><img :src="require('@/assets/lovspotify_50x50.png')" class="pr-3" alt=""/>Lovspotify</b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Settings" right>
                    <b-dropdown-item href="#">Change Settings</b-dropdown-item>
                    <b-dropdown-item v-b-modal.modal-about href="#">About</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="modal-about" title="About Lovspotify">
            <div>Getting Settings Placeholder </div>

        </b-modal>
        <b-modal id="modal-about" title="About Lovspotify">
            <div class="container">
                <div class="row">
                    <div class="col-auto">
                        <img :src="require('@/assets/lovspotify_100x100.png')" alt=""/>
                    </div>
                    <div class="col-auto">
                        <div>Have fun !</div>
                    </div>
                </div>

            </div>


        </b-modal>
    </div>



</template>


<script>
    export default {
        name: "MainHeader",
        props: {
            msg: String
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
    .main-header {
        font-size: large;
    }

</style>