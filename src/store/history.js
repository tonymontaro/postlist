export default {
  namespaced: true,
  state: {
    cursor: null,
    history: []
  },
  mutations: {
    addAction(state, { postId, idx, endIdx, posts }) {
      state.cursor = null;
      state.history.push({
        postId,
        idx,
        endIdx,
        posts
      });
      console.log(postId, idx, endIdx);
    }
  }
};
