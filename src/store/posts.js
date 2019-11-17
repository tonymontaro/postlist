import axios from "axios";
import { postUrl } from "../config";

export default {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    async getPosts({ commit }) {
      const res = await axios.get(postUrl);
      commit("getPostsSuccess", res.data);
      return res.data;
    }
  },
  mutations: {
    getPostsSuccess(state, posts) {
      state.posts = posts.slice(0, 5);
    }
  }
};
