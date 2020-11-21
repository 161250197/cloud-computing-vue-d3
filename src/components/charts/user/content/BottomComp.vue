<template>
  <div class="bottom-wrapper">
    <div
      class="selected-users-brief-wrapper"
      @click="showSelectedUsers"
      v-show="selectedUsers.length"
    >
      <SelectedUsersBrief :users="selectedUsers" />
    </div>
    <div
      class="hide-background selected-user-wrapper"
      v-if="selectedUsersShow"
      @click="hideSelectedUsers"
    >
      <SelectedUsers :users="selectedUsers" />
    </div>
    <el-button
      @click="refreshUsers"
      class="refresh-button"
      type="primary"
      icon="el-icon-refresh"
      circle
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectedUsers from "./SelectedUsers";
import SelectedUsersBrief from "./SelectedUsersBrief";

export default {
  name: "user.content.BottomComp",
  components: {
    SelectedUsers,
    SelectedUsersBrief,
  },
  props: {
    refreshUsers: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selectedUsers: (state) => state.user.selectedUsers,
    }),
  },
  data() {
    return {
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
  },
};
</script>

<style lang="less" scoped>
.bottom-wrapper {
  position: fixed;
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
  .selected-user-wrapper {
    padding: 65px 20px 0;
    box-sizing: border-box;
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
