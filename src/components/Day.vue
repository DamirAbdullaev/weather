<template>
    <div class="main__week_box_item">
        <h2 class="main__week_box_item-title">{{ index == 0 ? 'Завтра' : index == 1 ? 'послезавтра' : getWeekDay }}</h2>
        <p class="main__week_box_item-text">{{ getDay }} {{ getMonth }}</p>
        <img :src="getImg" alt="" width="48px" height="48px">
        <p class="main__week_box_item-title">+{{ Math.round(day.temp.max) }}°</p>
        <p class="main__week_box_item-text">+{{ Math.round(day.feels_like.day) }}°</p>
        <p class="main__week_box_item-text">{{ description }}</p>
    </div>
</template>

<script>
import weatherName from '@/icons'
import unix from '@/unix'

    export default {
        props: {
            day: {
                typeof: Object
            },

            index: {
                typeof: Number
            }
        },

        computed: {
            description() {
                return this.day.weather[0].description
            },

            getImg() {
                return weatherName[this.description] || weatherName['пасмурно']
            },

            getDay() {
                return unix(this.day.dt, 'day')
            },

            getWeekDay() {
                return unix(this.day.dt, 'weekDay')
            },

            getMonth() {
                return unix(this.day.dt, 'month')
            },

        },


    }
</script>

<style lang="scss" scoped>

</style>