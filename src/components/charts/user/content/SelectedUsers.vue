<template>
  <div class="selected-users">
    <div
      class="user-info"
      v-for="({ avatar, homepage, name }, index) in infos"
      :key="index"
      @click.stop="() => onUserInfoClicked(homepage)"
    >
      <div class="left">
        <el-avatar :src="avatar" :size="100" />
        <div class="name">
          {{ name }}
        </div>
      </div>
      <div class="right">{{ rightTitle }}<i class="el-icon-right" /></div>
    </div>
  </div>
</template>

<script>
import {
  createLargeAvatarUrl,
  createHomepageUrl,
} from "./../../../../util/url";

export default {
  name: "user.content.SelectedUsers",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  computed: {
    infos() {
      return this.users.map(({ id, name }) => {
        const avatar = createLargeAvatarUrl(id);
        const homepage = createHomepageUrl(id);
        return {
          name,
          avatar,
          homepage,
        };
      });
    },
  },
  data() {
    return {
      rightTitle: "看看TA的主页",
    };
  },
  methods: {
    onUserInfoClicked(homepage) {
      window.open(homepage);
    },
  },
};
</script>

<style lang="less" scoped>
.selected-users {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: scroll;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .user-info {
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;
    width: 40%;
    border-radius: 20px;
    border: thin solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    .left {
      display: flex;
      align-items: center;
      .el-avatar {
        margin-right: 20px;
      }
      .name {
        line-height: 2;
        font-size: larger;
        font-weight: bold;
      }
    }
    .right {
      opacity: 0;
      line-height: 2;
      font-size: larger;
      display: flex;
      align-items: center;
      i {
        font-size: 30px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    &:hover {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
      .right {
        opacity: 1;
      }
    }
  }
}
</style>
