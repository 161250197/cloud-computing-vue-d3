<template>
  <div class="hot-charts">
    <Header />
    <OneDay />
    <Dynamic />
  </div>
</template>

<script>
// TODO
// 热度相关图

import Header from "./header";
import OneDay from "./oneDay/index";
import Dynamic from "./dynamic/index";

export default {
  name: "charts.hot",
  components: {
    Header,
    OneDay,
    Dynamic,
  },
};
</script>

<style scoped>
</style>
