<template>
  <el-container id="app">
    <!-- TODO 添加动画 -->
    <Enter v-if="modeNotSelected" />
    <el-main style="padding: 0" v-else>
      <HotCharts v-if="isHotMode" />
      <RankCharts v-else-if="isRankMode" />
      <UserCharts v-else-if="isUserMode" />
    </el-main>
  </el-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Enter from "./components/Enter";
import HotCharts from "./components/charts/hot/index";
import RankCharts from "./components/charts/rank/index";
import UserCharts from "./components/charts/user/index";
import { MODE_HOT, MODE_RANK, MODE_USER } from "./consts/mode";

export default {
  name: "App",
  components: {
    Enter,
    HotCharts,
    RankCharts,
    UserCharts,
  },
  computed: {
    ...mapState({
      mode: (state) => state.mode.mode,
    }),
    modeNotSelected() {
      return this.mode === undefined;
    },
    isHotMode() {
      return this.mode === MODE_HOT;
    },
    isRankMode() {
      return this.mode === MODE_RANK;
    },
    isUserMode() {
      return this.mode === MODE_USER;
    },
  },
  methods: {
    ...mapActions(["initStore"]),
  },
  mounted() {
    this.initStore();
  },
};
</script>

<style lang="less" scoped>
#app {
  user-select: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="less">
#app {
  .el-page-header__content {
    white-space: break-spaces;
  }
  .el-main {
    .chart {
      height: 100%;
      .el-page-header {
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        z-index: 1;
        background: white;
        border-bottom: thin solid lightgray;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
      .content {
        height: 100%;
        box-sizing: border-box;
        padding-top: 80px;
      }
    }
  }
}
</style>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
