import Vue from 'vue'

export default {
	state: JSON.parse(sessionStorage.getItem('game')) || {},
    mutations: {
        setGame(state, game) {
            sessionStorage.setItem('game', JSON.stringify(game))
            
            Object.assign(state, game)
        },
        getGame(state) {
            sessionStorage.removeItem('game')
            
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        setgame({commit}, game) {
            commit('setGame', game)
            
        },
        getgame({commit}) {
            commit('getGame')
            
        }
    }
}