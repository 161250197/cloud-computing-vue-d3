<template>
  <div class="detail-wrapper" v-if="detail">
    <DetailInfo :detail="detail" />
    <RadarChart :ref="chartRef" :detail="detail" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RadarChart from "./RadarChart.vue";
import DetailInfo from "./DetailInfo.vue";
import { getHotDetail } from "../../../../../api/hot";
import { RADAR_CHART_REF } from "../../../../../data/consts/hot";

export default {
  name: "hot.today.detail",
  computed: {
    ...mapState({
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  components: {
    DetailInfo,
    RadarChart,
  },
  data() {
    return {
      chartRef: RADAR_CHART_REF,
      detail: undefined,
    };
  },
  watch: {
    async selectedId() {
      if (this.selectedId === undefined) {
        this.detail = undefined;
        return;
      }
      this.detail = await getHotDetail(this.selectedId);
      this.$nextTick(() => {
        this.$refs[this.chartRef].refreshChart();
      });
    },
  },
};
</script>

<style>
</style>
