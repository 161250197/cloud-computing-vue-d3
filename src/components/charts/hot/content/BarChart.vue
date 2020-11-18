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
  name: "hot.content.BarChart",
  computed: {
    ...mapState({
      hotRankArr: (state) => state.hot.hotRankArr,
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  data() {
    return {
      chartRef: CHART_REF,
    };
  },
  methods: {
    ...mapMutations(["addSelectedId"]),
    onDataClicked(id) {
      this.addSelectedId(id);
    },
    async initChart() {
      const container = this.$refs[this.chartRef];

      const chart = new Chart({
        ...DEFAULT_CHART_SET,
        container,
      });

      chart.data(this.hotRankArr);
      chart.coordinate(TYPE_RECT).transpose();
      chart.legend(false);
      chart.tooltip(false);

      chart.interaction("element-active");
      chart.interaction("element-selected");

      const { ID, X, Y, NAME } = BAR_CHART_NAMES;

      chart.on("element:click", (ev) => {
        const id = ev.data.data[ID];
        this.onDataClicked(id);
      });

      chart.axis(Y, DEFAULT_Y_DYNAMIC_CONFIG);
      chart
        .interval()
        .position(`${Y}*${X}`)
        .color(NAME)
        .label(X, DEFAULT_LABEL_CONFIG)
        .animate(DEFAULT_DYNAMIC_ANIMATE_CONFIG)
        .state({
          selected: DEFAULT_SELECTED_STATE_CONFIG,
          active: DEFAULT_ACTIVE_STATE_CONFIG,
        });
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
