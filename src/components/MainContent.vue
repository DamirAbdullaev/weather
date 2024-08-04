<template>
    <div class="main__content">
        <div class="main__content_left">
            <h2 class="main__content_left-title">{{ weather.current.temp }}°</h2>
            <p class="main__content_left-text">Сегодня</p>
            <p class="main__content_left-time">Время: {{ getTime }}</p>
            <p class="main__content_left-city">Город: {{ weather.name }}</p>
            <img src="@/assets/img/big-sun.svg" alt="big-sun">
        </div>

        <div class="main__content_right">

        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['weather']),
            
            getTime() {
                return new Date().toLocaleString('en-US', {
                    timeZone: this.weather.timezone,
                    timeStyle: 'short',
                    hourCycle: 'h23',
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>