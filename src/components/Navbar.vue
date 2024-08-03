<template>
    <div>

        <nav class="nav">
            <a href="#!" class="logo"><img src="@/assets/img/logo.svg" alt="logo"> <span>vue weather</span></a>

            <div class="nav__search">
                <img src="@/assets/img/dots.svg" alt="dots">
                <input type="text" placeholder="Введите название города" v-model="city" @keydown.enter="getWeather(city), city = ''">
            </div>
        </nav>

    </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {

    data() {
        return {
            city: '',
        }
    },

    methods: {
        ...mapActions(['getWeather'])
    }
}
</script>