import Vue from "vue";
import Vuex from "vuex";

import posts from "./posts";
import history from "./history";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    history
  }
});
