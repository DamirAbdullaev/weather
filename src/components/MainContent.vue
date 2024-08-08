<template>
    <div class="main__content">
        <div class="main__content_left">
            <h2 class="main__content_left-title">{{ Math.round(weather.current.temp) }}°</h2>
            <p class="main__content_left-text">Сегодня</p>
            <p class="main__content_left-time">Время: {{ getTime }}</p>
            <p class="main__content_left-city">Город: {{ weather.name }}</p>
            <img :src="getImg" :alt="getDescription" width="119px" height="119px">

        </div>

        <div class="main__content_right">
            <img class="main__content_right-bg" src="@/assets/img/main-bg.png" alt="main-bg">
            <div class="main__content_right-item">
                <div class="main__content_right-item-img">
                    <img src="@/assets/img/temp.svg" alt="temp">
                </div>
                <span>Температура</span>
                <p>{{ weather.current.temp }}° - ощущается как {{ weather.current.feels_like }}°</p>
            </div>
            <div class="main__content_right-item">
                <div class="main__content_right-item-img">
                    <img src="@/assets/img/pressure.svg" alt="temp">
                </div>
                <span>Давление</span>
                <p>{{ weather.current.pressure }} мм ртутного столба - нормальное</p>
            </div>
            <div class="main__content_right-item">
                <div class="main__content_right-item-img">
                    <img src="@/assets/img/precipitation.svg" alt="temp">
                </div>
                <span>Осадки</span>
                <p>{{ weather.current.weather[0].description }}</p>
            </div>
            <div class="main__content_right-item">
                <div class="main__content_right-item-img">
                    <img src="@/assets/img/wind.svg" alt="temp">
                </div>
                <span>Ветер</span>
                <p>{{ weather.current.wind_speed }} м/с юго-запад - легкий ветер</p>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import weatherName from '@/icons'

    export default {
        computed: {
            ...mapState(['weather']),
            
            getTime() {
                return new Date().toLocaleString('en-US', {
                    timeZone: this.weather.timezone,
                    timeStyle: 'short',
                    hourCycle: 'h23',
                })
            },

            getDescription() {
                return this.weather.current.weather[0].description
            },

            getImg() {
                return weatherName[this.getDescription] || weatherName['пасмурно']
            }

        },

    }
</script>

<style lang="scss" scoped>

</style>