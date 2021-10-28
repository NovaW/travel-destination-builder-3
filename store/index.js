import { createStore } from 'vuex'
import country from './modules/country'
import mylist from './modules/mylist'

export default createStore({
  modules: {
    country,
    mylist,
  },
})