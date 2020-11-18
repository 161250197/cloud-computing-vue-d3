<template>
  <el-container id="app">
    <!-- TODO 添加动画 -->
    <el-main v-if="modeNotSelected">
      <div class="icon-wrapper" @click="changeModeHot">
        <i class="el-icon-share"></i>
        <span>热度</span>
      </div>
      <div class="icon-wrapper" @click="changeModeRank">
        <i class="el-icon-star-off"></i>
        <span>评分</span>
      </div>
      <div class="icon-wrapper" @click="changeModeUser">
        <i class="el-icon-user-solid"></i>
        <span>用户</span>
      </div>
    </el-main>
    <el-main v-else>
      <HotCharts v-if="isHotMode" />
      <RankCharts v-else-if="isRankMode" />
      <UserCharts v-else-if="isUserMode" />
    </el-main>
  </el-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import HotCharts from "./components/charts/hot/index";
import RankCharts from "./components/charts/rank/index";
import UserCharts from "./components/charts/user/index";
import { MODE_HOT, MODE_RANK, MODE_USER } from "./data/consts/mode";

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
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeModeHot", "changeModeRank", "changeModeUser"]),
    ...mapActions(["initStore"]),
  },
  mounted() {
    this.initStore();
  },
};
</script>

<style scoped>
#app {
  user-select: none;
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
