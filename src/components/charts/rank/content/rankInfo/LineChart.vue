<template>
  <div class="line-chart" :ref="chartRef"></div>
</template>

<script>
import { Chart } from "@antv/g2";
import { CHART_REF } from "../../../../../consts/common";
import { regularDateStr } from "../../../../../util/common";

export default {
  name: "rank.content.rankInfo.LineChart",
  props: {
    rankPath: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: "评分变化折线图",
      titleStyle: {
        fontSize: 26,
        fontWeight: "bold",
        fill: "#b2b2b2",
        textAlign: "center",
      },
      chartRef: CHART_REF,
    };
  },
  methods: {
    initChart() {
      const container = this.$refs[this.chartRef];

      const chart = new Chart({
        autoFit: true,
        height: 600,
        padding: [100, 70, 150, 70],
        container,
      });

      const X = "日期";
      const Y = "评分";

      const data = this.rankPath.map((item) => {
        const { time, score } = item;
        const date = regularDateStr(time);
        const result = {
          ...item,
        };
        result[X] = date;
        result[Y] = score;
        return result;
      });

      chart.data(data);
      const scaleProperty = {};
      scaleProperty[Y] = {
        min: 0,
        max: 10,
      };
      chart.scale(scaleProperty);

      const positionStr = `${X}*${Y}`;
      chart.line().position(positionStr);
      chart.point().position(positionStr).shape("circle").size(4).style({
        stroke: "#fff",
        lineWidth: 1,
        fillOpacity: 1,
      });

      chart.annotation().text({
        position: ["50%", "120%"],
        content: this.title,
        style: this.titleStyle,
        animate: false,
      });

      chart.removeInteraction("legend-filter");
      chart.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style lang="less" scoped>
.line-chart {
  width: 100%;
}
</style>
