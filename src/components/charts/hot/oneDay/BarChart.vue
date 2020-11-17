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
  CHART_REF,
  DEFAULT_LABEL_CONFIG,
  DEFAULT_DYNAMIC_ANIMATE_CONFIG,
  DEFAULT_SELECTED_STATE_CONFIG,
  DEFAULT_ACTIVE_STATE_CONFIG,
} from "../../../../data/consts/g2";
import { getHotOneDateData } from "./../../../../api/hot";

export default {
  name: "hot.oneDay.BarChart",
  computed: {
    ...mapState({
      date: (state) => state.hot.date,
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  data() {
    return {
      dataIdName: "id",
      dataYName: "city",
      dataXName: "value",
      chart: undefined,
      chartRef: CHART_REF,
    };
  },
  watch: {
    date() {
      this.refreshChart();
    },
  },
  methods: {
    ...mapMutations(["resetSelectedId", "setSelectedId"]),
    queryData() {
      return getHotOneDateData(this.date);
    },
    onDataClicked(id) {
      if (this.selectedId === id) {
        this.resetSelectedId();
        return;
      }
      this.setSelectedId(id);
    },
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
    async refreshChart() {
      const data = await this.queryData();
      this.chart.annotation().clear(true);
      this.chart.changeData(data);
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style scoped>
</style>
