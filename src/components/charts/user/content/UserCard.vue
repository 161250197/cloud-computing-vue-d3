<template>
  <div class="user-card" @click="onUserCardClicked">
    <el-avatar :src="avatar" :size="150" @error="() => false">
      <img :src="defaultAvatar" />
    </el-avatar>
    <div class="name">{{ name }}</div>
    <div class="like">❤</div>
  </div>
</template>

<script>
import { DEFAULT_AVATAR } from "../../../../consts/common";
import { createLargeAvatarUrl, addProtocol } from "./../../../../util/url";

export default {
  name: "user.content.UserCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    const avatar = createLargeAvatarUrl(this.id);
    const defaultAvatar = addProtocol(DEFAULT_AVATAR);
    return {
      defaultAvatar,
      avatar,
    };
  },
  methods: {
    onUserCardClicked(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.text-shadow (@color: red, @thickness: 2px) {
  text-shadow: @color @thickness 0 0, @color 0 @thickness 0,
    @color -@thickness 0 0, @color 0 -@thickness 0;
}
.user-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 28px 40px;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  border: thin solid lightgray;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    .like {
      color: #409eff;
    }
  }
  .name {
    line-height: 36px;
    height: 36px;
    font-size: larger;
    font-weight: bold;
    margin: 20px 0;
  }
  .like {
    line-height: 40px;
    font-size: 40px;
    color: white;
    .text-shadow(#409eff, 2px);
  }
}
</style>
