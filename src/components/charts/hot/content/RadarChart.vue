<template>
  <div :ref="chartRef"></div>
</template>

<script>
import { Chart } from "@antv/g2";
import { CHART_REF } from "../../../../consts/common";
import {
  RADAR_CHART_ITEMS_MAP,
  RADAR_CHART_NAMES,
} from "../../../../consts/hot";
import { mapState } from "vuex";
import { cartoonColorCallback } from "../../../../consts/g2";

const DEFAULT_MAX_VALUE = 100;

export default {
  name: "hot.content.RadarChart",
  computed: {
    ...mapState({
      selectedIdArr: (state) => state.hot.selectedIdArr,
      dataMap: (state) => state.hot.dataMap,
    }),
  },
  data() {
    return {
      maxValue: DEFAULT_MAX_VALUE,
      chart: undefined,
      chartRef: CHART_REF,
    };
  },
  watch: {
    selectedIdArr() {
      this.refreshChart();
    },
  },
  methods: {
    queryData() {
      const result = [];
      this.maxValue = DEFAULT_MAX_VALUE;
      this.selectedIdArr.forEach((id) => {
        const detail = this.dataMap[id];
        RADAR_CHART_ITEMS_MAP.forEach(({ item, showName }) => {
          const { name, id } = detail;
          const value = detail[item];
          this.maxValue = Math.max(this.maxValue, value);
          const data = {};
          const { ITEM, VALUE, ID, NAME } = RADAR_CHART_NAMES;
          data[ITEM] = showName;
          data[VALUE] = value;
          data[ID] = id;
          data[NAME] = name;
          result.push(data);
        });
      });
      return result;
    },
    scaleValue() {
      let maxValue = this.maxValue || 0;
      maxValue = Math.floor(maxValue / 10) * 10 + 10;
      this.chart.scale(RADAR_CHART_NAMES.VALUE, {
        min: 0,
        max: maxValue,
      });
    },
    refreshChart() {
      const data = this.queryData();
      this.scaleValue();
      this.$nextTick(() => {
        this.chart.changeData(data);
      });
      return;
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

      const { ITEM, VALUE, NAME } = RADAR_CHART_NAMES;
      chart.axis(ITEM, {
        line: null,
        tickLine: null,
        label: {
          style: {
            fontSize: 20,
            fontWeight: "bold",
          },
        },
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
            type: "circle",
            style: {
              lineDash: null,
            },
          },
          alternateColor: "rgba(0, 0, 0, 0.04)",
        },
      });

      const positionStr = `${ITEM}*${VALUE}`;
      chart
        .line()
        .position(positionStr)
        .color(NAME, cartoonColorCallback)
        .size(2);
      chart
        .point()
        .position(positionStr)
        .color(NAME, cartoonColorCallback)
        .shape("circle")
        .size(4)
        .style({
          stroke: "#fff",
          lineWidth: 1,
          fillOpacity: 1,
        });
      chart.area().position(positionStr).color(NAME, cartoonColorCallback);

      chart.removeInteraction("legend-filter");

      chart.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style scoped>
</style>
