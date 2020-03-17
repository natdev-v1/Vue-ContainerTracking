import Vue from 'vue'
import Vuex from 'vuex'
import { asyncLoading } from 'vuejs-loading-plugin'
Vue.use(Vuex)
export const store = new Vuex.Store({
        state: {
          titlePage:''
        },
        mutations: {
          setPageTitle (state,title) {
            state.titlePage = title
          }
        },
        actions: {
            setPageTitle (context,title) {
              context.commit('setPageTitle',title)
            }
          }
})