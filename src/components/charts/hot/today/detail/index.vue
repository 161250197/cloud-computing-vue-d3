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
  name: "hot.today.detail",
  computed: {
    ...mapState({
      selectedId: (state) => state.hot.selectedId,
    }),
  },
  components: {
    DetailInfo,
    RadarChart,
  },
};
</script>

<style>
</style>
