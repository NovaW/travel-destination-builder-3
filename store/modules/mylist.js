const state = () => ({
    mylist: []
  })

const actions = {
    async addCountryToMyList({ commit }, country) {
        commit('addCountryToMyList', country);
    },
    async removeCountryFromMyList({ commit }, country) {
        commit('removeCountryFromMyList', country);
    }
}

const mutations = {
    addCountryToMyList(state, country) {
        state.mylist.push(country);
        state.mylist = [...new Set(state.mylist)];
    },
    removeCountryFromMyList(state, country) {
        state.mylist = state.mylist.filter(c => c.name !== country.name);
    }
}

const mylist = {
    name: "mylist",
    state,
    actions,
    mutations
}

export default mylist;