import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import menuList from './module/opendmenu'
Vue.use(Vuex)

const state={}
const mutations={

}
const actions={}
const getters={}
const store= new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
      login:login,
      menuList:menuList
    }
})
export default store