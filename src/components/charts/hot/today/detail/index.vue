<template>
  <div class="detail-wrapper" v-if="selectedId">
    <DetailInfo :detail="detail" />
    <RadarChart :ref="chartRef" :detail="detail" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RadarChart from "./RadarChart.vue";
import DetailInfo from "./DetailInfo.vue";
import { RADAR_CHART_REF } from "../../../../../data/consts/hot";

export default {
  name: "hot.today.detail",
  computed: {
    ...mapState({
      selectedId: (state) => state.hot.selectedId,
      dataMap: (state) => state.hot.dataMap,
    }),
    detail() {
      if (this.selectedId === undefined) {
        return undefined;
      }
      return this.dataMap[this.selectedId];
    },
  },
  components: {
    DetailInfo,
    RadarChart,
  },
  data() {
    return {
      chartRef: RADAR_CHART_REF,
    };
  },
  watch: {
    async selectedId() {
      if (!this.selectedId) {
        return;
      }
      this.$nextTick(() => {
        this.$refs[this.chartRef].refreshChart();
      });
    },
  },
};
</script>

<style>
</style>
