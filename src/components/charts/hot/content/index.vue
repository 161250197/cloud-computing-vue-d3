<template>
  <div class="today-wrapper">
    <BarChart style="width: 50%" />
    <RadarChart style="width: 50%" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "./BarChart.vue";
import RadarChart from "./RadarChart.vue";

export default {
  name: "hot.content",
  components: {
    RadarChart,
    BarChart,
  },
  computed: {
    ...mapState({
      selectedIdArr: (state) => state.hot.selectedIdArr,
    }),
    showDetail() {
      return this.selectedIdArr.length > 0;
    },
  },
};
</script>

<style lang="less" scoped>
.today-wrapper {
  display: flex;
  width: 100%;
}
</style>
