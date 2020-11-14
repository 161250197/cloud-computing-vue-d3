<template>
  <div class="hot-charts">
    <HotDynamicBarChart />
    <HotPieChart />
    <HotRadarChart />
  </div>
</template>

<script>
// TODO
// 热度相关图

import HotDynamicBarChart from "./HotDynamicBarChart";
import HotPieChart from "./HotPieChart";
import HotRadarChart from "./HotPieChart";

export default {
  name: "HotCharts",
  components: {
    HotDynamicBarChart,
    HotPieChart,
    HotRadarChart,
  },
};
</script>

<style scoped>
</style>
