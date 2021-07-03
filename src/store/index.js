import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    // addCounter(state,payload){
    //   payload.count++
    // },
    subCount(state,payload){
      // console.log(payload);
      let cartItem = state.cartList.find(item => item.iid == payload)
      cartItem.count--
    },
    addCount(state,payload){
      // console.log(payload);
      let cartItem = state.cartList.find(item => item.iid == payload)
      cartItem.count++
    },
    addToCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)
    },
    del(state){
      while (state.cartList.find(item=>item.checked)) {
        for (let i = 0; i < state.cartList.length; i++) {
          if (state.cartList[i].checked) {
            state.cartList.splice(i,1)
            break;
          }
         
        }
        
      }
    }
  },
  actions: {
    addCart(context,payload){
      let oldProduct = context.state.cartList.find((item)=>item.iid == payload.iid)
      return new Promise((resolve)=>{
        if(oldProduct){
          // context.commit("addCounter",oldProduct)
          resolve("已添加进购物车")
        }else{
          context.commit("addToCart",payload)
          resolve("加入购物车成功")
        }
      })
      
    }
  },
  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
