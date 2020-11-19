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
      v-show="timeSelectorShow"
      @click="hideSelectorShow"
    >
      <TimeSelector @setTimeRange="setTimeRange" />
    </div>
    <DynamicBarChart v-if="showDynamicBarChart" :from="from" :to="to" />
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
      from: undefined,
      to: undefined,
      showDynamicBarChart: false,
      timeSelectorShow: false,
      info: undefined,
    };
  },
  methods: {
    setTimeRange(from, to) {
      this.from = from;
      this.to = to;
      this.showDynamicBarChart = true;
    },
    hideDynamicBarChart() {
      this.showDynamicBarChart = false;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
