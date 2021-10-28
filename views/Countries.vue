<template>
  <el-form :inline="true" class="form-inline" style="text-align: left; margin-top: 10px">
    <el-form-item>
      <el-input v-model="searchTerm" placeholder="Country Name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">Search</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="countryList" style="width: 50%">
    <el-table-column type="expand">
      <template #default="props">
        <p>Region: {{ props.row.region }}</p>
        <p>Subregion: {{ props.row.subregion }}</p>
        <p>Flag: {{ props.row.flag }}</p>
        <p>Latitude: {{ props.row.latlng[0] }}</p>
        <p>Longitutde: {{ props.row.latlng[1] }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Name" prop="name.common" />
    <el-table-column label="Region" prop="region" />
  </el-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Countries',
  data() {
      return {
        searchTerm: ""
      };
  },
  computed: mapState({
      countryList: state => state.country.countries,
  }),
  created () {
    this.$store.dispatch('getCountries');
  },
  methods: {
    search()
    {
      this.$store.dispatch('searchCountries', this.searchTerm);
    },
  }
}
</script>