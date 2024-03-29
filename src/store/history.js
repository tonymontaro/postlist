export default {
  namespaced: true,
  state: {
    history: []
  },
  mutations: {
    addHistory(state, { word, prevState }) {
      state.history.unshift({
        id: Date.now() + Math.floor(Math.random() * 1000).toString(),
        word,
        prevState
      });
    }
  }
};
