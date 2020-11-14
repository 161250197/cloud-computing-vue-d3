<template>
  <el-container id="app">
    <el-header>Header</el-header>
    <el-main>
      <HotCharts />
      <RankCharts />
      <UserCharts />
    </el-main>
  </el-container>
</template>

<script>
import HotCharts from "./components/charts/hot/index";
import RankCharts from "./components/charts/rank/index";
import UserCharts from "./components/charts/user/index";

export default {
  name: "App",
  components: {
    HotCharts,
    RankCharts,
    UserCharts,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
