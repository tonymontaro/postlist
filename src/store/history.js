export default {
  namespaced: true,
  state: {
    cursor: null,
    history: []
  },
  mutations: {
    addAction(state, { word, prevState }) {
      state.cursor = null;
      state.history.unshift({
        id: Date.now() + Math.floor(Math.random() * 1000).toString(),
        word,
        prevState
      });
    }
  }
};
