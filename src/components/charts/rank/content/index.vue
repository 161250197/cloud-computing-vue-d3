<template>
  <div class="content">
    <div class="info-cards">
      <InfoCard
        v-for="info in infoArr"
        :key="info.id"
        :info="info"
        @click="() => showRankInfo(info)"
      />
    </div>
    <div class="hide-background" v-if="info" @click="hideRankInfo">
      <RankInfo :info="info" />
    </div>
    <div
      class="hide-background"
      v-if="timeSelectorShow"
      @click="hideSelectorShow"
    >
      <TimeSelector @setTimeRange="setTimeRange" />
    </div>
    <div
      class="hide-background dynamic-bar-chart-wrapper"
      :class="{ 'show-header': dynamicBarChartHeaderShow }"
      v-if="dynamicBarChartShow"
      @mousemove="setShowHeaderTimeout"
    >
      <div
        @mousemove.stop
        @mouseenter="showDynamicBarChartHeader"
        @mouseleave="hideDynamicBarChartHeader"
      >
        <el-page-header
          @back="hideDynamicBarChart"
          :content="dynamicBarChartTitle"
        />
      </div>
      <DynamicBarChart :from="from" :to="to" />
    </div>
    <el-button
      class="show-time-selector-button"
      type="primary"
      icon="el-icon-data-analysis"
      circle
      @click="showTimeSelector"
    />
    <el-backtop target=".el-main"></el-backtop>
  </div>
</template>

<script>
import InfoCard from "./InfoCard";
import RankInfo from "./rankInfo/index";
import TimeSelector from "./TimeSelector";
import DynamicBarChart from "./DynamicBarChart";
import { mapState } from "vuex";

const HIDE_DELAY = 2000;
const QUIET_TIME = 1000;

export default {
  name: "rank.Content",
  components: {
    InfoCard,
    RankInfo,
    TimeSelector,
    DynamicBarChart,
  },
  computed: {
    ...mapState({
      infoArr: (state) => state.rank.infoArr,
    }),
  },
  data() {
    return {
      timeoutQuietTime: Date.now(),
      dynamicBarChartHeaderShow: false,
      hideDynamicBarChartHeaderTimeoutId: undefined,
      dynamicBarChartTitle: "评分变化动态图",
      from: undefined,
      to: undefined,
      dynamicBarChartShow: false,
      timeSelectorShow: false,
      info: undefined,
    };
  },
  methods: {
    setShowHeaderTimeout() {
      if (Date.now() < this.timeoutQuietTime) {
        return;
      }
      this.showDynamicBarChartHeader();
      this.hideDynamicBarChartHeaderTimeoutId = setTimeout(() => {
        this.hideDynamicBarChartHeader();
      }, HIDE_DELAY);
    },
    updateTimeoutQuietTime() {
      this.timeoutQuietTime = Date.now() + QUIET_TIME;
    },
    showDynamicBarChartHeader() {
      clearTimeout(this.hideDynamicBarChartHeaderTimeoutId);
      this.dynamicBarChartHeaderShow = true;
      this.updateTimeoutQuietTime();
    },
    hideDynamicBarChartHeader() {
      this.dynamicBarChartHeaderShow = false;
      this.updateTimeoutQuietTime();
    },
    setTimeRange(from, to) {
      this.from = from;
      this.to = to;
      this.dynamicBarChartShow = true;
      this.hideSelectorShow();
    },
    hideDynamicBarChart() {
      this.dynamicBarChartShow = false;
    },
    showTimeSelector() {
      this.timeSelectorShow = true;
    },
    hideSelectorShow() {
      this.timeSelectorShow = false;
    },
    showRankInfo(info) {
      this.info = info;
    },
    hideRankInfo() {
      this.info = undefined;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .info-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .hide-background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.65);
    &.dynamic-bar-chart-wrapper {
      background: white;
      .el-page-header {
        transition: transform 0.5s;
        transform: translateY(-100%);
      }
      &.show-header {
        .el-page-header {
          transform: none;
        }
      }
    }
  }
  .show-time-selector-button {
    position: fixed;
    width: 40px;
    height: 40px;
    right: 40px;
    bottom: 40px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-backtop {
    bottom: 100px !important;
  }
}
</style>
