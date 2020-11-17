<template>
  <div class="hot-radar-chart">{{ selectedId }}</div>
</template>

<script>
// TODO

export default {
  name: "hot.oneDay.RadarChart",
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
