<template>
  <div>
    <div class="bar-chart-wrapper">
      <BarChart />
    </div>
    <div class="detail-charts-wrapper" v-if="selectedId">
      <PieChart :selectedId="selectedId" />
      <RadarChart :selectedId="selectedId" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart.vue";
import PieChart from "./PieChart.vue";
import RadarChart from "./RadarChart.vue";

export default {
  name: "hot.oneDay",
  computed: {
    ...mapState({
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  components: {
    PieChart,
    RadarChart,
    BarChart,
  },
};
</script>

<style>
</style>
