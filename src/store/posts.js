import axios from "axios";
import { POST_URL, POST_LIMIT } from "../config";

export default {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    async getPosts({ commit }) {
      const res = await axios.get(POST_URL);
      commit("getPostsSuccess", res.data);
      return res.data;
    }
  },
  mutations: {
    getPostsSuccess(state, posts) {
      state.posts = posts.slice(0, POST_LIMIT);
    },
    replyHistory(state, posts) {
      state.posts = [...posts];
    }
  }
};
