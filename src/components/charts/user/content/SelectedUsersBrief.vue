<template>
  <div class="selected-users">
    <el-avatar
      v-for="(avator, index) in avators"
      :src="avator"
      :key="index"
      :style="{ right: 130 + `${index * 20}px` }"
    />
    <div class="count">{{ countStr }}</div>
  </div>
</template>

<script>
import { createAvatorUrl } from "./../../../../util/url";

const SHOW_COUNT = 3;

export default {
  name: "user.content.SelectedUsersBrief",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  computed: {
    avators() {
      const showUsers = this.users.slice(0, SHOW_COUNT);
      const avators = showUsers.map(({ id }) => createAvatorUrl(id));
      return avators;
    },
    countStr() {
      const count = this.users.length;
      let pre = count > SHOW_COUNT ? "+   " : "";
      return `${pre}已选择 ${count} 人`;
    },
  },
};
</script>

<style lang="less" scoped>
.selected-users {
  cursor: pointer;
  &:hover {
    .el-avatar {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .el-avatar {
    position: absolute;
    top: 0;
  }
  .count {
    white-space: break-spaces;
    font-size: larger;
    font-weight: bold;
  }
}
</style>
