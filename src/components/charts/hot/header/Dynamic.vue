<template>
  <div class="mode-today" v-if="isOneDayMode" @click="changeHotModeDynamic">
    <div class="date-picker-wrapper">
      <span class="title">选择日期</span>
      <el-date-picker v-model="date" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
// TODO 修改为两个选择日期
export default {};
</script>

<style>
</style>
