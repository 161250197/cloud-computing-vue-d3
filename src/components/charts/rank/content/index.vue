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
    <div class="dynamic-button-wrapper">
      <button>dynamic-button</button>
    </div>
    <div class="rank-info-wrapper" v-if="info" @click="hideRankInfo">
      <RankInfo :info="info" />
    </div>
    <el-backtop target=".el-main"></el-backtop>
    <TimeSelector />
    <DynamicBarChart />
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
      info: undefined,
    };
  },
  methods: {
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
  .rank-info-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
