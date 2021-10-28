<template>
    <h3>Countries</h3>
    <el-button @click="stateCountries">State Countries</el-button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Countries',
  data() {
      return {};
  },
  computed: mapState({
      countryList: state => state.country.allCountries,
  }),
  created () {
    this.$store.dispatch('getAllCountries');
  },
  methods: {
    stateCountries()
    {
        console.log("this.countryList", this.countryList);
    }
  }
}
</script>