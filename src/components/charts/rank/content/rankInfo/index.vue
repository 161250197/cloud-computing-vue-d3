<template>
  <div class="rank-info" @click.stop>
    <div class="info-wrapper">
      <div class="name">{{ name }}</div>
      <div class="right">
        <el-rate :value="halfScore" disabled :max="5" />
        <div class="score-str">{{ scoreStr }}</div>
      </div>
    </div>
    <LineChart :rankPath="rankPath" v-if="rankPath" />
  </div>
</template>

<script>
import { regularScoreDotOne } from "../../../../../util/math";
import { getCartoonRankPath } from "../../../../../api/api";
import LineChart from "./LineChart";
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
      rankPath: undefined,
      name,
      halfScore,
      scoreStr,
    };
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
    }
    .right {
      display: flex;
      .score-str {
        height: 20px;
        line-height: 20px;
        margin: 0 10px;
      }
    }
  }
}
</style>
