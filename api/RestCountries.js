import axios from 'axios'

export default {
    async getCountries() {
      try {
        let res = await axios.get(process.env.VUE_APP_REST_COUNTRIES_API + `all`);
        return res.data;
      }
      catch {
        return [];
      }
    },
    async searchCountries(searchTerm)
    {
      try {
        let res = await axios.get(process.env.VUE_APP_REST_COUNTRIES_API + `name/${searchTerm}?fulltext=true`)
        return res.data;
      }
      catch {
        return [];
      }
    }
}