<template>
  <div class="content">
    <div class="info-cards">
      <InfoCard />
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

export default {
  name: "rank.Content",
  components: {
    InfoCard,
    RankInfo,
    TimeSelector,
    DynamicBarChart,
  },
};
</script>

<style lang="less" scoped>
</style>
