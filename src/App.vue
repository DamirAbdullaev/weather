<template>
  <div class="container app">
    <Navbar />
    <Main v-if="weather" />


    <div v-else class="loader__box">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Main from '@/components/Main.vue'

import { mapActions, mapState } from 'vuex'

  export default {
  components: { Navbar, Main },

  methods: {
    ...mapActions(['getWeather'])
  },

  computed: {
    ...mapState(['weather'])
  },

  created() {
    this.getWeather('Ташкент')
  },
    
  }
</script>
