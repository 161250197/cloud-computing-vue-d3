<template>
  <div class="detail-wrapper" v-if="detail">
    <DetailInfo :detail="detail" />
    <RadarChart :detail="detail" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RadarChart from "./RadarChart.vue";
import DetailInfo from "./DetailInfo.vue";
import { getHotDetail } from "../../../../../api/hot";

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
  data() {
    return {
      detail: undefined,
    };
  },
  watch: {
    async selectedId() {
      if (this.selectedId === undefined) {
        this.detail = undefined;
        return;
      }
      this.detail = await getHotDetail(this.selectedId);
    },
  },
};
</script>

<style>
</style>
