<template>
  <div class="hot-pie-chart">{{ selectedId }}</div>
</template>

<script>
// TODO

export default {
  name: "hot.oneDay.PieChart",
  props: {
    selectedId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
