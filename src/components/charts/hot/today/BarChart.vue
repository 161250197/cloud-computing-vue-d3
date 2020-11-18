<template>
  <div :ref="chartRef"></div>
</template>

<script>
import { Chart } from "@antv/g2";
import { mapState, mapMutations } from "vuex";
import {
  DEFAULT_Y_DYNAMIC_CONFIG,
  TYPE_RECT,
  DEFAULT_CHART_SET,
  DEFAULT_LABEL_CONFIG,
  DEFAULT_DYNAMIC_ANIMATE_CONFIG,
  DEFAULT_SELECTED_STATE_CONFIG,
  DEFAULT_ACTIVE_STATE_CONFIG,
} from "../../../../data/consts/g2";
import { BAR_CHART_NAMES } from "../../../../data/consts/hot";
import { CHART_REF } from "../../../../data/consts/common";

export default {
  name: "hot.today.BarChart",
  computed: {
    ...mapState({
      hotRankArr: (state) => state.hot.hotRankArr,
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  data() {
    return {
      dataIdName: BAR_CHART_NAMES.ID,
      dataYName: BAR_CHART_NAMES.Y,
      dataXName: BAR_CHART_NAMES.X,
      chart: undefined,
      chartRef: CHART_REF,
    };
  },
  methods: {
    ...mapMutations(["setSelectedId"]),
    onDataClicked(id) {
      this.setSelectedId(id);
    },
    async initChart() {
      const container = this.$refs[this.chartRef];

      this.chart = new Chart({
        ...DEFAULT_CHART_SET,
        container,
      });

      this.chart.data(this.hotRankArr);
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
      this.chart
        .interval()
        .position(`${this.dataYName}*${this.dataXName}`)
        .color(this.dataIdName)
        .label(this.dataXName, DEFAULT_LABEL_CONFIG)
        .animate(DEFAULT_DYNAMIC_ANIMATE_CONFIG)
        .state({
          selected: DEFAULT_SELECTED_STATE_CONFIG,
          active: DEFAULT_ACTIVE_STATE_CONFIG,
        });
      this.chart.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style scoped>
</style>
