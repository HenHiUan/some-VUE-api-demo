import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headerTitle: ''
    },
    getters: {
        getHeaderTitle: state => state.headerTitle
    },
    mutations: {
        change: (state, val) => state.headerTitle = val
    },
    actions: {

    }
})
