<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "user.Header",
  data() {
    return {
      title: "用户关注推荐",
    };
  },
  methods: {
    ...mapMutations(["resetMode"]),
    ...mapActions(["resetUserState"]),
    goBack() {
      this.resetMode();
      this.resetUserState();
    },
  },
};
</script>

<style>
</style>
