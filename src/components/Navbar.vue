<template>
    <div>

        <nav class="nav">
            <a href="#!" class="logo"><img src="@/assets/img/logo.svg" alt="logo"> <span>vue weather</span></a>

            <div class="nav__search">
                <img @click="switchTheme" src="@/assets/img/dots.svg" alt="dots">
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
        ...mapActions(['getWeather']),

        switchTheme() {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        },

        setTheme(theme) {
            const style = document.documentElement.style; // Используем documentElement для работы с :root
            if (theme === 'dark') {
                style.setProperty('--bg-primary', '#121212');
                style.setProperty('--bg-secondary', '#1E1E1E');
                style.setProperty('--bg-tertiary', '#232323');
                style.setProperty('--text-primary', '#FFFFFF');
            } else {
                style.setProperty('--bg-primary', 'white');
                style.setProperty('--bg-secondary', 'white');
                style.setProperty('--bg-tertiary', 'white');
                style.setProperty('--text-primary', '#000');
            }
        }
    },

    created() {
        const savedTheme = localStorage.getItem('theme') || 'light'; // Устанавливаем тему по умолчанию, если нет сохраненной
        this.setTheme(savedTheme);
    }


}
</script>