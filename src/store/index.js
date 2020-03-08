import Vue from 'vue'
import Vuex from 'vuex'
import { asyncLoading } from 'vuejs-loading-plugin'
Vue.use(Vuex)
export const store = new Vuex.Store({
        state: {
          count: 0
        },
        mutations: {
          increment (state) {
            state.count++
          }
        },
        actions: {
            increment (context) {
              context.commit('increment')
            }
          }
})