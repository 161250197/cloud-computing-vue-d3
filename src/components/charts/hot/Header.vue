<template>
  <el-page-header @back="goBack" :content="content" />
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { TITLE_HOT } from "../../../consts/mode";
import { regularTimeToDay } from "../../../util/math";
import { regularDateStr } from "../../../util/common";
export default {
  name: "hot.Header",
  data() {
    const todayTime = regularTimeToDay(Date.now());
    const dateStr = regularDateStr(todayTime);
    const spaces = Array(3).fill(" ").join("");
    return {
      content: `${TITLE_HOT}${spaces}${dateStr}`,
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
