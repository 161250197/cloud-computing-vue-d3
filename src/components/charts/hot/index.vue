<template>
  <div class="hot-charts">
    <Header :isOneDayMode="isOneDayMode" :isDynamicMode="isDynamicMode" />
    <div class="content">
      <OneDay v-if="isOneDayMode" />
      <Dynamic v-else-if="isDynamicMode" />
    </div>
  </div>
</template>

<script>
// TODO
// 热度相关图

import Header from "./header";
import OneDay from "./oneDay/index";
import Dynamic from "./dynamic/index";
import { mapState } from "vuex";
import { MODE_DYNAMIC, MODE_ONE_DAY } from "./../../../data/consts/hot";

export default {
  name: "charts.hot",
  components: {
    Header,
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
