<template>
  <div class="wrapper" v-if="loaded">
    <Header />
    <Content />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "./Header";
import Content from "./content/index";

export default {
  name: "charts.hot",
  components: {
    Header,
    Content,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.hot.loaded,
    }),
  },
  methods: {
    ...mapActions(["initHotState"]),
  },
  mounted() {
    this.initHotState();
  },
};
</script>

<style scoped>
</style>
