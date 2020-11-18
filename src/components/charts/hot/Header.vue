<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "hot.header.Today",
  data() {
    return {
      title: "今日热度排行",
    };
  },
  methods: {
    ...mapMutations(["resetMode"]),
    ...mapActions(["resetHotState"]),
    goBack() {
      this.resetMode();
      this.resetHotState();
    },
  },
};
</script>

<style>
</style>
