export const state = () => ({
  test: 'hi from root store',
  loggedIn: false,
  customers: [],
  host: 'https://remoteapi.nazs.net',
  // host: 'http://172.16.1.219:3121',
})

export const getters = {
  getTest: (state) => {
    return state.test
  },
  getloggedIn: (state) => {
    return state.loggedIn
  },
  getCustomers: (state) => {
    return state.customers
  },
}

export const mutations = {
  set_test(state, arg) {
    // state.starters = arg[1].starter
  },
  set_loggedIn(state, arg) {
    state.loggedIn = arg
    // console.log('just updated loggedIn status to ', arg)
  },
  setCustomers(state, arg) {
    state.customers = arg
    localStorage.setItem('customers', JSON.stringify(arg))
    // console.log('plans set from actions')
  },
}

export const actions = {
  async setCustomers(context) {
    try {
      const res = await context.$axios.get('/api/customers')
      context.commit('setCustomers', res.data)
    } catch (error) {
      // console.log(error)
    }
  },
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('/api/customers')
      const cust = response.data
      // .map((c) => {
      //   return {
      //     _id: c._id,
      //     name: c.name,
      //   }
      // })
      store.commit('setCustomers', cust)
    } catch (error) {}
  },
}
