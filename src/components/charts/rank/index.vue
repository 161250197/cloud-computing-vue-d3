<template>
  <div class="chart" v-if="loaded">
    <Header />
    <Content />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "./Header";
import Content from "./content/index";

export default {
  name: "charts.rank",
  components: {
    Header,
    Content,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.rank.loaded,
    }),
  },
  methods: {
    ...mapActions(["initRankState"]),
  },
  mounted() {
    this.initRankState();
  },
};
</script>

<style scoped>
</style>
