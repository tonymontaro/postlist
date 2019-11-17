import axios from "axios";

export const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    async getPosts({ commit }) {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
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
