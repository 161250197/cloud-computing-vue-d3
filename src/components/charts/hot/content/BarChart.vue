<template>
  <div :ref="chartRef"></div>
</template>

<script>
import { Chart } from "@antv/g2";
import { mapState, mapMutations } from "vuex";
import {
  DEFAULT_Y_DYNAMIC_CONFIG,
  TYPE_RECT,
  DEFAULT_LABEL_CONFIG,
  DEFAULT_DYNAMIC_ANIMATE_CONFIG,
  DEFAULT_SELECTED_STATE_CONFIG,
  DEFAULT_ACTIVE_STATE_CONFIG,
  cartoonColorCallback,
} from "../../../../consts/g2";
import { BAR_CHART_NAMES } from "../../../../consts/hot";
import { CHART_REF } from "../../../../consts/common";

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
        autoFit: true,
        height: 600,
        padding: [20, 60, 20, 120],
        container,
      });

      const { ID, X, Y, NAME } = BAR_CHART_NAMES;
      chart.data(this.hotRankArr);

      const scaleProperty = {};
      const maxHotRank = Math.max(...this.hotRankArr.map((rank) => rank[X]));
      scaleProperty[X] = {
        min: 0,
        max: Math.floor(maxHotRank * 1.2),
      };
      chart.scale(scaleProperty);

      chart.coordinate(TYPE_RECT).transpose();
      chart.legend(false);
      chart.tooltip({
        position: "right",
        showTitle: false,
        showCrosshairs: false,
        showMarkers: false,
      });

      chart.interaction("element-active");
      chart.interaction("element-selected");

      chart.on("element:click", (ev) => {
        const id = ev.data.data[ID];
        this.onDataClicked(id);
        const e = document.createEvent("Event");
        e.initEvent("resize", true, true);
        window.dispatchEvent(e);
      });

      chart.axis(Y, {
        ...DEFAULT_Y_DYNAMIC_CONFIG,
        label: {
          style: {
            fontSize: 16,
            fontWeight: "bold",
          },
          autoRotate: false,
          autoHide: true,
          autoEllipsis: true,
          formatter(text) {
            const len = 5;
            return text.length > len ? `${text.slice(0, len)}...` : text;
          },
        },
      });
      chart
        .interval()
        .position(`${Y}*${X}`)
        .color(NAME, cartoonColorCallback)
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
