<template>
  <div>
    <BarChart />
    <Detail />
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import Detail from "./detail/index.vue";

export default {
  name: "hot.oneDay",
  components: {
    Detail,
    BarChart,
  },
};
</script>

<style>
</style>
