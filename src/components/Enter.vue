<template>
  <el-main class="enter">
    <div class="icon-wrapper hot" @click="changeModeHot">
      <div class="left">
        <i class="el-icon-view"></i>
        <div class="text">
          <div class="title">{{ titleHot }}</div>
          <div class="info">{{ infoHot }}</div>
        </div>
      </div>
      <i class="el-icon-right right"></i>
    </div>
    <div class="icon-wrapper rank" @click="changeModeRank">
      <div class="left">
        <i class="el-icon-star-off"></i>
        <div class="text">
          <div class="title">{{ titleRank }}</div>
          <div class="info">{{ infoRank }}</div>
        </div>
      </div>
      <i class="el-icon-right right"></i>
    </div>
    <div class="icon-wrapper user" @click="changeModeUser">
      <div class="left">
        <i class="el-icon-user"></i>
        <div class="text">
          <div class="title">{{ titleUser }}</div>
          <div class="info">{{ infoUser }}</div>
        </div>
      </div>
      <i class="el-icon-right right"></i>
    </div>
  </el-main>
</template>

<script>
import { mapMutations } from "vuex";
import {
  TITLE_HOT,
  TITLE_RANK,
  TITLE_USER,
  INFO_HOT,
  INFO_RANK,
  INFO_USER,
} from "../consts/mode";
export default {
  name: "Enter",
  data() {
    return {
      titleHot: TITLE_HOT,
      titleRank: TITLE_RANK,
      titleUser: TITLE_USER,
      infoHot: INFO_HOT,
      infoRank: INFO_RANK,
      infoUser: INFO_USER,
    };
  },
  methods: {
    ...mapMutations(["changeModeHot", "changeModeRank", "changeModeUser"]),
  },
};
</script>

<style lang="less" scoped>
.enter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(90deg, #409eff40 10%, transparent 0),
    linear-gradient(#409eff40 10%, transparent 0);
  background-size: 20px 20px;
  .icon-wrapper {
    box-sizing: border-box;
    max-width: 700px;
    padding: 20px;
    margin: 20px;
    width: 100%;
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
      i {
        width: 72px;
        height: 72px;
        box-sizing: border-box;
        font-size: 36px;
        color: white;
        border-radius: 100%;
        padding: 18px;
        margin-right: 20px;
      }
      .text {
        line-height: 2;
        .title {
          font-size: larger;
          font-weight: bold;
        }
      }
    }
    .right {
      font-size: 30px;
      font-weight: bold;
      opacity: 0;
    }
    &.hot {
      .left {
        i {
          background: #67c23a;
        }
      }
      .right {
        color: #67c23a;
      }
    }
    &.rank {
      .left {
        i {
          background: #e6a23c;
        }
      }
      .right {
        color: #e6a23c;
      }
    }
    &.user {
      .left {
        i {
          background: #409eff;
        }
      }
      .right {
        color: #409eff;
      }
    }
  }
  .icon-wrapper:hover {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    .right {
      opacity: 1;
    }
  }
}
</style>
