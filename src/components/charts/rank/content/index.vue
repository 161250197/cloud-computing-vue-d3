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
      v-if="dynamicBarChartShow"
    >
      <el-page-header
        @back="hideDynamicBarChart"
        :content="dynamicBarChartTitle"
      />
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
      dynamicBarChartTitle: "评分变化动态图",
      from: undefined,
      to: undefined,
      dynamicBarChartShow: false,
      timeSelectorShow: false,
      info: undefined,
    };
  },
  methods: {
    setTimeRange({ from, to }) {
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
  .dynamic-bar-chart-wrapper {
    background: white;
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
