<template>
  <div class="mode-one-day">
    <el-date-picker v-model="date" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "hot.header.OneDate",
  computed: {
    ...mapState({
      hotDate: (state) => state.hot.date,
    }),
  },
  data() {
    return {
      date: undefined,
    };
  },
  watch: {
    date() {
      this.setHotDate(this.date);
    },
  },
  methods: {
    ...mapMutations(["setHotDate"]),
  },
  mounted() {
    const now = Date.now();
    this.setHotDate(now);
    this.date = this.hotDate;
  },
};
</script>

<style>
</style>
