<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    ref="navigation-menu"
    @select="handleSelect"
  >
    <el-menu-item index="Countries">Countries</el-menu-item>
    <el-menu-item index="MyList">My List</el-menu-item>
  </el-menu>
</template>

<script>

export default {
  name: 'NavigationMenu',
  data() {
      return {
        activeIndex: null,
      }
  },
  methods: {
    handleSelect (key) {
        switch(key) {
            case "Countries":
                this.$router.push("/");
                break;
            case "MyList":
                this.$router.push("MyList");
                break;
        }
    }
  }
}
</script>
