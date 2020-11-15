<template>
  <div :ref="chartRef"></div>
</template>

<script>
// TODO
// 动态条形图组件

import { Chart } from "@antv/g2";
import {
  DEFAULT_Y_DYNAMIC_CONFIG,
  TYPE_RECT,
  DEFAULT_CHART_SET,
  CHART_REF,
  DEFAULT_LABEL_CONFIG,
  DEFAULT_DYNAMIC_ANIMATE_CONFIG,
} from "./../../../data/consts/g2";

export default {
  name: "charts.util.TransposeBarChart",
  props: {
    queryData: {
      type: Function,
    },
    dataIdName: {
      type: String,
    },
    dataYName: {
      type: String,
    },
    dataXName: {
      type: String,
    },
  },
  data() {
    return {
      chartRef: CHART_REF,
      chart: undefined,
    };
  },
  methods: {
    async initChart() {
      const data = await this.queryData();

      const container = this.$refs[this.chartRef];

      this.chart = new Chart({
        ...DEFAULT_CHART_SET,
        container,
      });

      this.chart.data(data);
      this.chart.coordinate(TYPE_RECT).transpose();
      this.chart.legend(false);
      this.chart.tooltip(false);
      this.chart.axis(this.dataYName, DEFAULT_Y_DYNAMIC_CONFIG);
      this.setChartTitle();
      this.chart
        .interval()
        .position(`${this.dataYName}*${this.dataXName}`)
        .color(this.dataIdName)
        .label(this.dataXName, DEFAULT_LABEL_CONFIG)
        .animate(DEFAULT_DYNAMIC_ANIMATE_CONFIG);
      this.chart.render();
    },
    async refreshChart() {
      const data = await this.queryData();
      this.chart.annotation().clear(true);
      this.setChartTitle();
      this.chart.changeData(data);
    },
    /**
     * TODO
     * 设置标题
     */
    setChartTitle() {
      this.chart.annotation().text({
        position: ["95%", "90%"],
        content: "test",
        style: {
          fontSize: 40,
          fontWeight: "bold",
          fill: "#ddd",
          textAlign: "end",
        },
        animate: false,
      });
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style scoped>
</style>
