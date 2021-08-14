import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let defaultCity = '上海';
defaultCity = localStorage.city || defaultCity;

const state = {
    city: defaultCity
}
const mutations = {
    changeCity(state, cityName) {
        state.city = cityName;
        //  本地存储
        localStorage.city = cityName;
    }
}

export default new Vuex.Store({
    state,
    mutations

})