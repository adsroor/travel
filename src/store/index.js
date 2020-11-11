import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
//vuex的使用
/*let defaultCity = '上海'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch(e){}*/
export default new Vuex.Store({
  state ,
  mutations

})
 /*mutations:{
   changeCity (state, city){
     state.city = city
     try{
       localStorage.city = city

     }catch(e){}


   }
 }*/


