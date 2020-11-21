<template>
  <div class="content">
    <Step />
    <div class="user-cards">
      <UserCard
        v-for="(user, index) in recommendUsers"
        :key="index"
        :user="user"
      />
    </div>
    <div
      class="hide-background"
      v-if="selectedUsersShow"
      @click="hideSelectedUsers"
    >
      <SelectedUsers :users="selectedUsers" />
    </div>
    <SelectedUsersBrief :users="selectedUsers" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Step from "./Steps";
import UserCard from "./UserCard";
import SelectedUsers from "./SelectedUsers";
import SelectedUsersBrief from "./SelectedUsersBrief";

export default {
  name: "user.Content",
  components: {
    Step,
    UserCard,
    SelectedUsers,
    SelectedUsersBrief,
  },
  computed: {
    ...mapState({
      recommendUsers: (state) => state.user.recommendUsers,
    }),
  },
  data() {
    return {
      selectedUsers: [],
      selectedUsersShow: false,
    };
  },
  methods: {
    hideSelectedUsers() {
      this.selectedUsersShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
