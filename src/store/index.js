import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {}
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
    'SET_STORE'(state, products) {
      state.products = products;
    }
  },
  actions: {
    initStore: ({commit}) => {
      axios.get('static/products.json')
      .then((res) => {
        console.log(res.data.products);
        commit('SET_STORE', res.data.products);
      });
    },
  },
  modules: {
  }
})
