import RestCountries from "../../api/RestCountries";

const state = () => ({
    countries: []
  })

const actions = {
    async getCountries ({ commit }) {
        let countries = await RestCountries.getCountries();
        commit('setCountries', countries)
    },
    async searchCountries({ commit }, searchTerm) {
        if(searchTerm == "")
        {
            let countries = await RestCountries.getCountries();
            commit('setCountries', countries)
        }else{
            let results = await RestCountries.searchCountries(searchTerm);
            commit('setCountries', results);
        }
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