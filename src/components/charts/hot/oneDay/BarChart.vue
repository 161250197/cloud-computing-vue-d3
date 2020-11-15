<template>
  <div class="one-day-hot-bar-chart">
    <div class="time-wrapper">
      <span class="title">选择日期</span>
      <el-date-picker v-model="date" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
    <div :ref="container"></div>
  </div>
</template>

<script>
// TODO
// 热度动态条形图

import { Chart } from "@antv/g2";
import {
  EASE_LINEAR,
  DEFAULT_DURATION,
  TYPE_RECT,
  LABEL_UPDATE_ANIMATION,
  LABEL_APPEAR_ANIMATION,
} from "./../../../../data/consts/g2";

import { regularTimeToDay } from "./../../../util/math";

export default {
  name: "OneDayHotBarChart",
  data() {
    const today = regularTimeToDay(Date.now());
    return {
      container: "container",
      date: new Date(today),
      chart: undefined,
    };
  },
  watch: {
    date() {
      this.refreshChart();
    },
  },
  methods: {
    async initChart() {
      const data = await this.queryData();

      const container = this.$refs[this.container];

      this.chart = new Chart({
        container,
        autoFit: true,
        height: 500,
        padding: [20, 60],
      });

      this.chart.data(data);
      this.chart.coordinate(TYPE_RECT).transpose();
      this.chart.legend(false);
      this.chart.tooltip(false);
      this.chart.axis("city", {
        animateOption: {
          update: {
            duration: DEFAULT_DURATION,
            easing: EASE_LINEAR,
          },
        },
      });
      this.setChartTitle();
      this.chart
        .interval()
        .position("city*value")
        .color("id")
        .label("value", {
          animate: {
            appear: LABEL_APPEAR_ANIMATION,
            update: LABEL_UPDATE_ANIMATION,
          },
          offset: 5,
        })
        .animate({
          appear: {
            duration: DEFAULT_DURATION,
            easing: EASE_LINEAR,
          },
          update: {
            duration: DEFAULT_DURATION,
            easing: EASE_LINEAR,
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
    this.initChart();
  },
};
</script>

<style scoped>
</style>
