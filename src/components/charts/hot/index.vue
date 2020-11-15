<template>
  <div class="wrapper" v-if="isOneDayMode">
    <div class="header">
      <OneDateHeader />
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

import OneDateHeader from "./header/OneDate";
import DynamicHeader from "./header/Dynamic";
import OneDay from "./oneDay/index";
import Dynamic from "./dynamic/index";
import { mapState } from "vuex";
import { MODE_DYNAMIC, MODE_ONE_DAY } from "./../../../data/consts/hot";

export default {
  name: "charts.hot",
  components: {
    OneDateHeader,
    DynamicHeader,
    OneDay,
    Dynamic,
  },
  computed: {
    ...mapState({
      mode: (state) => state.hot.mode,
    }),
    isOneDayMode() {
      return this.mode === MODE_ONE_DAY;
    },
    isDynamicMode() {
      return this.mode === MODE_DYNAMIC;
    },
  },
};
</script>

<style scoped>
</style>
