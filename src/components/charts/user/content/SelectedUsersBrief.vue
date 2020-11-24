<template>
  <div class="selected-users">
    <el-avatar
      v-for="(avatar, index) in avatars"
      :src="avatar"
      :key="index"
      :style="{ right: right + 20 + `${index * 20}px` }"
      @error="() => false"
    />
    <div class="plus" v-show="showPlus" :style="{ right: `${right}px` }">+</div>
    <div class="count">{{ countStr }}</div>
  </div>
</template>

<script>
import { createAvatarUrl } from "./../../../../util/url";

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
    avatars() {
      const showUsers = this.users.slice(0, SHOW_COUNT);
      const avatars = showUsers.map(({ id }) => createAvatarUrl(id));
      return avatars;
    },
    showPlus() {
      return this.users.length > SHOW_COUNT;
    },
    countStr() {
      const count = this.users.length;
      return `已选择 ${count} 人`;
    },
  },
  data() {
    return {
      right: 140,
    };
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
  .plus {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .plus,
  .count {
    font-size: larger;
    font-weight: bold;
  }
}
</style>
