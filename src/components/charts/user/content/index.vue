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
    <div
      class="selected-users-brief-wrapper"
      @click="showSelectedUsers"
      v-show="selectedUsers.length"
    >
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
      // selectedUsers: [],
      selectedUsers: [
        {
          name: "四不象",
          id: "1832573",
        },
        {
          name: "王贫困",
          id: "34873691",
        },
        {
          name: "zlic",
          id: "200731406",
        },
        {
          name: "远子",
          id: "14597285",
        },
        {
          name: "马亿",
          id: "64563895",
        },
      ],
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
  .selected-users-brief-wrapper {
    position: fixed;
    height: 40px;
    right: 100px;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
