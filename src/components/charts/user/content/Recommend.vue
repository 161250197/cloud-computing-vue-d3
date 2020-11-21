<template>
  <div class="content">
    <div class="title" v-if="userCount">{{ title }}</div>
    <div class="user-cards" v-if="userCount">
      <UserCard
        v-for="user in showedRecommendUsers"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        @click="() => selectUser(user)"
      />
    </div>
    <div class="no-more-recommend" v-else>
      <div class="title">{{ noMoreRecommendTitle }}</div>
      <el-button
        @click="restartRecommend"
        class="restart-button"
        type="primary"
        plain
        round
      >
        {{ restartTitle }}
      </el-button>
    </div>
    <BottomComp :refreshUsers="refreshRecommendUsers" />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import UserCard from "./UserCard";
import BottomComp from "./BottomComp";
import { SHOW_COUNT } from "./../../../../consts/user";

export default {
  name: "user.content.Recommend",
  components: {
    UserCard,
    BottomComp,
  },
  computed: {
    ...mapState({
      randomUsers: (state) => state.user.randomUsers,
      recommendUsers: (state) => state.user.recommendUsers,
    }),
    userCount() {
      return this.recommendUsers.length;
    },
    hasMoreRecommend() {
      return this.userCount > SHOW_COUNT;
    },
    showedRecommendUsers() {
      const { recommendUsers, start, userCount } = this;
      if (userCount < SHOW_COUNT) {
        return recommendUsers;
      }
      const result = [];
      for (let i = 0; i < SHOW_COUNT; i++) {
        const index = (start + i) % userCount;
        result.push(recommendUsers[index]);
      }
      return result;
    },
  },
  data() {
    return {
      title: "很好，继续选择更多用户吧  ‎|•'-'•)و✧",
      noMoreRecommendTitle:
        "暂时没有更多用户推荐啦\n点击右下角的头像看看TA们的主页吧",
      notFindMessage: "抱歉没有找到……再试试？",
      start: 0,
      restartTitle: "随缘看看",
    };
  },
  methods: {
    ...mapMutations(["setUserRandomState"]),
    ...mapActions(["selectUser", "refreshRandomUsers"]),
    async restartRecommend() {
      await this.refreshRandomUsers();
      if (this.randomUsers.length) {
        this.setUserRandomState();
        return;
      }
      this.$message(this.notFindMessage);
    },
    refreshRecommendUsers() {
      if (this.hasMoreRecommend) {
        this.start = (this.start + SHOW_COUNT) % this.userCount;
        return;
      }
      this.restartRecommend();
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
    font-weight: bold;
    line-height: 2;
    font-size: larger;
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
  .no-more-recommend {
    width: 100%;
    padding: 40px 0 0 40px;
    box-sizing: border-box;
    .title {
      font-weight: bold;
      line-height: 2;
      font-size: larger;
      white-space: break-spaces;
    }
    .restart-button {
      width: 200px;
      margin-top: 40px;
    }
  }
}
</style>
