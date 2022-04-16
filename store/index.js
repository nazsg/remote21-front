export const state = () => ({
  test: 'hi from root store',
  loggedIn: false,
  customers: [],
  contact_errors: [],
  methodErrors: [],
  serverErrors: [],
  deviceErrors: [],
  host: 'https://remoteapi.nazs.net',
  // host: 'http://localhost:3121',
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
  getHost: (state) => {
    return state.host
  },
  getContactErors: (state) => {
    return state.contact_errors
  },
  getMethodErors: (state) => {
    return state.methodErrors
  },
  gerServerErrors: (state) => {
    return state.serverErrors
  },
  getDeviceErrors: (state) => {
    return state.deviceErrors
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
  setHost(state, arg) {
    state.host = arg
    // console.log(state.host)
  },
  setContactErrors(state, arg) {
    state.contact_errors.push(arg)
  },
  setMethodErrors(state, arg) {
    state.methodErrors.push(arg)
  },
  setServerErrors(state, arg) {
    state.serverErrors.push(arg)
  },
  setDeviceErrors(state, arg) {
    state.deviceErrors.push(arg)
  },
  resetContactErrors(state, arg) {
    state.contact_errors = []
  },
  resetMethodErrors(state, arg) {
    state.methodErrors = []
  },
  resetServerErrors(state, arg) {
    state.serverErrors = []
  },
  resetDeviceErrors(state, arg) {
    state.deviceErrors = []
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
