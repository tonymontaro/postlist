export default {
  namespaced: true,
  state: {
    cursor: null,
    history: []
  },
  mutations: {
    addAction(state, { postId, idx, endIdx, posts }) {
      state.cursor = null;
      state.history.unshift({
        id: Date.now(),
        postId,
        idx,
        endIdx,
        posts
      });
    }
  }
};
