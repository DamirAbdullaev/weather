<template>
    <div class="main__week">
        <div class="main__week_btns">
            <button @click="week = true" class="btn open">На неделю</button>
            <button @click="week = false" class="btn close">Отменить</button>
        </div>

        <div class="main__week_box" :class="{ active: !week }">
            <day v-for="(day, i) in weather.daily.slice(1, 3)" :key="i" :day="day" :index="i" />
            <div v-if="week" class="main__week_box_slide">
                <day v-for="(day, i) in weather.daily.slice(3, 8)" :key="i" :day="day"/>
            </div>
        </div>

    </div>
</template>

<script>
import Day from './Day.vue'

import { mapState } from 'vuex'

    export default {
        data() {
            return {
                week: true
            }
        },

        components: { Day },

        computed: {
            ...mapState(['weather'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>