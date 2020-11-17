<template>
  <div class="wrapper" v-if="isOneDayMode">
    <div class="header">
      <TodayHeader />
    </div>
    <div class="content">
      <OneDay />
    </div>
  </div>
  <div class="wrapper" v-else-if="isDynamicMode">
    <div class="header">
      <DynamicHeader />
    </div>
    <div class="content">
      <Dynamic />
    </div>
  </div>
</template>

<script>
// TODO
// 热度相关图

import TodayHeader from "./header/Today";
import DynamicHeader from "./header/Dynamic";
import OneDay from "./today/index";
import Dynamic from "./dynamic/index";
import { mapState } from "vuex";
import { MODE_DYNAMIC, MODE_TODAY } from "./../../../data/consts/hot";

export default {
  name: "charts.hot",
  components: {
    TodayHeader,
    DynamicHeader,
    OneDay,
    Dynamic,
  },
  computed: {
    ...mapState({
      mode: (state) => state.hot.mode,
    }),
    isOneDayMode() {
      return this.mode === MODE_TODAY;
    },
    isDynamicMode() {
      return this.mode === MODE_DYNAMIC;
    },
  },
};
</script>

<style scoped>
</style>
