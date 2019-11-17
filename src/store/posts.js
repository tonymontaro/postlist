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
    },
    moveUp(state, idx) {
      if (idx > 0 && idx <= state.posts.length) {
        const posts = state.posts;
        swap(posts, idx, idx - 1);
        state.posts = [...posts];
      }
    },
    moveDown(state, idx) {
      if (idx < state.posts.length - 1 && idx >= 0) {
        const posts = state.posts;
        swap(posts, idx, idx + 1);
        state.posts = [...posts];
      }
    }
  }
};

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
