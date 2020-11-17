<template>
  <div :ref="chartRef"></div>
</template>

<script>
import { Chart } from "@antv/g2";
import { CHART_REF } from "../../../../../data/consts/g2";
import {
  RADAR_CHART_ITEMS,
  RADAR_CHART_NAMES,
} from "../../../../../data/consts/hot";

export default {
  name: "hot.today.detail.RadarChart",
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxValue: undefined,
      chart: undefined,
      chartRef: CHART_REF,
    };
  },
  methods: {
    queryData() {
      const result = [];
      this.maxValue = 0;
      RADAR_CHART_ITEMS.forEach((item) => {
        const { name, id } = this.detail;
        const value = this.detail[item];
        this.maxValue = Math.max(this.maxValue, value);
        const data = { item, name, id, value };
        result.push(data);
      });
      return result;
    },
    scaleValue() {
      let maxValue = this.maxValue || 0;
      maxValue = Math.floor(maxValue / 10) * 10 + 10;
      this.chart.scale("value", {
        min: 0,
        max: maxValue,
      });
    },
    refreshChart() {
      if (this.chart) {
        const data = this.queryData();
        this.scaleValue();
        this.$nextTick(() => {
          this.chart.changeData(data);
        });
        return;
      }
      this.initChart();
    },
    initChart() {
      const data = this.queryData();

      const container = this.$refs[this.chartRef];
      const chart = new Chart({
        container,
        autoFit: true,
        height: 500,
      });
      this.chart = chart;
      chart.data(data);
      this.scaleValue();
      chart.coordinate("polar", {
        radius: 0.8,
      });
      chart.tooltip({
        shared: true,
        showCrosshairs: true,
        crosshairs: {
          line: {
            style: {
              lineDash: [4, 4],
              stroke: "#333",
            },
          },
        },
      });

      const { ITEM, VALUE, ID } = RADAR_CHART_NAMES;
      chart.axis(ITEM, {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null,
            },
          },
        },
      });
      chart.axis(VALUE, {
        line: null,
        tickLine: null,
        grid: {
          line: {
            type: "line",
            style: {
              lineDash: null,
            },
          },
        },
      });

      const positionStr = `${ITEM}*${VALUE}`;
      chart.line().position(positionStr).color(ID).size(2);
      chart
        .point()
        .position(positionStr)
        .color(ID)
        .shape("circle")
        .size(4)
        .style({
          stroke: "#fff",
          lineWidth: 1,
          fillOpacity: 1,
        });
      chart.area().position(positionStr).color(ID);
      chart.render();
    },
  },
};
</script>

<style scoped>
</style>
