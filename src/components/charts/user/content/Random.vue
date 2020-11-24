<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <div class="user-cards">
      <UserCard
        v-for="user in randomUsers"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        @click="() => onUserCardClick(user)"
      />
    </div>
    <BottomComp :refreshUsers="refreshUsers" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import UserCard from "./UserCard";
import BottomComp from "./BottomComp";

export default {
  name: "user.content.Random",
  components: {
    UserCard,
    BottomComp,
  },
  computed: {
    ...mapState({
      randomUsers: (state) => state.user.randomUsers,
    }),
  },
  data() {
    return {
      title: "选择感兴趣的用户吧  (<ゝω·)~☆kira",
      notFindMessage: "抱歉没有找到……再试试？",
    };
  },
  methods: {
    ...mapMutations(["setUserRecommendState", "setUserIsLoading"]),
    ...mapActions(["refreshRandomUsers", "selectUser"]),
    refreshUsers() {
      this.refreshRandomUsers(this.onNotFind);
    },
    onNotFind() {
      this.$message(this.notFindMessage);
    },
    async onUserCardClick(user) {
      this.setUserIsLoading(true);
      await this.selectUser(user);
      this.setUserRecommendState();
      this.setUserIsLoading(false);
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
}
</style>
