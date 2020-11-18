<template>
  <el-page-header @back="goBack" :content="title"> </el-page-header>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { TITLE_USER } from "../../../data/consts/mode";
export default {
  name: "user.Header",
  data() {
    return {
      title: TITLE_USER,
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
