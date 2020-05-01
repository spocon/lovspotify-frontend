<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand href="#">LovSpotify</b-navbar-brand>

            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Settings" right>
                    <b-dropdown-item href="#">Change Settings</b-dropdown-item>
                    <b-dropdown-item href="#">About</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>


<script>
    import "bootstrap/dist/css/bootstrap.min.css"
    import "bootstrap-vue/dist/bootstrap-vue.css"
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

</style>