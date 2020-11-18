<template>
  <div class="content">
    <BarChart style="width: 50%" />
    <RadarChart style="width: 50%" />
  </div>
</template>

<script>
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";

export default {
  name: "hot.Content",
  components: {
    RadarChart,
    BarChart,
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
