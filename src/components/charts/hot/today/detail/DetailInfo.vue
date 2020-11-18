<template>
  <div>
    <div class="post">
      <!-- img 添加出错处理 -->
      <img :src="postSrc" />
    </div>
    <div>{{ detail.name }}</div>
    <div>首播时间：{{ firstBroadcastTimeStr }}</div>
    <!-- TODO 评分改用星星 -->
    <div>评分：{{ detail.score }}</div>
  </div>
</template>

<script>
import {
  DATE_JOINER,
  DEFAULT_POST_SRC,
} from "./../../../../../data/consts/common";
export default {
  name: "hot.today.detail.DetailInfo",
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postSrc() {
      // TODO
      return DEFAULT_POST_SRC;
    },
    firstBroadcastTimeStr() {
      const firstBroadcastTime = new Date(this.detail.firstBroadcastTime);
      const year = firstBroadcastTime.getFullYear();
      const month = firstBroadcastTime.getMonth() + 1;
      const date = firstBroadcastTime.getDate();
      return [year, month, date].join(DATE_JOINER);
    },
  },
};
</script>

<style>
</style>
