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
      required: true,
    },
    dataIdName: {
      type: String,
      required: true,
    },
    dataYName: {
      type: String,
      required: true,
    },
    dataXName: {
      type: String,
      required: true,
    },
    onDataClicked: {
      type: Function,
      default: () => {},
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

      this.chart.interaction("element-active");
      this.chart.interaction("element-single-selected");

      this.chart.on("element:click", (ev) => {
        const id = ev.data.data[this.dataIdName];
        this.onDataClicked(id);
      });

      this.chart.axis(this.dataYName, DEFAULT_Y_DYNAMIC_CONFIG);
      this.setChartTitle();
      this.chart
        .interval()
        .position(`${this.dataYName}*${this.dataXName}`)
        .color(this.dataIdName)
        .label(this.dataXName, DEFAULT_LABEL_CONFIG)
        .animate(DEFAULT_DYNAMIC_ANIMATE_CONFIG)
        .state({
          selected: {
            style: {
              fill: "#e02222",
              lineWidth: 2,
              stroke: "#E8684A",
              opacity: 0.6,
            },
          },
          active: {
            animate: { duration: 100, easing: "easeLinear" },
            style: {
              lineWidth: 2,
              stroke: "#bbbbbb",
              strokeOpacity: 0.6,
            },
          },
        });
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
