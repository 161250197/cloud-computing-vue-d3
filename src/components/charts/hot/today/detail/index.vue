<template>
  <div class="detail-wrapper" v-show="idSelected">
    <el-carousel :autoplay="false" trigger="click">
      <el-carousel-item v-for="id in selectedIdArr" :key="id">
        <DetailInfo :detail="dataMap[id]" />
      </el-carousel-item>
    </el-carousel>
    <RadarChart :ref="chartRef" :detailArr="detailArr" />
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
      selectedIdArr: (state) => state.hot.selectedIdArr,
      dataMap: (state) => state.hot.dataMap,
    }),
    idSelected() {
      return this.selectedIdArr.length > 0;
    },
    detailArr() {
      return this.selectedIdArr.map((id) => this.dataMap[id]);
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
    async selectedIdArr() {
      this.$nextTick(() => {
        this.$refs[this.chartRef].refreshChart();
      });
    },
  },
};
</script>

<style>
</style>
