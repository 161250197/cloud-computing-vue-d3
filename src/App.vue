<template>
  <el-container id="app">
    <!-- TODO 添加动画 -->
    <el-header>
      <!-- TODO 样式调整 -->
      <div
        class="icon-wrapper"
        :class="{ selected: isHotMode }"
        @click="checkHot"
      >
        <i class="el-icon-share"></i>
        <span>热度</span>
      </div>
      <div
        class="icon-wrapper"
        :class="{ selected: isRankMode }"
        @click="checkRank"
      >
        <i class="el-icon-star-off"></i>
        <span>评分</span>
      </div>
      <div
        class="icon-wrapper"
        :class="{ selected: isUserMode }"
        @click="checkUser"
      >
        <i class="el-icon-user-solid"></i>
        <span>用户</span>
      </div>
    </el-header>
    <el-main v-if="modeSelected">
      <HotCharts v-if="isHotMode" />
      <RankCharts v-if="isRankMode" />
      <UserCharts v-if="isUserMode" />
    </el-main>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HotCharts from "./components/charts/hot/index";
import RankCharts from "./components/charts/rank/index";
import UserCharts from "./components/charts/user/index";
import { HOT, RANK, USER } from "./data/consts/mode";

export default {
  name: "App",
  components: {
    HotCharts,
    RankCharts,
    UserCharts,
  },
  computed: {
    ...mapState({
      mode: (state) => state.mode.mode,
    }),
    modeSelected() {
      return this.mode !== undefined;
    },
    isHotMode() {
      return this.mode === HOT;
    },
    isRankMode() {
      return this.mode === RANK;
    },
    isUserMode() {
      return this.mode === USER;
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["checkHot", "checkRank", "checkUser"]),
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
