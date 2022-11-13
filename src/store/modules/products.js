const state = {
    products: {}
  };
const getters = {
    products: state => state.products,
  };
const mutations = {
    'SET_STORE'(state, products) {
      state.products = products;
    }
  };
const actions = {
    initStore: ({commit}) => {
      axios.get('static/products.json')
      .then((res) => {
        console.log(res.data.products);
        commit('SET_STORE', res.data.products);
      });
    },
};
export default{
    state,
    getters,
    mutations,
    actions
}