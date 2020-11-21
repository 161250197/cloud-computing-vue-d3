<template>
  <el-steps direction="vertical" :active="1">
    <el-step
      v-for="({ title, description }, index) of steps"
      :key="index"
      :title="title"
      :description="description"
    />
  </el-steps>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user.content.Steps",
  computed: {
    ...mapState({
      steps: (state) => state.user.steps,
      activeStepIndex: (state) => state.user.activeStepIndex,
    }),
  },
};
</script>

<style>
</style>
