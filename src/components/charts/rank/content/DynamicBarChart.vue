<template>
  <div
    class="dynamic-bar-chart-wrapper"
    :ref="chartRef"
    @click.stop="onChartClicked"
  ></div>
</template>

<script>
import { Chart } from "@antv/g2";
import {
  EASE_LINEAR,
  TYPE_RECT,
  LABEL_APPEAR_ONE,
  LABEL_UPDATE_ONE,
  DEFAULT_OFFSET,
  cartoonColorCallback,
} from "../../../../consts/g2";
import { CHART_REF } from "../../../../consts/common";
import { getTimeRangeCartoonRankPath } from "../../../../api/api";
import { calDate } from "../../../../util/math";
import { regularDateStr } from "../../../../util/common";

const DEFAULT_INTERVAL = 1000;
const DEFAULT_DURATION = 500;
const X = "番剧";
const Y = "评分";

export default {
  name: "rank.content.DynamicBarChart",
  props: {
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  },
  computed: {
    nowStr() {
      return regularDateStr(this.now);
    },
  },
  data() {
    return {
      chart: undefined,
      chartRef: CHART_REF,
      dataIndex: 0,
      data: undefined,
      dataCount: undefined,
      refreshIntervalId: undefined,
      isRunning: true,
      finished: false,
      now: this.from,
      rerunMessage: "开始重新播放",
      stopMessage: "已暂停播放",
      runMessage: "已继续播放",
    };
  },
  methods: {
    onChartClicked() {
      if (!this.data) {
        return;
      }
      if (this.finished) {
        this.rerun();
        this.$message(this.rerunMessage);
        return;
      }
      if (this.isRunning) {
        this.stopRunning();
        this.$message(this.stopMessage);
        return;
      }
      this.run();
      this.$message(this.runMessage);
    },
    run() {
      this.refreshIntervalId = setInterval(() => {
        this.refreshChart();
      }, DEFAULT_INTERVAL);
      this.isRunning = true;
    },
    stopRunning() {
      clearInterval(this.refreshIntervalId);
      this.isRunning = false;
    },
    isFinished() {
      return this.dataIndex >= this.dataCount;
    },
    rerun() {
      this.dataIndex = 0;
      this.now = this.from;
      this.finished = false;
      this.run();
    },
    getData() {
      if (this.data === undefined || this.isFinished()) {
        return [];
      }
      const data = this.data[this.dataIndex].map(({ name, score }) => {
        const result = {};
        result[X] = name;
        result[Y] = score;
        return result;
      });
      return data;
    },
    setChartTitle() {
      this.chart.annotation().text({
        position: ["95%", "90%"],
        content: this.nowStr,
        style: {
          fontSize: 26,
          fontWeight: "bold",
          fill: "#ddd",
          textAlign: "end",
        },
        animate: false,
      });
    },
    goNextDataIndex() {
      this.dataIndex++;
      this.now = calDate(this.now, 1);
    },
    refreshChart() {
      this.goNextDataIndex();
      if (this.isFinished()) {
        this.stopRunning();
        return;
      }
      const data = this.getData();
      this.chart.annotation().clear(true);
      this.setChartTitle();
      this.chart.changeData(data);
    },
    initChart() {
      const container = this.$refs[this.chartRef];

      const chart = new Chart({
        autoFit: true,
        height: 500,
        padding: [60, 120],
        container,
      });

      this.chart = chart;

      const data = this.getData();
      chart.data(data);
      const scaleProperty = {};
      scaleProperty[Y] = {
        min: 0,
        max: 10,
      };
      chart.scale(scaleProperty);

      chart.coordinate(TYPE_RECT).transpose();
      chart.legend(false);
      chart.tooltip(false);

      chart.axis(Y, {
        animateOption: {
          update: {
            duration: DEFAULT_DURATION,
            easing: EASE_LINEAR,
          },
        },
      });
      chart.axis(X, {
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
      this.setChartTitle();
      chart
        .interval()
        .position(`${X}*${Y}`)
        .color(X, cartoonColorCallback)
        .label(Y, {
          animate: {
            appear: {
              animation: LABEL_APPEAR_ONE,
              delay: 0,
              duration: DEFAULT_DURATION,
              easing: EASE_LINEAR,
            },
            update: {
              animation: LABEL_UPDATE_ONE,
              duration: DEFAULT_DURATION,
              easing: EASE_LINEAR,
            },
          },
          offset: DEFAULT_OFFSET,
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
      chart.render();
    },
  },
  async mounted() {
    const data = await getTimeRangeCartoonRankPath(this.from, this.to);
    this.data = data;
    this.dataCount = data.length;
    this.initChart();
    setTimeout(this.run, DEFAULT_INTERVAL);
  },
  beforeDestroy() {
    this.stopRunning();
  },
};
</script>

<style lang="less" scoped>
.dynamic-bar-chart-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 65px;
  box-sizing: border-box;
}
</style>
