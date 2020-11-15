<template>
  <TransposeBarChart
    :ref="chartRef"
    :queryData="queryData"
    dataIdName="id"
    dataYName="city"
    dataXName="value"
  />
</template>

<script>
import { mapState } from "vuex";
import { CHART_REF } from "../../../../data/consts/g2";
import TransposeBarChart from "./../../util/TransposeBarChart";
import { getHotOneDateData } from "./../../../../api/hot";

export default {
  name: "hot.oneDay.BarChart",
  components: {
    TransposeBarChart,
  },
  computed: {
    ...mapState({
      date: (state) => state.hot.date,
    }),
  },
  data() {
    return {
      chart: undefined,
      chartRef: CHART_REF,
    };
  },
  watch: {
    date() {
      this.chart.refreshChart();
    },
  },
  methods: {
    queryData() {
      return getHotOneDateData(this.date);
    },
  },
  mounted() {
    this.chart = this.$refs[this.chartRef];
  },
};
</script>

<style scoped>
</style>
