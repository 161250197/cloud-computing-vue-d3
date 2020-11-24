<template>
  <div class="time-selector" @click.stop>
    <div class="title">
      {{ title }}
    </div>
    <div class="date-range-picker-wrapper">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        :range-separator="rangeSeparator"
        :start-placeholder="fromPlaceholder"
        :end-placeholder="toPlaceholder"
        :picker-options="{ disabledDate }"
        align="center"
      />
    </div>
    <el-button
      icon="el-icon-check"
      type="primary"
      v-show="dateRange"
      @click="onConfirm"
      round
      plain
    >
      {{ confirmText }}
    </el-button>
  </div>
</template>

<script>
import { MAX_FROM_TIME } from "../../../../consts/common";
import { regularTimeToDay } from "../../../../util/math";
export default {
  name: "rank.content.TimeSelector",
  data() {
    const to = regularTimeToDay(Date.now());
    const from = MAX_FROM_TIME;
    return {
      to,
      from,
      pickerOptions: {
        disabledDate: this.disabledDate,
      },
      dateRange: undefined,
      title: "请选择展示评分变化的日期范围",
      rangeSeparator: "至",
      fromPlaceholder: "请选择开始日期",
      toPlaceholder: "请选择结束日期",
      confirmText: "确认时间范围",
    };
  },
  methods: {
    onConfirm() {
      const [from, to] = this.dateRange.map((date) => date.getTime());
      this.$emit("setTimeRange", { from, to });
    },
    disabledDate(date) {
      const time = date.getTime();
      return time > this.to || time < this.from;
    },
  },
};
</script>

<style lang="less" scoped>
.time-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  min-width: 400px;
  height: 250px;
  background: white;
  border-radius: 20px;
  border: thin solid lightgray;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  .title {
    line-height: 20px;
    font-size: larger;
    font-weight: bold;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: thin solid lightgray;
  }
  .date-range-picker-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  .el-button {
    width: 155px;
    position: absolute;
    bottom: 15px;
  }
}
</style>
