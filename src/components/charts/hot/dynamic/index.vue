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
// TODO 连接数据

import { CHART_REF } from "../../../../data/consts/g2";
import TransposeBarChart from "./../../util/TransposeBarChart";

export default {
  name: "HotDynamicBarChart",
  components: {
    TransposeBarChart,
  },
  data() {
    return {
      chart: undefined,
      chartRef: CHART_REF,
      intervalId: undefined,
    };
  },
  methods: {
    refreshChart() {
      this.chart.refreshChart();
    },
    handleData(source) {
      source.sort((a, b) => {
        return a.value - b.value;
      });

      return source;
    },
    queryData() {
      const data = [
        {
          city: "a",
          value: Math.random() * 100,
          id: 1,
        },
        {
          city: "b",
          value: Math.random() * 100,
          id: 2,
        },
        {
          city: "c",
          value: Math.random() * 100,
          id: 3,
        },
        {
          city: "d",
          value: Math.random() * 100,
          id: 4,
        },
        {
          city: "e",
          value: Math.random() * 100,
          id: 5,
        },
        {
          city: "f",
          value: Math.random() * 100,
          id: 6,
        },
        {
          city: "g",
          value: Math.random() * 100,
          id: 7,
        },
        {
          city: "h",
          value: Math.random() * 100,
          id: 8,
        },
        {
          city: "i",
          value: Math.random() * 100,
          id: 9,
        },
      ];
      return Promise.resolve(this.handleData(data));
    },
  },
  mounted() {
    this.chart = this.$refs[this.chartRef];
    this.intervalId = setInterval(this.refreshChart, 2000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
</style>
