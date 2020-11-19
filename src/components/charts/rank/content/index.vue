<template>
  <div class="content">
    <div class="info-cards">
      <InfoCard v-for="info in infoArr" :key="info.id" :info="info" />
    </div>
    <div class="dynamic-button-wrapper">
      <button>dynamic-button</button>
    </div>
    <RankInfo />
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
};
</script>

<style lang="less" scoped>
</style>
