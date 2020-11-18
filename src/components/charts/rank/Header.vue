<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { TITLE_RANK } from "../../../data/consts/mode";
export default {
  name: "rank.Header",
  data() {
    return {
      title: TITLE_RANK,
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
