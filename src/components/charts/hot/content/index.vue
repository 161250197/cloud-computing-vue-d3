<template>
  <div class="content">
    <BarChart :style="BarChartStyle" />
    <RadarChart style="width: 50%" v-if="showRadarChart" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";

export default {
  name: "hot.Content",
  components: {
    RadarChart,
    BarChart,
  },
  computed: {
    ...mapState({
      selectedIdArr: (state) => state.hot.selectedIdArr,
    }),
    BarChartStyle() {
      if (this.showRadarChart) {
        return "width: 50%";
      }
      return "width: 100%";
    },
    showRadarChart() {
      return this.selectedIdArr.length > 0;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
