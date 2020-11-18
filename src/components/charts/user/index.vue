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
  name: "charts.user",
  components: {
    Header,
    Content,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.user.loaded,
    }),
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
