import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiKey: 'ecd5fe14fa264025e942a9d27a1bf77a',
    weather: null,

  },
  getters: {
  },
  mutations: {

    getWeather(state, payload) {
      state.weather = payload
    }

  },
  actions: {
    async getWeather(context, city) {
      try {
        let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${context.state.apiKey}`)

        if (response.data.length) {
          let { lat, lon, local_names } = response.data[0] 
          
          let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${context.state.apiKey}&units=metric&lang=ru`)

          let weatherInfo = {...response2.data, name: local_names.ru}

          context.commit('getWeather', weatherInfo)
          

        } else {
          alert('Введите существующий город!')
        }

      } catch (error) {
        console.error(error);
      } 
    }
  },
})
