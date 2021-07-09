import { createStore } from 'vuex'

export default createStore({
    state: {
        isLogin: false
    },
    getters: {
        getIsLogin: state => state.isLogin
    },
    mutations: {
        setIsLogin(state, bol) { state.isLogin = bol }
    },
    actions: {
        setIsLogin({ commit }, bol) { commit('setIsLogin', bol) }
    }
})
