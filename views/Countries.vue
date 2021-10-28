<template>
  <el-form :inline="true" class="form-inline" style="text-align: left; margin-top: 10px">
    <el-form-item>
      <el-input v-model="searchTerm" @keyup.enter="search" placeholder="Country Name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">Search</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="currentPage" style="width: 50%">
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
    <el-table-column label="Actions">
      <template #default="props">
          <el-button
            size="mini"
            @click="handleAdd(props.$index, props.row)">
            Add to List
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination @current-change="changePage" layout="prev, pager, next" :total="countryList.length" style="text-align: left"></el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Countries',
  data() {
      return {
        searchTerm: "",
        currentPage: [],
        pageSize: 10,
      };
  },
  computed: mapState({
    countryList: state => state.country.countries,
  }),
  mounted () {
    if(this.countryList.length === 0)
    {
      this.$store.dispatch('getCountries').then(() => {
        this.currentPage = this.countryList.slice(0, this.pageSize);  
      });
    }else
    {
      this.currentPage = this.countryList.slice(0, this.pageSize); 
    }
  },
  methods: {
    search()
    {
      this.$store.dispatch('searchCountries', this.searchTerm)
      .then(() => {
        this.changePage(1);
      });
    },
    handleAdd(index, row)
    {
      this.$store.dispatch('addCountryToMyList', row);
    },
    changePage(pageNumber)
    {
      this.currentPage = this.countryList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
    }
  }
}
</script>