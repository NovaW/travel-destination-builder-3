import RestCountries from "../../api/RestCountries";

const state = () => ({
    countries: []
  })

const actions = {
    async getCountries ({ commit }) {
        let allCountries = await RestCountries.getCountries();
        let countries = allCountries.slice(0,10);
        commit('setCountries', countries)
    },
    async searchCountries({ commit }, searchTerm) {
        let allResults = await RestCountries.searchCountries(searchTerm);
        let results = allResults.slice(0,10);
        commit('setCountries', results);
    }
}

const mutations = {
    setCountries (state, countries) {
        state.countries = countries
      },
}

const country = {
    name: "country",
    state,
    actions,
    mutations
}

export default country;