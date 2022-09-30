import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // products: [],
    cocktails: []
  },
  getters: {
    // products: state => {
    //   return state.products
    // },
    cocktails: state => {
      return state.cocktails
    }
  },
  mutations: {
    // SET_ITEMS (state, products) {
    //   state.products = products
    // },
    SET_COCKTAILS (state, cocktails) {
      state.cocktails = cocktails
    }
  },
  actions: {
    // async loadProducts ({ commit }) {
    //   try {
    //     const response = await axios.get('http://127.0.0.1:8000/api/v1/products')
    //     commit('SET_ITEMS', response.data.data.products)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    async loadCocktails ({ commit }) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/cocktails')
        console.log(response, 'res')
        commit('SET_COCKTAILS', response.data.data.cocktails.slice(0, 10))
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
