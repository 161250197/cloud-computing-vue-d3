<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { TITLE_HOT } from "../../../data/consts/mode";
export default {
  name: "hot.Header",
  data() {
    // TODO 添加日期信息
    // const date =
    return {
      title: TITLE_HOT,
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
