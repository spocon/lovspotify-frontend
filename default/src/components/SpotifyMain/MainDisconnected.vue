<template>
    <div id="clock">
        <p class="date" >{{date}}</p>
        <p class="time">{{time}}</p>
        <h1 style="color: white">Spotify disconnected</h1>
    </div>

</template>

<script>

    export default {
        name: 'MainDisconnected',
        data() {
            return {
                time: '',
                date: ''
            }
        },
        methods: {
            updateTime() {
                let cd = new Date();
                var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
                this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
            },
            zeroPadding(num, digit) {
                var zero = '';
                for (var i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            }

        },
        created() {
            this.updateTime();
            setInterval(function () {
                this.updateTime();
            }.bind(this), 1100);
        }
    }


</script>

<style scoped>

    #clock {
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: darkgrey;
    }

    #clock .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }

    #clock .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }

</style>