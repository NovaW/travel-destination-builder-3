const state = () => ({
    allCountries: []
  })


const getters = {
    getCountry: (state) => (id)=> {
        return state.allCountries.find(country=>country.id==id);
    }
}

const actions = {
    async getAllCountries ({ commit }) {
        var countries = ["countryA", "countryB", "countryC"];
        commit('setCountries', countries)
    },
}

const mutations = {
    setCountries (state, countries) {
        state.allCountries = countries
      },
}

const country = {
    name: "country",
    state,
    getters,
    actions,
    mutations
}

export default country;