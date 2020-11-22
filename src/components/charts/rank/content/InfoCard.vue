<template>
  <div class="info-card" @click="onClick">
    <div class="left">
      <div class="post-wrapper">
        <img :src="postSrc" />
      </div>
      <div class="info-wrapper">
        <div class="name">{{ name }}</div>
        <div class="time">
          <span>{{ timeTitle }}</span
          >{{ firstBroadcastTimeStr }}
        </div>
      </div>
    </div>
    <div class="right">
      <el-rate :value="halfScore" disabled :max="5" />
      <div class="score-str">{{ scoreStr }}</div>
    </div>
  </div>
</template>

<script>
import { regularDateStr } from "../../../../util/common";
import { regularScoreDotOne } from "../../../../util/math";
import { addProtocol } from "../../../../util/url";
export default {
  name: "rank.content.InfoCard",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { name, postSrc, firstBroadcastTime, score } = this.info;
    const firstBroadcastTimeStr = regularDateStr(firstBroadcastTime);
    const halfScore = score / 2;
    const scoreStr = regularScoreDotOne(score);
    return {
      timeTitle: "首播时间：",
      postSrc: addProtocol(postSrc),
      name,
      firstBroadcastTimeStr,
      halfScore,
      scoreStr,
    };
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="less" scoped>
.info-card {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px;
  width: 45%;
  min-width: 500px;
  height: 200px;
  border-radius: 20px;
  border: thin solid lightgray;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  .left {
    display: flex;
    justify-content: center;
    .post-wrapper {
      margin-right: 20px;
      display: flex;
      align-items: center;
      img {
        width: 100px;
      }
    }
    .info-wrapper {
      display: flex;
      flex-direction: column;
      line-height: 2;
      justify-content: space-between;
      .name {
        font-size: larger;
        font-weight: bold;
      }
      .time {
        span {
          font-weight: bold;
        }
      }
    }
  }
  .right {
    display: flex;
    min-width: 120px;
    .score-str {
      height: 20px;
      line-height: 20px;
      margin: 0 10px;
    }
  }
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    .right {
      opacity: 1;
    }
  }
}
</style>

<style lang="less">
.info-card {
  .el-rate__icon {
    margin-right: 0;
  }
}
</style>
