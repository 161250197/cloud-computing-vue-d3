<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <div class="user-cards">
      <UserCard
        v-for="({ id, name }, index) in recommendUsers"
        :key="index"
        :id="id"
        :name="name"
      />
    </div>
    <div
      class="hide-background"
      v-if="selectedUsersShow"
      @click="hideSelectedUsers"
    >
      <SelectedUsers :users="selectedUsers" />
    </div>
    <el-button
      @click="refreshRecommendUsers"
      class="refresh-button"
      type="primary"
      icon="el-icon-refresh"
      circle
    />
    <div @click="showSelectedUsers">
      <SelectedUsersBrief :users="selectedUsers" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserCard from "./UserCard";
import SelectedUsers from "./SelectedUsers";
import SelectedUsersBrief from "./SelectedUsersBrief";

export default {
  name: "user.Content",
  components: {
    UserCard,
    SelectedUsers,
    SelectedUsersBrief,
  },
  computed: {
    ...mapState({
      recommendUsers: (state) => state.user.recommendUsers,
    }),
    showedRecommendUsers() {
      // TODO
      return this.recommendUsers;
    },
  },
  data() {
    return {
      title: "选择感兴趣的用户吧  (<ゝω·)~☆kira",
      changeButtonTitle: "换一换",
      selectedUsers: [],
      selectedUsersShow: false,
    };
  },
  methods: {
    showSelectedUsers() {
      this.selectedUsersShow = true;
    },
    hideSelectedUsers() {
      this.selectedUsersShow = false;
    },
    refreshRecommendUsers() {
      // TODO
      return false;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    width: 100%;
    line-height: 2;
    font-size: larger;
    font-weight: bold;
    white-space: break-spaces;
  }
  .user-cards {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 80px;
    box-sizing: border-box;
  }
  .refresh-button {
    position: fixed;
    width: 40px;
    height: 40px;
    right: 40px;
    bottom: 40px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
