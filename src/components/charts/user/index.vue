<template>
  <div class="chart" v-if="loaded">
    <Header />
    <Random v-if="isRandomMode" v-loading="isLoading" />
    <Recommend v-else-if="isRecommendMode" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "./Header";
import Random from "./content/Random";
import Recommend from "./content/Recommend";
import { RANDOM, RECOMMEND } from "../../../consts/user";

export default {
  name: "charts.user",
  components: {
    Header,
    Random,
    Recommend,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.user.isLoading,
      loaded: (state) => state.user.loaded,
      mode: (state) => state.user.mode,
    }),
    isRandomMode() {
      return this.mode === RANDOM;
    },
    isRecommendMode() {
      return this.mode === RECOMMEND;
    },
  },
  methods: {
    ...mapActions(["initUserState"]),
  },
  mounted() {
    this.initUserState();
  },
};
</script>

<style scoped>
</style>
