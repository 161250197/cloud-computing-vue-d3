<template>
  <div class="header">
    <div class="mode-one-day" v-if="isOneDayMode" @click="changeHotModeDynamic">
      isOneDayMode
    </div>
    <div
      class="mode-dynamic"
      v-else-if="isDynamicMode"
      @click="changeHotModeOneDay"
    >
      isDynamicMode
    </div>
  </div>
</template>

<script>
// TODO 样式调整
import { mapMutations } from "vuex";
export default {
  name: "charts.hot.header",
  props: {
    isOneDayMode: {
      type: Boolean,
      required: true,
    },
    isDynamicMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["changeHotModeOneDay", "changeHotModeDynamic"]),
  },
};
</script>

<style>
</style>
