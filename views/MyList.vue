<template>
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
            type="danger"
            @click="handleRemove(props.$index, props.row)">
            Remove
          </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination @current-change="changePage" layout="prev, pager, next" :total="myList.length" style="text-align: left"></el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MyList',
  data() {
    return {
        currentPage: [],
        pageSize: 10,
    };
  },
  computed: mapState({
      myList: state => state.mylist.mylist,
  }),
  created () {
    this.currentPage = this.myList.slice(0, this.pageSize);
  },
  methods: {
    handleRemove(index, row)
    {
      this.$store.dispatch('removeCountryFromMyList', row);
    },
    changePage(pageNumber)
    {
      this.currentPage = this.myList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
    }
  }
}
</script>