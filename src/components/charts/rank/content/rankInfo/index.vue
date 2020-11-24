<template>
  <div class="rank-info" @click.stop>
    <div class="info-wrapper">
      <div class="name" @click="jumpHomepage">{{ name }}</div>
      <div class="right">
        <div class="title">{{ rightTitle }}</div>
        <el-rate :value="halfScore" disabled :max="5" />
        <div class="score-str">{{ scoreStr }}</div>
      </div>
    </div>
    <LineChart :rankPath="rankPath" v-if="rankPath && rankPath.length" />
    <div class="no-rank-title-wrapper" v-else-if="rankPath">
      {{ noRankTitle }}
    </div>
    <div class="loading-wrapper" v-else v-loading="true"></div>
  </div>
</template>

<script>
import { regularScoreDotOne } from "../../../../../util/math";
import { getCartoonRankPath } from "../../../../../api/api";
import LineChart from "./LineChart";
import { addProtocol } from "../../../../../util/url";
export default {
  name: "rank.content.RankInfo",
  components: {
    LineChart,
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { name, score } = this.info;
    const halfScore = score / 2;
    const scoreStr = regularScoreDotOne(score);
    return {
      noRankTitle: "抱歉，暂时没有该番剧的评分信息",
      rightTitle: "最新评分：",
      rankPath: undefined,
      name,
      halfScore,
      scoreStr,
    };
  },
  methods: {
    jumpHomepage() {
      const homepage = addProtocol(this.info.homepage);
      window.open(homepage);
    },
  },
  async mounted() {
    const { id } = this.info;
    const rankPath = await getCartoonRankPath(id);
    this.rankPath = rankPath;
  },
};
</script>

<style lang="less" scoped>
.rank-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 73%;
  min-width: 500px;
  height: 640px;
  background: white;
  border-radius: 20px;
  border: thin solid lightgray;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .loading-wrapper {
    width: 100%;
    height: 100%;
  }
  .info-wrapper {
    border-bottom: thin solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    .name {
      line-height: 20px;
      font-size: larger;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .right {
      display: flex;
      min-width: 260px;
      margin-left: 10px;
      .title {
        font-weight: bold;
      }
      .score-str {
        margin: 0 10px;
      }
      .title,
      .score-str {
        height: 20px;
        line-height: 20px;
      }
    }
  }
  .no-rank-title-wrapper {
    margin-top: 20px;
  }
}
</style>
