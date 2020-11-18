<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "rank.Header",
  data() {
    return {
      title: "番剧历史评分",
    };
  },
  methods: {
    ...mapMutations(["resetMode"]),
    ...mapActions(["resetRankState"]),
    goBack() {
      this.resetMode();
      this.resetRankState();
    },
  },
};
</script>

<style>
</style>
