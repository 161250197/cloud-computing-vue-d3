<template>
  <div class="wrapper" v-if="loaded">
    <Header />
    <Today />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./Header";
import Today from "./today/index";

export default {
  name: "charts.hot",
  components: {
    Header,
    Today,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.hot.loaded,
    }),
  },
};
</script>

<style scoped>
</style>
