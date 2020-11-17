<template>
  <div class="detail-wrapper" v-if="selectedId">
    <DetailInfo />
    <RadarChart />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RadarChart from "./RadarChart.vue";
import DetailInfo from "./DetailInfo.vue";

export default {
  name: "hot.oneDay.detail",
  components: {
    DetailInfo,
    RadarChart,
  },
  computed: {
    ...mapState({
      date: (state) => state.hot.date,
      selectedId: (state) => state.hot.selectedId,
    }),
  },
};
</script>

<style>
</style>
